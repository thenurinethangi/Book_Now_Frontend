import React from 'react'
import direction1 from '../../../assets/images/strategy.png';
import direction2 from '../../../assets/images/up-and-down-arrows.png';

function SingleCinemaHero(props: any) {

    return (
        <div>
            <div className='relative w-full h-[600px] overflow-x-hidden overflow-y-auto'>
                <div className={`absolute w-full h-full`}>
                    {/* Poster Image */}
                    <img src={props.cinema?.cinemaImageUrl} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`} style={{ objectPosition: 'center' }} alt={''} />

                    {/* Overlay Content */}
                    <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
                        <div className='px-20 py-20'>
                            <h1 className='text-[32px] tracking-[1px]'>{props.cinema?.cinemaName.toUpperCase()}</h1>
                            <div className='mt-1'>
                                <p className='text-[#999] text-[13px] font-light'>{props.cinema?.address}</p>
                            </div>
                            <div className='flex items-center gap-1.5 mt-2'>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="5" cy="5" r="3" stroke="#FF2D2D" stroke-width="2" />
                                    <path
                                        d="M5 8v4c0 2 2 3 4 3h6c2 0 3 1 3 3v1"
                                        stroke="#FF2D2D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 19l3 3-3 3"
                                        stroke="#FF2D2D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        transform="translate(0 -6)"
                                    />
                                </svg>

                                <p className='font-medium text-[#999] text-[14px]'>Get directions</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Bottom Fade */}
                    <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent'></div>
                </div>
            </div>
        </div>)
}

export default SingleCinemaHero