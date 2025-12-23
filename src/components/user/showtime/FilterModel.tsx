import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FilterModel = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    const [tab, setTab] = useState('experience');

    const [experience, setExperience] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    function handleCloseFilterModel() {
        setIsVisible(false);
        setTimeout(() => props.setShowFiltersModel(false), 150);
    }

    function handleSetExperience(e: React.MouseEvent<HTMLLIElement>) {
        const value = e.currentTarget.dataset.value;

        if (value) {
            setExperience(value);
        }
    }

    function handleSetTime(e: React.MouseEvent<HTMLLIElement>) {
        const value = e.currentTarget.dataset.value;

        if (value) {
            setTime(value);
        }
    }

    function handleClear(){
        setExperience('');
        setTime('');
    }

    function handleApplyFilters(){
        
    }


    return (
        <div className={`fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-300 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen w-[500px] bg-black shadow-2xl rounded-lg flex flex-col justify-between relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <div className='pt-10 px-8 w-full flex flex-col justify-start items-start gap-5 relative h-[80%] overflow-y-scroll pb-12'>

                    <X onClick={handleCloseFilterModel} className='absolute right-9 top-10.5 w-5.5 h-5.5 opacity-90 cursor-pointer' />

                    <div>
                        <p className='text-[16px] font-[Poppins] font-medium'>Key & Filters</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className={`pb-1.5 cursor-pointer ${tab === 'experience' ? 'border-b-2 border-b-red-500' : ''}`} onClick={() => setTab('experience')}>
                            <p className='text-[12px]'>EXPERIENCE</p>
                        </div>
                        <div className={`pb-1.5 cursor-pointer ${tab === 'time' ? 'border-b-2 border-b-red-500' : ''}`} onClick={() => setTab('time')}>
                            <p className='text-[12px]'>TIME</p>
                        </div>
                    </div>

                    {tab === 'experience' ?
                        <div className='w-full'>
                            <ul className='flex flex-col gap-2'>

                                {/* 2D */}
                                <li data-value={'2D'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">2D</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Standard movie experience</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'2D' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* 3D */}
                                <li data-value={'3D'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">3D</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Depth-enhanced stereoscopic visuals</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'3D' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* IMAX */}
                                <li data-value={'IMAX'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">IMAX</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Giant screen with precision sound</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'IMAX' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* IMAX 3D */}
                                <li data-value={'IMAX 3D'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">IMAX 3D</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">IMAX visuals with immersive depth</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'IMAX 3D' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Dolby Cinema */}
                                <li data-value={'Dolby Cinema'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Dolby Cinema</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Dolby Vision with Atmos sound</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Dolby Cinema' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Dolby Atmos */}
                                <li data-value={'Dolby Atmos'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Dolby Atmos</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">3D surround audio experience</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Dolby Atmos' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Laser */}
                                <li data-value={'Laser'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Laser</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">High-brightness laser projection</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Laser' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* 4DX */}
                                <li data-value={'4DX'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">4DX</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Motion seats and physical effects</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'4DX' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* ScreenX */}
                                <li data-value={'ScreenX'} onClick={handleSetExperience} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-red-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">ScreenX</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">270-degree panoramic visuals</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'ScreenX' === experience} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        :
                        ''}

                    {tab === 'time' ?
                        <div className='w-full'>
                            <ul className='flex flex-col gap-2'>

                                {/* Morning */}
                                <li data-value={'Morning'} onClick={handleSetTime} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-gray-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Morning</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">6:00 AM - 11:59 AM</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Morning' === time} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Afternoon */}
                                <li data-value={'Afternoon'} onClick={handleSetTime} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-gray-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Afternoon</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">12:00 PM - 4:59 PM</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Afternoon' === time} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Evening */}
                                <li data-value={'Evening'} onClick={handleSetTime} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-gray-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Evening</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">5:00 PM - 8:59 PM</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Evening' === time} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                {/* Night */}
                                <li data-value={'Night'} onClick={handleSetTime} className="w-full h-[73px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='w-[5px] h-[70px] bg-gray-400 rounded-l-sm'></div>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Night</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">9:00 PM - 5:59 AM</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={'Night' === time} className="w-4 h-4 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        :
                        ''}
                </div>

                <div className='bg-[#212121]/80 py-3.5 px-6'>
                    <button onClick={handleApplyFilters} className='w-full bg-[#cd242c] text-[14px] py-[14px] rounded-sm font-semibold cursor-pointer'>APPLY FILTERS</button>
                    <button onClick={handleClear} className='text-[14px] text-[#ff2e38] mt-3 w-full font-medium cursor-pointer'>Clear selection</button>
                </div>

            </div>
        </div>
    );
};

export default FilterModel;