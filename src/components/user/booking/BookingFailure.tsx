import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import arrow from "../../../assets/images/play (5).png";
import Navigation from "../../../components/user/Navigation";
import { useParams } from "react-router-dom";
import SignIn from "../../../components/user/SignIn";
import SignUp from "../../../components/user/SignUp";
import OTPModel from "../../../components/user/OTPModel";
import { getShowtimeDetailsById } from "../../../services/user/showtimeService";
import { getShowtimeDetailsByPaymentId } from "../../../services/user/paymentService";

function BookingFailure() {

    const { id } = useParams();
    console.log('-------', id);

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const [showtimeDeatils, setShowtimeDeatils] = useState<any>({});
    const [data, setData] = useState<any>({});

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

    function formatToTime12h(dateString: string) {
        const date = new Date(dateString);

        return date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
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

            <div>
                <div className="w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1">
                    <div className="bg-[#E0E0E0] w-[24%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">Seats</p>
                        <img src={arrow} width={"45px"} className="translate-x-9 hidden"></img>
                    </div>

                    <div className="bg-[#E0E0E0] w-[24%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">
                            Tickets
                        </p>
                        <img
                            src={arrow}
                            width={"45px"}
                            className="translate-x-9 hidden"
                        ></img>
                    </div>

                    <div className="bg-[#E0E0E0] w-[26%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-black">
                            Payment
                        </p>
                        <img
                            src={arrow}
                            width={"45px"}
                            className="translate-x-9 hidden"
                        ></img>
                    </div>

                    <div className="bg-[#1e1e1e] w-[26%] flex items-center justify-end">
                        <p className="w-[80%] text-center text-[14px] font-medium text-white/95">
                            Confirmation
                        </p>
                        <img
                            src={arrow}
                            width={"45px"}
                            className="translate-x-9"
                        ></img>
                    </div>
                </div>

                <div className="px-15 mt-20 mb-5 flex justify-center items-center">
                    <div className="w-[420px] px-5 rounded-sm flex flex-col items-center bg-gradient-to-b from-[#1f1f1f] to-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.7)] px-6 pb-1 border-white/10">
                        {/* Animated Error Icon */}
                        <div className="mx-auto mb-6 w-[96px] h-[96px] relative mt-5">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="rgba(239,68,68,0.25)"
                                    strokeWidth="6"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="283"
                                    strokeDashoffset="60"
                                    className="animate-[dash_1.2s_ease-out_forwards]"
                                />
                                <line
                                    x1="35"
                                    y1="35"
                                    x2="65"
                                    y2="65"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="65"
                                    y1="35"
                                    x2="35"
                                    y2="65"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="-translate-y-9 flex flex-col items-center mt-6">
                            {/* <h2 className="text-[30px] font-light mb-2 tracking-wide font-[SourceSans]">
                                2300 LKR
                            </h2> */}
                            <h2 className="text-[22px] font-medium mb-2 tracking-wide font-sans italic">
                                Payment Failed
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

            </div>

            {/* sign in model */}
            {signInVisible ? (
                <SignIn
                    setSignInVisible={setSignInVisible}
                    setSignUpVisible={setSignUpVisible}
                    setOtpVisible={setOtpVisible}
                    setUserEmail={setUserEmail}
                />
            ) : (
                ""
            )}

            {/* sign up model */}
            {signUpVisible ? (
                <SignUp
                    setSignInVisible={setSignInVisible}
                    setSignUpVisible={setSignUpVisible}
                    setOtpVisible={setOtpVisible}
                    setUserEmail={setUserEmail}
                />
            ) : (
                ""
            )}

            {/* otp model */}
            {otpVisible ? (
                <OTPModel
                    setOtpVisible={setOtpVisible}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    setSignInVisible={setSignInVisible}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default BookingFailure;
