function RequestMovie() {

  return (
    <form className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
      {/* title */}
      <div className='border-b border-gray-800 py-5 px-7'>
        <p>Add Movie</p>
      </div>
      {/* body */}
      <div className='mt-2'>
        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Movie name</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Original language</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Duration</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Release date</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Genre</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select Movie</label>
            <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
              <option>Avatar</option>
              <option>Nun 2</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Trailer url</label>
            <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
          </div>
        </div>

        <div className='grid grid-cols-1 py-4 px-6'>
          <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Movie poster</label>
          <div className="flex justify-center p-10 bg-[#121212] border border-dashed border-gray-700 rounded-lg relative">
            <div className="flex max-w-[260px] flex-col items-center gap-4">
              <div className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition dark:border-gray-800 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.0004 16V18.5C20.0004 19.3284 19.3288 20 18.5004 20H5.49951C4.67108 20 3.99951 19.3284 3.99951 18.5V16M12.0015 4L12.0015 16M7.37454 8.6246L11.9994 4.00269L16.6245 8.6246" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white/90">Click to upload</span>
                or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input type='file' className='opacity-0 w-full h-full absolute'></input>
          </div>
        </div>

        <div className='flex justify-end py-4 px-6'>
          <button className='bg-red-700 px-5.5 py-[8.5px] rounded-lg font-medium text-[15px]'>Add</button>
        </div>
      </div>
    </form>
  )
}

export default RequestMovie