import React, { useState, useEffect } from 'react';

import { X } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'

const SignUp = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    function handleCloseSignUpModel() {
        setIsVisible(false);
        setTimeout(() => props.setSignUpVisible(false), 150);
    }

    function handleOpenSignUpModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setSignUpVisible(false);
            props.setSignInVisible(true);
        }
            , 0);
    }

    return (
        <div className={`overflow-y-auto overflow-x-hidden fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <X onClick={handleCloseSignUpModel} className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3 absolute left-0.5 top-0.5">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'55px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Register your cinema</p>
                </div>

                <form className='flex flex-col gap-4 font-[Poppins] pt-7'>

                    <input type='text' placeholder='Cinema name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <textarea placeholder='Description' rows={5} className='w-[440px] px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></textarea>
                    <input type='email' placeholder='Cinema email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Cinema phone number' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Address' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-2'>
                        <input type='text' placeholder='City' className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input type='text' placeholder='Distric' className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    </div>
                    <input type='text' placeholder='Post code' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Google map link' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Website (Optional)' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Number of screen' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-3'>
                        <p className='text-[14.8px] font-normal'>Choose cinema image</p>
                        <input type='file' className='text-[14.5px] text-[#616161] w-[200px]'></input>
                    </div>
                    <input type='text' placeholder='Business register no' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-3'>
                        <p className='text-[14.8px] font-normal'>Bussiness register documents</p>
                        <input type='file' className='text-[14.5px] text-[#616161] w-[200px]'></input>
                    </div>

                    <hr className='my-7 mb-2 border-white/30'></hr>

                    <p className='mb-3'>Cinema Owner Details</p>

                    <input type='email' placeholder='Owner email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Owner name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Owner nic number' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-3'>
                        <p className='text-[14.8px] font-normal'>National Id document</p>
                        <input type='file' className='text-[14.5px] text-[#616161] w-[200px]'></input>
                    </div>

                    <hr className='my-7 mb-2 border-white/30'></hr>

                    <p className=''>Cinema Admin Details</p>
                    <p className='w-[440px] text-[12.5px] text-[#9E9E9E] -translate-y-1.5 mb-1'>Please note that after registration, access to manage your cinema will be available only through the admin email and password.</p>

                    <input type='email' placeholder='Email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='First name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Last name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div>
                        <input type='password' placeholder='Password' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <p className='text-[12px] text-[#9E9E9E] mt-1.5 mb-0.5'>Minimum of 6 characters</p>
                    </div>

                    <div className='w-[440px] mt-5 mb-4 flex flex-col gap-2.5'>
                        <div className='flex items-start gap-3'>
                            <input type='checkbox' className='w-5 h-5'></input>
                            <p className='text-[14.5px] text-[#9E9E9E]'>Yes, I would like to receive offers from SYNEMA</p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <input type='checkbox' className='w-6 h-6'></input>
                            <p className='text-[14.5px] text-[#9E9E9E]'>I have read and agree to the Terms & Conditions and Privacy Policy</p>
                        </div>
                    </div>
                    <button className='w-[440px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3'>Sign up</button>
                </form>

                <div className='-translate-y-1 pb-6'>
                    <p className='font-[Poppins] text-[14.5px] text-[#999]'>Already have an account? <span onClick={handleOpenSignUpModel} className='text-red-700 cursor-pointer'>Sign In</span></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;