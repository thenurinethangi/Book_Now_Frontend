import { useEffect, useState } from 'react';
import { MdCheck, MdClose } from "react-icons/md";
import { X, Calendar, Clock, Globe, User, Paintbrush, TriangleAlert, Loader, Image } from "lucide-react";
import { toast } from 'react-toastify';
import { addNewMovie, deleteMovieRequest, getAllRequestMovie, rejectMovieRequest } from '../../services/admin/movieService';
import blackBg from '../../assets/images/black-bg.jpg'
import LoadingSpinner from '../user/LoadingSpinner';

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm, title, description } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[16px] mb-1.5'>{title}</p>
            <p className='text-[13px] text-gray-500'>{description}</p>
            <div className="flex gap-3 mt-3">
                <button onClick={closeToast} className='text-[13px] font-medium px-2 py-2 border border-gray-800 rounded-md'>Cancel</button>
                <button onClick={() => { onConfirm(); closeToast(); }} className='text-[13px] font-medium px-2 h-[32px] bg-red-700 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export function askConfirm(onConfirm: () => void, title: string, description: string) {
    toast((toastProps: any) => (
        <ConfirmToast {...toastProps} onConfirm={onConfirm} title={title} description={description} />
    ));
}


function RequestedMovies() {

    const [requests, setRequests] = useState([]);
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
        cast: [],
        posterImageUrl: '',
        bannerImageUrl: '',
        trailerUrl: '',
        ageRating: '',
        imdbRating: '',
        rtRating: '',
        status: 'Coming Soon'
    });
    const [posterImage, setPosterImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadAllRequestMovies();
    }, []);

    async function loadAllRequestMovies() {
        try {
            const res = await getAllRequestMovie();
            console.log(res.data.data);
            setRequests(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleReject = (request: any) => {
        askConfirm(async () => {
            try {
                const res = await rejectMovieRequest(request._id);
                toast.success(`Successfully rejected the movie request from ${request.cinemaId.cinemaName}`);
                loadAllRequestMovies();
            }
            catch (e) {
                toast.error(`Failed to reject the movie request`);
            }
        }, 'Movie Request Rejection?', 'Are you sure you want to reject this movie request? The cinema will not be able to add showtimes for this movie.');
    };

    const handleAddMovie = (request: any) => {
        setSelectedRequest(request);

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
            cast: [],
            posterImageUrl: '',
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

    const handleSubmit = async () => {
        setIsLoading(true);
        console.log('Movie added:', formData);

        const data = new FormData();
        data.append('id', selectedRequest._id);
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('releaseDate', formData.releaseDate);
        data.append('duration', formData.duration);
        data.append('originalLanguage', formData.originalLanguage);
        data.append('genres', JSON.stringify(formData.genres));
        data.append('formats', JSON.stringify(formData.formats));
        data.append('directors', JSON.stringify(formData.directors));
        data.append('production', JSON.stringify(formData.production));
        data.append('cast', JSON.stringify(formData.cast));
        data.append('posterImageUrl', posterImage);
        data.append('bannerImageUrl', bannerImage);
        data.append('trailerUrl', formData.trailerUrl);
        data.append('ageRating', formData.ageRating);
        data.append('imdbRating', formData.imdbRating);
        data.append('rtRating', formData.rtRating);
        data.append('status', formData.status);

        try {
            const res = await addNewMovie(data);
            console.log(res);
            toast.success('Movie added successfully!');
            loadAllRequestMovies();
            setPosterImage(null);
            setBannerImage(null);
            setSelectedRequest(null);
            setShowAddModal(false);
        }
        catch (e) {
            console.log(e);
            toast.error('Failed add Movie, please try again later!');
        }
        setIsLoading(false);
    };

    function handleDelete(request: any) {
        askConfirm(async () => {
            try {
                const res = await deleteMovieRequest(request._id);
                toast.success(`Successfully deleted the movie request from ${request.cinemaId.cinemaName}`);
                loadAllRequestMovies();
            }
            catch (e) {
                toast.error(`Failed to delete the movie request!`);
            }
        }, 'Delete Movie Request?', 'Are you sure you want to permanently delete this movie request?');
    }


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {requests.map((request: any) => (
                    <div
                        key={request._id}
                        className="rounded-md bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-all flex flex-col"
                    >
                        {/* Cinema Info Header */}
                        <div className="bg-black px-3 py-2 border-b border-[#2a2a2a] flex items-center justify-between">
                            <div>
                                <p className="text-[11px] text-[#888] font-medium">Requested by</p>
                                <p className="text-[13px] text-white font-medium">
                                    {request.cinemaId.cinemaName}
                                </p>
                                <p className="text-[10px] text-[#666] mt-0.5">
                                    {new Date(request.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            {request.requestStatus === 'Rejected' ?
                                <div className='flex items-center gap-1.5'>
                                    <TriangleAlert className="w-5 h-5 text-red-500" />
                                    <p className='text-[10.5px] text-red-500'>Rejected</p>
                                </div>
                                :
                                <div className='flex items-center gap-1.5'>
                                    <Loader className="w-5 h-5 text-green-500" />
                                    <p className='text-[10.5px] text-green-500'>Pending</p>
                                </div>
                            }

                        </div>

                        {/* Movie Content */}
                        <div className="flex flex-col flex-1 p-3">
                            {/* Poster */}
                            <div className="w-full h-[220px] rounded-sm mb-3 overflow-hidden">
                                <img
                                    src={request.posterImageUrl}
                                    alt={request.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Movie Details */}
                            <div className="flex-1">
                                <h3 className="text-[15px] text-white font-medium mb-2">
                                    {request.title}
                                </h3>

                                <div className="space-y-1 mb-3">
                                    <div className="flex items-center gap-2 text-[11px]">
                                        <Calendar className="w-3 h-3 text-gray-500" />
                                        <span className="text-[#888]">Release:</span>
                                        <span className="text-[#ccc]">
                                            {new Date(request.releaseDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px]">
                                        <Clock className="w-3 h-3 text-gray-500" />
                                        <span className="text-[#888]">Duration:</span>
                                        <span className="text-[#ccc]">{request.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px]">
                                        <Globe className="w-3 h-3 text-gray-500" />
                                        <span className="text-[#888]">Language:</span>
                                        <span className="text-[#ccc]">
                                            {request.originalLanguage}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px]">
                                        <User className="w-3 h-3 text-gray-500" />
                                        <span className="text-[#888]">Director:</span>
                                        <span className="text-[#ccc]">
                                            {request.directors.join(", ")}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {request.genres.map((genre, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 bg-[#2a2a2a] text-[9px] rounded text-[#aaa] font-medium"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                                <span className="inline-block text-[10px] px-2 py-0.5 rounded font-medium bg-[#3a3a3a] text-[#bbb]">
                                    {request.movieStatus}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 p-3 border-t border-[#2a2a2a] bg-[#151515]">
                            <button
                                onClick={() => handleAddMovie(request)}
                                className="flex-1 px-3 py-2 bg-[#f5cc50] hover:bg-[#f5d670] text-black rounded text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5"
                            >
                                <MdCheck className="w-4 h-4" />
                                Add Movie
                            </button>
                            {request.requestStatus === 'Rejected' ?
                                <button
                                    onClick={() => handleDelete(request)}
                                    className="flex-1 px-3 py-2 bg-[#2a2a2a] hover:bg-red-900/30 text-white hover:text-red-400 rounded text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5"
                                >
                                    <Paintbrush className="w-[15px] h-[15px]" />
                                    Delete
                                </button>
                                :
                                <button
                                    onClick={() => handleReject(request)}
                                    className="flex-1 px-3 py-2 bg-[#2a2a2a] hover:bg-red-900/30 text-white hover:text-red-400 rounded text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5"
                                >
                                    <MdClose className="w-4 h-4" />
                                    Reject
                                </button>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Movie Modal */}
            {showAddModal && selectedRequest && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1a1a1a] rounded-lg w-full max-w-[900px] max-h-[90vh] overflow-y-auto border border-[#2a2a2a]">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-[#1a1a1a] px-5 py-4 border-b border-[#2a2a2a] flex justify-between items-center z-10">
                            <div>
                                <h3 className="text-[16px] font-medium text-white">
                                    Add New Movie
                                </h3>
                                <p className="text-[11px] text-[#888] mt-0.5">
                                    Request from {selectedRequest.cinemaName}
                                </p>
                            </div>
                            <button onClick={() => setShowAddModal(false)}>
                                <X className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-5">
                            <div className="grid grid-cols-2 gap-5">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Movie Title *
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="Enter movie title"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Description *
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50] resize-none"
                                            placeholder="Enter movie description"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                Release Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="releaseDate"
                                                value={formData.releaseDate}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                Duration *
                                            </label>
                                            <input
                                                type="text"
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                                placeholder="e.g., 120min"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                Language *
                                            </label>
                                            <input
                                                type="text"
                                                name="originalLanguage"
                                                value={formData.originalLanguage}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                                placeholder="e.g., English"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                Age Rating
                                            </label>
                                            <select
                                                name="ageRating"
                                                value={formData.ageRating}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
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
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Genres * (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.genres.join(", ")}
                                            onChange={(e) =>
                                                handleArrayInput("genres", e.target.value)
                                            }
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="e.g., Action, Sci-Fi, Adventure"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Formats (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.formats.join(", ")}
                                            onChange={(e) =>
                                                handleArrayInput("formats", e.target.value)
                                            }
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="e.g., 2D, 3D, IMAX"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Directors * (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.directors.join(", ")}
                                            onChange={(e) =>
                                                handleArrayInput("directors", e.target.value)
                                            }
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="e.g., Christopher Nolan"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Production Companies (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.production.join(", ")}
                                            onChange={(e) =>
                                                handleArrayInput("production", e.target.value)
                                            }
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="e.g., Warner Bros, Legendary"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Cast * (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.cast.join(", ")}
                                            onChange={(e) =>
                                                handleArrayInput("cast", e.target.value)
                                            }
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="e.g., Jason Bateman, Sam Smith"
                                        />
                                    </div>

                                    <div>
                                        {formData.posterImageUrl && (
                                            <div className="mt-2 w-full h-[140px] rounded overflow-hidden bg-[#0f0f0f] relative p-0">
                                                <img
                                                    src={formData.bannerImageUrl}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                                <img
                                                    src={formData.posterImageUrl}
                                                    alt=""
                                                    className="w-[75px] h-[110px] object-cover absolute left-5 bottom-1 rounded-sm"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Poster Image *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                name="posterImage"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    setPosterImage(file);
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setFormData(prev => ({ ...prev, posterImageUrl: reader.result }));
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                className="hidden"
                                                id="posterImage"
                                            />
                                            <label
                                                htmlFor="posterImage"
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-[#888] hover:border-[#3a3a3a] transition-colors cursor-pointer flex items-center justify-between"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Image className="w-4 h-4" />
                                                    {formData.posterImageUrl ? 'Change poster image' : 'Choose poster image'}
                                                </span>
                                                <span className="text-[11px] text-[#666] font-medium">Browse</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Banner Image *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                name="bannerImageUrl"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    setBannerImage(file);
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setFormData(prev => ({ ...prev, bannerImageUrl: reader.result }));
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                className="hidden"
                                                id="bannerImageUrl"
                                            />
                                            <label
                                                htmlFor="bannerImageUrl"
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-[#888] hover:border-[#3a3a3a] transition-colors cursor-pointer flex items-center justify-between"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Image className="w-4 h-4" />
                                                    {formData.bannerImageUrl ? 'Change banner image' : 'Choose banner image'}
                                                </span>
                                                <span className="text-[11px] text-[#666] font-medium">Browse</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Trailer URL
                                        </label>
                                        <input
                                            type="text"
                                            name="trailerUrl"
                                            value={formData.trailerUrl}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                            placeholder="https://youtube.com/watch?v=..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                IMDb Rating
                                            </label>
                                            <input
                                                type="number"
                                                name="imdbRating"
                                                value={formData.imdbRating}
                                                onChange={handleInputChange}
                                                step="0.1"
                                                min="0"
                                                max="10"
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                                placeholder="e.g., 8.5"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                                RT Rating (%)
                                            </label>
                                            <input
                                                type="number"
                                                name="rtRating"
                                                value={formData.rtRating}
                                                onChange={handleInputChange}
                                                min="0"
                                                max="100"
                                                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                                placeholder="e.g., 95"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Status *
                                        </label>
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                        >
                                            <option value="Coming Soon">Coming Soon</option>
                                            <option value="Now Showing">Now Showing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6 pt-5 border-t border-[#2a2a2a]">
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 flex justify-center items-center gap-2.5 px-4 py-2.5 bg-[#f5cc50] text-black text-[13px] font-medium rounded hover:bg-[#f5d670] transition-colors"
                                >
                                    Add Movie to Platform
                                    {isLoading ? <LoadingSpinner /> : ''}
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="px-6 py-2.5 bg-transparent border border-[#3a3a3a] text-gray-400 text-[13px] font-medium rounded hover:border-[#4a4a4a] transition-colors"
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

export default RequestedMovies;
