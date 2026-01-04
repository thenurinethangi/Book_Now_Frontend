import React, { useEffect, useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Download, Filter, Calendar, DollarSign, TrendingUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import SidebarNavigation from '../components/cinema/SidebarNavigation';
import { getAllTransactions, getCinemaRevenue, getCompleteTransactionCount, getFailedTransactionCount, getPendingTransactionCount } from '../services/cinema/transactionService';

function CinemaTransaction() {

    const [selectedItems, setSelectedItems] = useState([]);

    const [transactions, setTransactions] = useState([]);

    const [searchKey, setSearchKey] = useState<string>('');
    const [daysRange, setDaysRange] = useState<string>('7');
    const [no, setNo] = useState<number>(1);

    const [size, setSize] = useState<number>(0);

    const [completeTransactions, setCompleteTransactions] = useState(0);
    const [pendingTransactions, setPendingTransactions] = useState(0);
    const [failedTransactions, setFailedTransactions] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        loadAllTransactions();
        loadStats();
    }, []);

    useEffect(() => {
        handelClickPreviousNext();
    }, [no, searchKey, daysRange]);

    async function loadAllTransactions() {
        try {
            const res = await getAllTransactions({ searchKey, daysRange, no });
            console.log(res.data.data.filterAfterTablePageNo);
            setTransactions(res.data.data.filterAfterTablePageNo);
            setSize(res.data.data.size);
        }
        catch (e) {
            console.log(e);
        }
    }

    async function loadStats() {
        try {
            const res = await getCompleteTransactionCount();
            setCompleteTransactions(res.data.data);

            const res2 = await getPendingTransactionCount();
            setPendingTransactions(res2.data.data);

            const res3 = await getFailedTransactionCount();
            setFailedTransactions(res3.data.data);

            const res4 = await getCinemaRevenue();
            setRevenue(res4.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const toggleSelectAll = () => {
        if (selectedItems.length === transactions.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(transactions.map(t => t.id));
        }
    };

    const toggleSelect = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const getStatusBadge = (status) => {
        const styles = {
            'Completed': 'bg-green-500/20 text-green-500',
            'Pending': 'bg-orange-500/20 text-orange-500',
            'Failed': 'bg-red-500/20 text-red-500'
        };
        return styles[status] || '';
    };

    function formatToSriLankaDateTime(utcString: string): string {
        const date = new Date(utcString);

        const optionsDate: Intl.DateTimeFormatOptions = {
            timeZone: "Asia/Colombo",
            year: "numeric",
            month: "short",
            day: "2-digit"
        };

        const optionsTime: Intl.DateTimeFormatOptions = {
            timeZone: "Asia/Colombo",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        };

        const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(date);
        const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(date);

        return `${formattedDate} ${formattedTime}`;
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
            const res = await getAllTransactions({ searchKey, daysRange, no });
            console.log(res.data.data.filterAfterTablePageNo);
            setTransactions(res.data.data.filterAfterTablePageNo);
            setSize(res.data.data.size);
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>
            {/* Sidebar Navigation */}
            <SidebarNavigation page={'transactions'} />

            {/* Main Content */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto ml-[65px]'>
                {/* Header */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[17px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Transactions
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Revenue</p>
                                <p className='text-[18px] font-medium text-white'>{revenue} LKR</p>
                            </div>
                            <DollarSign className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Completed</p>
                                <p className='text-[18px] font-medium text-green-500'>{completeTransactions}</p>
                            </div>
                            <CheckCircle className='w-8 h-8 text-green-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Pending</p>
                                <p className='text-[18px] font-medium text-orange-500'>{pendingTransactions}</p>
                            </div>
                            <AlertCircle className='w-8 h-8 text-orange-500 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Failed</p>
                                <p className='text-[18px] font-medium text-red-500'>{failedTransactions}</p>
                            </div>
                            <XCircle className='w-8 h-8 text-red-500 opacity-20' />
                        </div>
                    </div>
                </div>

                {/* Table Card */}
                <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
                    {/* Table Header */}
                    <div className='flex justify-between items-center px-5 py-4 border-b border-gray-800'>
                        <div>
                            <h3 className='text-[18px] font-medium text-white mb-1'>Transactions</h3>
                            <p className='text-[12px] text-gray-500'>Your most recent transactions list</p>
                        </div>
                        <div className='flex items-center gap-3'>
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
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.length === transactions.length}
                                                onChange={toggleSelectAll}
                                                className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                            />
                                            <span className='text-[12px] font-medium text-gray-500'>Transaction ID</span>
                                        </div>
                                    </th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Booking ID</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Customer</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Amount</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Date</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Status</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction: any) => (
                                    <tr key={transaction._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                        <td className='p-4'>
                                            <div className='flex items-center gap-3'>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(transaction._id)}
                                                    onChange={() => toggleSelect(transaction._id)}
                                                    className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                                />
                                                <span className='text-[12px] font-medium text-gray-400'>{transaction._id}</span>
                                            </div>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-300'>{transaction.bookingId}</span>
                                        </td>
                                        <td className='px-4'>
                                            <div>
                                                <p className='text-[12px] text-gray-300'>{transaction.userId.firstName + ' ' + transaction.userId.lastName}</p>
                                                <p className='text-[10px] text-gray-500'>{transaction.userId.email}</p>
                                            </div>
                                        </td>
                                        {/* <td className='p-4'>
                                            <span className='text-[12px] text-gray-500'>{transaction.userId.email}</span>
                                        </td> */}
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-300'>{transaction.amount.toLocaleString()}LKR</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-500'>{formatToSriLankaDateTime(transaction.date)}</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className={`text-[9px] px-2 py-1 rounded-full font-medium ${getStatusBadge(transaction.status)}`}>
                                                {transaction.status}
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
                            Showing <span className='text-white'>{no === 1 ? 1 : (no - 1) * 10}</span> to <span className='text-white'>{(no - 1) * 10 + transactions.length}</span> of <span className='text-white'>{size}</span>
                        </span>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={(e) => setNo(no - 1)}
                                className='px-2.5 py-1.5 text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                                disabled={no === 1}
                            >
                                Previous
                            </button>
                            <button className='px-3 py-2 bg-gray-700 rounded-lg text-[12px] text-white'>{no}</button>
                            <button
                                onClick={(e) => setNo(no + 1)}
                                className='px-2.5 py-1.5 text-[12px] text-gray-400 hover:bg-[#252525]'
                                disabled={size <= no * 10}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CinemaTransaction