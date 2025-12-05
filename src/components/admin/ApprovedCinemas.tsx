import React, { useEffect, useState } from 'react'
import { MapPin, Tv, Star } from "lucide-react";
import { getAllActiveCinemas } from '../../services/admin/cinemaService';

function ApprovedCinemas() {

    const [approvedCinemas, setApprovedCinemas] = useState([]);

    useEffect(() => {
        loadAllApprovedCinemas();
    }, []);

    async function loadAllApprovedCinemas() {
        try {
            const res = await getAllActiveCinemas();
            console.log(res.data.data);
            setApprovedCinemas(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const c = [
        {
            id: 1,
            name: 'Backstone',
            location: '63 Mall, Nupe Matara',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 5,
            rating: 4.8,
            status: 'approved'
        },
        {
            id: 2,
            name: 'Silverscreen',
            location: 'City Center, Colombo',
            image: 'https://images.unsplash.com/photo-1574267432644-f610f4ac60b4?w=800&q=80',
            tags: ['3D', 'IMAX'],
            screens: 8,
            rating: 4.9,
            status: 'approved'
        },
        {
            id: 3,
            name: 'Palace Cinema',
            location: 'Marine Drive, Galle',
            image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
            tags: ['3D', '4DX'],
            screens: 6,
            rating: 4.7,
            status: 'approved'
        },
        {
            id: 4,
            name: 'Vista Theatres',
            location: 'Liberty Plaza, Kollupitiya',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 4,
            rating: 4.6,
            status: 'approved'
        },
        {
            id: 5,
            name: 'Majestic Cinema',
            location: 'Beach Road, Negombo',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
            tags: ['3D', 'ATMOS'],
            screens: 7,
            rating: 4.8,
            status: 'approved'
        },
        {
            id: 6,
            name: 'Royal Theatre',
            location: 'Main Street, Kandy',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
            tags: ['3D', 'LUX'],
            screens: 3,
            rating: 4.5,
            status: 'approved'
        }
    ];

    return (
        <div className='grid grid-cols-5 gap-[12px]'>
            {approvedCinemas.map((cinema: any) => (
                <div key={cinema._id} className='rounded-lg bg-[#1e1e1e] h-[350px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden'>
                    <div className='h-[45%] relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 p-2.5 flex justify-between items-start z-10'>
                            <div className='flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[9px] font-bold text-white/88'>
                                <Star className='w-3 h-3 fill-white/88' />
                                {4.5}
                            </div>
                            <button className='w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <circle cx='12' cy='6' r='1.5' />
                                    <circle cx='12' cy='12' r='1.5' />
                                    <circle cx='12' cy='18' r='1.5' />
                                </svg>
                            </button>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                        <img
                            src={cinema.cinemaImageUrl}
                            alt={cinema.cinemaName}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                        <div className='flex flex-col gap-[15px]'>
                            <div>
                                <h3 className='text-[18px] text-[#dedede] font-medium mb-1'>{cinema.cinemaName}</h3>
                                <div className='flex items-start gap-1.5'>
                                    <MapPin className='w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0' />
                                    <p className='text-[12px] text-[#999] line-clamp-2'>{cinema.address}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <div className='flex items-center gap-1'>
                                    <Tv className='w-3.5 h-3.5 text-gray-500' />
                                    <span className='text-[9px] text-[#999] font-bold'>{cinema.noOfScreens} SCREENS</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap'>
                                {cinema.formats.map((tag: string, index: number) => (
                                    <p key={index} className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <button className='text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1 mt-2'>
                            More details
                            <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApprovedCinemas