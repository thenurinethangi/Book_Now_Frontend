import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search, User, Tags, Bookmark, ChevronLeft, ChevronRight, ListFilterPlus } from "lucide-react";
import { getAllShowtimesOfAMovie } from '../../../services/user/showtimeService';


function Showtimes(props: any) {

    const navigate = useNavigate();

    const [dates, setDates] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [showtimesList, setShowtimesList] = useState([]);
    const [selectedDateShowtimes, setSelectedDateShowtimes] = useState([]);

    useEffect(() => {
        setDates(getNext7Days());
        loadAllShowtimeOfAMovie();
    }, []);

    async function loadAllShowtimeOfAMovie() {
        try {
            const res = await getAllShowtimesOfAMovie(props.id);
            console.log(res.data.data);
            setShowtimesList(res.data.data);

            for (let i = 0; i < res.data.data.length; i++) {
                const e = res.data.data[i];
                if (e.length > 0) {
                    setSelectedDate(formatShowDate(e[0][0].date));
                    setSelectedDateShowtimes(e);
                    break;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    function formatShowDate(dateStr: string) {
        const slDate = new Date(
            new Date(dateStr).toLocaleString("en-US", { timeZone: "Asia/Colombo" })
        );

        const todaySL = new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
        );

        const isToday =
            slDate.getFullYear() === todaySL.getFullYear() &&
            slDate.getMonth() === todaySL.getMonth() &&
            slDate.getDate() === todaySL.getDate();

        if (isToday) {
            return "Today";
        }

        return slDate.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short"
        }).replace(",", "");
    }

    function getNext7Days() {
        const days: string[] = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const d = new Date();
            d.setDate(today.getDate() + i);

            if (i === 0) {
                days.push("TODAY");
            } else {
                const formatted = d.toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short"
                });

                days.push(formatted.replace(",", ""));
            }
        }
        return days;
    }

    function formatToTime12h(dateString: string) {
        const date = new Date(dateString);

        return date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    }

    function handleNavigateToBookingPage(e: React.MouseEvent<HTMLButtonElement>) {
        const showtimeId = e.currentTarget.dataset.id;
        if (showtimeId) {
            navigate('/booking/' + showtimeId);
        }
    }


    return (
        <div className='mb-47'>
            <div className='px-13 flex items-center justify-between'>
                <div>
                    <ChevronLeft />
                </div>
                <div className='flex items-center justify-between w-[85%] overflow-x-auto'>
                    {dates.map((d, index: number) => (
                        <div onClick={(e) => {
                            if (showtimesList[index]?.length > 0) {
                                setSelectedDate(d);
                                setSelectedDateShowtimes(showtimesList[index]);
                            }
                        }}
                            key={index} className={`cursor-pointer ${showtimesList[index]?.length > 0 && selectedDate !== d ? 'text-white' : 'text-[#BDBDBD]'} ${selectedDate === d ? 'border-b-4 border-b-red-500 pb-3.5 px-3 text-red-600' : ''}`}>{d}</div>
                    ))}
                </div>
                <div>
                    <ChevronRight />
                </div>
            </div>

            <div className='px-14.5 flex flex-col gap-[3px] mt-8'>
                <hr className='border-red-400/20'></hr>
                <hr className='border-red-400/20'></hr>
            </div>

            <div className='mt-6 flex justify-end items-start px-14'>
                <ListFilterPlus className='w-5.5 h-5.5 text-white/95' />
            </div>

            <div className='px-14 mt-2'>
                {/* single screen show time */}
                {selectedDateShowtimes.map((s: any, index: number) => (
                    <div key={index} className='flex items-center gap-5 mb-7'>
                        <div className='w-[25%]'>
                            <p className='text-[16.8px] font-normal'>{s[0].screenId.screenName}</p>
                            <p className='text-[12px] text-gray-500 font-normal'>{s[0].cinemaId.cinemaName}</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            {s.map((t: any, index: number) => (
                                <div key={index} className='flex flex-col justify-between items-center border border-red-300 rounded-br-xl pt-2'>
                                    <div className='flex'>
                                        <p className='pl-1.5 pr-1 text-[23px] font-medium'>{formatToTime12h(t.time).split(' ')[0]}</p>
                                        <p className='pr-1.5 pb-1 text-[11px] font-medium self-end'>{formatToTime12h(t.time).split(' ')[1]}</p>
                                    </div>
                                    <button onClick={handleNavigateToBookingPage} data-id={t._id} className='w-full text-[13.7px] font-medium bg-red-400 text-black py-1 px-2 rounded-br-xl'>Book Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Showtimes