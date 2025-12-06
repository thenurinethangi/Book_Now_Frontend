import React, { useEffect, useState } from 'react'
import { Search, Tag, Download, CheckCircle, XCircle, AlertCircle, Users, Eye } from 'lucide-react';
import SidebarNavigation from '../components/cinema/SidebarNavigation';
import { getAllBookings } from '../services/cinema/bookingService';

function CinemaBooking() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadAllBookings();
    }, []);

    async function loadAllBookings() {
        try {
            const res = await getAllBookings();
            console.log(res.data.data);
            setBookings(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    function formatSLDate(dateString: string): string {
        const date = new Date(dateString);

        return date.toLocaleDateString("en-US", {
            timeZone: "Asia/Colombo",
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    function formatSLTime(dateString: string): string {
        const date = new Date(dateString);

        return date.toLocaleTimeString("en-US", {
            timeZone: "Asia/Colombo",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    }

    const getStatusBadge = (status) => {
        const styles = {
            'Today': 'bg-green-500/20 text-green-500',
            'Scheduled': 'bg-orange-500/20 text-orange-500',
            'Past': 'bg-red-300/20 text-red-300',
            'Canceled': 'bg-red-500/20 text-red-500'
        };
        return styles[status] || '';
    };

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* Sidebar Navigation */}
            <SidebarNavigation page={'bookings'} />

            {/* Main Content */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto ml-[65px]'>
                {/* Header */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Bookings
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
                                <p className='text-[18px] font-medium text-white'>{bookings.length}</p>
                            </div>
                            <Tag className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Today</p>
                                <p className='text-[18px] font-medium text-green-500'>{bookings.filter((b: any) => b.status === 'Today').length}</p>
                            </div>
                            <CheckCircle className='w-8 h-8 text-green-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Scheduled</p>
                                <p className='text-[18px] font-medium text-orange-500'>{bookings.filter((b: any) => b.status === 'Scheduled').length}</p>
                            </div>
                            <AlertCircle className='w-8 h-8 text-orange-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Canceled</p>
                                <p className='text-[18px] font-medium text-red-500'>{bookings.filter((b: any) => b.status === 'Canceled').length}</p>
                            </div>
                            <XCircle className='w-8 h-8 text-red-500 opacity-20' />
                        </div>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
                    {/* Table Header */}
                    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800'>
                        <div>
                            <h3 className='text-[18px] font-medium text-white mb-1'>Bookings</h3>
                            <p className='text-[12px] text-gray-500'>Latest ticket bookings from customers</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                                />
                                <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                            </div>
                            <select className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last 90 Days</option>
                            </select>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]">
                                <Download className="w-4 h-4" />
                                Export CSV
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-gray-800'>
                                    <th className='px-6 py-3 text-left'>
                                        <p className='text-[12px] font-medium text-gray-500'>Date</p>
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
                                {bookings.map((booking: any) => (
                                    <tr key={booking._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] text-gray-300'>{formatSLDate(booking.date)}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] font-medium text-white'>{booking.movieTitle}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div>
                                                <p className='text-[12px] text-gray-300'>{booking.userId.firstName + ' ' + booking.userId.lastName}</p>
                                                <p className='text-[10px] text-gray-500'>{booking.userId.email}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] text-gray-400'>{booking.screenName}</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div>
                                                <p className='text-[12px] text-gray-300'>{formatSLTime(booking.showtimeId.time)}</p>
                                                <p className='text-[10px] text-gray-500'>{formatSLDate(booking.showtimeId.date)}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <div className='flex items-center gap-1'>
                                                <Users className='w-3 h-3 text-gray-500' />
                                                <p className='text-[12px] text-gray-400'>{booking.tickets}</p>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <p className='text-[12px] text-gray-500 font-medium'>{booking.total} LKR</p>
                                        </td>
                                        <td className='px-6 py-3.5'>
                                            <span className={`text-[9px] px-2 py-1 rounded-full font-medium ${getStatusBadge(booking.status)}`}>
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

                        {/* Pagination */}
                        <div className='flex items-center justify-between px-5 py-4 border-t border-gray-800'>
                            <span className='text-[12px] text-gray-500'>
                                Showing <span className='text-white'>1</span> to <span className='text-white'>10</span> of <span className='text-white'>0</span>
                            </span>
                            <div className='flex items-center gap-2'>
                                <button
                                    className='px-2.5 py-1.5 text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                                // disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button className='px-3 py-2 bg-gray-700 rounded-md text-[12px] text-white'>1</button>
                                <button className='px-2.5 py-1.5 text-[12px] text-gray-400 hover:bg-[#252525]'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CinemaBooking