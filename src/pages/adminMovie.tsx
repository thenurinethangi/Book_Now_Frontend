import React, { useEffect, useState } from 'react';
import { MdAlarm, MdSlideshow, MdHome, MdLocationOn, MdTv, MdSettings, MdCheckBox, MdLayers, MdSearch, MdRefresh, MdNotifications, MdHelp } from "react-icons/md";
import { Eye, Trash, X, Calendar, Clock, Users, Monitor, Star, Search } from "lucide-react";
import SidebarNavigation from '../components/admin/SidebarNavigation';
import { getAllManagedMovies } from '../services/admin/movieService';

// Sample movie data
const moviesData = [
    {
        id: 1,
        title: "UNCHARTED",
        duration: "120min",
        releaseDate: "11 November 2025",
        status: "Now Showing",
        genre: ["Action", "Adventure"],
        totalBookings: 1247,
        screenShowings: [
            { location: "Cinema Hall 01", showings: 5 },
            { location: "Cinema Hall 02", showings: 4 },
            { location: "Cinema Hall 03", showings: 3 }
        ],
        rating: 4.5,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpxtyGMjqPM76c1tHGSW7-qrNAZiPAzEdzQ&s"
    },
    {
        id: 2,
        title: "THE BATMAN",
        duration: "176min",
        releaseDate: "15 December 2025",
        status: "Coming Soon",
        genre: ["Action", "Crime"],
        totalBookings: 0,
        screenShowings: [],
        rating: 0,
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
    },
    {
        id: 3,
        title: "SPIDER-MAN: NO WAY HOME",
        duration: "148min",
        releaseDate: "20 November 2025",
        status: "Now Showing",
        genre: ["Action", "Sci-Fi"],
        totalBookings: 2156,
        screenShowings: [
            { location: "Cinema Hall 01", showings: 6 },
            { location: "Cinema Hall 02", showings: 5 },
            { location: "Cinema Hall 03", showings: 4 },
            { location: "Cinema Hall 04", showings: 3 }
        ],
        rating: 4.8,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
    },
    {
        id: 4,
        title: "DUNE: PART TWO",
        duration: "166min",
        releaseDate: "05 December 2025",
        status: "Now Showing",
        genre: ["Sci-Fi", "Adventure"],
        totalBookings: 1893,
        screenShowings: [
            { location: "Cinema Hall 01", showings: 4 },
            { location: "Cinema Hall 02", showings: 5 },
            { location: "Cinema Hall 03", showings: 3 }
        ],
        rating: 4.7,
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop"
    },
    {
        id: 5,
        title: "JOKER: FOLIE À DEUX",
        duration: "138min",
        releaseDate: "25 December 2025",
        status: "Coming Soon",
        genre: ["Drama", "Thriller"],
        totalBookings: 0,
        screenShowings: [],
        rating: 0,
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
    }
];

function AdminMovie() {

    const [activeTab, setActiveTab] = useState('manage');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        loadAllManagedMovies();
    }, []);

    async function loadAllManagedMovies() {
        try {
            const res = await getAllManagedMovies();
            console.log(res.data.data);
            setMovies(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            setMovies(movies.filter(m => m.id !== id));
        }
    };

    const handleEdit = (movie) => {
        setSelectedMovie(movie);
        setShowEditModal(true);
    };

    const handleStatusChange = (id, newStatus) => {
        setMovies(movies.map(m =>
            m.id === id ? { ...m, status: newStatus } : m
        ));
        setShowEditModal(false);
    };

    const getTotalShowings = (screenShowings) => {
        return screenShowings.reduce((sum, screen) => sum + screen.showings, 0);
    };

    function formatReadableDate(dateString: string) {
        const date = new Date(dateString);

        return date.toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }


    return (
        <div className='bg-[#121212] flex font-[Poppins] overflow-hidden min-h-screen'>
            {/* nav bar */}
            <SidebarNavigation page={'movie'} />

            {/* content right side */}
            <div className='w-full min-h-screen text-white px-7 py-3 pt-7 ml-[65px]'>
                {/* title */}
                <div className='flex justify-between items-center mb-[17px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Movie
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search cinema..."
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6 mt-5'>
                    <button
                        onClick={() => setActiveTab('manage')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'manage' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => setActiveTab('request')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'request' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Request
                    </button>
                </div>

                {/* movies container */}
                <div className='space-y-4 mt-6'>
                    {movies.map((movie: any) => (
                        <div key={movie.movie._id} className='rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-all'>
                            <div className='flex gap-4 p-4'>
                                {/* Left: Poster */}
                                <div className='flex-shrink-0'>
                                    <img
                                        src={movie.movie.posterImageUrl}
                                        alt={movie.movie.title}
                                        className='w-[170px] h-full object-cover rounded-sm'
                                    />
                                </div>

                                {/* Middle: Movie Details */}
                                <div className='flex-1 flex flex-col justify-between'>
                                    <div>
                                        <div className='flex items-start justify-between mb-2'>
                                            <div>
                                                <h3 className='text-[16px] text-white font-medium mb-1'>{movie.movie.title}</h3>
                                                <div className='flex items-center gap-2 mb-3'>
                                                    {movie.movie.genres.map((g: string, i: number) => (
                                                        <span key={i} className='px-2 py-0.5 bg-[#2a2a2a] text-[10px] rounded text-[#aaa] font-medium'>
                                                            {g}
                                                        </span>
                                                    ))}
                                                    {/* {movie.movie.rating > 0 && (
                                                        <div className='flex items-center gap-1 ml-1'>
                                                            <Star className='w-3 h-3 text-yellow-500 fill-yellow-500' />
                                                            <span className='text-[11px] text-[#aaa]'>{movie.movie.rating}</span>
                                                        </div>
                                                    )} */}
                                                </div>
                                            </div>
                                            <span className={`text-[11px] px-2.5 py-1 rounded font-medium ${movie.movie.status === 'Now Showing'
                                                ? 'bg-[#f5cc50] text-black'
                                                : 'bg-[#3a3a3a] text-[#bbb]'
                                                }`}>
                                                {movie.movie.status}
                                            </span>
                                        </div>

                                        <div className='grid grid-cols-1 gap-x-6 gap-y-1.5 text-[12px]'>
                                            <div className='flex items-center gap-2'>
                                                <Clock className='w-3.5 h-3.5 text-gray-500' />
                                                <span className='text-[#888]'>Duration:</span>
                                                <span className='text-[#ccc]'>{movie.movie.duration}</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <Calendar className='w-3.5 h-3.5 text-gray-500' />
                                                <span className='text-[#888]'>Release:</span>
                                                <span className='text-[#ccc]'>{formatReadableDate(movie.movie.releaseDate)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex gap-2 mt-3'>
                                        <button
                                            onClick={() => handleEdit(movie.movie)}
                                            className='px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333] rounded text-[11px] text-[#ddd] transition-colors flex items-center gap-1.5'
                                        >
                                            <svg className='w-3 h-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit Status
                                        </button>
                                        <button className='px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333] rounded text-[11px] text-[#ddd] transition-colors flex items-center gap-1.5'>
                                            <Eye className='w-3 h-3' />
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => handleDelete(movie.movie._id)}
                                            className='px-3 py-1.5 bg-[#2a2a2a] hover:bg-red-900/30 rounded text-[11px] text-[#ddd] hover:text-red-400 transition-colors flex items-center gap-1.5'
                                        >
                                            <Trash className='w-3 h-3' />
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                {/* Right: Stats Section */}
                                <div className='w-[280px] flex-shrink-0 bg-[#151515] rounded-lg p-3 border border-[#252525]'>
                                    {movie.movie.status === 'Now Showing' ? (
                                        <div className='h-full flex flex-col'>
                                            <h4 className='text-[12px] text-[#888] font-medium mb-3'>Performance Stats</h4>

                                            {/* Total Bookings */}
                                            <div className='mb-4'>
                                                <div className='flex items-center gap-2 mb-1'>
                                                    <Users className='w-4 h-4 text-red-700' />
                                                    <span className='text-[11px] text-[#888]'>Total Bookings</span>
                                                </div>
                                                <div className='text-[20px] font-semibold text-white'>
                                                    {movie.bookings}
                                                </div>
                                                <div className='text-[10px] text-[#666] mt-0.5'>
                                                    {movie.bookings > 2000 ? 'Excellent performance' :
                                                        movie.bookings > 1500 ? 'Good performance' :
                                                            'Average performance'}
                                                </div>
                                            </div>

                                            {/* Screen Showings */}
                                            <div className='flex-1'>
                                                <div className='flex items-center justify-between mb-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <Monitor className='w-4 h-4 text-red-700' />
                                                        <span className='text-[11px] text-[#888]'>Cinema Showings</span>
                                                    </div>
                                                    <span className='text-[12px] font-semibold text-white'>
                                                        {movie.cinemas.length} cinema
                                                    </span>
                                                </div>
                                                <div className='space-y-1.5 bg-[#0f0f0f] rounded p-2 max-h-[80px] overflow-y-auto'>
                                                    {movie.cinemas.map((cinema: any, idx: number) => (
                                                        <div key={idx} className='flex items-center justify-between text-[11px]'>
                                                            <span className='text-[#999]'>{cinema.cinemaId.cinemaName}</span>
                                                            <span className='text-[#ccc] font-medium text-[10px]'>{cinema.cinemaId.address}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='h-full flex items-center justify-center'>
                                            <div className='text-center'>
                                                <Calendar className='w-8 h-8 text-gray-600 mx-auto mb-2' />
                                                <p className='text-[12px] text-[#666]'>No performance data</p>
                                                <p className='text-[11px] text-[#555] mt-1'>Movie not released yet</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && selectedMovie && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
                    <div className='bg-[#1a1a1a] rounded-lg p-5 w-[420px] border border-[#2a2a2a]'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-[16px] font-medium text-white'>Update Movie Status</h3>
                            <button onClick={() => setShowEditModal(false)}>
                                <X className='w-5 h-5 text-gray-500 hover:text-gray-300' />
                            </button>
                        </div>

                        <div className='mb-5 p-3 bg-[#151515] rounded border border-[#252525]'>
                            <p className='text-[13px] text-[#888] mb-1'>Movie Title</p>
                            <p className='text-[14px] text-white font-medium mb-2'>{selectedMovie.title}</p>
                            <p className='text-[12px] text-[#888]'>Current Status: <span className='text-[#ccc]'>{selectedMovie.status}</span></p>
                        </div>

                        <div className='space-y-2.5'>
                            <button
                                onClick={() => handleStatusChange(selectedMovie._id, 'Now Showing')}
                                className='w-full px-4 py-2.5 bg-[#f5cc50] text-black text-[13px] font-medium rounded hover:bg-[#f5d670] transition-colors'
                            >
                                ✓ Set as Now Showing
                            </button>
                            <button
                                onClick={() => handleStatusChange(selectedMovie._id, 'Coming Soon')}
                                className='w-full px-4 py-2.5 bg-[#2a2a2a] text-white text-[13px] font-medium rounded hover:bg-[#333] transition-colors'
                            >
                                ⏱ Set as Coming Soon
                            </button>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className='w-full px-4 py-2.5 bg-transparent border border-[#3a3a3a] text-gray-400 text-[13px] font-medium rounded hover:border-[#4a4a4a] transition-colors'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminMovie;