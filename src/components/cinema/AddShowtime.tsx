import React, { useEffect, useState } from "react"
import { addANewShowtime, checkShowtimeAlreadyExist, getAllAvailableMovies, getAllAvailableScreens, getAllShowtimes } from "../../services/cinema/showtimeService";
import { toast } from "react-toastify";

function AddShowtime(props: any) {

    const [display, setDisplay] = useState('Add Showtime');

    const today = new Date().toISOString().split("T")[0];

    const [availableScreens, setAvailableScreens] = useState([]);
    const [availableMovies, setAvailableMovies] = useState([]);

    const [availableFormats, setAvailableFormats] = useState<string[]>([]);
    const [selectedFormat, setSelectedFormat] = useState('');
    const [selectedScreenData, setSelectedScreenData] = useState<any>({});

    const [date, setDate] = useState(today);
    const [screen, setScreen] = useState('');
    const [time, setTime] = useState('');
    const [movie, setMovie] = useState('');

    const [ticketPrices, setTicketPrices] = useState<Record<string, string>>({});

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        getAvailableFormats();
    }, [screen, movie]);

    async function init() {

        try {
            const res1 = await getAllAvailableScreens();
            const res2 = await getAllAvailableMovies();

            setAvailableScreens(res1.data.data);
            setAvailableMovies(res2.data.data);

            console.log(res1.data.data);

            if (res1.data.data.length > 0) {
                setScreen(res1.data.data[0]._id);
                setSelectedScreenData(res1.data.data[0]);
            }
            if (res2.data.data.length > 0) {
                setMovie(res2.data.data[0].movieDetails._id);
            }
        }
        catch (e) {

        }
    }

    function handleScreenInput(e: React.ChangeEvent<HTMLSelectElement>) {
        setScreen(e.target.value);
        getAvailableFormats();

        for (let i = 0; i < availableScreens.length; i++) {
            const a: any = availableScreens[i];
            if (a._id === e.target.value) {
                setSelectedScreenData(a);
                break;
            }
        }
    }

    function handleMovieInput(e: React.ChangeEvent<HTMLSelectElement>) {
        setMovie(e.target.value);
        getAvailableFormats();
    }

    function getAvailableFormats() {

        let arr = [];
        for (let i = 0; i < availableScreens.length; i++) {
            const e: any = availableScreens[i];
            if (e._id === screen) {
                for (let j = 0; j < e.screenTypes.length; j++) {
                    const a = e.screenTypes[j];
                    if (!arr.includes(a)) {
                        arr.push(a);
                    }
                }
            }
        }

        // for (let i = 0; i < availableMovies.length; i++) {
        //     const e: any = availableMovies[i].movieDetails;
        //     ;
        //     if (e._id === movie) {
        //         for (let j = 0; j < e.formats.length; j++) {
        //             const a = e.formats[j];
        //             if (!arr.includes(a)) {
        //                 arr.push(a);
        //             }
        //         }
        //     }
        // }

        setAvailableFormats(arr);
        console.log(arr);
    }

    function addOrRemoveFormats(e: React.MouseEvent<HTMLDivElement>) {
        const value = e.currentTarget.dataset.value;

        if (value && selectedFormat !== value) {
            setSelectedFormat(value);
        }

    }

    function handlePrices(e: React.ChangeEvent<HTMLInputElement>) {

        const type: string | undefined = e.currentTarget.dataset.type;
        if (!type) {
            return
        }
        setTicketPrices(prev => ({
            ...prev,
            [type]: e.target.value
        }));
    }

    async function handleContinue() {

        if (!time) {
            toast.warn('Please enter time!');
            return;
        }

        try {
            const res = await checkShowtimeAlreadyExist({ date, time, screen, movie });
            if (!res.data.data) {
                toast.warn(`${screen} screen already have a show in selected time and date!`);
                return;
            }
            setDisplay('Ticket Prices');
        }
        catch (e) {
            toast.error(`Something went wrong try again later!`);
        }
    }

    async function handleAddNewShowtime() {

        const data = {
            date,
            time,
            screenId: screen,
            movieId: movie,
            format: selectedFormat,
            ticketPrices
        }
        try {
            const res = await addANewShowtime(data);
            console.log(res.data.data);
            toast.success(`New showtime scheduled!`);
        }
        catch (e) {
            console.log(e);
            toast.success(`Failed to add new showtime, please try again later!`);
        }

        try {
            const res = await getAllShowtimes();
            props.setShowtimesList(res.data.data);
        }
        catch (e) {

        }

        setTicketPrices({});
        setSelectedFormat('');
        setDate(today);
        setTime('');
        init();

        setDisplay('Add Showtime');
    }


    return (
        <div>
            {display === 'Add Showtime' ?
                <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
                    {/* title */}
                    <div className='border-b border-gray-800 py-5 px-7'>
                        <p>Add Showtime</p>
                    </div>
                    {/* body */}
                    <div className='mt-2'>
                        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Choose Date</label>
                                <input onChange={(e) => setDate(e.target.value)} value={date} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="date" id="input" min={today} />
                            </div>

                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select Screen</label>
                                <select onChange={handleScreenInput} value={screen} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' id="input">
                                    {availableScreens.map((s: any) => (
                                        <option key={s._id} value={s._id}>{s.screenName}({s.screenTypes.map((t: any) => t + ', ')})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select time</label>
                                <input onChange={(e) => setTime(e.target.value)} value={time} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="time" id="input" placeholder='Enter screen name' />
                            </div>

                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select movie</label>
                                <select onChange={handleMovieInput} value={movie} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' id="input">
                                    {availableMovies.map((m: any) => (
                                        <option key={m.movieDetails._id} value={m.movieDetails._id}>{m.movieDetails.title}({m.movieDetails.formats.map((f: any) => f + ', ')})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {availableFormats.length > 0 ?
                            <div className='grid grid-cols-1 gap-5 pt-4 pb-1.5 px-6' >
                                <div>
                                    <p className='block text-sm text-gray-500 dark:text-gray-400'>Select format showing</p>
                                    <p className='mb-1.5 block text-[12px] text-white/70 dark:text-gray-400 mb-4'>(Click on the format boxes to select a format)</p>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {availableFormats.map((x: any, index: number) => (
                                            <div key={index} data-value={x} onClick={addOrRemoveFormats} className={`px-2 py-1 rounded-xs text-[12px] text-[#999] cursor-pointer font-medium ${selectedFormat === x ? 'bg-red-500' : 'bg-[#353535]'}`}>{x}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            : ''}

                        <div className='flex justify-end py-4 px-6'>
                            <button onClick={handleContinue} className='bg-red-800 px-5 py-[8.5px] rounded-md font-medium text-[14px] text-white/90 mt-1.5'>Continue</button>
                        </div>
                    </div>
                </div>
                : ''}

            {display === 'Ticket Prices' ?
                <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
                    {/* title */}
                    <div className='border-b border-gray-800 py-5 px-7'>
                        <p>Ticket Prices</p>
                    </div>
                    {/* body */}
                    <div className="mt-2">
                        <div className="grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6">
                            {selectedScreenData?.seatTypes?.map((type: string) => (
                                type.toLowerCase() !== "box" ? (
                                    <>
                                        <div key={type + "-full"}>
                                            <label className="mb-1.5 block text-sm text-gray-500 dark:text-gray-400">
                                                {type} Full
                                            </label>
                                            <input onChange={handlePrices} data-type={type + '-full'}
                                                className="bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0"
                                                type="text"
                                                placeholder={`Enter ${type} full price (LKR)`}
                                            />
                                        </div>

                                        <div key={type + "-half"}>
                                            <label className="mb-1.5 block text-sm text-gray-500 dark:text-gray-400">
                                                {type} Half
                                            </label>
                                            <input onChange={handlePrices} data-type={type + '-half'}
                                                className="bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0"
                                                type="text"
                                                placeholder={`Enter ${type} half price (LKR)`}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div key={type + "-single"}>
                                        <label className="mb-1.5 block text-sm text-gray-500 dark:text-gray-400">
                                            {type}
                                        </label>
                                        <input onChange={handlePrices} data-type={type}
                                            className="bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0"
                                            type="text"
                                            placeholder={`Enter ${type} price (LKR)`}
                                        />
                                    </div>
                                )
                            ))}
                        </div>

                        <div className="flex justify-end py-4 px-6 gap-2.5">
                            <button onClick={(e) => setDisplay('Add Showtime')} className="border border-gray-500 px-5 py-[8.5px] rounded-md font-medium text-[14px] text-gray-500 mt-1.5">
                                Back
                            </button>
                            <button onClick={handleAddNewShowtime} className="bg-red-800 px-5 py-[8.5px] rounded-md font-medium text-[14px] text-white/90 mt-1.5">
                                Add Showtime
                            </button>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    )
}

export default AddShowtime