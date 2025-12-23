import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Search, User, Tags, Bookmark } from "lucide-react";
import { getAllNowShowingMovies } from '../../../services/user/movieService';

function NowShowingMovies() {

    const navigate = useNavigate();

    const [nowShowingMovies, setNowShowingMovies] = useState([]);

    useEffect(() => {
        loadAllNowShowingMovies();
    }, []);

    async function loadAllNowShowingMovies() {
        try {
            const res = await getAllNowShowingMovies();
            console.log(res.data.data);
            setNowShowingMovies(res.data.data);
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


    return (
        <div className='grid grid-cols-5 gap-8 px-15 mt-11 mb-10'>
            {/* single movie */}
            {nowShowingMovies.map((movie: any) => (
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
            ))}
        </div>
    )
}

export default NowShowingMovies