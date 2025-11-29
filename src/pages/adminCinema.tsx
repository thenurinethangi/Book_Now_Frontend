import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdSlideshow } from "react-icons/md";
import { UserCog, Disc, Search, Layers, RotateCw, HelpCircle, Bell, MapPin, Tv, Star, Users, Check, X, Filter, CircleDot, Loader } from "lucide-react";
import { House, SquareCheck, Layers2, CircleQuestionMark, MapPinHouse } from "lucide-react";

function AdminCinema() {

    const [activeTab, setActiveTab] = useState('approved');

    const cinemas = [
        {
            id: 1,
            name: 'Backstone',
            location: '63 Mall, Nupe Matara',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 5,
            rating: 4.8,
            status: 'approved'
        },
        {
            id: 2,
            name: 'Silverscreen',
            location: 'City Center, Colombo',
            image: 'https://images.unsplash.com/photo-1574267432644-f610f4ac60b4?w=800&q=80',
            tags: ['3D', 'IMAX'],
            screens: 8,
            rating: 4.9,
            status: 'approved'
        },
        {
            id: 3,
            name: 'Palace Cinema',
            location: 'Marine Drive, Galle',
            image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
            tags: ['3D', '4DX'],
            screens: 6,
            rating: 4.7,
            status: 'approved'
        },
        {
            id: 4,
            name: 'Vista Theatres',
            location: 'Liberty Plaza, Kollupitiya',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 4,
            rating: 4.6,
            status: 'approved'
        },
        {
            id: 5,
            name: 'Majestic Cinema',
            location: 'Beach Road, Negombo',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
            tags: ['3D', 'ATMOS'],
            screens: 7,
            rating: 4.8,
            status: 'approved'
        },
        {
            id: 6,
            name: 'Royal Theatre',
            location: 'Main Street, Kandy',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 3,
            rating: 4.5,
            status: 'approved'
        }
    ];

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* nav bar */}
            <nav className="w-[65px] max-h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    <NavLink to={'/'}><House className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><MapPinHouse className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><Tv className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><MdSlideshow className="w-6 h-6 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/profile'}><UserCog className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/tasks/today'}><SquareCheck className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/promo'}><Disc className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/tasks/status'}><Layers2 className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><Search className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <RotateCw className="w-5.5 h-5.5 text-gray-500" />
                    <Bell className="w-5.5 h-5.5 text-gray-500" />
                    <CircleQuestionMark className="w-5.5 h-5.5 text-gray-500" />
                </div>
            </nav>

            {/* content right side */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto'>
                {/* title */}
                <div className='flex justify-between items-center mb-[17px]'>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500 text-[18px] font-medium">Home</span>
                            <span className="text-gray-600">&gt;</span>
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[18px] font-medium">
                                Cinema
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search cinema..."
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-4 mb-6 bg-[#1e1e1e]/0 rounded-md p-4'>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <MapPin className='w-8 h-8 text-red-700 opacity-20' />
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Cinemas</p>
                                <p className='text-[18px] font-medium text-white'>24</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center'>
                                <Check className='w-4 h-4 text-green-500' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Approved</p>
                                <p className='text-[18px] font-medium text-green-500'>18</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <Loader className='w-7 h-7 text-yellow-600 opacity-20 rounded-full' />
                            {/* <div className='w-2 h-2 bg-orange-500 rounded-full animate-pulse' /> */}
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Pending</p>
                                <p className='text-[18px] font-medium text-yellow-600'>4</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center'>
                                <X className='w-4 h-4 text-red-500' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Rejected</p>
                                <p className='text-[18px] font-medium text-red-500'>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6'>
                    <button
                        onClick={() => setActiveTab('approved')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'approved' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Approved
                    </button>
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'pending' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => setActiveTab('rejected')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'rejected' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Rejected
                    </button>
                </div>

                {/* cinema container */}
                <div className='grid grid-cols-5 gap-[12px]'>
                    {cinemas.map((cinema) => (
                        <div key={cinema.id} className='rounded-lg bg-[#1e1e1e] h-[350px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden'>
                            <div className='h-[45%] relative overflow-hidden'>
                                <div className='absolute top-0 left-0 right-0 p-2.5 flex justify-between items-start z-10'>
                                    <div className='flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[9px] font-bold text-white/88'>
                                        <Star className='w-3 h-3 fill-white/88' />
                                        {cinema.rating}
                                    </div>
                                    <button className='w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <circle cx='12' cy='6' r='1.5' />
                                            <circle cx='12' cy='12' r='1.5' />
                                            <circle cx='12' cy='18' r='1.5' />
                                        </svg>
                                    </button>
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                                <img
                                    src={cinema.image}
                                    alt={cinema.name}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                            <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                                <div className='flex flex-col gap-[15px]'>
                                    <div>
                                        <h3 className='text-[18px] text-[#dedede] font-medium mb-1'>{cinema.name}</h3>
                                        <div className='flex items-start gap-1.5'>
                                            <MapPin className='w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0' />
                                            <p className='text-[12px] text-[#999] line-clamp-2'>{cinema.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2.5'>
                                        <div className='flex items-center gap-1'>
                                            <Tv className='w-3.5 h-3.5 text-gray-500' />
                                            <span className='text-[9px] text-[#999] font-bold'>{cinema.screens} SCREENS</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 flex-wrap'>
                                        {cinema.tags.map((tag, index) => (
                                            <p key={index} className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <button className='text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1 mt-2'>
                                    More details
                                    <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminCinema