import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Search, User, Tags, Bookmark } from "lucide-react";
import { getAllComingSoonMovies, getAllNowShowingMovies } from '../../../services/user/movieService';
import ComingSoonMovieFilterModel from '../movie/ComingSoonMovieFilterModel';

function ComingSoonMovies(props: any) {

    const navigate = useNavigate();

    const [comingSoonMovies, setComingSoonMovies] = useState<any>([]);
    const [immutableComingSoonMovies, setImmutableComingSoonMovies] = useState([]);

    const [genre, setGenre] = useState([]);

    useEffect(() => {
        loadAllComingShowingMovies();
    }, []);

    async function loadAllComingShowingMovies() {
        try {
            const res = await getAllComingSoonMovies();
            console.log(res.data.data);
            setComingSoonMovies(res.data.data);
            setImmutableComingSoonMovies(res.data.data);
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

    function filterComingSoonMovie(rules: any) {

        console.log(rules);

        setGenre(rules.genre);

        const arr = [];

        if (rules.genre.length) {
            for (let i = 0; i < immutableComingSoonMovies.length; i++) {
                const movie: any = immutableComingSoonMovies[i];
                for (let j = 0; j < movie.genres.length; j++) {
                    const g = movie.genres[j];
                    if (rules.genre.includes(g)) {
                        arr.push(movie);
                        break;
                    }
                }
            }
            setComingSoonMovies(arr);
        }
        else {
            setComingSoonMovies(immutableComingSoonMovies);
        }
    }


    return (
        <div className='grid grid-cols-5 gap-8 px-15 mt-11 mb-27'>
            {/* single movie */}
            {comingSoonMovies.length > 0
                ? comingSoonMovies.map((movie: any) => (
                    <div className='mb-6'>
                        <div className='relative aspect-[2/3]'>
                            <Bookmark className="text-white/90 w-[22px] h-[25px] absolute right-1 top-1" />
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
                ))
                : <p className='text-[15px] text-[#BDBDBD] font-light pl-2.5 mb-20'>No movies</p>
                }

            {props.showComingSoonFiltersModel ? <ComingSoonMovieFilterModel setShowComingSoonFiltersModel={props.setShowComingSoonFiltersModel} genre={genre} filterComingSoonMovie={filterComingSoonMovie} /> : ''}
        </div>
    )
}

export default ComingSoonMovies