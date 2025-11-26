import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/images/camera-roll-removebg-preview.png'
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'

const UserSignin: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen w-screen bg-[#121212] text-white overflow-hidden flex justify-end items-center">
            <div className='h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative'>

                <X className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3 mt-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
                    {/* <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[25px] font-[Luckiest Guy] font-semibold -translate-x-20 z-0">
                        <span className='text-[29px] font-[Luckiest Guy] font-semibold'>B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OOKNOW
                    </span> */}
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Sign in to your account</p>
                </div>

                <form className='flex flex-col gap-4 font-[Poppins]'>
                    <input type='email' placeholder='Email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='password' placeholder='Password' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <button className='w-[440px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3'>Sign in</button>
                </form>

                <div>
                    <p className='font-[Poppins] text-[15.5px] text-[#999]'>Forgot password? <span className='text-red-700'>Get help now</span></p>
                    <p className='font-[Poppins] text-[15.5px] text-[#999]'>Don't have an account? <span className='text-red-700'>Sign Up</span></p>
                </div>

                <div className='w-[450px] mt-14'>
                    <p className='font-[Poppins] text-[12px] text-center text-[#999]'>Own a cinema? <span className='text-red-700'>Register now</span> and manage screens, showtimes, and ticket bookings all in one place with SYNEMA.</p>
                </div>

            </div>
        </div>
    );
};

export default UserSignin;