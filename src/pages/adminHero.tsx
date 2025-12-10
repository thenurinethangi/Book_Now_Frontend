import React, { useEffect, useState } from "react";
import {
    X,
    Plus,
    Eye,
    Trash,
    Play,
    Image,
    Film,
    Calendar,
    Edit2,
} from "lucide-react";
import SidebarNavigation from "../components/admin/SidebarNavigation";
import { addNewHeroPoster, deleteAHeroPoster, getAllHeros, getAllMovies } from "../services/admin/heroService";
import { toast } from "react-toastify";


const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>Delete Poster?</p>
            <p className='text-[14px] text-gray-500'>Are you sure you want to delete this hero poster? It will no longer be visible to users in hero section.</p>
            <div className="flex gap-3 mt-3">
                <button onClick={closeToast} className='text-[13px] font-medium px-2 py-2 border border-gray-800 rounded-md'>Cancel</button>
                <button onClick={() => { onConfirm(); closeToast(); }} className='text-[13px] font-medium px-2 h-[32px] bg-red-700 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export function askConfirm(onConfirm: () => void) {
    toast((toastProps: any) => (
        <ConfirmToast {...toastProps} onConfirm={onConfirm} />
    ));
}


function AdminHeroPosters() {
    const [heroPosters, setHeroPosters] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingPoster, setEditingPoster] = useState(null);
    const [formData, setFormData] = useState({
        movieId: "",
        description: "",
        status: "",
        heroImage: null,
        videoFile: null,
    });
    const [previewMedia, setPreviewMedia] = useState({
        image: "",
        video: "",
    });
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        try {
            const res = await getAllMovies();
            console.log(res.data.data);
            setAllMovies(res.data.data);
            setFormData((prev) => ({ ...prev, ['movieId']: res.data.data[0].movie._id }));
            setFormData((prev) => ({ ...prev, ['status']: res.data.data[0].movie.status }));

            const res2 = await getAllHeros();
            console.log(res2.data.data);
            setHeroPosters(res2.data.data);

        } catch (e) {
            console.log(e);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    function handleMovieChoose(e) {
        const { name, value } = e.target;

        for (let i = 0; i < allMovies.length; i++) {
            const e: any = allMovies[i];
            if (e.movie._id === value) {
                setFormData((prev) => ({ ...prev, ['movieId']: value }));
                setFormData((prev) => ({ ...prev, ['status']: e.movie.status }));
                break;
            }

        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, heroImage: file }));
            const previewUrl = URL.createObjectURL(file);
            setPreviewMedia((prev) => ({ ...prev, image: previewUrl }));
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, videoFile: file }));
            const previewUrl = URL.createObjectURL(file);
            setPreviewMedia((prev) => ({ ...prev, video: previewUrl }));
        }
    };

    const handleSubmit = async () => {
        console.log("Submitting hero poster:", formData);

        const data = new FormData();
        data.append("movieId", formData.movieId);
        data.append("description", formData.description);
        data.append("status", formData.status);
        if (formData.heroImage) data.append("heroImage", formData.heroImage);
        if (formData.videoFile) data.append("videoFile", formData.videoFile);

        try {
            const res = await addNewHeroPoster(data);
            toast.success('Successfully added new hero poster!');
        }
        catch (e) {
            console.log(e);
            toast.error('Failed to add new hero poster, please try again later!');
        }

        setShowAddModal(false);
        resetForm();
        init();
    };

    const resetForm = () => {
        setFormData({
            movieId: "",
            description: "",
            status: "Now Showing",
            heroImage: null,
            videoFile: null,
        });
        setPreviewMedia({ image: "", video: "" });
        setEditingPoster(null);
    };

    const handleEdit = (poster: any) => {
        setEditingPoster(poster);
        setFormData({
            movieId: poster.movieId,
            description: poster.description,
            status: poster.status,
            heroImage: null,
            videoFile: null,
        });
        setPreviewMedia({
            image: poster.heroImage,
            video: "",
        });
        setShowAddModal(true);
    };

    const handleDelete = (id: string) => {
        askConfirm(async () => {
            try {
                const res = await deleteAHeroPoster(id);
                toast.success(`Successfully deleted Hero Poster`);
                init();
            }
            catch (e) {
                toast.error(`Failed to delete hero poster, please try again later!`);
            }
        });
    };

    const clearImage = () => {
        setFormData((prev) => ({ ...prev, heroImage: null }));
        setPreviewMedia((prev) => ({ ...prev, image: "" }));
    };

    const clearVideo = () => {
        setFormData((prev) => ({ ...prev, videoFile: null }));
        setPreviewMedia((prev) => ({ ...prev, video: "" }));
    };

    return (
        <div className="bg-[#121212] flex font-[Poppins] overflow-hidden min-h-screen">
            {/* Sidebar Navigation */}
            <SidebarNavigation page={"hero"} />

            {/* Main Content */}
            <div className="w-full min-h-screen text-white px-7 py-3 pt-7 ml-[65px]">
                {/* Header */}
                <div className="flex justify-between items-center mb-[17px]">
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className="text-[18px] font-medium text-gray-500">
                                    Home {`>`}
                                </span>
                                &nbsp;HeroPoster
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-4 py-2 bg-transparent border-[1.5px] mt-1 border-[#2a2a2a] text-white/90 rounded text-[13px] font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Hero Poster
                    </button>
                </div>

                {/* Hero Posters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-6">
                    {heroPosters.map((poster: any) => (
                        <div
                            key={poster._id}
                            className="rounded-xs bg-[#181818] border border-[#2b2b2b] overflow-hidden 
                       hover:border-[#3c3c3c] hover:shadow-lg hover:shadow-black/20 
                       transition-all duration-300"
                        >
                            <div className="relative w-full h-[220px] overflow-hidden">
                                <img
                                    src={poster.imageUrl}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-black/0 hover:bg-black/40 
                                flex items-center justify-center transition-colors"
                                >
                                    <Play className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-[16px] font-medium text-white">
                                            {poster.movieId.title}
                                        </h3>
                                    </div>

                                    <p className="text-[13px] text-[#aaa] mt-1 leading-relaxed">
                                        {poster.description}
                                    </p>

                                    <div className="flex gap-4 text-[11px] text-[#666] mt-3">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>
                                                {new Date(poster.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Film className="w-3.5 h-3.5" />
                                            <span
                                                className={`${poster.movieId.status === "Now Showing"
                                                    ? "text-[#02a8b3]"
                                                    : "text-gray-400"
                                                    }`}
                                            >
                                                {poster.movieId.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => handleEdit(poster)}
                                        className="px-3 py-1.5 bg-[#242424] hover:bg-[#303030] rounded text-[11px]"
                                    >
                                        Edit
                                    </button>

                                    <button className="px-3 py-1.5 bg-[#242424] hover:bg-[#303030] rounded text-[11px]">
                                        Preview
                                    </button>

                                    <button
                                        onClick={() => handleDelete(poster._id)}
                                        className="px-3 py-1.5 bg-[#242424] hover:bg-red-800/30 text-red-300 rounded text-[11px]"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add/Edit Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1a1a1a] rounded-lg w-full max-w-[800px] max-h-[90vh] overflow-y-auto border border-[#2a2a2a]">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-[#1a1a1a] px-5 py-4 border-b border-[#2a2a2a] flex justify-between items-center z-10">
                            <div>
                                <h3 className="text-[16px] font-medium text-white">
                                    {editingPoster ? "Edit Hero Poster" : "Add New Hero Poster"}
                                </h3>
                                <p className="text-[11px] text-[#888] mt-0.5">
                                    Upload hero banner for website homepage
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    resetForm();
                                }}
                            >
                                <X className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-5">
                            <div className="space-y-4">
                                {/* Hero Image Upload */}
                                <div>
                                    <label className="text-[12px] text-[#aaa] mb-2 block">
                                        Hero Image * (1920x800 recommended)
                                    </label>
                                    {previewMedia.image ? (
                                        <div className="relative w-full h-[240px] rounded-lg overflow-hidden group">
                                            <img
                                                src={previewMedia.image}
                                                alt="Hero preview"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center gap-3">
                                                <label
                                                    htmlFor="heroImageEdit"
                                                    className="px-3 py-2 bg-[#f5cc50] text-black rounded text-[11px] font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                                                >
                                                    <Edit2 className="w-3 h-3" />
                                                    Change Image
                                                </label>
                                                <button
                                                    onClick={clearImage}
                                                    className="px-3 py-2 bg-red-600 text-white rounded text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                                                >
                                                    <Trash className="w-3 h-3" />
                                                    Remove
                                                </button>
                                            </div>
                                            <input
                                                type="file"
                                                id="heroImageEdit"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <input
                                                type="file"
                                                id="heroImage"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="heroImage"
                                                className="w-full h-[240px] bg-[#151515] border-2 border-dashed border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a] transition-colors cursor-pointer flex flex-col items-center justify-center gap-3"
                                            >
                                                <Image className="w-12 h-12 text-gray-600" />
                                                <div className="text-center">
                                                    <p className="text-[13px] text-[#888]">
                                                        Click to upload hero image
                                                    </p>
                                                    <p className="text-[11px] text-[#666] mt-1">
                                                        PNG, JPG up to 10MB
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                    )}
                                </div>

                                {/* Video Upload */}
                                <div>
                                    <label className="text-[12px] text-[#aaa] mb-2 block">
                                        Hero Video * (background video)
                                    </label>
                                    {previewMedia.video ? (
                                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden group">
                                            <video
                                                src={previewMedia.video}
                                                className="w-full h-full object-cover"
                                                muted
                                                loop
                                                autoPlay
                                            />
                                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center gap-3">
                                                <label
                                                    htmlFor="videoFileEdit"
                                                    className="px-3 py-2 bg-[#f5cc50] text-black rounded text-[11px] font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                                                >
                                                    <Edit2 className="w-3 h-3" />
                                                    Change Video
                                                </label>
                                                <button
                                                    onClick={clearVideo}
                                                    className="px-3 py-2 bg-red-600 text-white rounded text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                                                >
                                                    <Trash className="w-3 h-3" />
                                                    Remove
                                                </button>
                                            </div>
                                            <input
                                                type="file"
                                                id="videoFileEdit"
                                                accept="video/*"
                                                onChange={handleVideoChange}
                                                className="hidden"
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <input
                                                type="file"
                                                id="videoFile"
                                                accept="video/*"
                                                onChange={handleVideoChange}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="videoFile"
                                                className="w-full h-[200px] bg-[#151515] border-2 border-dashed border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a] transition-colors cursor-pointer flex flex-col items-center justify-center gap-3"
                                            >
                                                <Film className="w-12 h-12 text-gray-600" />
                                                <div className="text-center">
                                                    <p className="text-[13px] text-[#888]">
                                                        Click to upload video file
                                                    </p>
                                                    <p className="text-[11px] text-[#666] mt-1">
                                                        MP4, WebM up to 50MB
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                    )}
                                </div>

                                {/* Movie Details */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Movie Name *
                                        </label>
                                        <select
                                            name="movieName"
                                            value={formData.movieId}
                                            onChange={handleMovieChoose}
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                        >
                                            {allMovies.map((movie: any) => (
                                                <option key={movie.movie._id} value={movie.movie._id}>
                                                    {movie.movie.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                            Status *
                                        </label>
                                        <input
                                            type="text"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleInputChange}
                                            disabled
                                            placeholder="Now Showing"
                                            className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50]"
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[12px] text-[#aaa] mb-1.5 block">
                                        Short Description *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-3 py-2 text-[13px] text-white focus:outline-none focus:border-[#f5cc50] resize-none"
                                        placeholder="Brief description for hero section"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6 pt-5 border-t border-[#2a2a2a]">
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 px-4 py-2.5 bg-[#f5cc50] text-black text-[13px] font-medium rounded hover:bg-[#f5d670] transition-colors"
                                >
                                    {editingPoster ? "Update Hero Poster" : "Add Hero Poster"}
                                </button>
                                <button
                                    onClick={() => {
                                        setShowAddModal(false);
                                        resetForm();
                                    }}
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

export default AdminHeroPosters;
