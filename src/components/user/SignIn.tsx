import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUserData, signIn } from '../../services/user/authService';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/authContext';

const SignIn: React.FC = (props: any) => {

    const navigate = useNavigate();

    const { setUser } = useAuth()

    const [isVisible, setIsVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    function handleCloseSignInModel() {
        setIsVisible(false);
        setTimeout(() => props.setSignInVisible(false), 150);
    }

    function handleOpenSignUpModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setSignUpVisible(true);
            props.setSignInVisible(false);
        }, 150);
    }

    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('email', email);
        formdata.append('password', password);
        formdata.append('role', 'USER');

        try {
            const res = await signIn(formdata);
            localStorage.setItem('accessToken', res.data.data);

            const res2 = await getCurrentUserData();
            console.log(res2.data.data);
            setUser(res2.data.data);

            setIsVisible(false);
            setTimeout(() => {
                props.setSignInVisible(false);
                props.setUserEmail('');
            }, 150);
            toast.success('Successfully Sign In!');
        }
        catch (err: unknown) {
            if (err instanceof AxiosError) {
                toast.error(err.response?.data?.message);

                if (
                    err.response?.status === 401 &&
                    err.response?.data?.message === 'Authentication failed, verify your email!'
                ) {
                    setIsVisible(false);
                    setTimeout(() => {
                        props.setSignInVisible(false);
                        props.setOtpVisible(true);
                        props.setUserEmail(err.response?.data?.data?.email);
                    }, 150);
                }
            } else {
                console.error(err);
                toast.error("Something went wrong");
            }
        }
    }

    return (
        <div className={`fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-[200] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                <X onClick={handleCloseSignInModel} className='absolute right-7 top-4.5 w-5.5 h-5.5 opacity-90 cursor-pointer' />

                <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Sign in to your account</p>
                </div>

                <form onSubmit={handleSignIn} className='flex flex-col gap-4 font-[Poppins]'>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <button className='w-[440px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3 cursor-pointer'>Sign in</button>
                </form>

                <div className='-translate-y-1'>
                    <p className='font-[Poppins] text-[14.5px] text-[#999]'>Forgot password? <span className='text-red-700 cursor-pointer'>Get help now</span></p>
                    <p className='font-[Poppins] text-[14.5px] text-[#999]'>Don't have an account? <span onClick={handleOpenSignUpModel} className='text-red-700 cursor-pointer'>Sign Up</span></p>
                </div>

                <div className='w-[440px] mt-14'>
                    <p className='font-[Poppins] text-[12px] text-center text-[#999]'>Own a cinema? <Link to={'/cinema/landing'}><span className='text-red-700'>Register now</span></Link> and manage screens, showtimes, and ticket bookings all in one place with SYNEMA.</p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;