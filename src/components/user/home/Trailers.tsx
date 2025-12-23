import React from 'react';
import { Play } from 'lucide-react';

function Trailers() {
    const trailers = [
        {
            id: 1,
            title: "Dune: Part Two",
            imageUrl: "https://www.vitalthrills.com/wp-content/uploads/2025/05/zootop1.jpg",
            size: "large"
        },
        {
            id: 2,
            title: "Oppenheimer",
            imageUrl: "https://cdn.britannica.com/66/136966-050-66B08BD4/actor-sam-worthington-as-jake-sully-and-zoe-saldana-as-neytiri-in-film-avator-2009-directedb-by-james-cameron.jpg",
            size: "medium"
        },
        {
            id: 3,
            title: "The Batman",
            imageUrl: "https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blte2008043be1b1e4a/674a0010127cfc83bf908211/%E2%80%9CWicked%E2%80%9D_stars_Cynthia_Erivo_and_Ariana_Grande_Universal_Pictures.png",
            size: "medium"
        },
        {
            id: 4,
            title: "Barbie",
            imageUrl: "https://www.vitalthrills.com/wp-content/uploads/2025/05/zootop1.jpg",
            size: "small"
        },
        {
            id: 5,
            title: "Inception",
            imageUrl: "https://cdn.britannica.com/66/136966-050-66B08BD4/actor-sam-worthington-as-jake-sully-and-zoe-saldana-as-neytiri-in-film-avator-2009-directedb-by-james-cameron.jpg",
            size: "small"
        },
        {
            id: 6,
            title: "Interstellar",
            imageUrl: "https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blte2008043be1b1e4a/674a0010127cfc83bf908211/%E2%80%9CWicked%E2%80%9D_stars_Cynthia_Erivo_and_Ariana_Grande_Universal_Pictures.png",
            size: "medium"
        }
    ];

    return (
        <div className='font-[Poppins] px-15 py-8 mb-12 h-screen flex flex-col mb-27'>
            <div className='text-center mb-6'>
                <h2 className='text-[24px] font-medium text-[#dedede] mb-1'>Popular Trailers</h2>
                <p className='text-[13px] text-[#999] font-medium'>Watch the most exciting movie trailers</p>
            </div>

            <div className='max-w-[900px] mx-auto flex-1 flex items-center'>
                <div className='grid grid-cols-12 gap-2.5 auto-rows-[100px] w-full'>

                    {/* Large - Dune */}
                    <div className='col-span-6 row-span-2 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[0].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[0].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[14px] font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[0].title}</h3>
                        </div>
                    </div>

                    {/* Medium - Oppenheimer */}
                    <div className='col-span-3 row-span-2 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[1].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[1].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[12px] font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[1].title}</h3>
                        </div>
                    </div>

                    {/* Small - Barbie */}
                    <div className='col-span-3 row-span-1 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[3].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[3].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[11px] font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[3].title}</h3>
                        </div>
                    </div>

                    {/* Small - Inception */}
                    <div className='col-span-3 row-span-1 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[4].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[4].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[11px] font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[4].title}</h3>
                        </div>
                    </div>

                    {/* Medium - The Batman */}
                    <div className='col-span-3 row-span-2 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[2].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[2].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[12px] font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[2].title}</h3>
                        </div>
                    </div>

                    {/* Medium - Interstellar */}
                    <div className='col-span-6 row-span-1 relative group cursor-pointer overflow-hidden rounded-[1px]'>
                        <img
                            src={trailers[5].imageUrl}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            alt={trailers[5].title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-700'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="#FF2D2D"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#FF2D2D"
                                    strokeWidth="9"
                                />
                                <path
                                    d="
        M 44 30
        C 40 28 38 30 38 34
        L 38 66
        C 38 70 40 72 44 70
        L 72 54
        C 76 52 76 48 72 46
        Z
      "
                                    fill="#FFFFFF"
                                    transform="translate(50 50) scale(0.9) translate(-50 -50)"
                                />
                            </svg>
                            <h3 className='text-white text-[12px] font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{trailers[5].title}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Trailers;