import React, { useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Users, Maximize } from 'lucide-react';

function CinemaScreenAdd() {
    const [activeNav, setActiveNav] = useState('screens');

    const navItems = [
        { icon: <Home className="w-5.5 h-5.5" />, label: 'Home', id: 'home' },
        { icon: <Tv className="w-5.5 h-5.5" />, label: 'Screens', id: 'screens' },
        { icon: <Film className="w-5.5 h-5.5" />, label: 'Movies', id: 'movies' },
        { icon: <Clock className="w-5.5 h-5.5" />, label: 'Showtimes', id: 'showtimes' },
        { icon: <Tag className="w-5.5 h-5.5" />, label: 'Bookings', id: 'bookings' },
        { icon: <Wallet className="w-5.5 h-5.5" />, label: 'Transactions', id: 'transactions' },
        { icon: <Search className="w-5.5 h-5.5" />, label: 'Search', id: 'search' }
    ];

    const screens = [
        {
            id: 1,
            name: 'IMAX Premium',
            screenNumber: '01',
            seats: 250,
            type: '3D',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
            status: 'Active',
            bookings: 142
        },
        {
            id: 2,
            name: 'Dolby Atmos Hall',
            screenNumber: '02',
            seats: 180,
            type: 'ATMOS',
            image: 'https://images.unsplash.com/photo-1574267432644-f610f4ac60b4?w=800&q=80',
            status: 'Active',
            bookings: 98
        },
        {
            id: 3,
            name: 'Standard Plus',
            screenNumber: '03',
            seats: 150,
            type: '2D',
            image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
            status: 'Active',
            bookings: 76
        },
        {
            id: 4,
            name: 'VIP Lounge',
            screenNumber: '04',
            seats: 80,
            type: '4DX',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
            status: 'Maintenance',
            bookings: 0
        }
    ];

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>
            {/* Sidebar Navigation */}
            <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-800 flex flex-col justify-between items-center sticky top-0" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`nav transition-all duration-200 hover:scale-110 ${activeNav === item.id ? 'text-red-700' : 'text-gray-500 hover:text-gray-400'}`}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <Settings className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                    <Bell className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center cursor-pointer">
                        <User className="w-4 h-4 text-white" />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto'>
                {/* Header */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500 text-[18px] font-medium">Home</span>
                            <span className="text-gray-600">&gt;</span>
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[18px] font-medium">
                                Screens
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search screens..."
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6'>
                    <button className='px-2.5 border-b-2 border-red-900 pb-2 text-[18px] text-white -mb-[1px] transition-colors'>
                        Screens
                    </button>
                    <button className='px-2.5 pb-2 text-[18px] text-gray-500 hover:text-gray-300 transition-colors'>
                        Manage
                    </button>
                </div>

                {/* Stats Overview */}
                <div className='grid grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Screens</p>
                                <p className='text-[18px] font-medium text-white'>4</p>
                            </div>
                            <Tv className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Active Now</p>
                                <p className='text-[18px] font-medium text-green-500'>3</p>
                            </div>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Seats</p>
                                <p className='text-[18px] font-medium text-white'>660</p>
                            </div>
                            <Users className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Occupancy</p>
                                <p className='text-[18px] font-medium text-white'>48%</p>
                            </div>
                            <div className='w-8 h-1.5 bg-gray-800 rounded-full overflow-hidden'>
                                <div className='h-full w-[48%] bg-gradient-to-r from-red-700 to-red-900 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
                    {/* title */}
                    <div className='border-b border-gray-800 py-5 px-7'>
                        <p>Add Cinema</p>
                    </div>
                    {/* body */}
                    <div className='mt-2'>
                        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen name</label>
                                <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
                            </div>

                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen name</label>
                                <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="text" id="input" placeholder='Enter screen name' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 pt-4 pb-2 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen type</label>
                                <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
                                    <option>3D</option>
                                    <option>IMAX</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 py-4 px-6'>
                            <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Screen image</label>
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
                            <button className='bg-red-700 px-5 py-2.5 rounded-lg font-medium text-[15px]'>Add Sheet Layout -{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CinemaScreenAdd