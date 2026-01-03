import { useState } from 'react'
import { Home, UserCog, Settings, Disc, Search, Layers, RotateCw, HelpCircle, Bell, MapPin, Tv, Trash, Edit, Eye, Clock, Calendar, Star, Film, Filter, Plus, Video } from "lucide-react";
import Movies from '../components/cinema/Movies';
import SidebarNavigation from '../components/cinema/SidebarNavigation';
import AddMovie from '../components/cinema/AddMovie';
import RequestMovie from '../components/cinema/RequestMovie';
import ManagedMovies from '../components/admin/ManagedMovies';

function CinemaMovie() {

    const [activeTab, setActiveTab] = useState('manage');
    const [loadMovies, setLoadMovie] = useState(0);

    const [manageMovies, setManageMovies] = useState([]);

    const [searchKey, setSearchKey] = useState<string>('');

    function handleSearchMovies(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.trim();
        setSearchKey(value);
    }

    return (
        <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

            {/* nav bar */}
            <SidebarNavigation page={'movies'} />

            {/* content right side */}
            <div className='flex-1 text-white px-7 py-3 pt-7 overflow-auto ml-[65px]'>
                {/* title */}
                <div className='flex flex-wrap justify-between items-center mb-[22px]'>
                    <div className='mr-27'>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Movies
                            </span>
                        </div>
                    </div>
                    <div className="mt-2.5 sm:mt-0 flex items-center gap-3">
                        <div className="relative">
                            <input
                                onChange={handleSearchMovies}
                                type="text"
                                placeholder="Search screens..."
                                className="bg-[#1e1e1e] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-gray-700 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Total Movies</p>
                                <p className='text-[18px] font-medium text-white'>{manageMovies.length}</p>
                            </div>
                            <Video className='w-8 h-8 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Now Showing</p>
                                <p className='text-[18px] font-medium text-green-500'>{manageMovies.filter((m: any) => m.status === 'Now Showing').length}</p>
                            </div>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Coming Soon</p>
                                <p className='text-[18px] font-medium text-white'>{manageMovies.filter((m: any) => m.status === 'Coming Soon').length}</p>
                            </div>
                            <Calendar className='w-7.5 h-7.5 text-red-700 opacity-20' />
                        </div>
                    </div>
                    <div className='bg-[#1e1e1e] rounded-lg p-4 border border-gray-800'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[12px] text-gray-500 mb-1'>Avg Rating</p>
                                <p className='text-[18px] font-medium text-white'>{Math.round(manageMovies.reduce((sum: number, m: any) => sum + (Number(m?.movieDetails?.ratings?.imdb) || 0), 0) / manageMovies.length * 10) / 10}</p>
                            </div>
                            <Star className='w-7.5 h-7.5 text-yellow-500 opacity-20 fill-yellow-500' />
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className='flex items-center gap-6 border-b border-gray-800 mb-6'>
                    <button
                        onClick={() => setActiveTab('manage')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'manage' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => setActiveTab('add')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'add' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setActiveTab('request')}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === 'request' ? 'border-b-2 border-red-900 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Request
                    </button>
                </div>

                {/* movie container */}
                {activeTab === 'manage' ? <Movies loadMovies={loadMovies} setLoadMovie={setLoadMovie} setmanageMovies={setManageMovies} searchKey={searchKey} /> : ''}

                {activeTab === 'add' ? <AddMovie manageMovies={manageMovies} setManageMovies={setManageMovies} /> : ''}

                {activeTab === 'request' ? <RequestMovie /> : ''}

            </div>
        </div>
    )
}

export default CinemaMovie