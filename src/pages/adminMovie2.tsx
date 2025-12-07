import React, { useState } from 'react'
import { Home, UserCog, Settings, Disc, Search, Layers, RotateCw, HelpCircle, Bell, MapPin, Tv, Trash, Edit, Eye, Clock, Calendar, Star, Film, Filter, Plus } from "lucide-react";

function AdminMovie2() {
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
                            <rect x="2" y="7" width="20" height="3" rx="1"/>
                            <rect x="2" y="14" width="20" height="3" rx="1"/>
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
                            Add Movie
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

                {/* movie container */}
                <div className='grid grid-cols-2 gap-4'>
                    {movies.map((movie) => (
                        <div key={movie.id} className='rounded-lg bg-[#1e1e1e] h-[180px] flex items-start px-2 py-2 border border-gray-800 hover:border-gray-700 transition-all duration-300 group'>
                            <div className='h-[100%] w-[22%] rounded-sm overflow-hidden relative'>
                                <img 
                                    src={movie.image} 
                                    alt={movie.title}
                                    className='w-full h-full object-cover rounded-sm opacity-85 group-hover:scale-105 transition-transform duration-500'
                                />
                                <div className='absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-bold text-yellow-500'>
                                    <Star className='w-2.5 h-2.5 fill-yellow-500' />
                                    {movie.rating}
                                </div>
                            </div>
                            <div className='pl-4.5 pr-1.5 py-2 flex justify-between h-[100%] flex-1'>
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-[16px] text-[#dedede] font-medium mb-2'>{movie.title}</h3>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex items-center gap-1.5'>
                                                <Clock className='w-3.5 h-3.5 text-gray-500' />
                                                <p className='text-[12px] text-[#999]'>{movie.duration}</p>
                                            </div>
                                            <div className='flex items-center gap-1.5'>
                                                <Calendar className='w-3.5 h-3.5 text-gray-500' />
                                                <p className='text-[12px] text-[#999]'>{movie.releaseDate}</p>
                                            </div>
                                            <div className='flex items-center gap-1.5'>
                                                <Tv className='w-3.5 h-3.5 text-gray-500' />
                                                <p className='text-[12px] text-[#999]'>{movie.screens} screens</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 mt-2'>
                                        <p className={`text-[11px] px-2 py-[2px] rounded font-medium ${movie.status === 'Now Showing' ? 'text-black bg-[#f5cc50]' : 'text-white bg-orange-600'}`}>
                                            {movie.status}
                                        </p>
                                        <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>{movie.genre}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end gap-2'>
                                    <button className='w-8 h-8 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group/btn'>
                                        <Eye className='text-gray-500 group-hover/btn:text-gray-400 w-[18px] h-[18px]' />
                                    </button>
                                    <button className='w-8 h-8 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group/btn'>
                                        <Edit className='text-gray-500 group-hover/btn:text-gray-400 w-[17px] h-[17px]' />
                                    </button>
                                    <button className='w-8 h-8 rounded-lg bg-[#252525] hover:bg-red-900/20 transition-colors flex items-center justify-center group/btn'>
                                        <Trash className='text-gray-500 group-hover/btn:text-red-500 w-[17px] h-[17px]' />
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

export default AdminMovie2