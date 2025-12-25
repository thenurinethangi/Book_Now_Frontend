import React, { useState } from 'react';
import { Play, Clock, Eye } from 'lucide-react';

function Trailers() {

    const [hoveredId, setHoveredId] = useState(null);

    const trailers = [
        {
            id: 1,
            title: "Dune: Part Two",
            duration: "2:45",
            views: "2.4M",
            imageUrl: "https://www.vitalthrills.com/wp-content/uploads/2025/05/zootop1.jpg",
            featured: true
        },
        {
            id: 2,
            title: "Avatar: The Way of Water",
            duration: "3:12",
            views: "5.1M",
            imageUrl: "https://cdn.britannica.com/66/136966-050-66B08BD4/actor-sam-worthington-as-jake-sully-and-zoe-saldana-as-neytiri-in-film-avator-2009-directedb-by-james-cameron.jpg",
            featured: false
        },
        {
            id: 3,
            title: "Wicked",
            duration: "2:28",
            views: "1.8M",
            imageUrl: "https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blte2008043be1b1e4a/674a0010127cfc83bf908211/%E2%80%9CWicked%E2%80%9D_stars_Cynthia_Erivo_and_Ariana_Grande_Universal_Pictures.png",
            featured: false
        },
        {
            id: 4,
            title: "Oppenheimer",
            duration: "2:55",
            views: "3.2M",
            imageUrl: "https://www.vitalthrills.com/wp-content/uploads/2025/05/zootop1.jpg",
            featured: false
        },
        {
            id: 5,
            title: "The Batman",
            duration: "2:38",
            views: "4.7M",
            imageUrl: "https://cdn.britannica.com/66/136966-050-66B08BD4/actor-sam-worthington-as-jake-sully-and-zoe-saldana-as-neytiri-in-film-avator-2009-directedb-by-james-cameron.jpg",
            featured: false
        }
    ];

    return (
        <div className='font-[Poppins] px-15 py-12 mb-25'>
            {/* Section Header with modern design */}
            <div className='flex items-center justify-between mb-8'>
                <div className='relative'>
                    <h2 className='text-[24px] font-medium text-[#dedede] mb-1 pb-2 border-b-2 border-b-red-500'>Popular Trailers</h2>
                </div>
                {/* <button className='text-red-500 text-[13px] font-[Poppins] font-medium hover:text-[#ff4e58] transition-colors flex items-center gap-1'>
                    View All
                    <svg className='w-[15px] h-[15px]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button> */}
            </div>

            {/* Compact Dynamic Grid Layout */}
            <div className='grid grid-cols-12 gap-3 auto-rows-[140px]'>

                {/* Featured Large Card */}
                <div
                    className='col-span-7 row-span-2 relative overflow-hidden rounded-lg cursor-pointer group'
                    onMouseEnter={() => setHoveredId(trailers[0].id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Background Image with Parallax Effect */}
                    <img
                        src={trailers[0].imageUrl}
                        className='w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110'
                        alt={trailers[0].title}
                    />

                    {/* Animated Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-700'></div>
                    {/* <div className='absolute inset-0 bg-gradient-to-r from-[#ff2e38]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700'></div> */}

                    {/* Content */}
                    <div className='absolute inset-0 flex flex-col justify-between p-6'>
                        {/* Top Badge */}
                        <div className='flex justify-between items-start'>
                            <span className='px-3 py-1 bg-[#ff2e38] text-white text-[10px] font-semibold rounded-full uppercase tracking-wide'>
                                Featured
                            </span>
                            <div className='flex items-center gap-3 text-white/80 text-[12px]'>
                                <div className='flex items-center gap-1'>
                                    <Clock className='w-3.5 h-3.5' />
                                    <span>{trailers[0].duration}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Eye className='w-3.5 h-3.5' />
                                    <span>{trailers[0].views}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div>
                            <h3 className='text-[20px] font-semibold text-white mb-3 transform group-hover:translate-x-2 transition-transform duration-500'>
                                {trailers[0].title}
                            </h3>
                            <button className='flex items-center gap-2.5 px-5 py-2.5 bg-[#ff2e38] hover:bg-[#ff4e58] text-white rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105'>
                                <Play className='w-4 h-4 fill-white' />
                                <span className='text-[13px]'>Watch Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Cards */}
                {trailers.slice(1, 3).map((trailer, idx) => (
                    <div
                        key={trailer.id}
                        className='col-span-5 row-span-1 relative overflow-hidden rounded-lg cursor-pointer group'
                        onMouseEnter={() => setHoveredId(trailer.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img
                            src={trailer.imageUrl}
                            className='w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110'
                            alt={trailer.title}
                        />

                        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500'></div>

                        {/* Play Button Circle */}
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className={`w-12 h-12 rounded-full bg-[#ff2e38]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${hoveredId === trailer.id ? 'scale-110 bg-[#ff2e38]' : 'scale-100'}`}>
                                <Play className='w-5 h-5 text-white fill-white ml-0.5' />
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0 p-3'>
                            <h3 className='text-white text-[13px] font-semibold mb-1.5 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500'>
                                {trailer.title}
                            </h3>
                            <div className='flex items-center gap-2.5 text-white/70 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                <div className='flex items-center gap-1'>
                                    <Clock className='w-3 h-3' />
                                    <span>{trailer.duration}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Eye className='w-3 h-3' />
                                    <span>{trailer.views}</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className='absolute inset-0 border border-transparent group-hover:border-[#ff2e38]/30 rounded-lg transition-all duration-500'></div> */}
                    </div>
                ))}

                {/* Bottom Row Cards */}
                {trailers.slice(3, 6).map((trailer) => (
                    <div
                        key={trailer.id}
                        className='col-span-4 row-span-1 relative overflow-hidden rounded-lg cursor-pointer group'
                        onMouseEnter={() => setHoveredId(trailer.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img
                            src={trailer.imageUrl}
                            className='w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110'
                            alt={trailer.title}
                        />

                        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500'></div>

                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className={`w-11 h-11 rounded-full bg-[#ff2e38]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${hoveredId === trailer.id ? 'scale-110 bg-[#ff2e38]' : 'scale-100'}`}>
                                <Play className='w-4.5 h-4.5 text-white fill-white ml-0.5' />
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0 p-3'>
                            <h3 className='text-white text-[12px] font-semibold mb-1 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500'>
                                {trailer.title}
                            </h3>
                            <div className='flex items-center gap-2 text-white/70 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                <div className='flex items-center gap-1'>
                                    <Clock className='w-2.5 h-2.5' />
                                    <span>{trailer.duration}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Eye className='w-2.5 h-2.5' />
                                    <span>{trailer.views}</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className='absolute inset-0 border border-transparent group-hover:border-[#ff2e38]/30 rounded-lg transition-all duration-500'></div> */}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Trailers;