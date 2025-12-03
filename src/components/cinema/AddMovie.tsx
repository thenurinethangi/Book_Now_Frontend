import { useEffect, useState } from "react"
import { addMovie, getAllAvailableMoviesToAdd, getSelectedMovieAvailableFormats } from "../../services/cinema/movieService";
import { toast } from "react-toastify";

function AddMovie(props: any) {

    const [movieAddedCount, setMovieAddedCount] = useState(0);

    const [availableMoviesToAdd, setAvailableMoviesToAdd] = useState([]);
    const [availableFormats, setAvailableFormats] = useState([]);

    const [choosedFormats, setChoosedFormats] = useState<string[]>([]);

    const [movie, setMovie] = useState('Select Movie');
    const [status, setStatus] = useState('Now Showing');

    useEffect(() => {
        loadAllAvailableMoviesToAdd();

    }, [movieAddedCount]);

    async function loadAllAvailableMoviesToAdd() {

        try {
            const res = await getAllAvailableMoviesToAdd();
            setAvailableMoviesToAdd(res.data.data);
            console.log(res.data.data);
        }
        catch (e) {

        }
    }

    async function handleMovieSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setMovie(e.target.value);

        if (e.target.value === 'Select Movie') {
            return;
        }

        try {
            const res = await getSelectedMovieAvailableFormats(e.target.value);
            setAvailableFormats(res.data.data.formats);
            console.log(res.data.data.formats);
        }
        catch (e) {

        }
    }

    function addOrRemoveFormats(e: React.MouseEvent<HTMLDivElement>) {
        const value = e.currentTarget.dataset.value;

        if (value && choosedFormats.includes(value)) {
            const filtered = choosedFormats.filter(x => x != value);
            setChoosedFormats(filtered);
        }
        else if (value && !choosedFormats.includes(value)) {
            setChoosedFormats([...choosedFormats, value]);
        }

    }

    async function handleAddAMovie(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();

        if(movie === 'Select Movie' || choosedFormats.length <= 0){
            toast.warn('Incomplete data provide!');
            return;
        }

        try{
            const res = await addMovie({id: movie, status, formats: choosedFormats});
            console.log(res);

            setMovie('Select Movie');
            setStatus('Now Showing');
            setAvailableFormats([]);
            setChoosedFormats([]);

            loadAllAvailableMoviesToAdd();

            props.setManageMovies([...props.manageMovies,res.data.data]);

            toast.success('Add Movie to managed movie list');
        }
        catch(e){
            setMovie('Select Movie');
            setStatus('Now Showing');
            setAvailableFormats([]);
            setChoosedFormats([]);
        }
    }


    return (
        <form onSubmit={handleAddAMovie} className='bg-[#1e1e1e] border border-gray-800 rounded-lg' >
            {/* title */}
            < div className='border-b border-gray-800 py-5 px-7' >
                <p>Add Movie</p>
            </div>
            {/* body */}
            <div className='mt-2' >
                <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6' >
                    <div>
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400' > Select Movie </label>
                        <select onChange={handleMovieSelect} value={movie} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' id="input" >
                            <option value={'Select Movie'}>Select Movie</option>
                            {availableMoviesToAdd.map((m: any) => (
                                <option key={m._id} value={m._id}>{m.title}</option>
                            ))}
                        </select>
                    </div>
                    < div >
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400' > Select status </label>
                        < select onChange={(e) => setStatus(e.target.value)} value={status} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' id="input" >
                            <option value={'Now Showing'}>Now Showing </option>
                            <option value={'Coming Soon'}>Coming Soon</option>
                        </select>
                    </div>
                </div>

                {availableFormats.length > 0 ?
                    <div className='grid grid-cols-1 gap-5 pt-4 pb-1.5 px-6' >
                        <div>
                            <p className='block text-sm text-gray-500 dark:text-gray-400'>Select available formats</p>
                            <p className='mb-1.5 block text-[12px] text-white/70 dark:text-gray-400 mb-4'>(Click on the format boxes to select as a format)</p>
                            <div className="flex items-center flex-wrap gap-2">
                                {availableFormats.map((x: any, index: number) => (
                                    <div key={index} onClick={addOrRemoveFormats} data-value={x} className={`px-2 py-1 rounded-xs text-[12px] text-[#999] cursor-pointer ${choosedFormats.includes(x) ? 'bg-red-700' : 'bg-[#353535]'}  font-medium`}>{x}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    : ''}

                < div className='flex justify-end py-4 px-6' >
                    <button className='bg-red-800 px-5 py-[8.5px] rounded-md font-medium text-[14px] text-white/90 mt-1.5'>Add as available movie</button>
                </div>
            </div>
        </form>
    )
}

export default AddMovie