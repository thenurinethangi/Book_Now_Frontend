import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../../services/user/cinemaService';
import { MapPin, Search } from 'lucide-react';
import { BiSortAlt2 } from "react-icons/bi";

function CinemaContent() {

    const [allCinemas, setAllCinemas] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadAllCinemas();
    }, []);

    async function loadAllCinemas() {
        try {
            const res = await getAllCinemas();
            console.log(res.data.data);
            setAllCinemas(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='pb-10'>
            <div className="bg-white/10 mx-12 mt-10 h-[80px] flex justify-between items-center pl-6 pr-6 backdrop-blur-sm">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <input
                            className="font-light bg-transparent border-b-2 border-b-white/30 hover:border-b-white/50 focus:border-b-red-500 pl-10 pr-3 py-2 text-[17px] tracking-[0.5px] w-[300px] outline-none transition-colors"
                            type="text"
                            placeholder="Search by name or location"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* <a href="" className="text-blue-400 hover:text-blue-300 transition-colors text-[15px]">All Lanka Cinemas</a> */}
                </div>
                <div className="flex items-center gap-5">
                    <button className="flex items-center gap-3 hover:text-red-400 transition-colors">
                        <div className="text-[16.5px]">Locate me</div>
                        <MapPin className='w-4 h-5' />
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                        <div className="text-[16.5px]">Filter By</div>
                        <BiSortAlt2 className='w-5 h-5 text-white' />
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-9 px-15 mt-11 mb-10'>
                {allCinemas.length > 0
                    ? allCinemas.map((cinema: any) => (
                        <div key={cinema._id} className='group cursor-pointer mb-3'>
                            <div className='relative w-[257.5px] h-[205px] rounded-sm'>
                                <img src={cinema.cinemaImageUrl} className='object-cover w-full h-full object-top transition-transform duration-500 group-hover:scale-105'></img>
                                <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent group-hover:from-black/60 group-hover:via-black/25 group-hover:scale-105 transition-all duration-500"></div>

                                <div className='absolute bottom-0 -left-2 right-0'>
                                    <h1 className='text-[25px] font-bold text-white drop-shadow-lg'>{cinema.cinemaName.toUpperCase()}</h1>
                                </div>
                            </div>

                            <div className='flex flex-col items-start mt-3.5 -translate-x-2'>
                                <p className='text-[20.5px] text-white/90 tracking-[0.5px] font-normal font-[Nunito_Sans] leading-relaxed line-clamp-2'>{cinema.address}</p>

                                <div className='flex items-center gap-1.5 mt-2.5'>
                                    {cinema.formats.map((f: string, index: number) => (
                                        <p key={index} className='text-[13px] bg-[#353535] text-[#999] font-semibold rounded-xs py-1 px-2'>{f}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                    : <p className='text-[15px] text-[#BDBDBD] font-light pl-2.5 mb-20'>No cinemas</p>
                }
            </div>
        </div>
    )
}

export default CinemaContent