import React, { useEffect, useState } from 'react'
import Navigation from '../components/user/Navigation'
import Footer from '../components/user/Footer';
import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';
import SingleCinemaHero from '../components/user/cinema/SingleCinemaHero';
import { useParams } from 'react-router-dom';
import { getCinemaDetailsById } from '../services/user/cinemaService';
import Showtimes from '../components/user/cinema/Showtimes';
import OTPModel from '../components/user/OTPModel';

function SingleCinemaPage() {

    const { id } = useParams();

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [tab, setTab] = useState('Sessions');

    const [cinema, setCinema] = useState(null);

    useEffect(() => {
        loadCinemaDetailsById();
    }, []);

    async function loadCinemaDetailsById() {

        if (!id) {
            return;
        }

        try {
            const res = await getCinemaDetailsById(id);
            console.log('cinema details', res.data.data);
            setCinema(res.data.data);
        }
        catch (e) {
            console.log(e);
        }

    }

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative'>

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} page={'cinema'} />

            {/* hero */}
            <SingleCinemaHero cinema={cinema} />

            {/* tabs */}
            <div className='mt-7 px-8 sm:px-15 flex items-center whitespace-nowrap'>
                <div className='flex flex-wrap items-center'>
                    <div onClick={(e) => setTab('Sessions')} className={`px-2.5 pb-2 text-[22px] font-medium cursor-pointer ${tab === 'Sessions' ? 'border-b-2 border-[#ff2e38] opacity-95' : 'opacity-70'}`}>Sessions</div>
                    <div onClick={(e) => setTab('Offers & Events')} className={`px-2.5 pb-2 opacity-70 text-[22px] font-medium cursor-pointer ${tab === 'Offers & Events' ? 'border-b-2 border-[#ff2e38] opacity-95' : 'opacity-70'}`}>Offers & Events</div>
                    <div onClick={(e) => setTab('About')} className={`px-2.5 pb-2 opacity-70 text-[22px] font-medium cursor-pointer ${tab === 'About' ? 'border-b-2 border-[#ff2e38] opacity-95' : 'opacity-70'}`}>About</div>
                </div>
            </div>

            <Showtimes id={id} />

            {/* Footer */}
            <Footer />

            {/* sign in model */}
            {signInVisible ? <SignIn setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} setOtpVisible={setOtpVisible} setUserEmail={setUserEmail} /> : ''}

            {/* sign in model */}
            {signUpVisible ? <SignUp setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} setOtpVisible={setOtpVisible} setUserEmail={setUserEmail} /> : ''}

            {/* otp model */}
            {otpVisible ? <OTPModel setOtpVisible={setOtpVisible} userEmail={userEmail} setUserEmail={setUserEmail} setSignInVisible={setSignInVisible} /> : ''}

        </div>
    )
}

export default SingleCinemaPage