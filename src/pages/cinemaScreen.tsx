import React, { useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Users, Maximize } from 'lucide-react';

function CinemaScreen() {
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

                {/* Cinema Screens Grid */}
                <div className='grid grid-cols-2 gap-5'>
                    {screens.map((screen) => (
                        <div key={screen.id} className='rounded-lg bg-[#1e1e1e] border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group'>
                            <div className='h-[200px] relative overflow-hidden'>
                                <div className='absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10'>
                                    <div className={`px-2 py-1 rounded text-[9px] font-bold ${screen.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>
                                        {screen.status}
                                    </div>
                                    <button className='w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors'>
                                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <circle cx='12' cy='6' r='1.5' />
                                            <circle cx='12' cy='12' r='1.5' />
                                            <circle cx='12' cy='18' r='1.5' />
                                        </svg>
                                    </button>
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                                <img 
                                    src={screen.image} 
                                    alt={screen.name}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            
                            <div className='p-4.5'>
                                <div className='flex items-start justify-between mb-3'>
                                    <div>
                                        <h3 className='text-[18px] text-[#dedede] font-medium mb-1'>{screen.name}</h3>
                                        <p className='text-[12px] text-[#999]'>Screen {screen.screenNumber}</p>
                                    </div>
                                    <div className='flex items-center gap-1 px-2 py-1 bg-[#353535] rounded text-[9px] text-[#999] font-bold'>
                                        <Maximize className='w-3 h-3' />
                                        {screen.type}
                                    </div>
                                </div>

                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='flex items-center gap-1.5'>
                                        <Users className='w-4 h-4 text-gray-500' />
                                        <span className='text-[12px] text-[#999]'>{screen.seats} seats</span>
                                    </div>
                                    {screen.status === 'Active' && (
                                        <div className='flex items-center gap-1.5'>
                                            <div className='w-1.5 h-1.5 bg-green-500 rounded-full' />
                                            <span className='text-[12px] text-green-500'>{screen.bookings} bookings today</span>
                                        </div>
                                    )}
                                </div>

                                <div className='pt-3 border-t border-gray-800'>
                                    <button className='text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1'>
                                        View details
                                        <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CinemaScreen