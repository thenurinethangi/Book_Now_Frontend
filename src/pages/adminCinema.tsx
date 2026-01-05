import { useEffect, useState } from 'react'
import { Search, MapPin, Check, X, Loader } from "lucide-react";
import SidebarNavigation from '../components/admin/SidebarNavigation';
import ApprovedCinemas from '../components/admin/ApprovedCinemas';
import PendingCinemas from '../components/admin/PendingCinemas';
import RejectedCinemas from '../components/admin/RejectedCinemas';
import { getAllActiveCinemas, getAllPendingCinemas, getAllRejectedCinemas } from '../services/admin/cinemaService';
import DeactiveCinemas from '../components/admin/DeactiveCinemas';

function AdminCinema() {

    const [activeTab, setActiveTab] = useState('approved');
    const [statsUpdate, setStatsUpdate] = useState(0);
    const [actCinema, setActCinema] = useState([]);
    const [pendCinema, setPendCinema] = useState([]);
    const [rejCinema, setRejCinema] = useState([]);

    useEffect(() => {
        initStats();
    }, [statsUpdate])

    async function initStats() {
        try {
            const res1 = await getAllActiveCinemas();
            setActCinema(res1.data.data);

            const res2 = await getAllPendingCinemas();
            setPendCinema(res2.data.data);

            const res3 = await getAllRejectedCinemas();
            setRejCinema(res3.data.data);
        }
        catch (e) {

        }
    }

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* nav bar */}
            <SidebarNavigation page={'cinema'} />

            {/* content right side */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto ml-[65px]'>
                {/* title */}
                <div className='flex flex-wrap gap-2.5 justify-between items-center mb-[17px]'>
                    <div className='mr-27'>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Cinema
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search cinema..."
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-2 gap-3 sm:gap-0 sm:grid-cols-4 mb-6 bg-[#1e1e1e]/0 rounded-md p-4'>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <MapPin className='w-8 h-8 text-red-700 opacity-20' />
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Cinemas</p>
                                <p className='text-[18px] font-medium text-white'>{actCinema.length+pendCinema.length+rejCinema.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center'>
                                <Check className='w-4 h-4 text-green-500' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Approved</p>
                                <p className='text-[18px] font-medium text-green-500'>{actCinema.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <Loader className='w-7 h-7 text-yellow-600 opacity-20 rounded-full' />
                            {/* <div className='w-2 h-2 bg-orange-500 rounded-full animate-pulse' /> */}
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Pending</p>
                                <p className='text-[18px] font-medium text-yellow-600'>{pendCinema.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center'>
                                <X className='w-4 h-4 text-red-500' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[12px] text-gray-500 mb-1'>Rejected</p>
                                <p className='text-[18px] font-medium text-red-500'>{rejCinema.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex flex-wrap items-center gap-6 border-b border-gray-800 mb-6'>
                    <button
                        onClick={() => setActiveTab('approved')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'approved' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Approved
                    </button>
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'pending' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => setActiveTab('rejected')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'rejected' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Rejected
                    </button>
                    <button
                        onClick={() => setActiveTab('deactive')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'deactive' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Deactive
                    </button>
                </div>

                {/* cinema container */}
                {activeTab === 'approved' ? <ApprovedCinemas statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ''}

                {/* cinema container */}
                {activeTab === 'pending' ? <PendingCinemas statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ''}

                {/* cinema container */}
                {activeTab === 'rejected' ? <RejectedCinemas statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ''}

                {/* cinema container */}
                {activeTab === 'deactive' ? <DeactiveCinemas statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ''}

            </div>
        </div>
    )
}

export default AdminCinema