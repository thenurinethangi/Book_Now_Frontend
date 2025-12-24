import React from 'react';
import { Film, Shield, Zap, Users, Award, Clock, Sparkles, MapPin, Calendar, CreditCard, Star, TrendingUp, Heart } from 'lucide-react';

function AboutUsContent() {
    return (
        <div className="bg-[#121212] font-[Poppins] text-white">
            {/* Philosophy Section - Minimal & Elegant */}
            <section className="max-w-6xl mx-auto px-8 pb-32 pt-20">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-6">Our Philosophy</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-gray-200">
                        Cinema experiences deserve seamless booking
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        We're not just a booking platform. We're cinema enthusiasts who understand that the movie experience begins
                        the moment you decide what to watch. Synema bridges technology and passion, delivering instant access to
                        theaters across the country with enterprise-grade security and consumer-friendly simplicity.
                    </p>
                </div>
            </section>

            {/* Stats Bar - Clean & Sophisticated */}
            <section className="">
                <div className="max-w-[1180px] mx-auto px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { number: "500+", label: "Cinema Partners" },
                            { number: "50K+", label: "Daily Bookings" },
                            { number: "2M+", label: "Active Users" },
                            { number: "99.9%", label: "Platform Uptime" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-light text-white/30 mb-2">{stat.number}</div>
                                <div className="text-gray-500 text-sm tracking-wider uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart - Minimal Layout */}
            <section className="max-w-6xl mx-auto px-8 py-32">
                <div className="mb-20 text-center">
                    <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-4">What Sets Us Apart</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200">Built for movie lovers</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {[
                        {
                            title: "Multi-Cinema Network",
                            description: "Access hundreds of cinema partners across the country. From boutique theaters to major chains, find and book any format—IMAX, 3D, Dolby Atmos, or standard screenings."
                        },
                        {
                            title: "Real-Time Availability",
                            description: "Live seat selection with instant confirmation. Our technology syncs directly with cinema systems to show accurate availability and secure your seats immediately."
                        },
                        {
                            title: "Bank-Grade Security",
                            description: "Your payment data is protected with 256-bit encryption and PCI DSS compliance. We never store sensitive card information on our servers."
                        },
                        {
                            title: "Intelligent Recommendations",
                            description: "Personalized suggestions based on your viewing history, preferences, and trending releases. Discover films you'll love before they sell out."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="group">
                            <div className="mb-6">
                                <div className="w-12 h-[1px] bg-red-700 mb-6"></div>
                                <h3 className="text-2xl font-light mb-4 text-white">{feature.title}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Journey - Timeline Style */}
            <section className="bg-white/[0.02] py-32">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="mb-20 text-center">
                        <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-4">Our Journey</p>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-200">Five years of innovation</h2>
                    </div>

                    <div className="space-y-20">
                        {[
                            { year: "2020", title: "Foundation", desc: "Launched with a vision to modernize cinema booking" },
                            { year: "2021", title: "Expansion", desc: "Partnered with 100+ cinemas across major metropolitan areas" },
                            { year: "2023", title: "Innovation", desc: "Introduced AI-powered recommendations and dynamic pricing" },
                            { year: "2025", title: "Leadership", desc: "Became the most trusted platform with 2M+ active users" }
                        ].map((milestone, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-12 items-start max-w-4xl mx-auto">
                                <div className="md:w-32 flex-shrink-0">
                                    <div className="text-6xl font-light text-red-700">{milestone.year}</div>
                                </div>
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl font-light mb-3 text-white">{milestone.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Clean Process */}
            <section className="max-w-6xl mx-auto px-8 py-32">
                <div className="mb-20 text-center">
                    <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-4">The Process</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200">Four steps to your seat</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {[
                        { num: "01", title: "Browse", desc: "Explore current releases and upcoming premieres" },
                        { num: "02", title: "Select", desc: "Choose your cinema, format, and showtime" },
                        { num: "03", title: "Customize", desc: "Pick your perfect seats from the live seating chart" },
                        { num: "04", title: "Confirm", desc: "Complete secure payment and receive instant tickets" }
                    ].map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-7xl font-light text-white/10 group-hover:text-red-700/20 transition-colors duration-500 mb-6">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-light mb-3 text-white">{step.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Values - Minimal Cards */}
            <section className="bg-white/[0.02] py-32">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="mb-20 text-center">
                        <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-4">Core Values</p>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-200">What drives us forward</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { icon: Star, title: "Excellence", desc: "Every interaction is designed to exceed expectations, from browsing to booking to support." },
                            { icon: TrendingUp, title: "Innovation", desc: "We continuously evolve our platform with emerging technologies to stay ahead of industry trends." },
                            { icon: Heart, title: "Trust", desc: "Transparency, security, and reliability form the foundation of every user relationship." }
                        ].map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="border border-white/10 p-10 hover:border-red-700/30 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-red-700 mb-8" strokeWidth={1.5} />
                                    <h3 className="text-xl font-light mb-4 text-white">{value.title}</h3>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technology Stack - Professional */}
            <section className="max-w-6xl mx-auto px-8 py-32">
                <div className="mb-20 text-center">
                    <p className="text-gray-500 text-sm tracking-[3px] uppercase mb-4">Technology</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200">Built on enterprise infrastructure</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { label: "Cloud Infrastructure", value: "AWS & Azure" },
                        { label: "Response Time", value: "<100ms" },
                        { label: "Payment Security", value: "PCI DSS L1" },
                        { label: "Data Encryption", value: "256-bit SSL" },
                        { label: "API Uptime", value: "99.99%" },
                        { label: "Daily Transactions", value: "150K+" },
                        { label: "Partner Integrations", value: "Real-time" },
                        { label: "Support Availability", value: "24/7/365" }
                    ].map((tech, index) => (
                        <div key={index} className="border-l border-white/10 pl-6">
                            <div className="text-gray-500 text-xs tracking-wider uppercase mb-2">{tech.label}</div>
                            <div className="text-white text-lg font-light">{tech.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA - Sophisticated */}
            <section className="border-t border-white/10 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto px-8 py-32 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-gray-200">
                        Ready to experience the difference?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 font-light max-w-2xl mx-auto">
                        Join millions of movie enthusiasts who trust Synema for seamless cinema booking.
                    </p>
                    <button className="bg-white text-black px-12 py-5 hover:bg-red-700 hover:text-white transition-all duration-300 text-sm tracking-[2px] uppercase font-light">
                        Start Booking
                    </button>
                </div>
            </section>
        </div>
    );
}

export default AboutUsContent;