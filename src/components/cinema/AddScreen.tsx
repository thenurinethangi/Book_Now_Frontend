import { useState } from 'react'
import { Plus, Rows, X, Upload, Edit2 } from 'lucide-react';
import { toast } from 'react-toastify';
import RowColQsModal from './RowColQsMpdel';
import SeatDesigner from './SeatDesigner';
import { addNewScreen } from '../../services/cinema/screenService';
import LoadingSpinner from '../user/LoadingSpinner';

function AddScreen(props: any) {

    const [screenName, setScreenName] = useState('');
    const [noOfSeats, setNoOfSeats] = useState(1);
    const [description, setDescription] = useState('');
    const [screenImage, setScreenImage] = useState(null);

    const [screenTypes, setScreenTypes] = useState(['3D']);
    const [seatTypes, setSeatTypes] = useState(['ODC']);

    const [showSeatLayoutModel, setShowSeatLayoutModel] = useState(false);
    const [showQsModel, setShowQsModel] = useState(false);

    const [rows, setRows] = useState(1);
    const [columns, setColumns] = useState(1);

    const [seatLayout, setSeatLayout] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setScreenImage(file);

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setScreenImage(null);
        setImagePreview(null);
    };

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

        if (!screenName || !noOfSeats || !description || !screenTypes || !seatTypes || !screenImage) {
            toast.warn('All field Required');
            return;
        }

        setShowQsModel(true);
    }

    const handleSaveSeatLayout = async (layout: any) => {

        setIsLoading(true);

        setSeatLayout(layout);

        if (!screenName || !noOfSeats || !description || !screenTypes || !seatTypes || !screenImage || !layout) {
            toast.warn('All field Required');
            return;
        }

        const formdata = new FormData();

        formdata.append('screenName', screenName);
        formdata.append('numberOfSeats', noOfSeats.toString());
        formdata.append('description', description);
        formdata.append('screenImage', screenImage);

        screenTypes.forEach(type => {
            formdata.append('screenTypes[]', type);
        });

        seatTypes.forEach(type => {
            formdata.append('seatTypes[]', type);
        });

        formdata.append('seatLayout', JSON.stringify(layout));

        try {
            const res = await addNewScreen(formdata);

            toast.success(`Added new screen ${screenName}.`);
            setScreenName('');
            setDescription('');
            setNoOfSeats(1);
            setScreenImage(null);
            setImagePreview(null);
            setScreenTypes(['3D']);
            setSeatTypes(['ODC']);
            setSeatLayout(null);

            props.setLoadScreens(!props.loadScreens);
            props.setShow('screens');
        }
        catch (e) {
            console.log(e);
            toast.error('Failed to add a new screen. please try again later!');

            setScreenName('');
            setDescription('');
            setNoOfSeats(1);
            setScreenImage(null);
            setImagePreview(null);
            setScreenTypes(['3D']);
            setSeatTypes(['ODC']);
            setSeatLayout(null);
        }

        setIsLoading(false);
        setShowSeatLayoutModel(false);
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
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                        <div>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen name</label>
                            <input onChange={(e) => setScreenName(e.target.value)} value={screenName} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='Enter screen name' required />
                        </div>

                        <div>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Number of seats</label>
                            <input onChange={(e) => setNoOfSeats(Number(e.target.value))} value={noOfSeats} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="number" id="input" placeholder='Enter screen number' required />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-5 pt-4 pb-1.5 px-6'>
                        <div>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='bg-[#121212] border border-gray-700 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' rows={8} id="input" placeholder='Enter screen description' required></textarea>
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

                        {!imagePreview ? (
                            // Upload Area
                            <div className="flex justify-center p-10 bg-[#121212] border border-dashed border-gray-700 rounded-lg relative hover:border-gray-600 transition-colors">
                                <div className="flex max-w-[260px] flex-col items-center gap-4">
                                    <div className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition dark:border-gray-800 dark:text-gray-400">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-medium text-gray-800 dark:text-white/90">Click to upload</span>
                                        {' '}or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    onChange={handleImageChange}
                                    type='file'
                                    accept="image/*"
                                    required
                                    className='opacity-0 w-full h-full absolute cursor-pointer'
                                />
                            </div>
                        ) : (
                            // Image Preview with Edit/Remove
                            <div className="relative bg-[#121212] border border-gray-700 rounded-lg overflow-hidden">
                                <img
                                    src={imagePreview}
                                    alt="Screen preview"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-3 right-3 flex gap-2">
                                    <label className="cursor-pointer bg-[#1e1e1e]/90 backdrop-blur-sm border border-gray-700 hover:border-gray-500 rounded-lg p-2.5 transition-all">
                                        <Edit2 className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                                        <input
                                            onChange={handleImageChange}
                                            type='file'
                                            accept="image/*"
                                            className='hidden'
                                        />
                                    </label>
                                    <button
                                        onClick={handleRemoveImage}
                                        className="bg-[#1e1e1e]/90 backdrop-blur-sm border border-gray-700 hover:border-red-700 hover:text-red-700 rounded-lg p-2.5 transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="p-3 bg-[#1e1e1e]/50 border-t border-gray-700">
                                    <p className="text-xs text-gray-400 truncate">
                                        {screenImage?.name}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-end py-4 px-6'>
                        <button onClick={handleAddNewScreen} className='px-6 py-[9px] rounded-sm text-[14.5px] bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 transition-all duration-300'>Add Seat Layout</button>
                    </div>
                </div>
            </div>

            {showSeatLayoutModel ? <SeatDesigner
                rows={rows}
                cols={columns}
                seatTypes={seatTypes}
                isLoading={isLoading}
                onSave={handleSaveSeatLayout}
                onClose={() => setShowSeatLayoutModel(false)}
            /> : ''}

            {showQsModel && rows && columns ? <RowColQsModal rows={rows} setRows={setRows} columns={columns} setColumns={setColumns} setShowQsModel={setShowQsModel} setShowSeatLayoutModel={setShowSeatLayoutModel} /> : ''}

        </div>
    )
}

export default AddScreen