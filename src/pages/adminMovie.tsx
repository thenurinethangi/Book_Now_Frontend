import React, { useEffect, useState } from 'react';
import { Eye, Trash, X, Calendar, Clock, Users, Monitor, Star, Search } from "lucide-react";
import SidebarNavigation from '../components/admin/SidebarNavigation';
import ManagedMovies from '../components/admin/ManagedMovies';
import RequestedMovies from '../components/admin/RequestedMovies';


function AdminMovie() {

    const [activeTab, setActiveTab] = useState('manage');


    return (
        <div className='bg-[#121212] flex font-[Poppins] overflow-hidden min-h-screen'>
            {/* nav bar */}
            <SidebarNavigation page={'movie'} />

            {/* content right side */}
            <div className='w-full min-h-screen text-white py-3 pt-7 px-3 sm:px-7 ml-[28px] sm:ml-[65px]'>
                {/* title */}
                <div className='flex flex-wrap gap-2.5 justify-between items-center mb-[17px]'>
                    <div className='mr-27'>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Movie
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

                {/* tabs */}
                <div className='flex flex-wrap items-center gap-6 border-b border-gray-800 mb-6 mt-5'>
                    <button
                        onClick={() => setActiveTab('manage')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'manage' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => setActiveTab('request')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'request' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Request
                    </button>
                </div>

                {/* managed movies container */}
                { activeTab === 'manage' ? <ManagedMovies /> : '' }

                {/* requested movies container */}
                { activeTab === 'request' ? <RequestedMovies /> : '' }

            </div>
        </div>
    );
}

export default AdminMovie;