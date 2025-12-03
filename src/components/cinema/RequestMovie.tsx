import React, { useState } from "react"
import { toast } from "react-toastify";
import { sendRequest } from "../../services/cinema/movieService";

import { Pencil } from "lucide-react";

function RequestMovie() {

  const [title, setTitle] = useState('');
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState('');
  const [directors, setDirectors] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [poster, setPoster] = useState(null);
  const [status, setStatus] = useState('Coming Soon');

  const [posterPreview, setPosterPreview] = useState(null);

  async function handleSendMovieRequest(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    if (!title || !originalLanguage || !duration || !releaseDate || !genres || !directors || !trailerUrl || !poster) {
      toast.warn('Please fill out all fields!');
      return;
    }

    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('originalLanguage', originalLanguage);
    formdata.append('duration', duration);
    formdata.append('releaseDate', releaseDate);
    formdata.append('genres', genres);
    formdata.append('directors', directors);
    formdata.append('trailerUrl', trailerUrl);
    formdata.append('poster', poster);
    formdata.append('status', status);

    try {
      const res = await sendRequest(formdata);
      toast.success(`Request send to SYNEMA admins asking to add ${title}`);
      console.log(res.data.data);
    }
    catch (e) {
      toast.error(`Failed to send request to SYNEMA admins, please try later!`);
    }

    setTitle('');
    setOriginalLanguage('');
    setDuration('');
    setReleaseDate('');
    setGenres('');
    setDirectors('');
    setTrailerUrl('');
    setPoster(null);
    setStatus('Coming Soon');
    setPosterPreview(null);
  }


  return (
    <form onSubmit={handleSendMovieRequest} className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
      {/* title */}
      <div className='border-b border-gray-800 py-5 px-7'>
        <p>Send Request</p>
        <p className="text-[13.5px] text-gray-500 mt-0.5">Send request to SYNEMA admin panel to add a new movie</p>
      </div>
      {/* body */}
      <div className='mt-2'>
        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Movie title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='Zootopia 2' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Original language</label>
            <input value={originalLanguage} onChange={(e) => setOriginalLanguage(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='English' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Duration</label>
            <input value={duration} onChange={(e) => setDuration(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='120min' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Release date</label>
            <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='20 Nov 2025' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Genre</label>
            <input value={genres} onChange={(e) => setGenres(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='Animation,Comedy' />
          </div>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Director</label>
            <input value={directors} onChange={(e) => setDirectors(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='John Smith' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Trailer url</label>
            <input value={trailerUrl} onChange={(e) => setTrailerUrl(e.target.value)} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' type="text" id="input" placeholder='http://localhost:5173/cinema/movie' />
          </div>

          <div>
            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Status</label>
            < select onChange={(e) => setStatus(e.target.value)} value={status} className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 outline-none focus:border-gray-500 focus:ring-0' id="input" >
              <option value={'Now Showing'}>Now Showing </option>
              <option value={'Coming Soon'}>Coming Soon</option>
            </select>
          </div>
        </div>

        <div className='py-4 px-6'>
          <label className='mb-2.5 block text-sm text-gray-500 dark:text-gray-400'>Movie poster</label>
          <div className="w-[250px] h-[370px] flex justify-center bg-[#121212] border border-dashed border-gray-700 rounded-lg relative overflow-hidden">

            {!posterPreview ? (
              <>
                <div className="flex flex-col items-center justify-center gap-3 p-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.0004 16V18.5C20.0004 19.3284 19.3288 20 18.5004 20H5.49951C4.67108 20 3.99951 19.3284 3.99951 18.5V16M12.0015 4L12.0015 16M7.37454 8.6246L11.9994 4.00269L16.6245 8.6246" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    <span className="font-medium text-white/90">Click to upload</span>
                    <br />or drag and drop
                  </p>
                </div>
                <input onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPoster(file);
                    setPosterPreview(URL.createObjectURL(file));
                  }
                }} type='file' accept="image/*" className='opacity-0 w-full h-full absolute cursor-pointer' />
              </>
            ) : (
              <>
                <img src={posterPreview} className='w-full h-full object-cover' alt="Poster preview" />
                <button
                  type="button"
                  onClick={() => {
                    setPosterPreview(null);
                    setPoster(null);
                  }}
                  className='absolute top-2 right-2 bg-red-800 hover:bg-red-700 px-1.5 py-1.5 rounded-full text-xs font-medium'
                >
                  <Pencil className="w-5 h-5" />
                </button>
              </>
            )}

          </div>
        </div>

        <div className='flex justify-end py-4 px-6'>
          <button className='bg-red-800 px-5 py-[8.5px] rounded-md font-medium text-[14px]'>Send Request</button>
        </div>
      </div>
    </form>
  )
}

export default RequestMovie