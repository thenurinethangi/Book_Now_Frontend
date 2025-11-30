import React from 'react'
import { MdGridView, MdViewList } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";

function Tabs() {

    return (
        <div className='mt-7 px-15 flex justify-between items-center'>
            <div className='flex items-center'>
                <div className='px-2.5 pb-2 opacity-95 text-[22px] font-medium border-b-2 border-[#ff2e38]'>Now Showing</div>
                <div className='px-2.5 pb-2 opacity-70 text-[22px] font-medium'>Coming Soon</div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <BiSortAlt2 className='w-5 h-5 text-[#ff2e38] cursor-pointer absolute left-0.5 top-2' />
                    <button className='px-[11px] pl-6 py-[7px] border border-gray-300/50 rounded-sm text-[14px] font-light'>Key & Filters</button>
                </div>
                <div className='flex items-center gap-2'>
                    <MdGridView className='w-6 h-6 cursor-pointer text-[#ff2e38]' />
                    <MdViewList className='w-6.5 h-6.5 cursor-pointer text-white/90' />
                </div>
            </div>
        </div>
    )
}

export default Tabs