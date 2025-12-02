import React, { useState } from 'react'
import { Tv, Search, Users } from 'lucide-react';
import SidebarNavigation from '../components/cinema/SidebarNavigation';
import Screens from '../components/cinema/Screens';
import AddScreen from '../components/cinema/AddScreen';

function CinemaScreen() {

    const [show,setShow] = useState('screens');

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* Sidebar Navigation */}
            <SidebarNavigation page={'screens'} />

            {/* Main Content */}
            <div className='flex-1 text-white px-7 py-3 pt-6.5 overflow-auto ml-[65px]'>
                {/* Header */}
                <div className='flex justify-between items-center mb-[22px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Screens
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search screens..." 
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6'>
                    <button onClick={(e) => setShow('screens')} className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${show === 'screens' ? 'text-white border-b-2 border-red-900': 'text-gray-500 hover:text-gray-300 transition-colors'}`}>
                        Screens
                    </button>
                    <button onClick={(e) => setShow('setup')} className={`px-2.5 pb-2 text-[18px] text-gray-500 hover:text-gray-300 transition-colors ${show === 'setup' ? 'text-white border-b-2 border-red-900': 'text-gray-500 hover:text-gray-300 transition-colors'}`}>
                        Setup
                    </button>
                </div>

                {/* Stats Overview */}
                <div className='grid grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Screens</p>
                                <p className='text-[18px] font-medium text-white'>4</p>
                            </div>
                            <Tv className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Active Now</p>
                                <p className='text-[18px] font-medium text-white'>3</p>
                            </div>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Seats</p>
                                <p className='text-[18px] font-medium text-white'>660</p>
                            </div>
                            <Users className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Occupancy</p>
                                <p className='text-[18px] font-medium text-white'>48%</p>
                            </div>
                            <div className='w-8 h-1.5 bg-gray-800 rounded-full overflow-hidden'>
                                <div className='h-full w-[48%] bg-gradient-to-r from-red-700 to-red-900 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cinema Screens Grid */}
                { show === 'screens' ? <Screens /> : '' }

                {/* add a new screen */}
                { show === 'setup' ? <AddScreen /> : '' }
                
            </div>
        </div>
    )
}

export default CinemaScreen