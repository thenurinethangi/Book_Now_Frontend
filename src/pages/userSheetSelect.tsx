import React, { useState, useEffect, useRef } from 'react'
import { Search, User, Tags, Bookmark, ChevronLeft, ChevronRight, ListFilterPlus } from "lucide-react";
import logo from '../assets/images/camera-roll-removebg-preview.png'
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'
import logo3 from '../assets/images/logo-2-removebg-preview.png'
import movie1 from '../assets/images/movie-1.jpg'
import movie2 from '../assets/images/movie-3.jpg'
import movie3 from '../assets/images/movie-2.jpg'
import movie4 from '../assets/images/movie-4.png'
import movie5 from '../assets/images/movie-7.jpg'
import movie6 from '../assets/images/movie-8.jpg'
import trailer1 from '../assets/videos/AvatarFireAsh-Trailer.mp4'
import trailer2 from '../assets/videos/WickedForGood-Trailer.mp4'
import trailer3 from '../assets/videos/ZOOTOPIA-2-Trailer.mp4'
import trailer4 from '../assets/videos/Conjuring4-Trailer.mp4'
import trailer5 from '../assets/videos/PREDATOR-BADLANDS-Trailer.mp4'
import {
    SlidersHorizontal,
    ArrowUpDown,
    List,
    Grid3x3
} from "lucide-react";
import { MdGridView } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { TbLayoutGrid } from "react-icons/tb";
import poster1 from '../assets/images/zootopia-poster.jpg'
import poster2 from '../assets/images/wicked-for-good-poster.jpg'
import poster3 from '../assets/images/the-conjuring-last-rites-poster.jpg'
import poster4 from '../assets/images/predator-badlands-poster.jpg'
import { RiTicket2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPlayArrow, MdPlayCircleFilled, MdPlayCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import play1 from '../assets/images/play.png'
import play2 from '../assets/images/play-button.png'
import arrow from '../assets/images/play (5).png'
import screen from '../assets/images/front-screen.svg'

function UserSheetSelect() {

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative pb-50'>

            {/* navigation */}
            <div className='px-9 flex justify-between items-center w-full bg-transparent absolute top-0 z-10'>
                <div className='flex items-center gap-10'>
                    <div className="flex items-center space-x-3 ml-4">
                        <div className="flex items-center justify-center z-10">
                            <img src={logo2} width={'80px'} alt="logo"></img>
                        </div>
                        {/* <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[20px] font-[Luckiest Guy] font-medium -translate-x-18 z-1">
                            <span className='text-[25px] font-[Luckiest Guy] font-medium'>B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OOKNOW
                        </span> */}
                    </div>
                    <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Movie</div>
                    <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Cinema</div>
                    <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Showtime</div>
                    <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>About Us</div>
                </div>
                <div className='flex items-center gap-5'>
                    <Search className='w-[20px] h-[20px] cursor-pointer' />
                    <User className='w-[18px] h-[18px] cursor-pointer' />
                </div>
            </div>

            {/* hero */}
            <div className='relative w-full h-[320px] overflow-x-hidden overflow-y-auto'>
                <div className='w-full h-full'>
                    <img src={movie4} className='w-full h-full object-cover blur-xs'></img>
                </div>
                <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent flex justify-center items-end'>
                    <div className='flex items-start gap-5 pb-7'>
                        <div>
                            <img src={poster1} width={'122px'} className='rounded-xs'></img>
                        </div>
                        <div>
                            <p className='bg-blue-300 text-black mb-1.5 rounded-xs text-[10px] font-semibold p-1 inline'>PROCESSING</p>
                            <p className='text-[29px] font-medium'>Zootopia 2</p>
                            <p className='text-[15px]'>Skylight: <span>Skyline 01</span></p>
                            <p className='text-[15px] mb-2'>Thu 27 Nov 09:00 AM</p>
                            <div className='flex items-center gap-1 flex-wrap w-[80%]'>
                                <p className='text-[12px] text-black/80 px-1 py-0.5 bg-gray-200 rounded-xs inline'>ODC Full: <span>1000LKR</span></p>
                                <p className='text-[12px] text-black/80 px-1 py-0.5 bg-gray-200 rounded-xs inline'>ODC Half: <span>700LKR</span></p>
                                <p className='text-[12px] text-black/80 px-1 py-0.5 bg-gray-200 rounded-xs inline'>BOX: <span>2500LKR</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1'>
                <div className='bg-[#1e1e1e] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium'>Seats</p>
                    <img src={arrow} width={'45px'} className='translate-x-9'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Tickets</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Payment</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Confirmation</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>
            </div>

            <div className='px-15 mt-15 flex flex-col items-center'>
                {/* screen */}
                <div className="w-[50%] mx-auto">
                    <svg width="100%" height="35" viewBox="0 0 600 35" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                        <defs>
                            {/* Screen gradient matching #121212 environment */}
                            <linearGradient id="screenDark212" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2a2a2a" />
                                <stop offset="100%" stopColor="#9E9E9E" />
                            </linearGradient>

                            {/* Glow tuned for #121212 background - more visible */}
                            <radialGradient id="glow212" cx="50%" cy="0%" r="60%">
                                <stop offset="0%" stopColor="#9E9E9E" stopOpacity="0.7" />
                                <stop offset="50%" stopColor="#9E9E9E" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="transparent" />
                            </radialGradient>
                        </defs>

                        {/* Ultra-thin curved cinema screen - much wider */}
                        <path
                            d="M10 8 Q300 4 590 8 L590 18 Q300 15 10 18 Z"
                            fill="url(#screenDark212)"
                            rx="12"
                        />

                        {/* Soft glow below screen - more visible */}
                        <ellipse
                            cx="300"
                            cy="26"
                            rx="280"
                            ry="10"
                            fill="url(#glow212)"
                            opacity="0.9"
                        />
                    </svg>
                </div>

                {/* sheets */}
                <div className='mt-15 grid grid-cols-1 gap-1.5'>
                    {/* one row */}
                    <div className='flex items-center gap-10'>
                        {/* english char */}
                        <div>A</div>
                        {/* sheets box*/}
                        <div className='flex items-center gap-1.5'>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                        </div>
                    </div>

                    {/* one row */}
                    <div className='flex items-center gap-10'>
                        {/* english char */}
                        <div>A</div>
                        {/* sheets box*/}
                        <div className='flex items-center gap-1.5'>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                        </div>
                    </div>

                    {/* one row */}
                    <div className='flex items-center gap-10'>
                        {/* english char */}
                        <div>A</div>
                        {/* sheets box*/}
                        <div className='flex items-center gap-1.5'>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                        </div>
                    </div>

                    {/* one row */}
                    <div className='flex items-center gap-10'>
                        {/* english char */}
                        <div>A</div>
                        {/* sheets box*/}
                        <div className='flex items-center gap-1.5'>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                            <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                        </div>
                    </div>

                </div>

                {/* category */}
                <div className='mt-25 flex items-center gap-10 py-2 px-5 border border-gray-300 rounded-sm'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[22px] h-[22px] border border-[#E0E0E0] bg-[#E0E0E0] rounded-xs'></div>
                        <p className='text-[13px]'>Available</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-[22px] h-[22px] border border-red-500 bg-red-500 rounded-xs'></div>
                        <p className='text-[13px]'>Reserved</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-[22px] h-[22px] border border-blue-300 bg-blue-300 rounded-xs'></div>
                        <p className='text-[13px]'>Selected</p>
                    </div>
                </div>

                <div className='mt-25'>
                    <button className='bg-red-500 p-2 rounded-sm'>Continue To Next {' -->'}</button>
                </div>

            </div>

        </div>
    )
}

export default UserSheetSelect