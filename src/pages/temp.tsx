import React, { useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Filter, DollarSign, CheckCircle, XCircle, AlertCircle, Calendar, Users, Eye } from 'lucide-react';

function CinemaShowTime() {
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

                {/* Bookings Table */}
                <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
                    {/* Table Header */}
                    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800'>
                        <div>
                            <h3 className='text-[18px] font-medium text-white mb-1'>Showtimes</h3>
                            <p className='text-[12px] text-gray-500'>Latest ticket bookings from customers</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button className='flex items-center gap-2 px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]'>
                                <Filter className="w-4 h-4" />
                                Filter
                            </button>
                            <button className='flex items-center gap-2 px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]'>
                                See all
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-gray-800'>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Booking ID</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Movie</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Customer</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Screen</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Showtime</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Seats</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Amount</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Status</p>
                                    </th>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] font-medium text-gray-300'>{booking.bookingId}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] font-medium text-white'>{booking.movie}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div>
                                                <p className='text-[12px] text-gray-300'>{booking.customer}</p>
                                                <p className='text-[10px] text-gray-500'>{booking.email}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] text-gray-400'>{booking.screen}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div>
                                                <p className='text-[12px] text-gray-300'>{booking.showtime}</p>
                                                <p className='text-[10px] text-gray-500'>{booking.date}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div className='flex items-center gap-1'>
                                                <Users className='w-3 h-3 text-gray-500' />
                                                <p className='text-[12px] text-gray-400'>{booking.seats}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] text-green-500 font-medium'>${booking.amount}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <span className={`text-[9px] px-2 py-1 rounded-full font-bold ${getStatusBadge(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <button className='text-gray-500 hover:text-gray-400 transition-colors'>
                                                <Eye className='w-4 h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CinemaShowTime