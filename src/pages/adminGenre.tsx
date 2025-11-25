import React from 'react'
import { NavLink } from "react-router-dom";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film, CircleX, SquarePen, Eye, Trash, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import movie1 from '../assets/images/movie-poster-1.webp'

function AdminGenre() {

    return (
        <div className='bg-[#121212] flex font-[Poppins] overflow-hidden'>

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
            <div className='w-full min-h-screen text-white px-7 py-3 pt-7'>

                {/* title */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16px] font-medium z-0">
                                <span className='text-[18px] font-medium'>Home {`>`}</span>&nbsp;Genre
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center gap-1.5 mt-5'>
                    <div className='relative'>
                        <Search className='w-[18px] h-[18px] text-gray-500 absolute top-2 left-1.5' />
                        <input placeholder='Search' className='border-[1.5px] border-gray-500 w-[360px] px-3 py-[6px] pl-7 text-[13.8px] rounded-sm text-gray-300'></input>
                    </div>
                </div>

                {/* cinema containner */}
                <div className='grid grid-cols-1  gap-1 mt-3.5 border-gray-800'>
                    {/* single cinema */}
                    <div className='rounded-sm bg-[#252525] border-gray-700 w-full grid grid-cols-5 px-5 py-2 mb-1'>
                        <div className='text-[14px] text-white/90'>No</div>
                        <div className='text-[14px] text-white/90'>Genre</div>
                        <div className='text-[14px] text-white/90'>Popularity</div>
                        <div className='text-[14px] text-white/90'>Precentage</div>
                        <div className='text-[14px] text-white/90'>...</div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-5 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>Action</div>
                        <div className='text-[13px] text-gray-400'>High</div>
                        <div className='text-[13px] text-gray-400'>60%</div>
                        <div className='flex items-center gap-2'>
                            <SquarePen className='text-gray-400 w-[16px] h-[16px]' />
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-5 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>Action</div>
                        <div className='text-[13px] text-gray-400'>High</div>
                        <div className='text-[13px] text-gray-400'>60%</div>
                        <div className='flex items-center gap-2'>
                            <SquarePen className='text-gray-400 w-[16px] h-[16px]' />
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-5 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>Action</div>
                        <div className='text-[13px] text-gray-400'>High</div>
                        <div className='text-[13px] text-gray-400'>60%</div>
                        <div className='flex items-center gap-2'>
                            <SquarePen className='text-gray-400 w-[16px] h-[16px]' />
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-5 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>Action</div>
                        <div className='text-[13px] text-gray-400'>High</div>
                        <div className='text-[13px] text-gray-400'>60%</div>
                        <div className='flex items-center gap-2'>
                            <SquarePen className='text-gray-400 w-[16px] h-[16px]' />
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-5 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>Action</div>
                        <div className='text-[13px] text-gray-400'>High</div>
                        <div className='text-[13px] text-gray-400'>60%</div>
                        <div className='flex items-center gap-2'>
                            <SquarePen className='text-gray-400 w-[16px] h-[16px]' />
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] w-full px-5 py-2 pb-2.5 flex justify-end items-center gap-5'>
                        <p className='text-[12px] text-gray-400'>1-10 of 12</p>
                        <div className='flex items-center gap-8'>
                            <ChevronLeft className='text-gray-400 w-[16px] h-[16px]' />
                            <ChevronRight className='text-gray-400 w-[16px] h-[16px]' />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminGenre