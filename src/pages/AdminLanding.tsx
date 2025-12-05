import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Clapperboard, ChartLine, UsersRound, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'
import SignIn from '../components/admin/SignIn';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdminLanding: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Movie Management",
      description: "Add, edit, and manage your movie catalog with ease"
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: "User Analytics",
      description: "Track user engagement and booking patterns"
    },
    {
      icon: <ChartLine className="w-8 h-8" />,
      title: "Revenue Insights",
      description: "Monitor sales and optimize pricing strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80')`, }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[#121212]/90 to-purple-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 pl-5 pt-1 ">
          <div className="flex items-center space-x-3 ml-4">
            <div className="flex items-center justify-center z-10">
              <img src={logo2} width={'78px'}></img>
            </div>
          </div>
          <div className="flex items-center space-x-3 -translate-y-2">
            <User className="w-5 h-5 text-red-900 animate-pulse" />
            <span onClick={(e) => setShowSignin(true)} className="text-sm text-gray-400 cursor-pointer">Login</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className={`relative z-10 flex flex-col items-center justify-start h-[calc(100vh-100px)] px-4 pt-9 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-4xl mx-auto">
            {/* <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-sm text-purple-300 font-medium">✨ Welcome to the Future of Cinema Management</span>
            </div> */}

            <h1 className="text-[40px] md:text-[50px] font-black mb-6 leading-tight font-[Poppins]">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                SYNEMA <span className='font-medium'>ADMIN CENTER</span>
              </span>
            </h1>

            <p className="text-xl md:text-[23px] text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-[Poppins]">
              Log in or register to access your powerful admin dashboard and manage your cinema booking platform with cutting-edge tools
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button onClick={(e) => setShowSignin(true)} className="group relative px-[23px] py-[14px] bg-transparent rounded-md border-r-[1.5px] border-b-[1.5px] border-t-[1.5px] border-l-[1.5px] font-medium text-[16px] font-[Poppins] shadow-2xl shadow-red-500/50 hover:shadow-red-500/60 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Login to Dashboard</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300">
                Create Account
              </button> */}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">System Online</span>
              </div>
              <div className="text-gray-400">
                <span className="text-red-700 font-bold">10K+</span> Bookings Today
              </div>
              <div className="text-gray-400">
                <span className="text-red-700 font-bold">500+</span> Active Theaters
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-gray-400">Explore Features</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-8 py-24 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[47px] font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent font-[Poppins]">
              Powerful Admin Tools
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to run a successful cinema business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 px-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-4 text-red-900 group-hover:text-red-400 transition-all ease-in duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-medium mb-2 font-[Poppins]">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-[Poppins] w-[87%]">{feature.description}</p>

                {/* Hover Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 font-[Poppins] pt-15">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 ml-1">
                <div className="flex items-center justify-center z-10">
                  <img src={logo2} width={'80px'} alt="logo"></img>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The most advanced cinema booking management platform for modern theaters.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-md flex items-center justify-center transition-all duration-300 group">
                  <Facebook className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-md flex items-center justify-center transition-all duration-300 group">
                  <Twitter className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-md flex items-center justify-center transition-all duration-300 group">
                  <Instagram className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-md flex items-center justify-center transition-all duration-300 group">
                  <Youtube className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Dashboard', 'Movies', 'Analytics', 'Settings', 'Documentation'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-red-700 transition-colors text-sm flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'API Documentation', 'Community', 'Contact Us', 'Report Bug'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-red-700 transition-colors text-sm flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                  <span>admin@booknow.com</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                  <span>123 Cinema Street<br />Los Angeles, CA 90028</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 BookNow. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      { showSignin ? <SignIn setShowSignin={setShowSignin} /> : '' }

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
};

export default AdminLanding;