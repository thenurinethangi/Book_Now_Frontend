import React, { useState, useEffect } from 'react';
import { Bookmark, Tags, X } from 'lucide-react';
import Navigation from '../components/user/Navigation';
import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';
import OTPModel from '../components/user/OTPModel';
import { cancelBooking, getMyBookings } from '../services/user/bookingService';
import { toast } from 'react-toastify';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { getAllWatchlistMovies } from '../services/user/watchlistService';

function MyWatchlist() {

    const navigate = useNavigate();

    const { user, loading } = useAuth();

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [watchlistMovies, setWatchlistMovies] = useState([]);
    const [cancelModalVisible, setCancelModalVisible] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        loadWatchlistMovies();
    }, []);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/');
        }
    }, [loading, user, navigate]);

    async function loadWatchlistMovies() {
        try {
            const res = await getAllWatchlistMovies();
            console.log(res.data.data);
            setWatchlistMovies(res.data.data)
        }
        catch (e) {
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

    function handleNavigateToMovieDetailsPage(e: React.MouseEvent<HTMLButtonElement>) {
        const movieId = e.currentTarget.dataset.id;

        if (movieId) {
            navigate('/single/movie/' + movieId);
        }
    }

    async function handleAddOrRemoveFromwatchlist(e: React.MouseEvent<HTMLElement>) {

        const id = e.currentTarget.dataset.id;

        // if (id && wachlistMovies.includes(id)) {
        //     try {
        //         const res = await removeMovieFromWatchlist({ movieId: id });
        //         console.log(res.data);
        //         loadAllNowShowingMovies();
        //     }
        //     catch (e) {
        //         console.log(e);
        //     }
        // }
        // else if (id && !wachlistMovies.includes(id)) {
        //     try {
        //         const res = await addMovieToWatchlist({ movieId: id });
        //         console.log(res.data);
        //         loadAllNowShowingMovies();
        //     }
        //     catch (e) {
        //         console.log(e);
        //     }
        // }
    }

    return (
        <div className='bg-[#121212] font-[Poppins] text-white min-h-screen overflow-x-hidden relative'>

            {/* Navigation */}
            <Navigation setSignInVisible={setSignInVisible} page='' />

            {/* Header */}
            <div className='px-20 pt-37 pb-6'>
                <h1 className='text-[16.5px] tracking-wide'>My Watchlist</h1>
            </div>

            {/* Bookings List */}
            <div className='px-20 pb-20'>
                {watchlistMovies.length > 0 ? (
                    <div className='flex flex-col gap-5'>
                        {watchlistMovies.map((movie: any) => {
                            return (
                                <div key={movie._id} className='mb-4'>
                                    <div className='relative w-[203.198px] h-[300.885px]'>
                                        <Bookmark onClick={handleAddOrRemoveFromwatchlist} data-id={movie._id} className={`text-white/90 w-[22px] h-[25px] absolute right-1 top-1 cursor-pointer z-[100] fill-red-600 stroke-none`} />
                                        <img src={movie.posterImageUrl} className='rounded-sm object-cover w-full h-full object-top'></img>
                                        <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hover:from-black/50 hover:via-black/20 hover:to-transparent transition-all duration-700 ease-in-out"></div>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <h1 className='text-[16px] font-medium text-[#dedede] mt-3.5'>{movie.title}</h1>
                                        <div className='flex items-center gap-1.5 mt-1'>
                                            <p className='text-[12px] text-[#999] font-medium'>{movie.duration} | </p>
                                            <p className='text-[12px] text-[#999] font-medium'>{formatDate(movie.releaseDate)}</p>
                                        </div>
                                        <div className='flex items-center gap-1 mt-1.5'>
                                            <Tags onClick={handleNavigateToMovieDetailsPage} data-id={movie._id} className="text-white/90 w-[22px] h-[22px]" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className='text-center py-32'>
                        <p className='text-[16px] text-white/40'>No movies yet</p>
                    </div>
                )}
            </div>

            {/* sign in model */}
            {signInVisible ? <SignIn setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

            {/* sign up model */}
            {signUpVisible ? <SignUp setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

            {/* otp model */}
            {otpVisible ? <OTPModel setOtpVisible={setOtpVisible} userEmail={userEmail} setUserEmail={setUserEmail} setSignInVisible={setSignInVisible} /> : ''}
        </div>
    );
}

export default MyWatchlist;