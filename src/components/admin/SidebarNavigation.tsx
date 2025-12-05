import { NavLink } from "react-router-dom";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film } from "lucide-react";
import { MdSlideshow } from "react-icons/md";
import { useState } from "react";

function SidebarNavigation(props: any) {

    const [active,setActive] = useState(props.page);

    function handleNavClick(e: React.MouseEvent<SVGSVGElement>){
        const page = e.currentTarget.dataset.page;
        setActive(page);
    }

    return (
        <nav className="w-[65px] h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center fixed" style={{ paddingBlock: '17px' }}>
            <div className="flex flex-col justify-start items-center gap-5">
                <NavLink to={'/'}><House onClick={handleNavClick} data-page='home' className={`w-5.5 h-5.5 nav ${active === 'home' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/'}><MapPinHouse onClick={handleNavClick} data-page='cinema' className={`w-5.5 h-5.5 nav ${active === 'cinema' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/'}><Tv onClick={handleNavClick} data-page='screen' className={`w-5.5 h-5.5 nav ${active === 'screen' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/'}><MdSlideshow onClick={handleNavClick} data-page='movie' className={`w-6 h-6 nav ${active === 'movie' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/profile'}><UserCog onClick={handleNavClick} data-page='user' className={`w-5.5 h-5.5 nav ${active === 'user' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/tasks/today'}><SquareCheck onClick={handleNavClick} data-page='booking' className={`w-5.5 h-5.5 nav ${active === 'booking' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/promo'}><Disc onClick={handleNavClick} data-page='genre' className={`w-5.5 h-5.5 nav ${active === 'genre' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/tasks/status'}><Layers2 onClick={handleNavClick} data-page='hero' className={`w-5.5 h-5.5 nav ${active === 'hero' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                <NavLink to={'/'}><Search onClick={handleNavClick} data-page='search' className={`w-5.5 h-5.5 nav ${active === 'search' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
                <RotateCw className="w-5.5 h-5.5 text-gray-500" />
                <Bell className="w-5.5 h-5.5 text-gray-500" />
                <CircleQuestionMark className="w-5.5 h-5.5 text-gray-500" />
            </div>
        </nav>
    )
}

export default SidebarNavigation