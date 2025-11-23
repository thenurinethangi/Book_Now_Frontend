import React from 'react'
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film } from "lucide-react";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import ticket from '../assets/images/ticket-4-removebg-preview.png'
import circle from '../assets/images/new-moon.png'
import logo from '../assets/images/camera-roll-removebg-preview.png'
import { GiMoneyStack } from "react-icons/gi";
import { FaTicketAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import {
    LayoutDashboard, Calendar, Settings, LogOut,
    TrendingUp, Play, Menu, X,
    ChevronDown, BarChart3, Clock, Star, Eye, ChevronRight
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Ellipsis, Bomb, Circle} from "lucide-react";

const AdminDashboard2 = () => {

    interface StatCard {
        title: string;
        value: string;
        change: string;
        icon: React.ReactNode;
        trend: 'up' | 'down';
    }

    const stats: StatCard[] = [
        {
            title: 'Total Revenue',
            value: '$48,574',
            change: '+12.5%',
            icon: <GiMoneyStack className="w-7 h-7" />,
            trend: 'up'
        },
        {
            title: 'Total Bookings',
            value: '12,845',
            change: '+8.2%',
            icon: <FaTicketAlt className="w-5.5 h-5.5" />,
            trend: 'up'
        },
        {
            title: 'Active Users',
            value: '8,426',
            change: '+15.3%',
            icon: <HiUser className="w-5.5 h-5.5" />,
            trend: 'up'
        },
        {
            title: 'Movies Playing',
            value: '24',
            change: '-2.4%',
            icon: <MdMovie className="w-5.5 h-5.5" />,
            trend: 'down'
        }
    ];

    const revenueData = [
        { month: 'Jan', revenue: 32000, bookings: 850 },
        { month: 'Feb', revenue: 38000, bookings: 920 },
        { month: 'Mar', revenue: 35000, bookings: 880 },
        { month: 'Apr', revenue: 42000, bookings: 1050 },
        { month: 'May', revenue: 45000, bookings: 1120 },
        { month: 'Jun', revenue: 48574, bookings: 1280 },
    ];

    return (
        <div className='bg-[#121212] flex font-[Poppins]'>

            {/* nav bar */}
            <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    <NavLink to={'/'}><House className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><MapPinHouse className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><Tv className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><MdSlideshow className="w-6 h-6 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/profile'}><UserCog className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/tasks/today'}><SquareCheck className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/promo'}><Disc className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/tasks/status'}><Layers2 className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                    <NavLink to={'/'}><Search className="w-5.5 h-5.5 text-gray-500 nav" /></NavLink>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <RotateCw className="w-5.5 h-5.5 text-gray-500" />
                    <Bell className="w-5.5 h-5.5 text-gray-500" />
                    <CircleQuestionMark className="w-5.5 h-5.5 text-gray-500" />
                </div>
            </nav>

            {/* content right side */}
            <div className='w-full h-min-screen text-white px-7 py-3'>

                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3 ml-4">
                            <div className="flex items-center justify-center z-10">
                                <img src={logo} width={'47px'}></img>
                            </div>
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[23px] font-medium -translate-x-19 z-0">
                                <span className='text-[28px] font-medium'>B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OOKNOW/ADMIN
                            </span>
                        </div>
                        <p className='text-gray-500 text-[15px]'>Welcome back, here's what's happening today</p>
                    </div>
                    <div>
                        <User className="w-5 h-5 text-red-900" />
                    </div> 
                </div>

                {/* Stats Grid */}
                <div className="flex justify-center items-center gap-20 mb-5 bg-black rounded-sm py-[23px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative px-5.5 py-3 backdrop-blur-sm bg-black transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                        >
                            <div className="absolute inset-0 transition-all duration-300"></div>

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="flex items-center justify-between mb-4 gap-5">
                                    <div className="text-gray-500 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[17px] font-normal mb-1">{stat.value}
                                        <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'} ml-5`}>
                                        {stat.change}
                                </span>
                                    </div>
                                    <div className="text-[12.8px] text-gray-400">{stat.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex gap-4'>

                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 bg-black backdrop-blur-sm rounded-sm px-5 py-3 w-[70%]">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-[14px] font-medium">Revenue Overview</h3>
                                {/* <p className="text-[13px] text-gray-400 mt-1">Monthly revenue and bookings trend</p> */}
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#b91c1c" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#b91c1c" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 13, fill: "#666" }} />
                                <YAxis stroke="#666" tick={{ fontSize: 13, fill: "#666" }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                                    labelStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#b91c1c" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-black rounded-b-sm w-[30%] px-5 py-3 text-white">

                        <div className='flex justify-between items-center' style={{ marginBottom: '16px' }}>
                            <h1 className='text-[13.5px] font-medium tracking-[0.01em]'>Pending Cinema Request</h1>
                            <Ellipsis className="w-5 h-5 text-gray-400" />
                        </div>

                        <div>
                            <p className='text-[14px] text-gray-400' style={{ marginBottom: '20px' }}>Nov 13</p>

                            <div className='flex flex-col gap-1.5 relative border-l-2 border-red-300' style={{ paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px' }}>
                                <div className='bg-black rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{ padding: '2px' }}>
                                    <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-red-500 opacity-95" />
                                </div>
                                <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[12px] text-gray-400'>15.17 - 15.38</p>
                                    <p className='text-[12px] text-gray-400'>20m</p>
                                </div>
                                <div>
                                    <p className='text-[13.5px] text-white font-normal'>Develop Tick Tick frontend</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1.5 relative border-l-2 border-red-300' style={{ paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px' }}>
                                <div className='bg-black rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{ padding: '2px' }}>
                                    <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-red-500 opacity-95" />
                                </div>
                                <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[12px] text-gray-400'>15.17 - 15.38</p>
                                    <p className='text-[12px] text-gray-400'>20m</p>
                                </div>
                                <div>
                                    <p className='text-[13.5px] text-white font-normal'>Develop Tick Tick frontend</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1.5 relative border-l-2 border-red-300' style={{ paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px' }}>
                                <div className='bg-black rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{ padding: '2px' }}>
                                    <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-red-500 opacity-95" />
                                </div>
                                <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[12px] text-gray-400'>15.17 - 15.38</p>
                                    <p className='text-[12px] text-gray-400'>20m</p>
                                </div>
                                <div>
                                    <p className='text-[13.5px] text-white font-normal'>Develop Tick Tick frontend</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1.5 relative border-l-2 border-red-300' style={{ paddingLeft: '30px', marginLeft: '8px', marginBottom: '13px', paddingBottom: '13px' }}>
                                <div className='bg-black rounded-full w-5.5 h-5.5 flex justify-center items-center absolute -left-3 -top-2' style={{ padding: '2px' }}>
                                    <Bomb strokeWidth={3} className="w-[13px] h-[13px] text-red-500 opacity-95" />
                                </div>
                                <img src={circle} className="w-[9px] h-[9px] text-[#4772FA] absolute bottom-[17px] -left-[5px]"></img>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[12px] text-gray-400'>15.17 - 15.38</p>
                                    <p className='text-[12px] text-gray-400'>20m</p>
                                </div>
                                <div>
                                    <p className='text-[13.5px] text-white font-normal'>Develop Tick Tick frontend</p>
                                </div>
                            </div>
         
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDashboard2;