import { useEffect, useState } from 'react'
import { deactivateAScreen, getAllActiveScreens } from '../../services/admin/screenService';
import { X } from "lucide-react";
import { toast } from 'react-toastify';

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>Deactivate screen?</p>
            <p className='text-[14px] text-gray-500'>Deactivating this screen will prevent adding any future showtimes to it. Are you sure you want to proceed with deactivation?</p>
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


function ActiveScreens(props: any) {

    const [activeScreens, setActiveScreens] = useState([]);
    const [activeOptionsId, setActiveOptionsId] = useState('');

    useEffect(() => {
        loadAllActiveScreens();
    }, []);

    useEffect(() => {
        const close = () => setActiveOptionsId('');
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);

    async function loadAllActiveScreens() {
        try {
            const res = await getAllActiveScreens();
            setActiveScreens(res.data.data);
            console.log(res.data.data);
            props.setStatsUpdate(props.statsUpdate+1);
        }
        catch (e) {
            console.log(e);
        }
    }

    function capitalize(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    function handleDeactivateScreen() {

        askConfirm(async () => {
            try {
                const res = await deactivateAScreen(activeOptionsId);
                toast.success(`Successfully Deactivated Screen ID ${activeOptionsId}`);
                setActiveOptionsId('');
                loadAllActiveScreens();
            }
            catch (e) {
                toast.error(`Failed to Deactivate Screen ID ${activeOptionsId}`);
            }
        });
    }


    return (
        <div className='grid grid-cols-5 gap-[12px] mt-6'>
            {activeScreens.map((screen: any) => (
                <div key={screen._id} className='rounded-md bg-[#1e1e1e] h-[405px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden relative'>
                    <div className='h-[45%] relative overflow-hidden'>
                        <button onClick={(e) => { setActiveOptionsId(screen._id); e.stopPropagation(); }} className='absolute right-1 top-1 z-[50] w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
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

                    {/* options */}
                    <div className={`flex flex-col shadow-2xl absolute top-10 right-0 z-[300] bg-[#1e1e1e] border border-gray-700 rounded-md overflow-hidden min-w-[160px] ${activeOptionsId && activeOptionsId === screen._id ? "" : "hidden"}`}>

                        {/* Delete Option */}
                        <button
                            onClick={handleDeactivateScreen}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-900/20 transition-colors group"
                        >
                            <X className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                            <p className="text-[13px] text-gray-300 group-hover:text-red-300">
                                Deactivate
                            </p>
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ActiveScreens