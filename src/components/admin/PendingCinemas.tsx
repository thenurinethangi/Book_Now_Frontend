import { useEffect, useState } from 'react'
import { MapPin, Tv, Star, CircleFadingArrowUp, CircleX } from "lucide-react";
import { getAllActiveCinemas, getAllPendingCinemas, makeCinemaApprove, makeCinemaRejecte } from '../../services/admin/cinemaService';
import { toast } from 'react-toastify';

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm, title, desc } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>{title}</p>
            <p className='text-[14px] text-gray-500'>{desc}</p>
            <div className="flex gap-3 mt-3">
                <button onClick={closeToast} className='text-[13px] font-medium px-2 py-2 border border-gray-800 rounded-md'>Cancel</button>
                <button onClick={() => { onConfirm(); closeToast(); }} className='text-[13px] font-medium px-2 h-[32px] bg-red-700 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export function askConfirm(onConfirm: () => void, title: string, desc: string) {
    toast((toastProps: any) => (
        <ConfirmToast {...toastProps} onConfirm={onConfirm} title={title} desc={desc} />
    ));
}


function PendingCinemas(props: any) {

    const [pendingCinemas, setPendingCinemas] = useState([]);

    useEffect(() => {
        loadAllPendingCinemas();
    }, []);

    async function loadAllPendingCinemas() {
        try {
            const res = await getAllPendingCinemas();
            console.log(res.data.data);
            setPendingCinemas(res.data.data);
            props.setStatsUpdate(props.statsUpdate+1);
        }
        catch (e) {
            console.log(e);
        }
    }

    function approveACinema(e: React.MouseEvent<HTMLButtonElement>) {
        const id: any = e.currentTarget.dataset.cinema;

        askConfirm(async () => {
            try {
                const res = await makeCinemaApprove(id);
                toast.success(`Successfully Activated Cinema ID ${id}`);
                loadAllPendingCinemas();
            }
            catch (e) {
                toast.error(`Failed to Activate Cinema ID, ${id}, please try again later!`);
            }
        },'Approve This Cinema?', 'Are you sure you want to approve this cinema, granting them permission to schedule showtimes, manage movies, and receive bookings within the system?');
    }

    function rejectACinema(e: React.MouseEvent<HTMLButtonElement>) {
        const id: any = e.currentTarget.dataset.cinema;

        askConfirm(async () => {
            try {
                const res = await makeCinemaRejecte(id);
                toast.success(`Successfully Rejected Cinema ID ${id}`);
                loadAllPendingCinemas();
            }
            catch (e) {
                toast.error(`Failed to Reject Cinema ID, ${id}, please try again later!`);
            }
        },'Reject This Cinema?', 'Are you sure you want to reject this cinema’s management request?');
    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-7 md:gap-7 lg:gap-3 justify-items-center'>
            {pendingCinemas.map((cinema: any) => (
                <div key={cinema._id} className='rounded-lg bg-[#1e1e1e] w-[217.85px] h-[350px] border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden'>
                    <div className='h-[45%] relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 p-2.5 flex justify-end items-start z-10'>
                            {/* <div className='flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[9px] font-bold text-white/88'>
                                <Star className='w-3 h-3 fill-white/88' />
                                {4.5}
                            </div> */}
                            <div className='flex items-center gap-1'>
                                <button onClick={approveACinema} data-cinema={cinema._id} className='w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                                    <CircleFadingArrowUp className='absolute text-white/90 w-[19px] h-[19px]' />
                                </button>
                                <button onClick={rejectACinema} data-cinema={cinema._id} className='w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors'>
                                    <CircleX className='absolute text-red-600/90 w-[19px] h-[19px]' />
                                </button>
                            </div>
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

export default PendingCinemas