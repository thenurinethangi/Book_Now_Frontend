import React from 'react'

import { Search, User, Tags, Bookmark } from "lucide-react";
import { MdGridView, MdViewList } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";

import poster1 from '../../../assets/images/zootopia-poster.jpg';
import poster2 from '../../../assets/images/wicked-for-good-poster.jpg';
import poster3 from '../../../assets/images/the-conjuring-last-rites-poster.jpg';
import poster4 from '../../../assets/images/predator-badlands-poster.jpg';

function MoviesContainer() {

    return (
        <div className='grid grid-cols-5 gap-8 px-15 mt-11 mb-27'>
            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster1} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster3} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster4} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

            {/* single movie */}
            <div className='mb-6'>
                <div className='relative'>
                    <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
                    <img src={poster2} className='rounded-sm'></img>
                    <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>Wicked: For Good</h1>
                    <div className='flex items-center gap-1.5 mt-1'>
                        <p className='text-[12px] text-[#999] font-medium'>120 min | </p>
                        <p className='text-[12px] text-[#999] font-medium'>4 Dec 2025</p>
                    </div>
                    <div className='flex items-center gap-1 mt-1.5'>
                        <Tags className="text-white/90 w-[22px] h-[22px]" />
                        {/* <MdPlayCircle className="text-white/90 w-5.5 h-5.5" /> */}
                        {/* <AiOutlineHeart className="text-white/90 w-5.5 h-5.5" /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoviesContainer