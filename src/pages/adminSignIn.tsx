import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'

const AdminSignin = (props: any) => {

    const [isVisible, setIsVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 10);
    }, []);

    function handleCloseModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setShowSignin(false);
        }, 150);
    }

    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(email)
        console.log(password);

        const formdata = new FormData();
        formdata.append('email', email);
        formdata.append('password', password);

        try {
            const res = await signIn(formdata);
            localStorage.setItem('accessToken', res.data.data);

            navigate('/cinema/home');
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
                        props.setAuthVisible(true);
                        props.setAuthType('OTP');
                        props.setCinemaAdminEmail(err.response?.data?.data?.email);
                    }, 150);
                }
            } else {
                console.error(err);
                toast.error("Something went wrong");
            }
        }
    }


    return (
        <div className={`min-h-screen w-screen text-white overflow-hidden flex justify-end items-center absolute top-0 z-[100] fixed inset-0 bg-black/40 backdrop-blur-md ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
            <div className={`h-screen p-10 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative ${isVisible ? 'translate-x-0' : 'translate-x-20'} transition-all duration-300`}>

                <X onClick={handleCloseModel} className='absolute right-7.5 top-4.5 w-5.5 h-5.5 cursor-pointer' />

                <div className="flex justify-center items-center space-x-3 mt-2">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'120px'}></img>
                    </div>
                </div>

                <div>
                    <p className='text-[20px] font-[Poppins] font-medium pt-2'>Sign in to your account</p>
                </div>

                <form className='flex flex-col gap-4 font-[Poppins]'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required className='w-[450px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required className='w-[450px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
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