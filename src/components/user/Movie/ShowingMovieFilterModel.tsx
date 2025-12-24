import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Concert",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci Fi",
    "Sport",
    "Thriller",
    "War"
];

const ShowingMovieFilterModel = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    const [tab, setTab] = useState('genre');

    const [genre, setGenre] = useState(props.genre);
    const [popularity, setPopularity] = useState(props.popularity);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    function handleCloseFilterModel() {
        setIsVisible(false);
        setTimeout(() => props.setShowNowShowingFiltersModel(false), 150);
    }

    function handleSetGenre(e: React.MouseEvent<HTMLLIElement>) {
        const value = e.currentTarget.dataset.value;

        if (value) {
            setGenre(prev => [...prev, value]);
        }
    }

    function handleSetPopularity(e: React.MouseEvent<HTMLLIElement>) {
        const value = e.currentTarget.dataset.value;

        if (value) {
            setPopularity(value);
        }
    }

    function handleClear() {
        props.filterNowShowingMovie({ genre: [], popularity: '' });
        setGenre([]);
        setPopularity('');
    }

    async function handleApplyFilters() {
        props.filterNowShowingMovie({ genre, popularity });
        setIsVisible(false);
        setTimeout(() => props.setShowNowShowingFiltersModel(false), 150);
    }


    return (
        <div className={`fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-300 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen w-[500px] bg-black shadow-2xl rounded-lg flex flex-col justify-between relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <div className='pt-10 px-8 w-full flex flex-col justify-start items-start gap-5 relative h-[80%] overflow-y-scroll pb-12'>

                    <X onClick={handleCloseFilterModel} className='absolute right-9 top-10.5 w-5.5 h-5.5 opacity-90 cursor-pointer' />

                    <div>
                        <p className='text-[16px] font-[Poppins] font-medium'>Key & Filters</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className={`pb-1.5 cursor-pointer ${tab === 'genre' ? 'border-b-2 border-b-red-500' : ''}`} onClick={() => setTab('genre')}>
                            <p className='text-[12px]'>GENRE</p>
                        </div>
                        <div className={`pb-1.5 cursor-pointer ${tab === 'popularity' ? 'border-b-2 border-b-red-500' : ''}`} onClick={() => setTab('popularity')}>
                            <p className='text-[12px]'>POPULARITY</p>
                        </div>
                    </div>

                    {tab === 'genre' ?
                        <div className='w-full'>
                            <ul className='flex flex-col gap-2'>
                                {genres.map((g) => (
                                    <li key={g} data-value={g} onClick={handleSetGenre} className="w-full h-[46px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                        <div className="relative w-full">
                                            <div className='flex items-center justify-between relative w-full pr-4'>
                                                <div className='flex items-center'>
                                                    <div className='pl-3.5'>
                                                        <label className="text-[14px] font-semibold mb-3">{g.toUpperCase()}</label>
                                                        {/* <p className="text-[12px] text-white/60 font-light pt-[1px]">Standard movie experience</p> */}
                                                    </div>
                                                </div>
                                                <input type="checkbox" checked={genre.includes(g)} className="w-3.5 h-3.5 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        :
                        ''}

                    {tab === 'popularity' ?
                        <div className='w-full'>
                            <ul className='flex flex-col gap-2'>
                                <li data-value={'High to Low'} onClick={handleSetPopularity} className="w-full h-[70px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">High to Low</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Most to least popular</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={popularity === 'High to Low'} className="w-3.5 h-3.5 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                                <li data-value={'Low to High'} onClick={handleSetPopularity} className="w-full h-[70px] bg-[#1e1e1e] border border-[#383838] rounded-sm cursor-pointer text-white flex items-center">
                                    <div className="relative w-full">
                                        <div className='flex items-center justify-between relative w-full pr-4'>
                                            <div className='flex items-center'>
                                                <div className='pl-3.5'>
                                                    <label className="text-[14px] font-semibold mb-3">Low to High</label>
                                                    <p className="text-[12px] text-white/60 font-light pt-[1px]">Least to most popular</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={popularity === 'Low to High'} className="w-3.5 h-3.5 appearance-none rounded-full border border-[#383838] bg-[#383838] checked:bg-[#F44336] checked:border-[#F44336] cursor-pointer" />
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        :
                        ''}
                </div>

                <div className='bg-[#212121]/80 py-3.5 px-6'>
                    <button onClick={handleApplyFilters} className='w-full bg-[#cd242c] text-[14px] py-[14px] rounded-sm font-semibold cursor-pointer'>APPLY FILTERS</button>
                    <button onClick={handleClear} className='text-[14px] text-[#ff2e38] mt-3 w-full font-medium cursor-pointer'>Clear selection</button>
                </div>

            </div>
        </div>
    );
};

export default ShowingMovieFilterModel;