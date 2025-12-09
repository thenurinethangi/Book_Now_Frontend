import React, { useState } from 'react';
import { MdSlideshow, MdHome, MdLocationOn, MdTv, MdSettings, MdCheckBox, MdLayers, MdSearch, MdRefresh, MdNotifications, MdHelp, MdCheck, MdClose } from "react-icons/md";
import { Eye, Trash, X, Calendar, Clock, Globe, Film, User, Users, Image, Video, Star, Plus } from "lucide-react";

// Sample request data
const movieRequests = [
    {
        id: 1,
        cinemaName: "Scope Cinema - Colombo",
        requestDate: "2025-12-01",
        title: "DUNE: PART THREE",
        releaseDate: "2026-03-15",
        duration: "165min",
        originalLanguage: "English",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        directors: ["Denis Villeneuve"],
        posterImageUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        trailerUrl: "https://youtube.com/watch?v=example",
        movieStatus: "Coming Soon"
    },
    {
        id: 2,
        cinemaName: "PVR Cinemas - Negombo",
        requestDate: "2025-12-03",
        title: "AVATAR: THE WAY OF FIRE",
        releaseDate: "2026-04-20",
        duration: "185min",
        originalLanguage: "English",
        genres: ["Sci-Fi", "Action", "Adventure"],
        directors: ["James Cameron"],
        posterImageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        trailerUrl: "https://youtube.com/watch?v=example2",
        movieStatus: "Coming Soon"
    },
    {
        id: 3,
        cinemaName: "Liberty Cinema - Kandy",
        requestDate: "2025-12-04",
        title: "THE BATMAN RETURNS",
        releaseDate: "2026-05-10",
        duration: "170min",
        originalLanguage: "English",
        genres: ["Action", "Crime", "Thriller"],
        directors: ["Matt Reeves"],
        posterImageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        trailerUrl: "https://youtube.com/watch?v=example3",
        movieStatus: "Coming Soon"
    }
];

function AdminMovieRequest() {
    const [activeTab, setActiveTab] = useState('request');
    const [requests, setRequests] = useState(movieRequests);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        releaseDate: '',
        duration: '',
        originalLanguage: '',
        genres: [],
        formats: [],
        directors: [],
        production: [],
        posterImageUrl: '',
        bannerImageUrl: '',
        trailerUrl: '',
        ageRating: '',
        imdbRating: '',
        rtRating: '',
        status: 'Coming Soon'
    });

    const handleReject = (id) => {
        if (window.confirm('Are you sure you want to reject this movie request?')) {
            setRequests(requests.filter(r => r.id !== id));
        }
    };

    const handleAddMovie = (request) => {
        setSelectedRequest(request);
        // Pre-fill form with cinema provided data
        setFormData({
            title: request.title,
            description: '',
            releaseDate: new Date(request.releaseDate).toISOString().split('T')[0],
            duration: request.duration,
            originalLanguage: request.originalLanguage,
            genres: request.genres,
            formats: [],
            directors: request.directors,
            production: [],
            posterImageUrl: request.posterImageUrl,
            bannerImageUrl: '',
            trailerUrl: request.trailerUrl,
            ageRating: '',
            imdbRating: '',
            rtRating: '',
            status: request.movieStatus
        });
        setShowAddModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayInput = (name, value) => {
        const items = value.split(',').map(item => item.trim()).filter(item => item);
        setFormData(prev => ({ ...prev, [name]: items }));
    };

    const handleSubmit = () => {
        console.log('Movie added:', formData);
        setRequests(requests.filter(r => r.id !== selectedRequest.id));
        setShowAddModal(false);
        alert('Movie added successfully!');
    };

    return (
        <div className='bg-[#121212] flex font-[Poppins] overflow-hidden min-h-screen'>
            {/* nav bar */}
            <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center sticky top-0" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    <a href='/'><MdHome className="w-5.5 h-5.5 text-gray-500" /></a>
                    <a href='/'><MdLocationOn className="w-5.5 h-5.5 text-gray-500" /></a>
                    <a href='/'><MdTv className="w-5.5 h-5.5 text-gray-500" /></a>
                    <a href='/'><MdSlideshow className="w-6 h-6 text-gray-500" /></a>
                    <a href='/profile'><MdSettings className="w-5.5 h-5.5 text-gray-500" /></a>
                    <a href='/tasks/today'><MdCheckBox className="w-5.5 h-5.5 text-gray-500" /></a>
                    {/* <a href='/promo'><MdDisc className="w-5.5 h-5.5 text-gray-500" /></a> */}
                    <a href='/tasks/status'><MdLayers className="w-5.5 h-5.5 text-gray-500" /></a>
                    <a href='/'><MdSearch className="w-5.5 h-5.5 text-gray-500" /></a>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <MdRefresh className="w-5.5 h-5.5 text-gray-500" />
                    <MdNotifications className="w-5.5 h-5.5 text-gray-500" />
                    <MdHelp className="w-5.5 h-5.5 text-gray-500" />
                </div>
            </nav>

            {/* content right side */}
            <div className='w-full min-h-screen text-white px-7 py-3 pt-7'>
                {/* title */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16px] font-medium z-0">
                                <span className='text-[18px] font-medium'>Home {`>`}</span>&nbsp;Movie
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center mt-5 border-b border-gray-700'>
                    <div 
                        className={`px-2.5 pb-2 text-[18px] cursor-pointer transition-all ${
                            activeTab === 'manage' 
                                ? 'border-b-2 border-red-900 opacity-95' 
                                : 'opacity-50 hover:opacity-75'
                        }`}
                        onClick={() => setActiveTab('manage')}
                    >
                        Manage
                    </div>
                    <div 
                        className={`px-2.5 pb-2 text-[18px] cursor-pointer transition-all ${
                            activeTab === 'request' 
                                ? 'border-b-2 border-red-900 opacity-95' 
                                : 'opacity-50 hover:opacity-75'
                        }`}
                        onClick={() => setActiveTab('request')}
                    >
                        Request
                    </div>
                </div>

                {/* requests container */}
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    {requests.map(request => (
                        <div key={request.id} className='rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-all flex flex-col'>
                            {/* Cinema Info Header */}
                            <div className='bg-[#151515] px-3 py-2 border-b border-[#2a2a2a]'>
                                <p className='text-[11px] text-[#888]'>Requested by</p>
                                <p className='text-[13px] text-white font-medium'>{request.cinemaName}</p>
                                <p className='text-[10px] text-[#666] mt-0.5'>{new Date(request.requestDate).toLocaleDateString()}</p>
                            </div>

                            {/* Movie Content */}
                            <div className='flex flex-col flex-1 p-3'>
                                {/* Poster */}
                                <div className='w-full h-[220px] rounded-md mb-3 overflow-hidden'>
                                    <img 
                                        src={request.posterImageUrl} 
                                        alt={request.title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                {/* Movie Details */}
                                <div className='flex-1'>
                                    <h3 className='text-[15px] text-white font-medium mb-2'>{request.title}</h3>
                                    
                                    <div className='space-y-1 mb-3'>
                                        <div className='flex items-center gap-2 text-[11px]'>
                                            <Calendar className='w-3 h-3 text-gray-500' />
                                            <span className='text-[#888]'>Release:</span>
                                            <span className='text-[#ccc]'>{new Date(request.releaseDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-[11px]'>
                                            <Clock className='w-3 h-3 text-gray-500' />
                                            <span className='text-[#888]'>Duration:</span>
                                            <span className='text-[#ccc]'>{request.duration}</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-[11px]'>
                                            <Globe className='w-3 h-3 text-gray-500' />
                                            <span className='text-[#888]'>Language:</span>
                                            <span className='text-[#ccc]'>{request.originalLanguage}</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-[11px]'>
                                            <User className='w-3 h-3 text-gray-500' />
                                            <span className='text-[#888]'>Director:</span>
                                            <span className='text-[#ccc]'>{request.directors.join(', ')}</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-1.5 mb-3'>
                                        {request.genres.map((genre, idx) => (
                                            <span key={idx} className='px-2 py-0.5 bg-[#2a2a2a] text-[9px] rounded text-[#aaa] font-medium'>
                                                {genre}
                                            </span>
                                        ))}
                                    </div>

                                    <span className='inline-block text-[10px] px-2 py-0.5 rounded font-medium bg-[#3a3a3a] text-[#bbb]'>
                                        {request.movieStatus}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex gap-2 p-3 border-t border-[#2a2a2a] bg-[#151515]'>
                                <button 
                                    onClick={() => handleAddMovie(request)}
                                    className='flex-1 px-3 py-2 bg-[#f5cc50] hover:bg-[#f5d670] text-black rounded text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5'
                                >
                                    <MdCheck className='w-4 h-4' />
                                    Add Movie
                                </button>
                                <button 
                                    onClick={() => handleReject(request.id)}
                                    className='flex-1 px-3 py-2 bg-[#2a2a2a] hover:bg-red-900/30 text-white hover:text-red-400 rounded text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5'
                                >
                                    <MdClose className='w-4 h-4' />
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Movie Modal */}
            {showAddModal && selectedRequest && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'>
                    <div className='bg-[#1a1a1a] rounded-lg w-full max-w-[900px] max-h-[90vh] overflow-y-auto border border-[#2a2a2a]'>
                        {/* Modal Header */}
                        <div className='sticky top-0 bg-[#1a1a1a] px-5 py-4 border-b border-[#2a2a2a] flex justify-between items-center z-10'>
                            <div>
                                <h3 className='text-[16px] font-medium text-white'>Add New Movie</h3>
                                <p className='text-[11px] text-[#888] mt-0.5'>Request from {selectedRequest.cinemaName}</p>
                            </div>
                            <button onClick={() => setShowAddModal(false)}>
                                <X className='w-5 h-5 text-gray-500 hover:text-gray-300' />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className='p-5'>
                            <div className='grid grid-cols-2 gap-5'>
                                {/* Left Column */}
                                <div className='space-y-4'>
                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Movie Title *</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='Enter movie title'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Description *</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50] resize-none'
                                            placeholder='Enter movie description'
                                        />
                                    </div>

                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>Release Date *</label>
                                            <input
                                                type="date"
                                                name="releaseDate"
                                                value={formData.releaseDate}
                                                onChange={handleInputChange}
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            />
                                        </div>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>Duration *</label>
                                            <input
                                                type="text"
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                                placeholder='e.g., 120min'
                                            />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>Language *</label>
                                            <input
                                                type="text"
                                                name="originalLanguage"
                                                value={formData.originalLanguage}
                                                onChange={handleInputChange}
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                                placeholder='e.g., English'
                                            />
                                        </div>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>Age Rating</label>
                                            <select
                                                name="ageRating"
                                                value={formData.ageRating}
                                                onChange={handleInputChange}
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            >
                                                <option value="">Select rating</option>
                                                <option value="G">G</option>
                                                <option value="PG">PG</option>
                                                <option value="PG-13">PG-13</option>
                                                <option value="R">R</option>
                                                <option value="NC-17">NC-17</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Genres * (comma separated)</label>
                                        <input
                                            type="text"
                                            value={formData.genres.join(', ')}
                                            onChange={(e) => handleArrayInput('genres', e.target.value)}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='e.g., Action, Sci-Fi, Adventure'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Formats (comma separated)</label>
                                        <input
                                            type="text"
                                            value={formData.formats.join(', ')}
                                            onChange={(e) => handleArrayInput('formats', e.target.value)}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='e.g., 2D, 3D, IMAX'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Directors * (comma separated)</label>
                                        <input
                                            type="text"
                                            value={formData.directors.join(', ')}
                                            onChange={(e) => handleArrayInput('directors', e.target.value)}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='e.g., Christopher Nolan'
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className='space-y-4'>
                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Production Companies (comma separated)</label>
                                        <input
                                            type="text"
                                            value={formData.production.join(', ')}
                                            onChange={(e) => handleArrayInput('production', e.target.value)}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='e.g., Warner Bros, Legendary'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Poster Image URL *</label>
                                        <input
                                            type="text"
                                            name="posterImageUrl"
                                            value={formData.posterImageUrl}
                                            onChange={handleInputChange}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='https://example.com/poster.jpg'
                                        />
                                        {formData.posterImageUrl && (
                                            <div className='mt-2 w-full h-[140px] rounded overflow-hidden bg-[#0f0f0f]'>
                                                <img src={formData.posterImageUrl} alt="Poster preview" className='w-full h-full object-contain' />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Banner Image URL *</label>
                                        <input
                                            type="text"
                                            name="bannerImageUrl"
                                            value={formData.bannerImageUrl}
                                            onChange={handleInputChange}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='https://example.com/banner.jpg'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Trailer URL</label>
                                        <input
                                            type="text"
                                            name="trailerUrl"
                                            value={formData.trailerUrl}
                                            onChange={handleInputChange}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                            placeholder='https://youtube.com/watch?v=...'
                                        />
                                    </div>

                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>IMDb Rating</label>
                                            <input
                                                type="number"
                                                name="imdbRating"
                                                value={formData.imdbRating}
                                                onChange={handleInputChange}
                                                step="0.1"
                                                min="0"
                                                max="10"
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                                placeholder='e.g., 8.5'
                                            />
                                        </div>
                                        <div>
                                            <label className='text-[12px] text-[#aaa] mb-1.5 block'>RT Rating (%)</label>
                                            <input
                                                type="number"
                                                name="rtRating"
                                                value={formData.rtRating}
                                                onChange={handleInputChange}
                                                min="0"
                                                max="100"
                                                className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                                placeholder='e.g., 95'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className='text-[12px] text-[#aaa] mb-1.5 block'>Status *</label>
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleInputChange}
                                            className='w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]'
                                        >
                                            <option value="Coming Soon">Coming Soon</option>
                                            <option value="Now Showing">Now Showing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex gap-3 mt-6 pt-5 border-t border-[#2a2a2a]'>
                                <button
                                    onClick={handleSubmit}
                                    className='flex-1 px-4 py-2.5 bg-[#f5cc50] text-black text-[13px] font-medium rounded hover:bg-[#f5d670] transition-colors'
                                >
                                    Add Movie to Platform
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className='px-6 py-2.5 bg-transparent border border-[#3a3a3a] text-gray-400 text-[13px] font-medium rounded hover:border-[#4a4a4a] transition-colors'
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminMovieRequest;