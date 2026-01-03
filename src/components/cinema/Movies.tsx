import { Tv, Trash, Edit, Eye, Clock, Calendar, Star, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../services/cinema/movieService";

function Movies(props: any) {

    const [movies, setMovie] = useState([]);
    const [immutableMovies, setImmutableMovies] = useState<any[]>([]);

    useEffect(() => {
        loadAllMovies();

    }, [props.loadMovies]);

    useEffect(() => {
        filterMoviesBySearch(props.searchKey);
    }, [props.searchKey, immutableMovies]);

    async function loadAllMovies() {

        try {
            const res = await getAllMovies();
            setMovie(res.data.data);
            setImmutableMovies(res.data.data);
            props.setmanageMovies(res.data.data);
            console.log(res.data.data);
        }
        catch (e) {

        }
    }

    function filterMoviesBySearch(key: string) {
        if (!key || key.trim() === "") {
            setMovie(immutableMovies);
            return;
        }

        const search = key.toLowerCase();

        const filtered = immutableMovies.filter((movie: any) => {
            return (
                movie.movieDetails?.title?.toLowerCase().includes(search) ||
                movie.status?.toLowerCase().includes(search) ||
                movie.formatsAvailble?.some((f: string) =>
                    f.toLowerCase().includes(search)
                ) ||
                movie.movieDetails?.genres?.some((g: string) =>
                    g.toLowerCase().includes(search)
                ) ||
                String(movie.movieDetails?.ratings?.imdb)?.includes(search)
            );
        });

        setMovie(filtered);
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {movies.length > 0 && movies.map((movie: any) => (
                <div key={movie._id} className='rounded-lg bg-[#1e1e1e] h-[210px] sm:h-[190px] flex items-start pr-2 border border-gray-800 hover:border-gray-700 transition-all duration-300 group'>
                    <div className='h-[100%] w-[22%] rounded-l-sm overflow-hidden relative'>
                        <img
                            src={movie.movieDetails.posterImageUrl}
                            alt={movie.movieDetails.title}
                            className='w-full h-full object-cover rounded-l-sm opacity-85 group-hover:scale-105 transition-transform duration-500'
                        />
                        <div className='absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-bold text-white/90'>
                            <Star className='w-2.5 h-2.5 fill-white' />
                            {movie.movieDetails.ratings.imdb}
                        </div>
                    </div>
                    <div className='pl-4.5 pr-1.5 py-4 flex justify-between h-[100%] flex-1'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h3 className='text-[16px] text-[#dedede] font-medium mb-2'>{movie.movieDetails.title}</h3>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-1.5'>
                                        <Clock className='w-3.5 h-3.5 text-gray-500' />
                                        <p className='text-[12px] text-[#999]'>{movie.movieDetails.duration}</p>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <Calendar className='w-3.5 h-3.5 text-gray-500' />
                                        <p className='text-[12px] text-[#999]'>{movie.movieDetails.releaseDate}</p>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <Tv className='w-3.5 h-3.5 text-gray-500' />
                                        {movie.formatsAvailble.map((format: string) => (
                                            <p className='text-[12px] text-[#999]'>{format}</p>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <Tag className='w-3.5 h-3.5 text-gray-500' />
                                        <p className='text-[12px] text-[#999]'>3000 bookings</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mt-2'>
                                <p className={`text-[11px] px-2 py-[2px] rounded font-medium ${movie.status === 'Now Showing' ? 'text-black bg-[#f5cc50]' : 'bg-[#02a8b3]'}`}>
                                    {movie.status}
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {movie.movieDetails.genres.map((genre: string) => (
                                        <p className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>{genre}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end gap-2'>
                            <button className='w-6.5 h-6.5 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group/btn'>
                                <Eye className='text-gray-500 group-hover/btn:text-gray-400 w-[15px] h-[15px]' />
                            </button>
                            <button className='w-6.5 h-6.5 rounded-lg bg-[#252525] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group/btn'>
                                <Edit className='text-gray-500 group-hover/btn:text-gray-400 w-[14px] h-[14px]' />
                            </button>
                            <button className='w-6.5 h-6.5 rounded-lg bg-[#252525] hover:bg-red-900/20 transition-colors flex items-center justify-center group/btn'>
                                <Trash className='text-gray-500 group-hover/btn:text-red-500 w-[14px] h-[14px]' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {movies.length <= 0 && <p className="text-[14px] text-white/80 font-light">No Movies</p>}
        </div>
    )
}

export default Movies