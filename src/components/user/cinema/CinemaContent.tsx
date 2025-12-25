import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../../services/user/cinemaService';
import { Bookmark, Tags } from 'lucide-react';

function CinemaContent() {

    const [allCinemas,setAllCinemas] = useState([]);

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
        <div className='grid grid-cols-4 gap-9 px-15 mt-11 mb-10'>
            {/* single cinema */}
            {allCinemas.length > 0
                ? allCinemas.map((cinema: any) => (
                    <div key={cinema._id} className='mb-4'>
                        <div className='relative w-[257.5px] h-[205px]'>
                            <img src={cinema.cinemaImageUrl} className='object-cover w-full h-full object-top'></img>
                            <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h1 className='text-[25px] font-bold text-white -translate-y-[16px] -translate-x-[10px]'>{cinema.cinemaName.toUpperCase()}</h1>
                            <div className='flex items-center gap-1.5 mt-1'>
                                <p className='w-[80%] text-[18px] text-white tracking-[0.5px] font-normal -translate-y-[7px] -translate-x-[10px]'>{cinema.address}</p>
                                {/* <p className='text-[12px] text-[#999] font-medium'>{formatDate(cinema.releaseDate)}</p> */}
                            </div>
                            {/* <div className='flex items-center gap-1 mt-1.5'>
                                { cinema.formats.map((f: string, index: number) => (
                                    <p key={index} className='text-[9px] bg-[#353535] text-[#999] font-semibold rounded-xs py-0.5 px-1'>{f}</p>
                                )) }
                            </div> */}
                        </div>
                    </div>
                ))
                : <p className='text-[15px] text-[#BDBDBD] font-light pl-2.5 mb-20'>No cinemas</p>
            }
        </div>
    )
}

export default CinemaContent