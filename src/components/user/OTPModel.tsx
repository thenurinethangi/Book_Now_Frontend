import React, { useEffect, useState } from 'react'
import { X, Mail } from "lucide-react";
import { toast } from 'react-toastify';
import { sendOTP, verifyUser } from '../../services/cinema/auth';

function OTPModel(props: any) {

    const [isVisible, setIsVisible] = useState(false);

    const [otp, setOtp] = useState(0);

    const [no1, setno1] = useState('');
    const [no2, setno2] = useState('');
    const [no3, setno3] = useState('');
    const [no4, setno4] = useState('');
    const [no5, setno5] = useState('');
    const [no6, setno6] = useState('');

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);

        async function fetchOTP() {
            const res = await sendOTP(props.userEmail);
            setOtp(res.data.data);
        }

        fetchOTP();
    }, []);

    function handleOtpModelClose() {
        setIsVisible(false);
        setTimeout(() => {
            props.setOtpVisible(false);
            props.setUserEmail('');
        }, 150);
    }

    async function handleOtpSubmit(e: Event) {
        e.preventDefault();

        if (no1 == '' || no2 == '' || no3 == '' || no4 == '' || no5 == '') {
            return;
        }

        const noStr = no1 + no2 + no3 + no4 + no5 + no6;
        const no = Number(noStr);

        if (otp == no) {

            try {
                const res = await verifyUser(props.userEmail);

                setIsVisible(false);
                setTimeout(() => {
                    props.setOtpVisible(false);
                    props.setUserEmail('');
                    props.setSignInVisible(true);
                }, 150);
            }
            catch (e) {
                toast.error('Verify failed, please try later!');
                setIsVisible(false);
                setTimeout(() => {
                    props.setOtpVisible(false);
                    props.setUserEmail('');
                }, 150);
            }
        }
        else {
            toast.error('Email verify fail, OTP incorrect!');
            setIsVisible(false);
            setTimeout(() => {
                props.setOtpVisible(false);
                props.setUserEmail('');
            }, 150);
        }
    }

    return (
        <form onSubmit={handleOtpSubmit} className={`font-[Poppins] overflow-y-auto overflow-x-hidden fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-center items-center shadow-lg p-6 z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className='bg-black text-white shadow-2xl flex flex-col items-center gap-5 w-[460px] rounded-lg relative' style={{ padding: '40px 30px' }}>
                <X onClick={handleOtpModelClose} className='absolute right-2 top-4 w-5 h-5 text-gray-400 cursor-pointer' />
                <div className='w-10.5 h-10.5 rounded-full bg-gray-200 flex justify-center items-center'>
                    <Mail className='w-6 h-6 text-red-500' />
                </div>
                <p className='text-[20px] text-center font-medium'>Check your email</p>
                <p className='text-[14.7px] text-center w-[92%]'>Enter the vertification code send to <span className='text-gray-400'>{props.userEmail}.</span></p>
                <div className='flex justify-center items-center gap-2.5'>
                    <input onChange={(e) => setno1(e.target.value)} value={no1} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                    <input onChange={(e) => setno2(e.target.value)} value={no2} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                    <input onChange={(e) => setno3(e.target.value)} value={no3} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                    <input onChange={(e) => setno4(e.target.value)} value={no4} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                    <input onChange={(e) => setno5(e.target.value)} value={no5} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                    <input onChange={(e) => setno6(e.target.value)} value={no6} className='w-[40px] border-[1.4px] border-gray-200 rounded-sm text-[22px] font-bold text-gray-500 text-center' style={{ padding: '8px', marginBottom: '1px', marginTop: '10px' }} type='text' maxLength={1} inputMode='numeric' pattern='[0-9]'></input>
                </div>
                <button className='w-[330px] bg-red-800 text-white rounded-[3px] text-[14.7px]' style={{ padding: '7.5px' }}>Submit</button>
            </div>
        </form>
    )
}

export default OTPModel