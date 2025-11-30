import React, { useState, useEffect, useRef } from 'react';

import movie1 from '../../../assets/images/movie-1.jpg';
import movie2 from '../../../assets/images/movie-3.jpg';
import movie3 from '../../../assets/images/movie-2.jpg';
import movie4 from '../../../assets/images/movie-4.png';
import movie6 from '../../../assets/images/movie-8.jpg';

import trailer1 from '../../../assets/videos/AvatarFireAsh-Trailer.mp4';
import trailer2 from '../../../assets/videos/WickedForGood-Trailer.mp4';
import trailer3 from '../../../assets/videos/ZOOTOPIA-2-Trailer.mp4';
import trailer4 from '../../../assets/videos/Conjuring4-Trailer.mp4';
import trailer5 from '../../../assets/videos/PREDATOR-BADLANDS-Trailer.mp4';

interface Slide {
    image: string;
    trailer: string;
    title: string;
    description: string;
}

function Hero() {

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const slides: Slide[] = [
        {
            image: movie1,
            trailer: trailer1,
            title: "Avatar: Fire and Ash",
            description: "Return to Pandora where Jake and Neytiri face their greatest test yet as new forces rise from the flames."
        },
        {
            image: movie2,
            trailer: trailer2,
            title: "Wicked: For Good",
            description: "The magic of Oz returns! Experience the spellbinding story of friendship, courage and destiny."
        },
        {
            image: movie3,
            trailer: trailer4,
            title: "The Conjuring: Last Rites",
            description: "The Conjuring: Last Rites delivers another thrilling chapter of the iconic Conjuring cinematic universe, based on real events."
        },
        {
            image: movie4,
            trailer: trailer3,
            title: "Zootopia 2",
            description: "Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers."
        },
        {
            image: movie6,
            trailer: trailer5,
            title: "Predator: Badlands",
            description: "Predator: Badlands, starring Elle Fanning and Dimitrius Schuster-Koloamatangi, is set in the future on a remote planet where a young Predator (Schuster-Koloamatangi), exiled from his clan, forms an unlikely alliance."
        }
    ];

    const extendedSlides = [...slides, slides[0]];


    useEffect(() => {
        const slideInterval = setInterval(() => {
            setShowTrailer(false);
            setCurrentSlide((prev) => prev + 1);
        }, 16000);

        return () => clearInterval(slideInterval);
    }, []);


    useEffect(() => {
        if (currentSlide === slides.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(0);
            }, 700);

            setTimeout(() => {
                setIsTransitioning(true);
            }, 750);
        }
    }, [currentSlide, slides.length]);


    useEffect(() => {
        setShowTrailer(false);

        const trailerTimeout = setTimeout(() => {
            setShowTrailer(true);
            const actualIndex = currentSlide % slides.length;
            if (videoRefs.current[actualIndex]) {
                const video = videoRefs.current[actualIndex];
                if (video) {
                    video.currentTime = 0;
                    video.play().catch(err => console.log("Video play error:", err));
                }
            }
        }, 3000);

        return () => {
            clearTimeout(trailerTimeout);
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        };
    }, [currentSlide, slides.length]);


    return (
        <div>
            <div className='relative w-full h-[600px] overflow-x-hidden overflow-y-auto'>
                {/* single slide */}
                {extendedSlides.map((slide, index) => (
                    <div key={index} className={`absolute w-full h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`} style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
                        {/* Poster Image */}
                        <img src={slide.image} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${showTrailer && index === currentSlide ? 'opacity-0' : 'opacity-100'}`} style={{ objectPosition: 'center' }} alt={slide.title} />

                        {/* Trailer Video */}
                        <video ref={(el) => {
                            const actualIndex = index % slides.length;
                            if (el && !videoRefs.current[actualIndex]) {
                                videoRefs.current[actualIndex] = el;
                            }
                        }} muted loop playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${showTrailer && index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                            <source src={slide.trailer} type="video/mp4" />
                        </video>

                        {/* Overlay Content */}
                        <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
                            <div className='px-20 py-20'>
                                <p className='bg-[#02a8b3] text-black mb-1.5 rounded-xs text-[10px] font-semibold p-1 inline'>NOW SHOWING</p>
                                <h1 className='text-[32px] font-medium'>{slide.title}</h1>
                                <p className='text-[#999] font-normal mt-2.5 text-[16px] leading-normal w-[80%]'>{slide.description}</p>
                                <button className='text-[#ff2e38] font-medium text-[14px] mt-[15px] hover:text-[#ff4e58] transition-colors'>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slide Indicators
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setShowTrailer(false);
                                setCurrentSlide(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${(currentSlide % slides.length) === index ? 'bg-[#ff2e38] w-8' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div> */}
            </div>

            {/* Slide Indicators */}
            <div className='flex gap-2 z-20 pl-18 pt-[12px] pb-6'>
                {slides.map((_, index) => (
                    <button key={index} onClick={() => { setShowTrailer(false); setCurrentSlide(index); }} className={`w-7 h-[2.5px] rounded-sm transition-all duration-300 ${(currentSlide % slides.length) === index ? 'bg-[#ff2e38] w-12' : 'bg-white/50'}`} />
                ))}
            </div>
        </div>
    )
}

export default Hero