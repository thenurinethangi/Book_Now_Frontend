import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import alert from '../../../assets/images/alert (1).png'
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const TimeOutModel = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);


    return (
        <div className={`fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-center items-center z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-[350px] w-[420px] py-10 px-8 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-500 ${isVisible ? "scale-100" : "scale-0"}`}>

                <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={alert} width={'50px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[17px] font-[Poppins] text-white tracking-wide'>Sorry, you session has timed out!</p>
                </div>

                <div className='w-[95%] mb-2'>
                    <p className='text-[13px] font-[Poppins] text-gray-400 text-center'>Your 5-minute time limit to complete the booking has expired. You will need to start the process again from the beginning. Please ensure you complete your booking within 5 minutes, or your session will time out.</p>
                </div>

                <div>
                    <button onClick={ (e) => props.restartBooking()} className='text-black bg-white py-2 px-7 text-[14px] rounded-xs tracking-widest'>START AGAIN</button>
                </div>

            </div>
        </div>
    );
};

export default TimeOutModel;