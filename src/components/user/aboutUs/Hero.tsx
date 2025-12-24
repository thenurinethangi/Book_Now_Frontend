import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllHeroPosters } from '../../../services/user/heroService';
import banner1 from '../../../assets/images/about-us-banner.jpg';
import banner2 from '../../../assets/images/Birmingham3-scaled-1.webp';

interface Slide {
    movieId: string
    image: string;
    trailer: string;
    title: string;
    description: string;
    status: string
}

function Hero() {

    return (
        <div>
            <div className='relative w-full h-[600px] overflow-x-hidden overflow-y-auto'>
                <div className={`absolute w-full h-full`}>
                    {/* Poster Image */}
                    <img src={banner2} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`} style={{ objectPosition: 'center' }} alt={''} />

                    {/* Overlay Content */}
                    <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
                        <div className='px-20 py-20'>
                            <h1 className='text-[27px] font-medium tracking-[1px]'>ABOUT US</h1>
                            <div className='flex flex-col items-center justify-center gap-[3.5px] mt-2'>
                                <hr className='w-23 border-t border-[#F44336]' />
                                <hr className='w-23 border-t border-[#F44336]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero