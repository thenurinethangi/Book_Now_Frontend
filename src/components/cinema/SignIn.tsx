import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'

const SignIn = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
            setTimeout(() => setIsVisible(true), 10);
        }, []);

    function handleCloseSignInModel(){
        setIsVisible(false);
        setTimeout(() => props.setSignInVisible(false), 150);
    }

    function handleOpenSignUpModel(){
        setIsVisible(false);
        setTimeout(() => {
            props.setSignInVisible(false);
            props.setSignUpVisible(true);
        }
        , 0);
    }

    return (
        <div className={`overflow-y-auto overflow-x-hidden fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <X onClick={handleCloseSignInModel} className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3 mt-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
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
                    <p className='font-[Poppins] text-[15.5px] text-[#999]'>Don't have an account? <span onClick={handleOpenSignUpModel} className='text-red-700 cursor-pointer'>Sign Up</span></p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;