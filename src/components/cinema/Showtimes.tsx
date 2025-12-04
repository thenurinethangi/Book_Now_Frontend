import { Search, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getAllShowtimes } from '../../services/cinema/showtimeService';

function Showtimes(props: any) {

    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        loadAllShowtimes();
    }, [props.load]);

    async function loadAllShowtimes() {
        try {
            const res = await getAllShowtimes();
            console.log(res.data.data);
            setShowtimes(res.data.data);
            props.setShowtimesList(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const transactions = [
        { id: 1, orderId: '#323537', customer: 'Abram Schleifer', email: 'abram@example.com', amount: 43999, date: '25 Apr, 2027', status: 'Completed' },
        { id: 2, orderId: '#323544', customer: 'Ava Smith', email: 'ava.smith@example.com', amount: 1200, date: '01 Dec, 2027', status: 'Pending' },
        { id: 3, orderId: '#323538', customer: 'Carla George', email: 'carla65@example.com', amount: 919, date: '11 May, 2027', status: 'Completed' },
        { id: 4, orderId: '#323543', customer: 'Ekstrom Bothman', email: 'ekstrom@example.com', amount: 679, date: '15 Nov, 2027', status: 'Completed' },
        { id: 5, orderId: '#323552', customer: 'Ella Davis', email: 'ella.davis@example.com', amount: 210, date: '01 Mar, 2028', status: 'Failed' },
        { id: 6, orderId: '#323539', customer: 'Emery Culhane', email: 'emery09@example.com', amount: 839, date: '29 Jun, 2027', status: 'Completed' },
        { id: 7, orderId: '#323547', customer: 'Ethan Patel', email: 'ethan.patel@example.com', amount: 2100, date: '05 Jan, 2028', status: 'Pending' },
        { id: 8, orderId: '#323553', customer: 'James Martinez', email: 'james.martinez@example.com', amount: 3300, date: '15 Mar, 2028', status: 'Completed' },
        { id: 9, orderId: '#323535', customer: 'Kaiya George', email: 'kaiya@example.com', amount: 1579, date: '13 Mar, 2027', status: 'Failed' },
        { id: 10, orderId: '#323549', customer: 'Liam Brown', email: 'liam.brown@example.com', amount: 450, date: '28 Jan, 2028', status: 'Failed' },
    ];

    const getStatusBadge = (status: string) => {
        const styles = {
            'Today': 'bg-green-500/20 text-green-500',
            'Scheduled': 'bg-orange-500/20 text-orange-500',
            'Expired': 'bg-red-500/20 text-red-500'
        };
        return styles[status] || '';
    };

    function toDateTime(dateStr: string, timeStr: string): Date {
        const combined = `${dateStr} ${timeStr}`;

        return new Date(
            new Date(combined).toLocaleString("en-US", { timeZone: "Asia/Colombo" })
        );
    }

    function isPast(dateStr: string, timeStr: string): boolean {
        const target = toDateTime(dateStr, timeStr);

        const now = new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
        );

        return target < now;
    }

    function isFuture(dateStr: string, timeStr: string): boolean {
        const target = toDateTime(dateStr, timeStr);

        const now = new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
        );

        return target > now;
    }

    function isClose(value: number, main: number, tolerance: number) {
        const lowerLimit = main - tolerance;
        return value >= lowerLimit;
    }


    return (
        <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
            {/* Table Header */}
            <div className='flex justify-between items-center px-5 py-4 border-b border-gray-800'>
                <div>
                    <h3 className='text-[18px] font-medium text-white mb-1'>Showtimes</h3>
                    <p className='text-[12px] text-gray-500'>Showtimes for current available movies</p>
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
                            <th className='p-4 text-left'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[12px] font-medium text-gray-500'>Date</span>
                                </div>
                            </th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Time</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Screen</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Movie</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Bookings</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Status</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Schedule</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showtimes.map((showtime: any) => (
                            <tr key={showtime._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                <td className='p-4'>
                                    <div className='flex items-center gap-3'>
                                        <input
                                            type="checkbox"
                                            // checked={selectedItems.includes(transaction.id)}
                                            // onChange={() => toggleSelect(transaction.id)}
                                            className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                        />
                                        <span className='text-[12px] font-medium text-gray-400'>{showtime.date}</span>
                                    </div>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-300'>{showtime.time}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-500'>{showtime.screenId.screenName}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-300'>{showtime.movieId.title}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[11px] text-gray-500'>{showtime.bookingCount}/{showtime.screenId.numberOfSeats} booked</span>
                                </td>
                                <td className='p-4'>
                                    <span className={`text-[9px] text-gray-500 px-2 py-1 font-semibold rounded-full ${showtime.status === 'Expired' ? '-' : showtime.status === 'Scheduled' && isClose(showtime.bookingCount, showtime.screenId.numberOfSeats, 10) ? 'text-red-400 bg-red-400/20' : showtime.status === 'Scheduled' && isClose(showtime.bookingCount, showtime.screenId.numberOfSeats, 40) ? 'text-blue-400 bg-blue-400/20' : showtime.status === 'Scheduled' && showtime.bookingCount < showtime.screenId.numberOfSeats ? 'text-green-500 bg-green-500/20' : showtime.status === 'Scheduled' && showtime.bookingCount >= showtime.screenId.numberOfSeats ? 'text-red-600 bg-red-600/20' : showtime.status === 'Today' && isPast(showtime.date, showtime.time) ? '-' : showtime.bookingCount < showtime.screenId.numberOfSeats ? 'text-green-500 bg-green-500/20' : 'text-red-600 bg-red-600/20'}`}>{showtime.status === 'Expired' ? '-' : showtime.status === 'Scheduled' && isClose(showtime.bookingCount, showtime.screenId.numberOfSeats, 10) ? 'Almost Full' : showtime.status === 'Scheduled' && isClose(showtime.bookingCount, showtime.screenId.numberOfSeats, 40) ? 'Filling Fast' : showtime.status === 'Scheduled' && showtime.bookingCount < showtime.screenId.numberOfSeats ? 'Available' : showtime.status === 'Scheduled' && showtime.bookingCount >= showtime.screenId.numberOfSeats ? 'Unavailable' : showtime.status === 'Today' && isPast(showtime.date, showtime.time) ? '-' : showtime.bookingCount < showtime.screenId.numberOfSeats ? 'Available' : 'Unavailable'}</span>
                                </td>
                                <td className='p-4'>
                                    <span className={`text-[9px] px-2 py-1 rounded-full font-semibold ${getStatusBadge(showtime.status)}`}>
                                        {showtime.status}
                                    </span>
                                </td>
                                <td className='p-4'>
                                    <button className='text-gray-500 hover:text-gray-400'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                            <circle cx='12' cy='6' r='1.5' />
                                            <circle cx='12' cy='12' r='1.5' />
                                            <circle cx='12' cy='18' r='1.5' />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-between px-5 py-4 border-t border-gray-800'>
                <span className='text-[12px] text-gray-500'>
                    Showing <span className='text-white'>1</span> to <span className='text-white'>10</span> of <span className='text-white'>{transactions.length}</span>
                </span>
                <div className='flex items-center gap-2'>
                    <button
                        className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                    // disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button className='px-3 py-2 bg-red-800 rounded-md text-[12px] text-white'>1</button>
                    <button className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525]'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Showtimes