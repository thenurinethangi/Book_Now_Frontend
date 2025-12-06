import { useEffect, useState } from 'react'
import { getAllActiveScreens } from '../../services/admin/screenService';

function ActiveScreens() {

    const [activeScreens, setActiveScreens] = useState([]);

    useEffect(() => {
        loadAllActiveScreens();
    }, []);

    async function loadAllActiveScreens() {
        try {
            const res = await getAllActiveScreens();
            setActiveScreens(res.data.data);
            console.log(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    function capitalize(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }


    return (
        <div className='grid grid-cols-5 gap-[12px] mt-6'>
            {activeScreens.map((screen: any) => (
                <div key={screen._id} className='rounded-md bg-[#1e1e1e] h-[405px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden relative'>
                    <div className='h-[45%] relative overflow-hidden'>
                        <button className='absolute right-1 top-1 z-[50] w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                            <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <circle cx='12' cy='6' r='1.5' />
                                <circle cx='12' cy='12' r='1.5' />
                                <circle cx='12' cy='18' r='1.5' />
                            </svg>
                        </button>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                        <img src={screen.screenImageUrl} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'></img>
                    </div>
                    <div className='px-4.5 py-5 pb-3.5 flex flex-col justify-between h-[55%]'>
                        <div className='flex flex-col gap-[15px]'>
                            <h3 className='text-[18px] text-[#dedede] font-medium'>{screen.screenName}</h3>
                            <div>
                                <p className='text-[12px] text-[#999]'>Cinema: {screen.cinemaId.cinemaName}</p>
                                <p className='text-[12px] text-[#999]'>Seats: {screen.numberOfSeats}</p>
                                <p className={`text-[10.5px] text-black px-1 py-[1px] rounded-xs font-medium inline ${screen.status === 'ACTIVE' ? 'bg-[#0c9a8e]' : screen.status === 'UNAVAILABLE' ? 'bg-red-700' : screen.status === 'MAINTENANCE' ? 'bg-yellow-400' : 'bg-blue-400'}`}>{capitalize(screen.status)}</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 mt-2'>
                                {screen.screenTypes.map((t: string, index: number) => (
                                    <p key={index} className='px-1.5 py-0.5 mt-[0.5px] bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>{t}</p>
                                ))}
                            </div>
                        </div>
                        <button className='text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1 mt-2'>
                            More details
                            <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ActiveScreens