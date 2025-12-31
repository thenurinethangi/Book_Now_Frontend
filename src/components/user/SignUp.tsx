import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'
import { Link } from 'react-router-dom';
import { getAllCinemas } from '../../services/user/cinemaService';
import { signUp } from '../../services/user/authService';

const SignUp = (props: any) => {

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
        loadAllCinemas();
        setTimeout(() => setIsVisible(true), 10);
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

    function handleCloseSignUpModel() {
        setIsVisible(false);
        setTimeout(() => props.setSignUpVisible(false), 150);
    }

    function handleOpenSignInModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setSignInVisible(true);
            props.setSignUpVisible(false);
        }, 150);
    }

    async function handleUserSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('email', email);
        formdata.append('password', password);
        formdata.append('firstName', firstName);
        formdata.append('lastName', lastName);
        formdata.append('mobile', mobile);
        formdata.append('dateOfBirth', dateOfBirth);
        formdata.append('postCode', postCode);
        formdata.append('gender', gender);
        formdata.append('primaryCinema', primaryCinema);

        try {
            const res = await signUp(formdata);
            console.log(res.data.data);

            setIsVisible(false);
            setTimeout(() => {
                props.setSignUpVisible(false);
                props.setUserEmail(res.data.data.email);
                props.setOtpVisible(true);
            }, 150);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={`fixed inset-0 min-h-screen w-screen bg-black/40 backdrop-blur-md text-white overflow-x-hidden flex justify-end items-center z-[200] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <X onClick={handleCloseSignUpModel} className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Create a new account</p>
                </div>

                <form onSubmit={handleUserSignUp} className='flex flex-col gap-4 font-[Poppins]'>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <p className='text-[12px] text-[#9E9E9E] mt-1.5 mb-0.5'>Minimum of 6 characters</p>
                    </div>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' placeholder='First name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' placeholder='Last name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input onChange={(e) => setMobile(e.target.value)} value={mobile} type='text' placeholder='Phone no' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <div className='flex items-center gap-2'>
                        <input onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} type='text' placeholder='Date of birth(MM/YYYY)' required className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input onChange={(e) => setPostCode(e.target.value)} value={postCode} type='text' placeholder='Post code' required className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    </div>
                    <div className='mt-3'>
                        <p className='text-[14px] text-white/90 mb-4'>How do you identify?</p>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="female" required className="sex w-[22px] h-[22px] bg-[#353535]" /> Female</label>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="male" required className="sex w-[22px] h-[22px] bg-[#353535]" /> Male</label>
                        <label className='text-[14.5px] block flex items-center gap-4 mb-3'><input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="other" required className="sex w-[22px] h-[22px] bg-[#353535]" /> Other</label>
                    </div>
                    <div className='mt-0.5'>
                        <select onChange={(e) => setPrimaryCinema(e.target.value)} value={primaryCinema} required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'>
                            <option value={''}>Preferred cinema</option>
                            {cinemaList.map((cinema: any, index: number) => (
                                <option key={index} value={cinema.cinemaName}>{cinema.cinemaName}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-[440px] mt-5 mb-4 flex flex-col gap-2.5'>
                        <div className='flex items-start gap-3'>
                            <input type='checkbox' required className='w-5 h-5'></input>
                            <p className='text-[14.5px] text-[#9E9E9E]'>Yes, I would like to receive offers from SYNEMA</p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <input type='checkbox' required className='w-6 h-6'></input>
                            <p className='text-[14.5px] text-[#9E9E9E]'>I have read and agree to the Terms & Conditions and Privacy Policy</p>
                        </div>
                    </div>
                    <button className='w-[440px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3'>Sign up</button>
                </form>

                <div className='-translate-y-1'>
                    <p className='font-[Poppins] text-[14.5px] text-[#999]'>Already have an account? <span onClick={handleOpenSignInModel} className='text-red-700 cursor-pointer'>Sign In</span></p>
                </div>

                <div className='w-[440px] mt-7'>
                    <p className='font-[Poppins] text-[12px] text-center text-[#999] pb-1.5'>Own a cinema? <Link to={'/cinema/landing'}><span className='text-red-700'>Register now</span></Link> and manage screens, showtimes, and ticket bookings all in one place with SYNEMA.</p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;