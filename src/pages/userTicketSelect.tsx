import React, { useState, useEffect, useRef } from 'react'
import { Search, User, Tags, Bookmark, ChevronLeft, ChevronRight, ListFilterPlus, Ticket, Info } from "lucide-react";
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
import ticket from '../assets/images/ticket-2-removebg-preview.png'

function UserTicketSelect() {

    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [pensionerCount, setPensionerCount] = useState(0);
    const [seniorCount, setSeniorCount] = useState(0);
    const [studentCount, setStudentCount] = useState(0);

    const adultPrice = 1000;
    const childPrice = 700;
    const pensionerPrice = 810;
    const seniorPrice = 740;
    const studentPrice = 810;
    const bookingFeePerTicket = 50;

    const totalTickets = adultCount + childCount + pensionerCount + seniorCount + studentCount;
    const subtotal = (adultCount * adultPrice) + (childCount * childPrice) +
        (pensionerCount * pensionerPrice) + (seniorCount * seniorPrice) +
        (studentCount * studentPrice);
    const totalBookingFees = totalTickets * bookingFeePerTicket;
    const totalPrice = subtotal + totalBookingFees;

    const TicketRow = ({ label, price, count, setCount }) => (
        <div className='bg-[#252525] flex items-center justify-between py-2 px-6 mb-1'>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='text-[14px] text-gray-200'>{label}</span>
                    <Info className='w-3.5 h-3.5' />
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <span className='text-[14px] font-medium text-gray-300'>{price} LKR</span>
                {/* <span className='text-[13px] text-gray-500'>+ 50LKR booking fee</span> */}
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => setCount(Math.max(0, count - 1))}
                        className='w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all'
                    >
                        -
                    </button>
                    <span className='text-[14px] w-6 text-center font-medium'>{count}</span>
                    <button
                        onClick={() => setCount(count + 1)}
                        className='w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all'
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative pb-100'>

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
                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Seats</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#1e1e1e] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-white'>Tickets</p>
                    <img src={arrow} width={'45px'} className='translate-x-9'></img>
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

            {/* Main Content */}
            <div className='px-25 mx-auto mt-17 flex gap-8'>
                {/* Tickets Section */}
                <div className='flex-1'>
                    <div className='bg-[#121212] rounded-sm overflow-hidden shadow-2xl'>
                        {/* Header */}
                        <div className='bg-[#252525] px-6 flex items-center justify-between mb-1'>
                            <div className='flex items-center gap-3'>
                                {/* <h2 className='font-[Poppins] text-[17px] font-normal'>Tickets</h2> */}
                                <img src={ticket} width={'45px'}></img>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-[15px] font-normal ml-2'>{totalTickets}/2</span>
                            </div>
                        </div>

                        {/* Ticket Rows */}
                        <TicketRow label="Adult" price={adultPrice} count={adultCount} setCount={setAdultCount} />
                        <TicketRow label="Child" price={childPrice} count={childCount} setCount={setChildCount} />
                        <TicketRow label="Pensioner" price={pensionerPrice} count={pensionerCount} setCount={setPensionerCount} />
                        <TicketRow label="Senior" price={seniorPrice} count={seniorCount} setCount={setSeniorCount} />
                        <TicketRow label="Student" price={studentPrice} count={studentCount} setCount={setStudentCount} />
                    </div>
                </div>

                {/* Booking Summary */}
                <div className='w-[350px]'>
                    <div className='bg-[#252525] rounded-sm overflow-hidden shadow-2xl sticky top-24'>
                        {/* Header */}
                        <div className='px-6 py-5 border-b border-gray-800'>
                            <h2 className='text-[18px] font-medium text-center'>Booking Summary</h2>
                        </div>

                        {/* Items */}
                        <div className='px-6 py-5 space-y-3 min-h-[200px]'>
                            {adultCount > 0 && (
                                <div className='flex justify-between items-center'>
                                    <span className='text-[14px] text-gray-400'>{adultCount}x Adult</span>
                                    <span className='text-[14px] font-medium'>{(adultCount * adultPrice).toFixed(2)}LKR</span>
                                </div>
                            )}
                            {childCount > 0 && (
                                <div className='flex justify-between items-center'>
                                    <span className='text-[14px] text-gray-400'>{childCount}x Child</span>
                                    <span className='text-[14px] font-medium'>{(childCount * childPrice).toFixed(2)}LKR</span>
                                </div>
                            )}
                            {pensionerCount > 0 && (
                                <div className='flex justify-between items-center'>
                                    <span className='text-[14px] text-gray-400'>{pensionerCount}x Pensioner</span>
                                    <span className='text-[14px] font-medium'>{(pensionerCount * pensionerPrice).toFixed(2)}LKR</span>
                                </div>
                            )}
                            {seniorCount > 0 && (
                                <div className='flex justify-between items-center'>
                                    <span className='text-[14px] text-gray-400'>{seniorCount}x Senior</span>
                                    <span className='text-[14px] font-medium'>{(seniorCount * seniorPrice).toFixed(2)}LKR</span>
                                </div>
                            )}
                            {studentCount > 0 && (
                                <div className='flex justify-between items-center'>
                                    <span className='text-[14px] text-gray-400'>{studentCount}x Student</span>
                                    <span className='text-[14px] font-medium'>{(studentCount * studentPrice).toFixed(2)}LKR</span>
                                </div>
                            )}
                            {totalTickets > 0 && (
                                <div className='flex justify-between items-center pt-2'>
                                    <span className='text-[14px] text-gray-400'>{totalTickets}x Booking Fees</span>
                                    <span className='text-[14px] font-medium'>{totalBookingFees.toFixed(2)}LKR</span>
                                </div>
                            )}
                        </div>

                        {/* Total */}
                        <div className='px-6 py-5 border-t border-gray-800'>
                            <div className='flex justify-between items-center mb-5'>
                                <span className='text-[15px] font-normal'>Total price</span>
                                <span className='text-[18px] font-medium'>{totalPrice.toFixed(2)} LKR</span>
                            </div>

                            {/* Proceed Button */}
                            <button className='w-full border-[1.5px] border-white text-white py-3.5 rounded-br-3xl text-[16px] hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]'>
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserTicketSelect