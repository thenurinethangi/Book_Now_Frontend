import { useState } from 'react';
import { Home, Tv, Clock, User, Bell, Settings, Search, Users, TvMinimalPlay, Tag, Coins, Wallet } from 'lucide-react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import SidebarNavigation from '../components/cinema/SidebarNavigation';

const CinemaOwnerDashboard = () => {

    const stats = [
        {
            title: 'Today Revenue',
            value: '$2,847',
            change: '+18.2%',
            icon: <Coins className="w-5.5 h-5.5" />,
            trend: 'up',
            color: 'text-green-500'
        },
        {
            title: 'Today Bookings',
            value: '147',
            change: '+12.8%',
            icon: <Tag className="w-5.5 h-5.5" />,
            trend: 'up',
            color: 'text-blue-500'
        },
        {
            title: 'Occupancy Rate',
            value: '78%',
            change: '+5.3%',
            icon: <Users className="w-5.5 h-5.5" />,
            trend: 'up',
            color: 'text-purple-500'
        },
        {
            title: 'Active Screens',
            value: '8/10',
            change: '80%',
            icon: <Tv className="w-5.5 h-5.5" />,
            trend: 'up',
            color: 'text-red-500'
        }
    ];

    const screenData = [
        { name: 'IMX', value: 92, color: '#b91c1c' },
        { name: 'SX 3D', value: 85, color: '#dc2626' },
        { name: 'Bat Max', value: 78, color: '#ef4444' },
        { name: 'XXC', value: 65, color: '#f87171' }
    ];

    const upcomingShows = [
        { time: '10:30 AM', movie: 'The Dark Knight', screen: 'Screen 1', seats: '45/120', status: 'booking' },
        { time: '01:15 PM', movie: 'Inception', screen: 'Screen 2', seats: '78/150', status: 'filling' },
        { time: '04:00 PM', movie: 'Interstellar', screen: 'Screen 3', seats: '12/100', status: 'available' },
        { time: '07:30 PM', movie: 'Oppenheimer', screen: 'Screen 1', seats: '95/120', status: 'almost' },
        { time: '10:45 PM', movie: 'Dunkirk', screen: 'Screen 4', seats: '8/80', status: 'available' }
    ];

    const topMovies = [
        { title: 'Oppenheimer', bookings: 234, revenue: '$8,460', rating: 4.8 },
        { title: 'The Dark Knight', bookings: 198, revenue: '$7,128', rating: 4.9 },
        { title: 'Inception', bookings: 176, revenue: '$6,336', rating: 4.7 },
        { title: 'Interstellar', bookings: 145, revenue: '$5,220', rating: 4.6 }
    ];

    const options: ApexOptions = {
        colors: ["#D32F2F"],
        chart: {
            fontFamily: "Poppins, sans-serif",
            type: "bar",
            height: 180,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "39%",
                borderRadius: 5,
                borderRadiusApplication: "end",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul"
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Outfit",
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            opacity: 1,
        },

        tooltip: {
            x: {
                show: true,
            },
            y: {
                formatter: (val: number) => `${val}`,
            },
        },
    };
    const series = [
        {
            name: "Sales",
            data: [168, 385, 201, 298, 187, 195, 250],
        },
    ];

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* Sidebar Navigation */}
            <SidebarNavigation page={'home'} />

            {/* Main Content */}
            <div className='flex-1 ml-[65px] text-white px-7 py-4'>

                {/* Header */}
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <div className="flex items-center space-x-3 ml-4 relative translate-y-4.5">
                            <div className="flex items-center justify-center z-10 absolute -translate-x-4">
                                <img src={logo2} width={'60px'}></img>
                            </div>
                        </div>
                        <p className='text-gray-500 text-[15px] mt-10'>Welcome back, here's what's happening today</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className='bg-[#1e1e1e] border border-gray-500 rounded-md pl-10 pr-4 py-2 text-[13px] text-gray-300 focus:outline-none focus:border-red-900 w-[250px]'
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex justify-center items-center gap-20 mb-5 bg-[#1e1e1e] rounded-md py-[22px] border border-gray-700">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative px-5.5 py-3 backdrop-blur-sm bg-[#1e1e1e] transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
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

                {/* Main Grid Layout */}
                <div className='grid grid-cols-3 gap-4 mb-6'>

                    <div className="col-span-2 max-w-full overflow-x-auto bg-[#1e1e1e] rounded-md border border-gray-700 p-5">
                        <div className="mb-5">
                            <h3 className="text-[14.5px] font-medium mb-1">Screen Occupancy</h3>
                            <p className="text-[12px] text-gray-400">Current utilization</p>
                        </div>

                        <div id="chartOne" className="min-w-[1000px]">
                            <Chart options={options} series={series} type="bar" height={300} />
                        </div>
                    </div>

                    {/* Screen Occupancy - 1 column */}
                    <div className="bg-[#1e1e1e] border border-gray-700 rounded-md p-5">
                        <div className="mb-5">
                            <h3 className="text-[14.5px] font-medium mb-1">Screen Occupancy</h3>
                            <p className="text-[12px] text-gray-400">Current utilization</p>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={screenData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0}
                                    outerRadius={100}
                                    paddingAngle={3}
                                    dataKey="value"
                                >
                                    {screenData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #ffffff20', borderRadius: '6px', fontSize: '12px', color: '#ffffff' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 space-y-2">
                            {screenData.map((screen, index) => (
                                <div key={index} className="flex items-center justify-between text-[12px] w-[50%]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: screen.color }}></div>
                                        <span className="text-gray-300 text-[14px]">{screen.name}</span>
                                    </div>
                                    <span className="text-gray-400 text-[13px]">{screen.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .nav:hover {
          color: #b91c1c;
        }
      `}</style>
        </div>
    );
};

export default CinemaOwnerDashboard;