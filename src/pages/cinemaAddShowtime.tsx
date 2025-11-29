import React, { useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Filter, DollarSign, CheckCircle, XCircle, AlertCircle, Calendar, Users, Eye } from 'lucide-react';

function CinemaAddShowtime() {
    const [activeNav, setActiveNav] = useState('bookings');

    const navItems = [
        { icon: <Home className="w-5.5 h-5.5" />, label: 'Home', id: 'home' },
        { icon: <Tv className="w-5.5 h-5.5" />, label: 'Screens', id: 'screens' },
        { icon: <Film className="w-5.5 h-5.5" />, label: 'Movies', id: 'movies' },
        { icon: <Clock className="w-5.5 h-5.5" />, label: 'Showtimes', id: 'showtimes' },
        { icon: <Tag className="w-5.5 h-5.5" />, label: 'Bookings', id: 'bookings' },
        { icon: <Wallet className="w-5.5 h-5.5" />, label: 'Transactions', id: 'transactions' },
        { icon: <Search className="w-5.5 h-5.5" />, label: 'Search', id: 'search' }
    ];

    const bookings = [
        { 
            id: 1, 
            bookingId: '#BK001', 
            movie: 'SPIDER-MAN', 
            customer: 'John Doe',
            email: 'john@example.com',
            screen: 'Screen 01', 
            showtime: '7:00 PM',
            date: '25 Nov, 2024',
            seats: 4,
            amount: 2400,
            status: 'Confirmed' 
        },
        { 
            id: 2, 
            bookingId: '#BK002', 
            movie: 'THE BATMAN', 
            customer: 'Jane Smith',
            email: 'jane@example.com',
            screen: 'Screen 02', 
            showtime: '9:30 PM',
            date: '25 Nov, 2024',
            seats: 2,
            amount: 1200,
            status: 'Confirmed' 
        },
        { 
            id: 3, 
            bookingId: '#BK003', 
            movie: 'DUNE: PART TWO', 
            customer: 'Mike Johnson',
            email: 'mike@example.com',
            screen: 'IMAX', 
            showtime: '6:00 PM',
            date: '26 Nov, 2024',
            seats: 3,
            amount: 2100,
            status: 'Pending' 
        },
        { 
            id: 4, 
            bookingId: '#BK004', 
            movie: 'OPPENHEIMER', 
            customer: 'Sarah Williams',
            email: 'sarah@example.com',
            screen: 'Screen 03', 
            showtime: '8:00 PM',
            date: '26 Nov, 2024',
            seats: 5,
            amount: 3000,
            status: 'Confirmed' 
        },
        { 
            id: 5, 
            bookingId: '#BK005', 
            movie: 'BARBIE', 
            customer: 'Tom Brown',
            email: 'tom@example.com',
            screen: 'Screen 01', 
            showtime: '5:30 PM',
            date: '27 Nov, 2024',
            seats: 2,
            amount: 1200,
            status: 'Cancelled' 
        },
        { 
            id: 6, 
            bookingId: '#BK006', 
            movie: 'UNCHARTED', 
            customer: 'Emily Davis',
            email: 'emily@example.com',
            screen: 'Screen 04', 
            showtime: '10:00 PM',
            date: '27 Nov, 2024',
            seats: 6,
            amount: 3600,
            status: 'Confirmed' 
        },
    ];

    const getStatusBadge = (status) => {
        const styles = {
            'Confirmed': 'bg-green-500/20 text-green-500',
            'Pending': 'bg-orange-500/20 text-orange-500',
            'Cancelled': 'bg-red-500/20 text-red-500'
        };
        return styles[status] || '';
    };

    const totalBookings = bookings.length;
    const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;
    const pendingCount = bookings.filter(b => b.status === 'Pending').length;
    const cancelledCount = bookings.filter(b => b.status === 'Cancelled').length;
    const totalRevenue = bookings.filter(b => b.status === 'Confirmed').reduce((sum, b) => sum + b.amount, 0);

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>
            {/* Sidebar Navigation */}
            <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-800 flex flex-col justify-between items-center sticky top-0" style={{ paddingBlock: '17px' }}>
                <div className="flex flex-col justify-start items-center gap-5">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`nav transition-all duration-200 hover:scale-110 ${activeNav === item.id ? 'text-red-700' : 'text-gray-500 hover:text-gray-400'}`}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <Settings className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                    <Bell className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center cursor-pointer">
                        <User className="w-4 h-4 text-white" />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto'>
                {/* Header */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500 text-[18px] font-medium">Home</span>
                            <span className="text-gray-600">&gt;</span>
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[18px] font-medium">
                                Showtime
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Bookings</p>
                                <p className='text-[18px] font-medium text-white'>{totalBookings}</p>
                            </div>
                            <Tag className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Confirmed</p>
                                <p className='text-[18px] font-medium text-green-500'>{confirmedCount}</p>
                            </div>
                            <CheckCircle className='w-8 h-8 text-green-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Pending</p>
                                <p className='text-[18px] font-medium text-orange-500'>{pendingCount}</p>
                            </div>
                            <AlertCircle className='w-8 h-8 text-orange-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Revenue</p>
                                <p className='text-[18px] font-medium text-white'>${(totalRevenue / 1000).toFixed(1)}k</p>
                            </div>
                            <DollarSign className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className='bg-[#1e1e1e] border border-gray-800 rounded-lg'>
                    {/* title */}
                    <div className='border-b border-gray-800 py-5 px-7'>
                        <p>Add Showtime</p>
                    </div>
                    {/* body */}
                    <div className='mt-2'>
                        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Choose Date</label>
                                <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="date" id="input" />
                            </div>

                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select Screen</label>
                                <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
                                    <option>3D</option>
                                    <option>IMAX</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 pt-4 pb-1.5 px-6'>
                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select time</label>
                                <input className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' type="time" id="input" placeholder='Enter screen name' />
                            </div>

                            <div>
                                <label className='mb-1.5 block text-sm text-gray-500 dark:text-gray-400'>Select movie</label>
                                <select className='bg-[#121212] border border-gray-700 h-11 w-full rounded-lg px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400/50 focus:outline-hidden focus:ring-3' id="input">
                                    <option>Avatar: fire and ash</option>
                                    <option>IMAX</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex justify-end py-4 px-6'>
                            <button className='bg-red-700 px-5 py-2.5 rounded-lg font-medium text-[15px]'>Continue</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CinemaAddShowtime