import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/images/camera-roll-removebg-preview.png'
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'
import { getAllCinemas } from '../services/user/cinemaService';

const UserSignup: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);

    const [cinemaList, setCinemaList] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [postCode, setPostCode] = useState('');
    const [gender, setGender] = useState('');
    const [primaryCinema, setPrimaryCinema] = useState('');

    useEffect(() => {
        setIsVisible(true);
        loadAllCinemas();
    }, []);

    async function loadAllCinemas() {
        try {
            const res = await getAllCinemas();
            console.log(res.data.data);
            setCinemaList(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="min-h-screen w-screen bg-[#121212] text-white overflow-x-hidden flex justify-end items-center">
            <div className='h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative'>

                <X className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Create a new account</p>
                </div>

                <form className='flex flex-col gap-4 font-[Poppins]'>
                    <input type='email' placeholder='Email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div>
                        <input type='password' placeholder='Password' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <p className='text-[12px] text-[#9E9E9E] mt-1.5 mb-0.5'>Minimum of 6 characters</p>
                    </div>
                    <input type='text' placeholder='First name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Last name' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input type='text' placeholder='Phone no' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-2'>
                        <input type='text' placeholder='Date of birth(MM/YYYY)' className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input type='text' placeholder='Post code' className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    </div>
                    <div className='mt-3'>
                        <p className='text-[14px] text-white/90 mb-4'>How do you identify?</p>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input type="radio" name="gender" value="female" className="sex w-[22px] h-[22px] bg-[#353535]" /> Female</label>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input type="radio" name="gender" value="male" className="sex w-[22px] h-[22px] bg-[#353535]" /> Male</label>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input type="radio" name="gender" value="other" className="sex w-[22px] h-[22px] bg-[#353535]" /> Other</label>
                    </div>
                    <div className='mt-0.5'>
                        <select className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'>
                            <option>Preferred cinema</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
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

                <div className='-translate-y-1'>
                    <p className='font-[Poppins] text-[14.5px] text-[#999]'>Already have an account? <span className='text-red-700'>Sign In</span></p>
                </div>

                <div className='w-[440px] mt-7'>
                    <p className='font-[Poppins] text-[12px] text-center text-[#999] pb-1.5'>Own a cinema? <span className='text-red-700'>Register now</span> and manage screens, showtimes, and ticket bookings all in one place with SYNEMA.</p>
                </div>

            </div>
        </div>
    );
};

export default UserSignup;