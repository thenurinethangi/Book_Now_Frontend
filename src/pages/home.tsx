import { useState, useEffect, useRef } from 'react';

import Navigation from '../components/user/Navigation';
import Hero from '../components/user/home/Hero';
import Tabs from '../components/user/home/Tabs';
import NowShowingMovies from '../components/user/home/NowShowingMovies';
import Footer from '../components/user/Footer';
import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';
import ComingSoonMovies from '../components/user/home/ComingSoonMovies';
import Trailers from '../components/user/home/Trailers';


function Home() {

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);

    const [tab, setTab] = useState('Now Showing');

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative'>

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} />

            {/* hero */}
            <Hero />

            {/* tabs */}
            <Tabs tab={tab} setTab={setTab} />

            {/* movie container */}
            {tab === 'Now Showing' ? <NowShowingMovies /> : ''}

            {/* movie container */}
            {tab === 'Coming Soon' ? <ComingSoonMovies /> : ''}

            {/* movie container */}
            <Trailers />

            {/* Footer */}
            <Footer />

            {/* sign in model */}
            {signInVisible ? <SignIn setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

            {/* sign in model */}
            {signUpVisible ? <SignUp setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

        </div>
    )
}

export default Home