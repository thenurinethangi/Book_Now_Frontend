import React, { useEffect, useState } from 'react'
import { MapPin, Tv, Star, Trash2, X } from "lucide-react";
import { deactivateACinema, getAllActiveCinemas } from '../../services/admin/cinemaService';
import { toast } from "react-toastify";

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>Deactivate cinema?</p>
            <p className='text-[14px] text-gray-500'>Does this cinema violate the rules? If so, you can proceed with deactivation; otherwise, you cannot.</p>
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


function ApprovedCinemas(props: any) {

    const [approvedCinemas, setApprovedCinemas] = useState([]);
    const [activeOptionsId, setActiveOptionsId] = useState('');

    useEffect(() => {
        loadAllApprovedCinemas();
    }, []);

    useEffect(() => {
        const close = () => setActiveOptionsId('');
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);

    async function loadAllApprovedCinemas() {
        try {
            const res = await getAllActiveCinemas();
            console.log(res.data.data);
            setApprovedCinemas(res.data.data);
            props.setStatsUpdate(props.statsUpdate+1);
        }
        catch (e) {
            console.log(e);
        }
    }

    function handleDeactivateCinema(e: React.MouseEvent<HTMLButtonElement>) {
        // e.stopPropagation();

        askConfirm(async () => {
            try {
                const res = await deactivateACinema(activeOptionsId);
                toast.success(`Successfully Deactivated Cinema ID ${activeOptionsId}`);
                setActiveOptionsId('');
                loadAllApprovedCinemas();
            }
            catch (e) {
                toast.error(`Failed to Deactivated Cinema ID ${activeOptionsId}`);
            }
        });
    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-7 md:gap-7 lg:gap-3 justify-items-center'>
            {approvedCinemas.map((cinema: any) => (
                <div key={cinema._id} className='rounded-lg bg-[#1e1e1e] w-[217.85px] h-[350px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden relative'>
                    <div className='h-[45%] relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 p-2.5 flex justify-end items-start z-10'>
                            {/* <div className='flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[9px] font-bold text-white/88'>
                                <Star className='w-3 h-3 fill-white/88' />
                                {4.5}
                            </div> */}
                            <button onClick={(e) => { setActiveOptionsId(cinema._id); e.stopPropagation(); }} className='w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <circle cx='12' cy='6' r='1.5' />
                                    <circle cx='12' cy='12' r='1.5' />
                                    <circle cx='12' cy='18' r='1.5' />
                                </svg>
                            </button>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                        <img
                            src={cinema.cinemaImageUrl}
                            alt={cinema.cinemaName}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <div className='px-4.5 py-5 flex flex-col justify-between h-[55%]'>
                        <div className='flex flex-col gap-[15px]'>
                            <div>
                                <h3 className='text-[18px] text-[#dedede] font-medium mb-1'>{cinema.cinemaName}</h3>
                                <div className='flex items-start gap-1.5'>
                                    <MapPin className='w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0' />
                                    <p className='text-[12px] text-[#999] line-clamp-2'>{cinema.address}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <div className='flex items-center gap-1'>
                                    <Tv className='w-3.5 h-3.5 text-gray-500' />
                                    <span className='text-[9px] text-[#999] font-bold'>{cinema.noOfScreens} SCREENS</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap'>
                                {cinema.formats.map((tag: string, index: number) => (
                                    <p key={index} className='px-1 py-0.5 bg-[#353535] text-[9px] rounded-xs text-[#999] font-bold'>
                                        {tag}
                                    </p>
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
                    <div className={`flex flex-col shadow-2xl absolute top-10 right-0 z-[300] bg-[#1e1e1e] border border-gray-700 rounded-md overflow-hidden min-w-[160px] ${activeOptionsId && activeOptionsId === cinema._id ? "" : "hidden"}`}>

                        {/* Delete Option */}
                        <button
                            onClick={handleDeactivateCinema}
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

export default ApprovedCinemas