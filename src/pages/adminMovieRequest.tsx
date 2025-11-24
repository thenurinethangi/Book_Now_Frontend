import React from 'react'
import { NavLink } from "react-router-dom";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film, CircleX, SquarePen, Eye, Trash, X } from "lucide-react";
import movie1 from '../assets/images/movie-poster-1.webp'

function AdminMovieRequest() {

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
                                <span className='text-[18px] font-medium'>Home {`>`}</span>&nbsp;Movie
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center mt-5'>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px]'>Manage</div>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px] border-b-2 border-red-900'>Request</div>
                </div>

                {/* cinema containner */}
                <div className='grid grid-cols-3 gap-3 mt-6'>
                    {/* single cinema */}
                    <div className='rounded-md bg-[#1e1e1e] h-[260px] flex items-start px-2 py-2'>
                        <div className='h-[100%] w-[42%] rounded-sm'>
                            <img src={movie1} className='w-full h-full object-cover rounded-sm opacity-85'></img>
                        </div>
                        <div className='pl-4.5 pr-1.5 py-2 flex flex-col justify-between h-[100%] w-[58%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[16px] text-[#dedede] font-medium'>UNCHARTED</h3>
                                <div className=''>
                                    <p className='text-[12px] text-[#999]'>Duration: 120min</p>
                                    <p className='text-[12px] text-[#999]'>Release date: 11 November 2025</p>
                                    <p className='text-[12px] text-[#999]'>Director: Tom John</p>
                                    <p className='text-[12px] text-[#999]'>Country: USA</p>
                                    <p className='text-[12px] text-[#999]'>Language: English</p>
                                    <p className='text-[12px] text-[#999]'>Status: Coming soon</p>
                                    {/* <p className='text-[11px] text-black bg-[#f5cc50] px-1 py-[1px] rounded-xs font-medium inline mt-[1px]'>Now Showing</p> */}
                                </div>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>Action</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium self-end flex gap-1.5 items-center'>
                                <Trash className='text-gray-500 w-[18px] h-[18px]' />
                                <X className='text-gray-500 w-[18px] h-[18px]' />
                                <MdCheck className='text-gray-500 w-[19.5px] h-[19.5px]' />
                            </div>
                        </div>
                    </div>

                    <div className='rounded-md bg-[#1e1e1e] h-[260px] flex items-start px-2 py-2'>
                        <div className='h-[100%] w-[42%] rounded-sm'>
                            <img src={movie1} className='w-full h-full object-cover rounded-sm opacity-85'></img>
                        </div>
                        <div className='pl-4.5 pr-1.5 py-2 flex flex-col justify-between h-[100%] w-[58%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[16px] text-[#dedede] font-medium'>UNCHARTED</h3>
                                <div className=''>
                                    <p className='text-[12px] text-[#999]'>Duration: 120min</p>
                                    <p className='text-[12px] text-[#999]'>Release date: 11 November 2025</p>
                                    <p className='text-[12px] text-[#999]'>Director: Tom John</p>
                                    <p className='text-[12px] text-[#999]'>Country: USA</p>
                                    <p className='text-[12px] text-[#999]'>Language: English</p>
                                    <p className='text-[12px] text-[#999]'>Status: Coming soon</p>
                                    {/* <p className='text-[11px] text-black bg-[#f5cc50] px-1 py-[1px] rounded-xs font-medium inline mt-[1px]'>Now Showing</p> */}
                                </div>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>Action</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium self-end flex gap-1.5 items-center'>
                                <Trash className='text-gray-500 w-[18px] h-[18px]' />
                                <X className='text-gray-500 w-[18px] h-[18px]' />
                                <MdCheck className='text-gray-500 w-[19.5px] h-[19.5px]' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminMovieRequest