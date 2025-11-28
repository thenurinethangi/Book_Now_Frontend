import React, { useState, useEffect } from 'react';
import { Film, Calendar, DollarSign, Users, TrendingUp, Clock, Monitor, Ticket, ArrowRight, CheckCircle, Star, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Sparkles, BarChart3, Zap, Dot, Asterisk, Tags, Coins, ChartLine, TvMinimalPlay, TvMinimal } from 'lucide-react';
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'
import hero from '../assets/images/cinema-11.jpg'

const CinemaLanding = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: <TvMinimal className="w-8 h-8" />,
            title: "Screen Management",
            description: "Effortlessly manage multiple screens, layouts, and seating arrangements"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Showtime Control",
            description: "Schedule shows, manage timings, and optimize your daily operations"
        },
        {
            icon: <TvMinimalPlay className="w-8 h-8" />,
            title: "Movie Catalog",
            description: "Add and update movies, trailers, and promotional content instantly"
        },
        {
            icon: <Coins className="w-8 h-8" />,
            title: "Dynamic Pricing",
            description: "Set flexible ticket prices for different shows, seats, and peak hours"
        },
        {
            icon: <Tags className="w-8 h-8" />,
            title: "Online Bookings",
            description: "Accept bookings 24/7 through our seamless digital platform"
        },
        {
            icon: <ChartLine className="w-8 h-8" />,
            title: "Real-time Analytics",
            description: "Track revenue, occupancy rates, and customer insights live"
        }
    ];

    const benefits = [
        "Increase revenue by up to 40% with online bookings",
        "Reduce manual work with automated scheduling",
        "Reach millions of potential customers nationwide",
        "Get real-time insights and detailed reports",
        "24/7 customer support for your cinema",
        "Zero commission on first 100 bookings"
    ];

    const stats = [
        { number: "500+", label: "Partner Cinemas" },
        { number: "10M+", label: "Monthly Bookings" },
        { number: "98%", label: "Customer Satisfaction" },
        { number: "24/7", label: "Platform Uptime" }
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-white font-[Poppins] overflow-hidden">
            {/* Hero Section */}
            <div className="relative min-h-screen">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80')` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[#121212]/90 to-red-900/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
                </div>

                {/* Navigation */}
                <nav className="relative z-10 flex items-center justify-between px-8 py-1">
                    <div className="flex items-center space-x-3 ml-1">
                        <div className="flex items-center justify-center z-10">
                            <img src={logo2} width={'80px'} alt="logo"></img>
                        </div>
                    </div>
                    <div className="flex items-center -translate-y-0.5">
                        <button className="px-2 py-2 text-gray-300 hover:text-white transition-colors font-[Poppins] text-sm">
                            Login
                        </button>
                        <button className="px-4 py-2.5 text-gray-300 hover:text-white transition-colors font-[Poppins] text-sm">
                            Register
                        </button>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className={`relative z-10 px-8 pt-9 pb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Content */}
                            <div>
                                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-red-white/30 rounded-full mb-6">
                                    <Dot className="text-white" />
                                    <span className="text-sm font-medium font-[Poppins] -translate-x-2">Join 500+ Cinema Partners</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight font-[Poppins]">
                                    <span className="bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent">
                                        Transform Your Cinema Into a Digital Powerhouse
                                    </span>
                                </h1>

                                <p className="text-[17px] text-white/80 mb-8 leading-relaxed font-[Poppins]">
                                    Register your cinema and unlock the power of online bookings. Manage screens, showtimes, movies, and ticket pricing all with SYNEMA.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <button className="group relative px-5 py-2.5 bg-gradient-to-r from-red-900 to-red-800 rounded-lg font-medium text-[17px] font-[Poppins] shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                                        <span>Register Your Cinema</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <button className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg font-medium text-[17px] font-[Poppins] hover:bg-white/10 hover:border-red-900/50 transform hover:scale-105 transition-all duration-300">
                                        View Demo
                                    </button>
                                </div>

                                {/* Quick Benefits */}
                                <div className="grid grid-cols-2 gap-4 w-[70%]">
                                    {[
                                        { icon: <Zap className="w-5 h-5" />, text: "Quick Setup" },
                                        { icon: <Users className="w-5 h-5" />, text: "Millions of Users" },
                                        { icon: <TrendingUp className="w-5 h-5" />, text: "Boost Revenue" },
                                        { icon: <Star className="w-5 h-5" />, text: "24/7 Support" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-gray-400">
                                            <div className="text-red-600">{item.icon}</div>
                                            <span className="text-sm font-[Poppins] font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content - Cinema Image */}
                            <div className="relative">
                                <div className="relative overflow-hidden -translate-y-10">
                                    <img
                                        src={hero}
                                        alt="Modern Cinema Interior"
                                        className="w-full h-[550px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent translate-y-4"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent translate-y-4"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent translate-y-4"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent translate-y-4"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent translate-y-4"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-l from-[#121212] via-transparent to-transparent translate-x-2"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent -translate-x-2"></div>

                                    {/* Floating Stats Card */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/2 backdrop-blur-md border border-white/17 rounded-xl p-4">
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-red-400 font-[Poppins]">40%</div>
                                                <div className="text-xs text-gray-300 font-[Poppins]">More Revenue</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-red-400 font-[Poppins]">24/7</div>
                                                <div className="text-xs text-gray-300 font-[Poppins]">Bookings</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-red-400 font-[Poppins]">Zero</div>
                                                <div className="text-xs text-gray-300 font-[Poppins]">Setup Cost</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative z-10 py-16 -mt-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2 font-[Poppins]">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm font-[Poppins]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative z-10 px-8 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-900 to-red-400 bg-clip-text text-transparent font-[Poppins]">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-gray-400 text-lg font-[Poppins] max-w-2xl mx-auto">
                            Powerful tools designed specifically for cinema owners to streamline operations and maximize revenue
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-white/1 backdrop-blur-sm border border-white/10 rounded-lg hover:border-red-900/50 transition-all duration-300 hover:transform hover:scale-105"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="mb-4 text-red-600 group-hover:text-red-500 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-medium mb-3 font-[Poppins]">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-[Poppins]">{feature.description}</p>

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="relative z-10 px-8 py-24 bg-gradient-to-b from-transparent via-red-900/5 to-transparent">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 font-[Poppins]">Why Cinema Owners Choose Us</h2>
                        <p className="text-gray-400 font-[Poppins]">Join hundreds of successful cinema partners</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-red-900/50 transition-all duration-300"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 font-[Poppins]">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 px-8 py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-gradient-to-r from-red-900/30 to-red-400/10 backdrop-blur-sm border border-red-900/50 rounded-3xl p-12 overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>

                        <div className="relative text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[Poppins]">
                                Ready to Go Digital?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 font-[Poppins]">
                                Register your cinema today and start accepting online bookings in minutes
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group px-10 py-5 bg-gradient-to-r from-red-900 to-red-800 rounded-lg font-bold text-lg font-[Poppins] shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                                    <span>Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg font-bold text-lg font-[Poppins] hover:bg-white/20 hover:border-red-900/50 transition-all duration-300">
                                    Contact Sales
                                </button>
                            </div>

                            <p className="text-gray-500 text-sm mt-6 font-[Poppins]">
                                No credit card required • Free setup assistance • Cancel anytime
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 font-[Poppins] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand Column */}
                        <div>
                            <div className="flex items-center space-x-3 ml-1">
                                <div className="flex items-center justify-center z-10">
                                    <img src={logo2} width={'80px'} alt="logo"></img>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Empowering cinema owners with cutting-edge digital booking solutions.
                            </p>
                            <div className="flex space-x-3">
                                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                    <a key={index} href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                        <Icon className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                {['Features', 'Pricing', 'Demo', 'Integration', 'Updates'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-red-700 transition-colors text-sm flex items-center group">
                                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {['Documentation', 'Help Center', 'Partner Program', 'Blog', 'Success Stories'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-red-700 transition-colors text-sm flex items-center group">
                                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                    <Mail className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                                    <span>partners@booknow.com</span>
                                </li>
                                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                    <Phone className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                                    <span>+1 (555) 987-6543</span>
                                </li>
                                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                    <MapPin className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                                    <span>456 Theater Avenue<br />Los Angeles, CA 90028</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © 2025 BookNow Cinema Partners. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Partner Agreement</a>
                        </div>
                    </div>
                </div>
            </footer>

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
      `}</style>
        </div>
    );
};

export default CinemaLanding;