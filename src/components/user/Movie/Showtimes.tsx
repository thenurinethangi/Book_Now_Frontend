import React from 'react'
import { Search, User, Tags, Bookmark, ChevronLeft, ChevronRight, ListFilterPlus } from "lucide-react";


function Showtimes() {

    return (
        <div className='mb-47'>
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

export default Showtimes