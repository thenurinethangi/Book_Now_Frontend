import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllHeroPosters } from '../../../services/user/heroService';

interface Slide {
    movieId: string
    image: string;
    trailer: string;
    title: string;
    description: string;
    status: string
}

function Hero() {

    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(() => {
        loadAllHeroPosters();
    }, []);

    async function loadAllHeroPosters() {
        try {
            const res = await getAllHeroPosters();
            setSlides(res.data.data);
        }
        catch (e) {
            console.error("Error loading hero posters:", e);
        }
    }

    const extendedSlides = slides.length > 0 ? [...slides, slides[0]] : [];

    useEffect(() => {
        if (slides.length === 0) return;

        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 8000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    useEffect(() => {
        if (slides.length === 0) return;

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

    if (slides.length === 0) {
        return <div className='w-full h-[600px] bg-black'></div>;
    }

    function handleNavigateToMovieDetailsPage(e: React.MouseEvent<HTMLButtonElement>) {
        const movieId = e.currentTarget.dataset.id;

        if (movieId) {
            navigate('/single/movie/' + movieId);
        }
    }

    return (
        <div>
            <div className='relative w-full h-[600px] overflow-x-hidden overflow-y-auto'>
                {extendedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                        style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                    >
                        {/* Poster Image ONLY */}
                        <img
                            src={slide.image}
                            className='absolute top-0 left-0 w-full h-full object-cover'
                            style={{ objectPosition: 'center' }}
                            alt={slide.title}
                        />

                        {/* Overlay Content */}
                        <div className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
                            <div className='px-20 py-20'>
                                <h1 className='text-[27px] font-medium tracking-[1px]'>MOVIES</h1>
                                <div className='flex flex-col items-center justify-center gap-[3.5px] mt-2'>
                                    {/* <hr className='w-22 border-t border-[#F44336]' />
                                <hr className='w-22 border-t border-[#F44336]' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className='flex gap-2 z-20 pl-18 pt-[12px] pb-6'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-7 h-[2.5px] rounded-sm transition-all duration-300 ${(currentSlide % slides.length) === index
                                ? 'bg-[#ff2e38] w-12'
                                : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;
