import React, { useState } from 'react'
import { Home, Tv, Clock, Search, Settings, Bell, User, Film, Tag, Wallet, Download, Filter, Calendar, DollarSign, TrendingUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

function CinemaTransaction() {
    const [activeNav, setActiveNav] = useState('transactions');
    const [activeTab, setActiveTab] = useState('all');
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const navItems = [
        { icon: <Home className="w-5.5 h-5.5" />, label: 'Home', id: 'home' },
        { icon: <Tv className="w-5.5 h-5.5" />, label: 'Screens', id: 'screens' },
        { icon: <Film className="w-5.5 h-5.5" />, label: 'Movies', id: 'movies' },
        { icon: <Clock className="w-5.5 h-5.5" />, label: 'Showtimes', id: 'showtimes' },
        { icon: <Tag className="w-5.5 h-5.5" />, label: 'Bookings', id: 'bookings' },
        { icon: <Wallet className="w-5.5 h-5.5" />, label: 'Transactions', id: 'transactions' },
        { icon: <Search className="w-5.5 h-5.5" />, label: 'Search', id: 'search' }
    ];

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

    const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
    const completedCount = transactions.filter(t => t.status === 'Completed').length;
    const pendingCount = transactions.filter(t => t.status === 'Pending').length;
    const failedCount = transactions.filter(t => t.status === 'Failed').length;

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
                                Transactions
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
                                <p className='text-[18px] font-medium text-white'>${(totalAmount / 1000).toFixed(1)}k</p>
                            </div>
                            <DollarSign className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Completed</p>
                                <p className='text-[18px] font-medium text-green-500'>{completedCount}</p>
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
                                <p className='text-[12px] text-gray-500 mb-1'>Failed</p>
                                <p className='text-[18px] font-medium text-red-500'>{failedCount}</p>
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
                                            <input 
                                                type="checkbox" 
                                                checked={selectedItems.length === transactions.length}
                                                onChange={toggleSelectAll}
                                                className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                            />
                                            <span className='text-[12px] font-medium text-gray-500'>Order ID</span>
                                        </div>
                                    </th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Customer</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Email</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Amount</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Date</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Status</th>
                                    <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                        <td className='p-4'>
                                            <div className='flex items-center gap-3'>
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedItems.includes(transaction.id)}
                                                    onChange={() => toggleSelect(transaction.id)}
                                                    className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                                />
                                                <span className='text-[12px] font-medium text-gray-400'>{transaction.orderId}</span>
                                            </div>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-300'>{transaction.customer}</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-500'>{transaction.email}</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-300'>${transaction.amount.toLocaleString()}</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-[12px] text-gray-500'>{transaction.date}</span>
                                        </td>
                                        <td className='p-4'>
                                            <span className={`text-[9px] px-2 py-1 rounded-full font-bold ${getStatusBadge(transaction.status)}`}>
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
                            Showing <span className='text-white'>1</span> to <span className='text-white'>10</span> of <span className='text-white'>{transactions.length}</span>
                        </span>
                        <div className='flex items-center gap-2'>
                            <button 
                                className='px-3 py-2 border border-gray-800 rounded-lg text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button className='px-3 py-2 bg-red-700 rounded-lg text-[12px] text-white'>1</button>
                            <button className='px-3 py-2 border border-gray-800 rounded-lg text-[12px] text-gray-400 hover:bg-[#252525]'>2</button>
                            <button className='px-3 py-2 border border-gray-800 rounded-lg text-[12px] text-gray-400 hover:bg-[#252525]'>
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