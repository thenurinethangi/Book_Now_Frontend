import React, { useState, useEffect, useRef } from 'react';

import Navigation from '../components/user/Navigation';
import Hero from '../components/user/home/Hero';
import Tabs from '../components/user/home/Tabs';
import MoviesContainer from '../components/user/home/MoviesContainer';
import Footer from '../components/user/Footer';
import SignIn from '../components/user/SignIn';

function Home() {

    const [signInVisible,setSignInVisible] = useState(false);

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative'>

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} />

            {/* hero */}
            <Hero />

            {/* tabs */}
            <Tabs />

            {/* movie container */}
            <MoviesContainer />

            {/* Footer */}
            <Footer />

            {/* sign in model */}
            { signInVisible ?  <SignIn setSignInVisible={setSignInVisible} /> : ''}

        </div>
    )
}

export default Home