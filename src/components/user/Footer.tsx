import React from 'react'

import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'

function Footer() {

    return (
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
                            Empowering users with a cutting edge digital platform for booking movie tickets.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                <a key={index} href="#" className="w-9 h-9 bg-white/5 hover:bg-red-900/20 border border-white/10 hover:border-red-900/50 rounded-full flex items-center justify-center transition-all duration-300 group">
                                    <Icon className="w-4.5 h-4.5 text-gray-400 group-hover:text-red-700 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Product</h4>
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
                        <h4 className="text-white font-medium mb-4">Resources</h4>
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
                        <h4 className="text-white font-medium mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
                                <span>partners@synema.com</span>
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
                        © 2025 CYNEMA Cinema Partners. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-red-700 transition-colors">Partner Agreement</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer