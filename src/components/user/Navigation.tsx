import { Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "../../context/authContext";

function Navigation(props: any) {

    const { user, loading } = useAuth();

    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('');
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        setActivePage(props.page);
    }, []);

    function handleUserProfile() {

        if (!loading && !user) {
            props.setSignInVisible(true);
        }
        else {
            setShowProfileMenu(true);
        }
    }

    return (
        <nav className='px-9 flex justify-between items-center w-full bg-transparent absolute top-0 z-10'>
            <div className='flex items-center gap-10'>
                <div className="flex items-center space-x-3 ml-4 mr-9">
                    <div className="flex items-center justify-center z-10">
                        <img onClick={(e) => navigate('/')} src={logo2} width={'80px'} alt="logo" className="cursor-pointer"></img>
                    </div>
                </div>
                <div onClick={(e) => { navigate('/movie'); setActivePage('movie') }} className="group relative -translate-x-18 text-[14px] text-white/90 font-light cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-[1px]">
                    Movie
                    <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePage === 'movie' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div onClick={(e) => { navigate('/cinema'); setActivePage('cinema') }} className='group relative -translate-x-18 text-[14px] text-white/90 font-light cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-[1px]'>Cinema
                    <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePage === 'cinema' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div className='group relative -translate-x-18 text-[14px] text-white/90 font-light cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-[1px]'>Showtime
                    <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePage === 'showtime' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div onClick={(e) => { navigate('/aboutus'); setActivePage('aboutus') }} className='group relative -translate-x-18 text-[14px] text-white/90 font-light cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-[1px]'>About Us
                    <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePage === 'aboutus' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <Search className='w-5 h-5 cursor-pointer' />
                <User onClick={handleUserProfile} className='w-[18px] h-[18px] cursor-pointer' />
                {showProfileMenu && (
                    <ProfileMenu closeMenu={() => setShowProfileMenu(false)} />
                )}
            </div>
        </nav>
    )
}

export default Navigation