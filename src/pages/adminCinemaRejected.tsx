import React from 'react'
import { NavLink } from "react-router-dom";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film, CircleFadingArrowUp, CircleX } from "lucide-react";
import cinema1 from '../assets/images/cinema-hall-3.webp'

function AdminCinemaRejected() {

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
            <div className='w-full h-min-screen text-white px-7 py-3 pt-7'>

                {/* title */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16px] font-medium z-0">
                                <span className='text-[18px] font-medium'>Home {`>`}</span>&nbsp;Cinema
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center mt-5'>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px]'>Approved</div>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px]'>Pending</div>
                    <div className='px-2.5 pb-2 opacity-95 text-[18px] border-b-2 border-red-900'>Rejected</div>
                </div>

                {/* cinema containner */}
                <div className='grid grid-cols-5 gap-[12px] mt-6'>
                    {/* single cinema */}
                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div> 

                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div> 

                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div> 

                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div> 

                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div> 

                    <div className='rounded-md bg-[#1e1e1e] h-[350px]'>
                        <div className='h-[45%] relative'>
                            <CircleX className='absolute right-1 top-2.5 text-red-500 w-5 h-5' />
                            <CircleFadingArrowUp className='absolute right-7.5 top-2.5 text-red-500 w-5 h-5' />
                            <img src={cinema1} className='w-full h-full'></img>
                        </div>
                        <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h3 className='text-[18px] text-[#dedede] font-medium'>Backstone</h3>
                                <p className='text-[12px] text-[#999]'>63 Mall, Nupe Matara</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>3D</p>
                                    <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>LUX</p>
                                </div>
                            </div>
                            <div className='text-red-700 text-[12px] font-medium'>
                                More details
                            </div>
                        </div>
                    </div>                     

                </div>

            </div>

        </div>
    )
}

export default AdminCinemaRejected