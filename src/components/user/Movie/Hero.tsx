import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllHeroPosters } from '../../../services/user/heroService';

import moviebanner1 from '../../../assets/images/movies-banner-1.jpg';
import moviebanner2 from '../../../assets/images/movies-banner-2.jpg';
import moviebanner3 from '../../../assets/images/movies-banner-3.jpeg';
import moviebanner4 from '../../../assets/images/movies-banner-4.webp';
import moviebanner5 from '../../../assets/images/movies-banner-5.jpg';
import moviebanner6 from '../../../assets/images/movies-banner-6.png';
import moviebanner7 from '../../../assets/images/movies-banner-7.jpg';
import moviebanner8 from '../../../assets/images/movies-banner-8.jpeg';
import moviebanner9 from '../../../assets/images/movies-banner-9.jpg';
import moviebanner10 from '../../../assets/images/movies-banner-10.jpg';
import moviebanner11 from '../../../assets/images/movies-banner-11.jpg';
import moviebanner12 from '../../../assets/images/movies-banner-12.jpg';
import moviebanner13 from '../../../assets/images/Avatar.jpeg';
import moviebanner14 from '../../../assets/images/avatar-fire-and-ash.jpg';
import moviebanner15 from '../../../assets/images/avatar-fire-and-ash-3840x2160-24703.jpg';
import moviebanner16 from '../../../assets/images/avatar-fire-and-ash-3840x2160-23494.jpg';

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
                    <img src={moviebanner2} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`} style={{ objectPosition: 'center' }} alt={''} />

                    {/* Overlay Content */}
                    <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
                        <div className='px-20 py-20'>
                            <h1 className='text-[27px] font-medium tracking-[1px]'>MOVIES</h1>
                            <div className='flex flex-col items-center justify-center gap-[3.5px] mt-2'>
                                <hr className='w-22 border-t border-[#F44336]' />
                                <hr className='w-22 border-t border-[#F44336]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero