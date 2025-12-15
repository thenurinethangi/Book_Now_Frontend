import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import tk from "../../../assets/images/blank-golden-coupon-or-ticket-golden-sticker-discount-illustration-vector-removebg-preview.png";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation";
import { getShowtimeDetailsByPaymentId } from "../../../services/user/paymentService";

function BookingSuccess() {

    const { id } = useParams();
    console.log('-------', id);

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const [showtimeDeatils, setShowtimeDeatils] = useState<any>({});
    const [data, setData] = useState<any>({});

    const [showConfetti, setShowConfetti] = useState(true);

    // Mock data - replace with your actual data
    const showtimeDetails = {
        movieId: {
            title: "ZOOTOPIA 2",
            posterImageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
            bannerImageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=400&fit=crop"
        },
        cinemaId: { cinemaName: "Scope Cinema" },
        screenId: { screenName: "Screen 02" },
        date: "2025-12-01",
        time: "2025-12-01T19:30:00",
        ticketPrices: { "ODC": 1500, "BOX": 1300 }
    };

    const arrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M8 5l7 7-7 7'/%3E%3C/svg%3E";
    const ticket = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='730' height='293'%3E%3Crect width='730' height='293' fill='%231a1a1a' rx='8'/%3E%3C/svg%3E";

    useEffect(() => {
        loadShowtimeDetails();
    }, []);

    async function loadShowtimeDetails() {
        if (!id) {
            //load error page
            return;
        }
        try {
            const res = await getShowtimeDetailsByPaymentId(id);
            console.log(res.data.data);
            setShowtimeDeatils(res.data.data.showtime);
            setData(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    function formatToTime12h(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    }

    function formatShowDate(dateStr) {
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

        return slDate
            .toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
            })
            .replace(",", "");
    }

    return (
        <div className="bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative pb-15 min-h-screen">

            {/* Floating Confetti Animation */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    {[...Array(40)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-fall"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-${Math.random() * 20}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        >
                            <div
                                className="w-2 h-2 rounded-full opacity-70"
                                style={{
                                    backgroundColor: ['#22c55e', '#ffffff', '#FFF9C4', '#FF8A65', '#8b5cf6'][Math.floor(Math.random() * 5)],
                                    transform: `rotate(${Math.random() * 360}deg)`
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            )}

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} />

            {/* hero */}
            <div className="relative w-full h-[320px] overflow-x-hidden overflow-y-auto">
                <div className="w-full h-full">
                    <img
                        src={showtimeDeatils.movieId?.bannerImageUrl}
                        className="w-full h-full object-cover blur-xs"
                    ></img>
                </div>
                <div className="w-full h-full absolute top-0 inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent flex justify-center items-end">
                    <div className="flex items-start gap-5 pb-7">
                        <div>
                            <img
                                src={showtimeDeatils.movieId?.posterImageUrl}
                                width={"122px"}
                                className="rounded-xs"
                            ></img>
                        </div>
                        <div>
                            <p className="bg-blue-300 text-black mb-1.5 rounded-xs text-[10px] font-semibold p-1 inline">
                                COMPLETED
                            </p>
                            <p className="text-[29px] font-medium">
                                {showtimeDeatils.movieId?.title}
                            </p>
                            <p className="text-[15px]">
                                {showtimeDeatils.cinemaId?.cinemaName}:{" "}
                                <span>{showtimeDeatils.screenId?.screenName}</span>
                            </p>
                            <p className="text-[15px] mb-2">
                                {formatShowDate(showtimeDeatils.date)}{" "}
                                {formatToTime12h(showtimeDeatils.time)}
                            </p>
                            <div className="flex items-center gap-1 flex-wrap w-[80%]">
                                {Object.keys(showtimeDeatils.ticketPrices ?? {}).map(
                                    (key: string, index: number) => (
                                        <p
                                            key={index}
                                            className="text-[12px] text-black/80 px-1 py-0.5 bg-gray-200 rounded-xs inline"
                                        >
                                            {key}: <span>{showtimeDeatils.ticketPrices[key]}</span>
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Tabs */}
            <div>
                <div className="w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1">
                    <div className="bg-[#E0E0E0] w-[24%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">Seats</p>
                        <img src={arrow} width={"45px"} className="translate-x-9 hidden" />
                    </div>

                    <div className="bg-[#E0E0E0] w-[24%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">
                            Tickets
                        </p>
                        <img src={arrow} width={"45px"} className="translate-x-9 hidden" />
                    </div>

                    <div className="bg-[#E0E0E0] w-[26%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">
                            Payment
                        </p>
                        <img src={arrow} width={"45px"} className="translate-x-9 hidden" />
                    </div>

                    <div className="bg-[#1e1e1e] w-[26%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-white/95">
                            Confirmation
                        </p>
                        <img src={arrow} width={"45px"} className="translate-x-9" />
                    </div>
                </div>

                <div className="px-15 mt-20 mb-5 flex justify-center items-center">
                    <div className="w-[420px] px-5 rounded-sm flex flex-col items-center bg-gradient-to-b from-[#1f1f1f] to-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.7)] px-6 pb-1 border-white/10">

                        {/* Animated Success Icon */}
                        <div className="mx-auto mb-8 w-[96px] h-[96px] relative mt-5">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                {/* Background ring */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="rgba(34,197,94,0.25)"
                                    strokeWidth="6"
                                    fill="none"
                                />

                                {/* Animated ring */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#22c55e"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="283"
                                    strokeDashoffset="60"
                                    className="animate-[dash_1.2s_ease-out_forwards]"
                                />

                                {/* Check mark */}
                                <path
                                    d="M34 52 L46 64 L68 38"
                                    fill="none"
                                    stroke="#22c55e"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="-translate-y-9 flex flex-col items-center mt-6">
                            {/* <h2 className="text-[30px] font-light mb-2 tracking-wide font-[SourceSans]">
                                2300 LKR
                            </h2> */}
                            <h2 className="text-[22px] font-medium mb-2 tracking-wide font-sans italic">
                                Booking Successfull
                            </h2>
                            <p className="text-[13px] text-white/90 mb-8 text-center w-[85%] font-medium italic">
                                Hey, seems like there was some trouble. We are there with you. just hold back
                            </p>
                            <p className="text-[12px] text-gray-400 mb-8 text-center">
                                Payment ID: 123456789,24 Oct 2025-11:55PM
                            </p>
                            <p className="text-[13px] text-gray-400 mb-8 italic">
                                Back to home page {'>'}
                            </p>
                        </div>

                        {/* Animation */}
                        <style jsx>{`
    @keyframes dash {
      from {
        stroke-dashoffset: 283;
      }
      to {
        stroke-dashoffset: 60;
      }
    }
  `}</style>

                    </div>
                </div>

                {/* <div className="mx-auto mt-10 translate-y-2.5">
                    <p className="text-white/90 italic font-mono text-center text-[15px]">here is your ticket</p>
                </div> */}

                <div className="w-[40px] h-[80px] mx-auto">
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        fill="none"
                    >
                        {/* Arrow stem */}
                        <line
                            x1="50"
                            y1="20"
                            x2="50"
                            y2="60"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="animate-arrow-stem"
                        />

                        {/* Arrow head */}
                        <polyline
                            points="35,50 50,65 65,50"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-arrow-head"
                        />
                    </svg>
                </div>

                {/* Ticket Section */}
                <div className="px-15 mt-5 mb-7 flex justify-center items-center">
                    <div className="px-5 rounded-sm flex flex-col items-center relative">

                        {/* Your exact ticket design */}
                        <div className="mx-auto mb-6 relative w-[730px] h-[293px] z-10 animate-fade-in bg-transparent" style={{ animationDelay: '0.3s' }}>
                            <img src={tk} className="w-full h-full object-cover opacity-80" alt="ticket" />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex font-mono" style={{ padding: '40px 20px 40px 70px' }}>
                                <div className="flex-1 flex flex-col justify-between pr-6">
                                    <div className="space-y-1">
                                        <h1 className="text-[30px] font-extrabold leading-none tracking-tight text-white font-mono">
                                            ZOOTOPIA 2
                                        </h1>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-16 bg-gradient-to-r from-white to-transparent"></div>
                                            <span className="text-[9px] font-bold tracking-[0.2em] text-white/50">CONFIRMED</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-0.5">
                                            <p className="text-[11px] font-bold tracking-wide text-white/50 uppercase">Venue</p>
                                            <p className="text-[17.5px] font-bold text-white leading-tight font-mono">Scope Cinema</p>
                                            <p className="text-[12px] text-white/80 leading-tight">One Galle Face Mall, Colombo</p>
                                            <p className="text-[11px] text-white/70">Screen 02</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="space-y-0.5">
                                            <p className="text-[9px] font-bold tracking-wide text-white/50 uppercase">Date & Time</p>
                                            <p className="text-[14px] font-bold text-white">Sat, 01 Dec</p>
                                            <p className="text-[13px] text-white/90 font-medium">7:30 PM</p>
                                        </div>

                                        <div className="space-y-0.5">
                                            <p className="text-[9px] font-bold tracking-wide text-white/50 uppercase">Seats</p>
                                            <div className="flex gap-1.5 flex-wrap">
                                                <span className="inline-block bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded text-[13px] font-bold text-white">A5</span>
                                                <span className="inline-block bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded text-[13px] font-bold text-white">A6</span>
                                                <span className="inline-block bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded text-[13px] font-bold text-white">B1</span>
                                            </div>
                                        </div>

                                        <div className="space-y-0.5">
                                            <p className="text-[9px] font-bold tracking-wide text-white/50 uppercase">Tickets</p>
                                            <p className="text-[12px] text-white/90">ODC × 2</p>
                                            <p className="text-[12px] text-white/90">BOX × 1</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[8px] font-mono text-white/40 tracking-wider">ID: BK-2025-001234</p>
                                    </div>
                                </div>

                                <div className="w-[165px] border-l-[2.5px] border-dashed border-white/15 pl-5 flex flex-col items-center justify-between py-1">
                                    <div className="flex flex-col items-center pt-2">
                                        <div className="w-[42px] h-[42px] mb-2">
                                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                                                <circle cx="50" cy="50" r="48" fill="rgba(34, 197, 94, 0.1)" />
                                                <circle cx="50" cy="50" r="42" stroke="#22c55e" strokeWidth="4" fill="none" />
                                                <path
                                                    d="M32 50 L44 62 L68 38"
                                                    fill="none"
                                                    stroke="#22c55e"
                                                    strokeWidth="5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-[10px] font-black tracking-[0.25em] text-green-400">PAID</p>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-[26px] font-black text-white leading-none">4,300</p>
                                        <p className="text-[10px] font-bold text-white/60 tracking-wider">LKR</p>
                                    </div>

                                    <div className="text-center pb-2">
                                        <p className="text-[8px] font-bold tracking-wider text-white/40 uppercase mb-1">Booked On</p>
                                        <p className="text-[11px] font-bold text-white/90">01 Dec 2025</p>
                                        <p className="text-[10px] text-white/70">6:55 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home */}
                        {/* <div className="flex flex-col items-center gap-3 z-10">
                            <button className="text-[14px] text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 italic font-light">
                                ← Back to home page
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                @keyframes scale-in {
                    from {
                        transform: scale(0);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                @keyframes slide-up {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes ping-slow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0;
                    }
                }
                @keyframes draw-circle {
                    from {
                        stroke-dasharray: 0 251;
                    }
                    to {
                        stroke-dasharray: 251 251;
                    }
                }
                @keyframes draw-check {
                    from {
                        stroke-dasharray: 0 60;
                    }
                    to {
                        stroke-dasharray: 60 60;
                    }
                }
                @keyframes sparkle {
                    0%, 100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.3) rotate(180deg);
                        opacity: 0.5;
                    }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
                .animate-scale-in {
                    animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .animate-slide-up {
                    animation: slide-up 0.6s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-draw-circle {
                    animation: draw-circle 0.6s ease-out forwards;
                    animation-delay: 0.2s;
                    stroke-dasharray: 0 251;
                }
                .animate-draw-check {
                    animation: draw-check 0.4s ease-out forwards;
                    animation-delay: 0.6s;
                    stroke-dasharray: 0 60;
                }
                .animate-sparkle {
                    animation: sparkle 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default BookingSuccess;