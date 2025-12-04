function AddShowtime() {

    return (
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
                        <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="date" id="input" />
                    </div>

                    <div>
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select Screen</label>
                        <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
                            <option>3D</option>
                            <option>IMAX</option>
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                    <div>
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select time</label>
                        <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="time" id="input" placeholder='Enter screen name' />
                    </div>

                    <div>
                        <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select movie</label>
                        <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
                            <option>Avatar: fire and ash</option>
                            <option>IMAX</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-end py-4 px-6'>
                    <button className='bg-red-700 px-5 py-2.5 rounded-lg font-medium text-[15px]'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default AddShowtime