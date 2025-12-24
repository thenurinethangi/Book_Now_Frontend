import React, { useState } from 'react'
import Navigation from '../components/user/Navigation'
import Hero from '../components/user/aboutUs/Hero';
import Footer from '../components/user/Footer';
import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';

function AboutUsPage() {

    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative'>

            {/* navigation */}
            <Navigation setSignInVisible={setSignInVisible} />

            {/* hero */}
            <Hero />

            {/* Footer */}
            <Footer />

            {/* sign in model */}
            {signInVisible ? <SignIn setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

            {/* sign in model */}
            {signUpVisible ? <SignUp setSignInVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} /> : ''}

        </div>
    )
}

export default AboutUsPage