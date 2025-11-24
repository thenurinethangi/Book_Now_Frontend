import React from 'react'
import { NavLink } from "react-router-dom";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film, CircleX, SquarePen, Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import movie1 from '../assets/images/movie-poster-1.webp'

function AdminCinemaOwner() {

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
                                <span className='text-[18px] font-medium'>Home {`>`}</span>&nbsp;User
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center mt-5'>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px]'>Users</div>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px] border-b-2 border-red-900'>Cinema Owners</div>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px]'>Admins</div>
                </div>

                {/* cinema containner */}
                <div className='grid grid-cols-1  gap-1 mt-6 border-gray-800'>
                    {/* single cinema */}
                    <div className='rounded-sm bg-[#252525] border-gray-700 w-full grid grid-cols-7 px-5 py-2 mb-1'>
                        <div className='text-[14px] text-white/90'>No</div>
                        <div className='text-[14px] text-white/90'>Email</div>
                        <div className='text-[14px] text-white/90'>First Name</div>
                        <div className='text-[14px] text-white/90'>Last Name</div>
                        <div className='text-[14px] text-white/90'>Mobile</div>
                        <div className='text-[14px] text-white/90'>Business No</div>
                        <div className='text-[14px] text-white/90'>...</div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-7 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>thenuri@gamil.com</div>
                        <div className='text-[13px] text-gray-400'>Thenuri</div>
                        <div className='text-[13px] text-gray-400'>Nethangi</div>
                        <div className='text-[13px] text-gray-400'>+94 712345678</div>
                        <div className='text-[13px] text-gray-400'>12345</div>
                        <div className='flex items-center gap-2'>
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                            <Eye className='text-gray-400 w-[17.5px] h-[17.5px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-7 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>thenuri@gamil.com</div>
                        <div className='text-[13px] text-gray-400'>Thenuri</div>
                        <div className='text-[13px] text-gray-400'>Nethangi</div>
                        <div className='text-[13px] text-gray-400'>+94 712345678</div>
                        <div className='text-[13px] text-gray-400'>12345</div>
                        <div className='flex items-center gap-2'>
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                            <Eye className='text-gray-400 w-[17.5px] h-[17.5px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-7 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>thenuri@gamil.com</div>
                        <div className='text-[13px] text-gray-400'>Thenuri</div>
                        <div className='text-[13px] text-gray-400'>Nethangi</div>
                        <div className='text-[13px] text-gray-400'>+94 712345678</div>
                        <div className='text-[13px] text-gray-400'>12345</div>
                        <div className='flex items-center gap-2'>
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                            <Eye className='text-gray-400 w-[17.5px] h-[17.5px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-7 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>thenuri@gamil.com</div>
                        <div className='text-[13px] text-gray-400'>Thenuri</div>
                        <div className='text-[13px] text-gray-400'>Nethangi</div>
                        <div className='text-[13px] text-gray-400'>+94 712345678</div>
                        <div className='text-[13px] text-gray-400'>12345</div>
                        <div className='flex items-center gap-2'>
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                            <Eye className='text-gray-400 w-[17.5px] h-[17.5px]' />
                        </div>
                    </div>

                    <div className='bg-[#252525] border-b border-white/20 w-full grid grid-cols-7 px-5 py-2 pb-2.5'>
                        <div className='text-[13px] text-gray-400'>1</div>
                        <div className='text-[13px] text-gray-400'>thenuri@gamil.com</div>
                        <div className='text-[13px] text-gray-400'>Thenuri</div>
                        <div className='text-[13px] text-gray-400'>Nethangi</div>
                        <div className='text-[13px] text-gray-400'>+94 712345678</div>
                        <div className='text-[13px] text-gray-400'>12345</div>
                        <div className='flex items-center gap-2'>
                            <Trash className='text-gray-400 w-[16px] h-[16px]' />
                            <Eye className='text-gray-400 w-[17.5px] h-[17.5px]' />
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

export default AdminCinemaOwner