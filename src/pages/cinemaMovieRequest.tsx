import React, { useState } from 'react'
import { Home, UserCog, Settings, Disc, Search, Layers, RotateCw, HelpCircle, Bell, MapPin, Tv, Trash, Edit, Eye, Clock, Calendar, Star, Film, Filter, Plus } from "lucide-react";

function CinemaRequestMovie() {
    const [activeTab, setActiveTab] = useState('manage');

    const movies = [
        {
            id: 1,
            title: 'UNCHARTED',
            duration: '120min',
            releaseDate: '11 November 2025',
            status: 'Now Showing',
            genre: 'Action',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
            screens: 8
        },
        {
            id: 2,
            title: 'SPIDER-MAN',
            duration: '148min',
            releaseDate: '15 December 2025',
            status: 'Now Showing',
            genre: 'Action',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80',
            screens: 12
        },
        {
            id: 3,
            title: 'THE BATMAN',
            duration: '176min',
            releaseDate: '4 March 2025',
            status: 'Now Showing',
            genre: 'Action',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80',
            screens: 10
        },
        {
            id: 4,
            title: 'DUNE: PART TWO',
            duration: '166min',
            releaseDate: '1 March 2025',
            status: 'Coming Soon',
            genre: 'Sci-Fi',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80',
            screens: 15
        },
        {
            id: 5,
            title: 'OPPENHEIMER',
            duration: '180min',
            releaseDate: '21 July 2025',
            status: 'Now Showing',
            genre: 'Drama',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1574267432644-f610f4ac60b4?w=400&q=80',
            screens: 7
        },
        {
            id: 6,
            title: 'BARBIE',
            duration: '114min',
            releaseDate: '21 July 2025',
            status: 'Now Showing',
            genre: 'Comedy',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&q=80',
            screens: 9
        }
    ];

    const NavButton = ({ children, active }) => (
        <button className={`w-5.5 h-5.5 ${active ? 'text-red-700' : 'text-gray-500'}`}>
            {children}
        </button>
    );

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>
            {/* nav bar - keeping same structure */}
            <nav className="w-[65px] max-h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    <NavButton><Home className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><MapPin className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><Tv className="w-5.5 h-5.5" /></NavButton>
                    <button className="text-gray-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="7" width="20" height="3" rx="1" />
                            <rect x="2" y="14" width="20" height="3" rx="1" />
                        </svg>
                    </button>
                    <NavButton><UserCog className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><Settings className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><Disc className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><Layers className="w-5.5 h-5.5" /></NavButton>
                    <NavButton><Search className="w-5.5 h-5.5" /></NavButton>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <RotateCw className="w-5.5 h-5.5 text-gray-500" />
                    <Bell className="w-5.5 h-5.5 text-gray-500" />
                    <HelpCircle className="w-5.5 h-5.5 text-gray-500" />
                </div>
            </nav>

            {/* content right side */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto'>
                {/* title */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500 text-[18px] font-medium">Home</span>
                            <span className="text-gray-600">&gt;</span>
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[18px] font-medium">
                                Movie
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <span className="text-[12px] text-gray-400">Filter</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900 to-red-700 rounded-lg hover:from-red-800 hover:to-red-600 transition-all text-[12px] font-medium">
                            <Plus className="w-4 h-4" />
                            Request Movie
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Movies</p>
                                <p className='text-[18px] font-medium text-white'>156</p>
                            </div>
                            <Film className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Now Showing</p>
                                <p className='text-[18px] font-medium text-green-500'>42</p>
                            </div>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Coming Soon</p>
                                <p className='text-[18px] font-medium text-orange-500'>18</p>
                            </div>
                            <Calendar className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Avg Rating</p>
                                <p className='text-[18px] font-medium text-white'>4.7</p>
                            </div>
                            <Star className='w-8 h-8 text-yellow-500 opacity-20 fill-yellow-500' />
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6'>
                    <button
                        onClick={() => setActiveTab('manage')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'manage' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => setActiveTab('request')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'request' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Request
                    </button>
                </div>

                {/* Form */}
                <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
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
                </div>

            </div>
        </div>
    )
}

export default CinemaRequestMovie