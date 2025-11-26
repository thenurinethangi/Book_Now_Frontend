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

function SingleMovie() {

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
            <div className='relative w-full h-[500px] overflow-x-hidden overflow-y-auto'>
                <div className='w-full h-full'>
                    <img src={movie4} className='w-full h-full object-cover'></img>
                </div>
                <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/75 via-black/1 to-transparent flex justify-center items-center'>
                    <img src={play1} width={'60px'}></img>
                </div>
            </div>

            <div className='px-13 -translate-y-30 flex gap-10'>
                <div className='mr-5'>
                    <div className="w-[200px] h-[300px] relative overflow-hidden">
                        <img src={poster1} className="w-full h-full object-cover rounded-[1.5px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_100%)] transition-all duration-500"></div>
                    </div>
                    <div className='flex flex-col gap-2.5 mt-6'>
                        <button className='border-[1.5px] border-white/90 p-3 rounded-br-3xl'>Book Tickets</button>
                    </div>
                </div>

                <div className='w-[60%] pt-23 flex flex-col items-start gap-4'>
                    <h1 className='text-[32px] font-medium'>Zootopia 2</h1>
                    <div>
                        <p className='text-white/70 mb-[1px]'>DIRECTORS</p>
                        <p className='text-[15px] tracking-normal text-white/95'>Byron Howard, Jared Bush</p>
                    </div>
                    <div>
                        <p className='text-white/70 mb-[1px]'>CAST</p>
                        <p className='text-[15px] leading-relaxed tracking-normal text-white/95'>Jason Bateman, Ginnifer Goodwin, Rolando Davila-Beltran, Fortune Feimster, Shakira , Ke Huy Quan</p>
                    </div>
                    <div>
                        <p className='text-white/70 mb-[1px]'>SYNOPSIS</p>
                        <p className='text-[15px] leading-relaxed tracking-normal text-white/95'>Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers.</p>
                    </div>
                </div>

                <div className='flex flex-col items-start gap-4 -translate-y-1 translate-x-3'>
                    <div>
                        <p className='text-white/80 mb-[1px]'>DUNTIME</p>
                        <p className='text-[15px]'>120 min</p>
                    </div>
                    <div>
                        <p className='text-white/80 mb-[1px]'>RELEASE DATE</p>
                        <p className='text-[15px]'>28 November 2025</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <p className='text-[14px] px-1 py-px border border-white/70 rounded-xs'>Animation</p>
                        <p className='text-[14px] px-1 py-px border border-white/70 rounded-xs'>Comedy</p>
                        <p className='text-[14px] px-1 py-px border border-white/70 rounded-xs'>Family</p>
                    </div>
                </div>

            </div>

            <div className='px-13 flex items-center justify-between'>
                <div>
                    <ChevronLeft />
                </div>
                <div className='flex items-center justify-between w-[85%]'>
                    <div className='text-[#BDBDBD]'>TODAY</div>
                    <div className='border-b-4 border-b-red-500 pb-3.5 px-3 text-red-600'>Thu 27 Nov</div>
                    <div>Fri 28 Nov</div>
                    <div>Sat 29 Nov</div>
                    <div>Sun 30 Nov</div>
                    <div>Mon 1 Dec</div>
                    <div>Tue 2 Dec</div>
                </div>
                <div>
                    <ChevronRight />
                </div>
            </div>

            <div className='px-14.5 flex flex-col gap-[3px] mt-8'>
                <hr className='border-red-400/20'></hr>
                <hr className='border-red-400/20'></hr>
            </div>

            <div className='mt-6 flex justify-end items-start px-14'>
                <ListFilterPlus className='w-5.5 h-5.5 text-white/95' />
            </div>

            <div className='px-14 mt-2'>
                {/* single cinema show time */}
                <div className='flex items-center gap-5 mb-7'>
                    <div className='w-[25%]'>
                        <p className='text-[16.8px] font-normal'>Bankstown: Screen 01</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>
                    </div>
                </div>

                {/* single cinema show time */}
                <div className='flex items-center gap-5 mb-7'>
                    <div className='w-[25%]'>
                        <p className='text-[16.8px] font-normal'>Sundawn SX</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>
                    </div>
                </div>

                {/* single cinema show time */}
                <div className='flex items-center gap-5 mb-7'>
                    <div className='w-[25%]'>
                        <p className='text-[16.8px] font-normal'>Scope: CCS</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>
                    </div>
                </div>

                {/* single cinema show time */}
                <div className='flex items-center gap-5 mb-7'>
                    <div className='w-[25%]'>
                        <p className='text-[16.8px] font-normal'>Skylight 3D</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>

                        <div className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                            <p className='px-1.5 text-[23px] font-medium'>09:00</p>
                            <button className='text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SingleMovie