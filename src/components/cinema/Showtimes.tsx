import { Search, Download, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { deleteAShowtime, getAllShowtimes } from '../../services/cinema/showtimeService';
import { toast } from 'react-toastify';

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>Delete Showtime?</p>
            <p className='text-[14px] text-gray-500'>Are you certain you want to delete this showtime?</p>
            <div className="flex gap-3 mt-3">
                <button onClick={closeToast} className='text-[13px] font-medium px-2 py-2 border border-gray-800 rounded-md'>Cancel</button>
                <button onClick={() => { onConfirm(); closeToast(); }} className='text-[13px] font-medium px-2 h-[32px] bg-red-700 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export function askConfirm(onConfirm: () => void) {
    toast((toastProps: any) => (
        <ConfirmToast {...toastProps} onConfirm={onConfirm} />
    ));
}

function Showtimes(props: any) {

    const [showtimes, setShowtimes] = useState([]);
    const [activeOptions, setActiveOptions] = useState<any | null>(null);

    const [searchKey, setSearchKey] = useState<string>('');
    const [daysRange, setDaysRange] = useState<string>('all');
    const [no, setNo] = useState<number>(1);

    const [size, setSize] = useState<number>(0);

    useEffect(() => {
        loadAllShowtimes();
    }, [props.load]);

    useEffect(() => {
        handelClickPreviousNext();
    }, [no, searchKey, daysRange]);

    async function loadAllShowtimes() {
        try {
            const res = await getAllShowtimes({ searchKey, daysRange, no });
            console.log(res.data.data.filterAfterTablePageNo);
            setShowtimes(res.data.data.filterAfterTablePageNo);
            setSize(res.data.data.size);
            props.setShowtimesList(res.data.data.filterAfterTablePageNo);
        }
        catch (e) {
            console.log(e);
        }
    }

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

    function getOccupancyPercentage(booked: number, total: number): number {
        if (!total || total === 0) return 0;
        return (booked / total) * 100;
    }

    function getAvailabilityStatus(booked: number, total: number) {
        const percentage = getOccupancyPercentage(booked, total);

        if (percentage >= 100) return 'UNAVAILABLE';
        if (percentage >= 85) return 'ALMOST_FULL';
        if (percentage >= 65) return 'FILLING_FAST';
        return 'AVAILABLE';
    }

    async function handleDeleteShowtime() {

        if (activeOptions.bookingCount > 0) {
            toast.warn('The showtime has existing bookings and cannot be deleted!');
            return;
        }

        askConfirm(async () => {
            try {
                const res = await deleteAShowtime(activeOptions._id);
                toast.success('Delete Successfully!');
                loadAllShowtimes();
            }
            catch (e) {
                toast.error('Failed to delete try again later!');
                console.log(e);
            }
        });
    }

    function handleSearchShowtime(e: React.ChangeEvent<HTMLInputElement>) {

        const value = e.target.value.trim();
        setSearchKey(value);
    }

    function handleFindByDateRange(e: React.ChangeEvent<HTMLSelectElement>) {

        const value = e.target.value;
        setDaysRange(value);
    }

    async function handelClickPreviousNext() {

        try {
            const res = await getAllShowtimes({ searchKey, daysRange, no });
            setShowtimes(res.data.data.filterAfterTablePageNo);
            setSize(res.data.data.size);
            props.setShowtimesList(res.data.data.filterAfterTablePageNo);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
            {/* Table Header */}
            <div className='flex flex-wrap gap-3 justify-between items-center px-5 py-4 border-b border-gray-800'>
                <div>
                    <h3 className='text-[18px] font-medium text-white mb-1'>Showtimes</h3>
                    <p className='text-[12px] text-gray-500'>Showtimes for current available movies</p>
                </div>
                <div className='flex flex-wrap items-center gap-3'>
                    <div className="relative">
                        <input
                            onChange={handleSearchShowtime}
                            type="text"
                            placeholder="Search..."
                            className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-gray-700 w-64"
                        />
                        <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                    <select onChange={handleFindByDateRange} value={daysRange} className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-gray-700">
                        <option value={'7'}>Last 7 Days</option>
                        <option value={'30'}>Last 30 Days</option>
                        <option value={'90'}>Last 90 Days</option>
                        <option value={'all'}>All</option>
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
                        {showtimes.map((showtime: any) => {
                            const status = getAvailabilityStatus(
                                showtime.bookingCount,
                                showtime.screenId.numberOfSeats
                            );

                            return (
                                <tr key={showtime._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors relative'>
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
                                        <span
                                            className={`text-[9px] px-2 py-1 font-semibold rounded-full
                                                ${showtime.status === 'Expired'
                                                    ? '-'
                                                    : showtime.status === 'Scheduled' && status === 'ALMOST_FULL'
                                                        ? 'text-red-400 bg-red-400/20'
                                                        : showtime.status === 'Scheduled' && status === 'FILLING_FAST'
                                                            ? 'text-blue-400 bg-blue-400/20'
                                                            : showtime.status === 'Scheduled' && status === 'AVAILABLE'
                                                                ? 'text-green-500 bg-green-500/20'
                                                                : showtime.status === 'Scheduled' && status === 'UNAVAILABLE'
                                                                    ? 'text-red-600 bg-red-600/20'
                                                                    : showtime.status === 'Today' && isPast(showtime.date, showtime.time)
                                                                        ? ''
                                                                        : status === 'ALMOST_FULL'
                                                                            ? 'text-red-400 bg-red-400/20'
                                                                            : status === 'FILLING_FAST'
                                                                                ? 'text-blue-400 bg-blue-400/20'
                                                                                : status === 'AVAILABLE'
                                                                                    ? 'text-green-500 bg-green-500/20'
                                                                                    : 'text-red-600 bg-red-600/20'
                                                }
  `}
                                        >
                                            {
                                                showtime.status === 'Expired'
                                                    ? '-'
                                                    : showtime.status === 'Scheduled' && status === 'ALMOST_FULL'
                                                        ? 'Almost Full'
                                                        : showtime.status === 'Scheduled' && status === 'FILLING_FAST'
                                                            ? 'Filling Fast'
                                                            : showtime.status === 'Scheduled' && status === 'AVAILABLE'
                                                                ? 'Available'
                                                                : showtime.status === 'Scheduled' && status === 'UNAVAILABLE'
                                                                    ? 'Unavailable'
                                                                    : showtime.status === 'Today' && isPast(showtime.date, showtime.time)
                                                                        ? '-'
                                                                        : status === 'ALMOST_FULL'
                                                                            ? 'Almost Full'
                                                                            : status === 'FILLING_FAST'
                                                                                ? 'Filling Fast'
                                                                                : status === 'AVAILABLE'
                                                                                    ? 'Available'
                                                                                    : 'Unavailable'
                                            }
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <span className={`text-[9px] px-2 py-1 rounded-full font-semibold ${getStatusBadge(showtime.status)}`}>
                                            {showtime.status}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <button onClick={(e) => setActiveOptions(showtime)} className='text-gray-500 hover:text-gray-400'>
                                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                                <circle cx='12' cy='6' r='1.5' />
                                                <circle cx='12' cy='12' r='1.5' />
                                                <circle cx='12' cy='18' r='1.5' />
                                            </svg>
                                        </button>
                                    </td>

                                    {/* options */}
                                    <div
                                        className={`flex flex-col shadow-2xl absolute top-10 right-0 z-[300] bg-[#1e1e1e] border border-gray-700 rounded-md overflow-hidden min-w-[160px] ${activeOptions && activeOptions?._id === showtime._id ? "" : "hidden"
                                            }`}
                                    >
                                        {/* Delete Option */}
                                        <button
                                            onClick={handleDeleteShowtime}
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-900/20 transition-colors group"
                                        >
                                            <Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                                            <p className="text-[13px] text-gray-300 group-hover:text-red-300">
                                                Delete
                                            </p>
                                        </button>
                                    </div>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-between px-5 py-4 border-t border-gray-800'>
                <span className='text-[12px] text-gray-500'>
                    Showing <span className='text-white'>{no === 1 ? 1 : (no - 1) * 10}</span> to <span className='text-white'>{(no - 1) * 10 + showtimes.length}</span> of <span className='text-white'>{size}</span>
                </span>
                <div className='flex items-center gap-2'>
                    <button onClick={(e) => setNo(no - 1)}
                        className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                        disabled={no === 1}
                    >
                        Previous
                    </button>
                    <button className='px-3 py-2 bg-gray-700 rounded-md text-[12px] text-white'>{no}</button>
                    <button onClick={(e) => setNo(no + 1)} className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525]'
                        disabled={size <= no * 10}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Showtimes