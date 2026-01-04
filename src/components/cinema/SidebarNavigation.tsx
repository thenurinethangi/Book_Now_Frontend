import { Home, Tv, Clock, User, Bell, Settings, Search, Users, TvMinimalPlay, Tag, Coins, Wallet } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SidebarNavigation(props: any) {

    const navigate = useNavigate();

    const [activeNav, setActiveNav] = useState('home');

    useState(() => {
        setActiveNav(props.page);
    });

    const navItems = [
        { icon: <Home className="w-5.5 h-5.5" />, label: 'Home', id: 'home' },
        { icon: <Tv className="w-5.5 h-5.5" />, label: 'Screens', id: 'screens' },
        { icon: <TvMinimalPlay className="w-5.5 h-5.5" />, label: 'Movies', id: 'movies' },
        { icon: <Clock className="w-5.5 h-5.5" />, label: 'Showtimes', id: 'showtimes' },
        { icon: <Tag className="w-5.5 h-5.5" />, label: 'Bookings', id: 'bookings' },
        { icon: <Wallet className="w-5.5 h-5.5" />, label: 'Transactions', id: 'transactions' },
        { icon: <Search className="w-5.5 h-5.5" />, label: 'Search', id: '' }
    ];

    function handleNavItemClick(e: React.MouseEvent<HTMLButtonElement>){
        const item: string | undefined = e.currentTarget.dataset.item;
        if(!item){
            return;
        }
        setActiveNav(item);
        navigate('/cinema/'+item);
    }

    return (
        <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-800 flex flex-col justify-between items-center fixed" style={{ paddingBlock: '17px' }}>
            <div className="flex flex-col justify-start items-center gap-5">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        data-item = {item.id}
                        onClick={handleNavItemClick}
                        className={`nav transition-colors cursor-pointer ${activeNav === item.id ? 'text-red-700' : 'text-gray-500'}`}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
                <Settings className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                <Bell className="w-5.5 h-5.5 text-gray-500 cursor-pointer hover:text-red-700 transition-colors" />
                <User onClick={(e) => navigate('/cinema/profile')} className={`w-5.5 h-5.5 cursor-pointer ${props.page === 'profile' ? 'text-red-700' : 'text-gray-500'}`} />
            </div>
        </nav>
    )
}

export default SidebarNavigation