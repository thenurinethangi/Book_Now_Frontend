import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/images/camera-roll-removebg-preview.png'

const AdminSignin: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen w-screen bg-[#121212] text-white overflow-hidden flex justify-center items-center">
            <div className='h-screen p-10 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative'>

                <X className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3 translate-x-14 mt-22">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo} width={'50px'}></img>
                    </div>
                    <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[25px] font-[Luckiest Guy] font-semibold -translate-x-20 z-0">
                        <span className='text-[29px] font-[Luckiest Guy] font-semibold'>B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OOKNOW
                    </span>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium pt-3'>Sign in to your account</p>
                </div>

                <form className='flex flex-col gap-4 font-[Poppins]'>
                    <input type='email' placeholder='Email' className='w-[450px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='password' placeholder='Password' className='w-[450px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <button className='w-[450px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3'>Sign in</button>
                </form>

                <div>
                    <p className='font-[Poppins] text-[15.5px] text-[#999]'>Forgot password? <span className='text-red-700'>Get help now</span></p>
                </div>

            </div>
        </div>
    );
};

export default AdminSignin;