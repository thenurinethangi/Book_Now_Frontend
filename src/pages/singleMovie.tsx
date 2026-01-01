import React, { useState, useEffect, useRef } from 'react'
import play1 from '../assets/images/play.png'
import pencil from '../assets/images/pencil (1).png'
import Navigation from '../components/user/Navigation';
import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';
import TrailerModal from '../components/user/movie/TrailerModel';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/user/movieService';
import Footer from '../components/user/Footer';
import Showtimes from '../components/user/movie/Showtimes';
import { Plus, TextAlignCenter } from 'lucide-react';
import SummeryModal from '../components/user/movie/SummeryModel';
import OTPModel from '../components/user/OTPModel';

function SingleMovie() {

    const { id } = useParams();

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [trailerVisible, setTrailerVisible] = useState(false);
    const [summeryVisible, setSummeryVisible] = useState(false);

    const [movie, setMovie] = useState<any>({});

    useEffect(() => {
        loadMovieDetails();
    }, []);

    async function loadMovieDetails() {
        if (!id) {
            //show not found page
            return;
        }

        try {
            const res = await getMovieDetails(id);
            console.log(res.data.data);
            setMovie(res.data.data);
        }
        catch (e) {
            //show not found page
            console.log(e);
        }
    }

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }

    function arrayToCommaString(arr: string[] = []) {
        return arr.join(", ");
    }

    function openMovieSummeryModel() {
        setSummeryVisible(true);
    }


    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative'>

            <div className='w-[31px] h-[31px] group fixed bottom-3 right-3 bg-red-400 p-2 flex items-center justify-center rounded-full z-200 cursor-pointer hover:w-[130px] hover:bg-[#FF4646] hover:shadow-xl transition-all duration-100 ease-out'>
                <img src={pencil} width={15} className='w-[15px] transition-all duration-200 ease-out group-hover:opacity-0 group-hover:w-0'></img>
                <div onClick={openMovieSummeryModel} className='flex items-center gap-x-1 transition-all duration-200 ease-out opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto group-hover:ml-1'>
                    <TextAlignCenter className='w-3 h-3' />
                    <p className='text-[11px] font-san whitespace-nowrap'>Movie Summary</p>
                </div>
            </div>

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} page={''} />

            {/* hero */}
            <div className='relative w-full h-[500px] overflow-x-hidden overflow-y-auto'>
                <div className='w-full h-full'>
                    <img src={movie.bannerImageUrl} className='w-full h-full object-cover'></img>
                </div>
                <div
                    className='w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/75 via-black/1 to-transparent flex justify-center items-center cursor-pointer group'
                    onClick={() => setTrailerVisible(true)}
                >
                    <img
                        src={play1}
                        width={'60px'}
                        className='transition-all duration-300 group-hover:scale-110 group-hover:opacity-80'
                    />
                </div>
            </div>

            <div className='px-8 sm:px-13 -translate-y-75 sm:-translate-y-30 flex flex-wrap sm:flex-nowrap gap-10'>
                <div className='mr-5'>
                    <div className="w-[200px] h-[300px] relative overflow-hidden">
                        <img src={movie.posterImageUrl} className="w-full h-full object-cover rounded-[1.5px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_100%)] transition-all duration-500"></div>
                    </div>
                    <div className='flex flex-col gap-2.5 mt-6'>
                        <button className='border-[1.5px] border-white/90 p-3 rounded-br-3xl'>Book Tickets</button>
                    </div>
                </div>

                <div className='w-[100%] sm:w-[60%] pt-2 sm:pt-[93px] flex flex-col items-start gap-4'>
                    <h1 className='text-[32px] font-medium'>{movie.title}</h1>
                    <div>
                        <p className='text-white/70 mb-[1px]'>DIRECTORS</p>
                        <p className='text-[15px] tracking-normal text-white/95'>{arrayToCommaString(movie.directors || [])}</p>
                    </div>
                    <div>
                        <p className='text-white/70 mb-[1px]'>CAST</p>
                        <p className='text-[15px] leading-relaxed tracking-normal text-white/95'>{arrayToCommaString(movie.cast || [])}</p>
                    </div>
                    <div>
                        <p className='text-white/70 mb-[1px]'>SYNOPSIS</p>
                        <p className='text-[15px] leading-relaxed tracking-normal text-white/95'>{movie.description}</p>
                    </div>
                </div>

                <div className='flex flex-col items-start gap-4 sm:-translate-y-1 sm:translate-x-3'>
                    <div>
                        <p className='text-white/80 mb-[1px]'>DUNTIME</p>
                        <p className='text-[15px]'>{movie.duration}</p>
                    </div>
                    <div>
                        <p className='text-white/80 mb-[1px]'>RELEASE DATE</p>
                        <p className='text-[15px]'>{formatDate(movie.releaseDate)}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {movie.genres?.map((genre: any, index: number) => (
                            <p key={index} className='text-[14px] px-1 py-px border border-white/70 rounded-xs'>{genre}</p>
                        ))}
                    </div>
                </div>

            </div>

            <Showtimes id={id} />

            {/* Footer */}
            <Footer />

            {/* Trailer Modal */}
            <TrailerModal
                trailerUrl={movie.trailerUrl || ''}
                isVisible={trailerVisible}
                onClose={() => setTrailerVisible(false)}
            />

            {/* Trailer Modal */}
            <SummeryModal
                movie={movie || null}
                isVisible={summeryVisible}
                onClose={() => setSummeryVisible(false)}
            />

            {/* sign in model */}
            {signInVisible ? <SignIn setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} setOtpVisible={setOtpVisible} setUserEmail={setUserEmail} /> : ''}

            {/* sign up model */}
            {signUpVisible ? <SignUp setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} setOtpVisible={setOtpVisible} setUserEmail={setUserEmail} /> : ''}

            {/* otp model */}
            {otpVisible ? <OTPModel setOtpVisible={setOtpVisible} userEmail={userEmail} setUserEmail={setUserEmail} setSignInVisible={setSignInVisible} /> : ''}

        </div>
    )
}

export default SingleMovie