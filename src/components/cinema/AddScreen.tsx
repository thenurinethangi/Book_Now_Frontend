import { useState } from 'react'
import { Plus, Rows, X } from 'lucide-react';
import { toast } from 'react-toastify';
import RowColQsModal from './RowColQsMpdel';
import SeatDesigner from './SeatDesigner';

function AddScreen() {

    const [screenName, setScreenName] = useState('');
    const [noOfSeats, setNoOfSeats] = useState(1);
    const [screenImage, setScreenImage] = useState(null);

    const [screenTypes, setScreenTypes] = useState(['3D']);
    const [seatTypes, setSeatTypes] = useState(['ODC']);

    const [showSeatLayoutModel, setShowSeatLayoutModel] = useState(false);
    const [showQsModel, setShowQsModel] = useState(false);

    const [rows, setRows] = useState(1);
    const [columns, setColumns] = useState(1);

    const [seatLayout, setSeatLayout] = useState(null);

    const pastelColors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E2BAFF", "#FFD6E0", "#D6F5FF", "#E8FFD6", "#F3D9FF", "#FFF0D9", "#D9FFF8"];

    const addScreenType = () => {
        setScreenTypes([...screenTypes, '']);
    };

    const removeScreenType = (index) => {
        if (screenTypes.length > 1) {
            setScreenTypes(screenTypes.filter((_, i) => i !== index));
        }
    };

    const updateScreenType = (index, value) => {
        const updated = [...screenTypes];
        updated[index] = value;
        setScreenTypes(updated);
    };

    const addSeatType = () => {
        setSeatTypes([...seatTypes, '']);
    };

    const removeSeatType = (index) => {
        if (seatTypes.length > 1) {
            setSeatTypes(seatTypes.filter((_, i) => i !== index));
        }
    };

    const updateSeatType = (index, value) => {
        const updated = [...seatTypes];
        updated[index] = value;
        setSeatTypes(updated);
    };

    function handleAddNewScreen() {

        if (!screenName || !noOfSeats || !screenTypes || !seatTypes || !screenImage) {
            toast.warn('All field Required');
            return;
        }

        setShowQsModel(true);
    }

    const handleSaveSeatLayout = (layout: any) => {
        setSeatLayout(layout);
        setShowSeatLayoutModel(false);

        if (!screenName || !noOfSeats || !screenTypes || !seatTypes || !screenImage || layout) {
            toast.warn('All field Required');
            return;
        }

        const formdata = new FormData();

        formdata.append('screenName', screenName);
        formdata.append('numberOfSeats', noOfSeats.toString());
        formdata.append('screenImage', screenImage);

        screenTypes.forEach(type => {
            formdata.append('screenTypes[]', type);
        });

        seatTypes.forEach(type => {
            formdata.append('seatTypes[]', type);
        });

        formdata.append('seatLayout', JSON.stringify(layout));

        // Send to backend
        fetch('/api/add-screen', { method: 'POST', body: formdata })
            .then(res => res.json())
            .then(data => {
                toast.success('Screen added successfully');
                // Reset form or navigate
            });
    };

    return (
        <div className='relative overflow-x-hidden'>
            <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
                {/* title */}
                <div className='border-b border-gray-800 py-5 px-7'>
                    <p>Add Screen</p>
                </div>
                {/* body */}
                <div className='mt-2'>
                    <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                        <div>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen name</label>
                            <input onChange={(e) => setScreenName(e.target.value)} value={screenName} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='Enter screen name' required />
                        </div>

                        <div>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Number of seats</label>
                            <input onChange={(e) => setNoOfSeats(Number(e.target.value))} value={noOfSeats} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="number" id="input" placeholder='Enter screen number' required />
                        </div>
                    </div>

                    {/* Screen Types */}
                    <div className='pt-4 pb-2 px-6'>
                        <div className='flex items-center justify-between mb-1.5'>
                            <label className='block text-sm text-gray-500 dark:text-gray-400'>Screen types</label>
                            <button
                                onClick={addScreenType}
                                className='flex items-center gap-1 text-sm text-red-700 hover:text-red-600 transition-colors'
                            >
                                <Plus className='w-4 h-4' />
                                Add Type
                            </button>
                        </div>
                        <div className='space-y-2'>
                            {screenTypes.map((type, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <select
                                        value={type}
                                        onChange={(e) => updateScreenType(index, e.target.value)}
                                        className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0 required'
                                    >
                                        <option value="">Select screen type</option>
                                        <option value="3D">3D</option>
                                        <option value="IMAX">IMAX</option>
                                        <option value="4DX">4DX</option>
                                        <option value="ATMOS">ATMOS</option>
                                        <option value="2D">2D</option>
                                        <option value="LUX">LUX</option>
                                    </select>
                                    {screenTypes.length > 1 && (
                                        <button
                                            onClick={() => removeScreenType(index)}
                                            className='flex-shrink-0 w-11 h-11 flex items-center justify-center bg-[#121212] border border-gray-700 rounded-lg hover:border-red-700 hover:text-red-700 transition-colors'
                                        >
                                            <X className='w-4 h-4' />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Seat Types */}
                    <div className='pt-4 pb-2 px-6'>
                        <div className='flex items-center justify-between mb-1.5'>
                            <label className='block text-sm text-gray-500 dark:text-gray-400'>Seat types</label>
                            <button
                                onClick={addSeatType}
                                className='flex items-center gap-1 text-sm text-red-700 hover:text-red-600 transition-colors'
                            >
                                <Plus className='w-4 h-4' />
                                Add Seat Type
                            </button>
                        </div>
                        <div className='space-y-2'>
                            {seatTypes.map((seat, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <input
                                        value={seat}
                                        onChange={(e) => updateSeatType(index, e.target.value)}
                                        className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0'
                                        type="text"
                                        placeholder='Seat type (e.g., VIP, Balcony, ODC, Box)'
                                        required
                                    />
                                    {seatTypes.length > 1 && (
                                        <button
                                            onClick={() => removeSeatType(index)}
                                            className='flex-shrink-0 w-11 h-11 flex items-center justify-center bg-[#121212] border border-gray-700 rounded-lg hover:border-red-700 hover:text-red-700 transition-colors'
                                        >
                                            <X className='w-4 h-4' />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 py-4 px-6'>
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen image</label>
                        <div className="flex justify-center p-10 bg-[#121212] border border-dashed border-gray-700 rounded-lg relative">
                            <div className="flex max-w-[260px] flex-col items-center gap-4">
                                <div className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition dark:border-gray-800 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20.0004 16V18.5C20.0004 19.3284 19.3288 20 18.5004 20H5.49951C4.67108 20 3.99951 19.3284 3.99951 18.5V16M12.0015 4L12.0015 16M7.37454 8.6246L11.9994 4.00269L16.6245 8.6246" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-medium text-gray-800 dark:text-white/90">Click to upload</span>
                                    {' '}or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input onChange={(e) => setScreenImage(e.target.files[0])} type='file' required className='opacity-0 w-full h-full absolute' />
                        </div>
                    </div>

                    <div className='flex justify-end py-4 px-6'>
                        <button onClick={handleAddNewScreen} className='bg-red-700 px-5 py-2.5 rounded-lg font-medium text-[15px]'>Add Seat Layout -{'>'}</button>
                    </div>
                </div>
            </div>

            {showSeatLayoutModel ? <SeatDesigner
                rows={rows}
                cols={columns}
                seatTypes={seatTypes}
                onSave={handleSaveSeatLayout}
                onClose={() => setShowSeatLayoutModel(false)}
            /> : ''}

            {showQsModel && rows && columns ? <RowColQsModal rows={rows} setRows={setRows} columns={columns} setColumns={setColumns} setShowQsModel={setShowQsModel} setShowSeatLayoutModel={setShowSeatLayoutModel} /> : ''}

        </div>
    )
}

export default AddScreen