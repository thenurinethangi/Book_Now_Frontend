import { NavLink } from "react-router-dom";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Users, Film, Menu, X } from "lucide-react";
import { MdSlideshow } from "react-icons/md";
import { useState } from "react";

function SidebarNavigation(props: any) {

    const [active, setActive] = useState(props.page);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleNavClick(e: React.MouseEvent<SVGSVGElement>) {
        const page = e.currentTarget.dataset.page;
        setActive(page);
        setIsMenuOpen(false);
    }

    return (
        <>
            {/* Hamburger Menu Button - Only visible on small screens */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-5.5 left-0.5 z-200 p-2 rounded-lg lg:hidden"
            >
                {isMenuOpen ? (
                    ''
                ) : (
                    <Menu className="w-5 h-5 text-gray-500" />
                )}
            </button>

            {/* Overlay for mobile */}
            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-100 lg:hidden"
                />
            )}

            {/* Sidebar Navigation */}
            <nav 
                className={`w-[65px] h-screen bg-[#121212] border-r border-gray-500 flex flex-col justify-between items-center fixed z-150 transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
                style={{ paddingBlock: '17px' }}
            >
                <div className="flex flex-col justify-start items-center gap-5">
                    <NavLink to={'/admin/home'}><House onClick={handleNavClick} data-page='home' className={`w-5.5 h-5.5 nav ${active === 'home' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/admin/cinema'}><MapPinHouse onClick={handleNavClick} data-page='cinema' className={`w-5.5 h-5.5 nav ${active === 'cinema' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/admin/screen'}><Tv onClick={handleNavClick} data-page='screen' className={`w-5.5 h-5.5 nav ${active === 'screen' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/admin/movie'}><MdSlideshow onClick={handleNavClick} data-page='movie' className={`w-6 h-6 nav ${active === 'movie' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/admin/user'}><UserCog onClick={handleNavClick} data-page='user' className={`w-5.5 h-5.5 nav ${active === 'user' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/admin/hero'}><Layers2 onClick={handleNavClick} data-page='hero' className={`w-5.5 h-5.5 nav ${active === 'hero' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                    <NavLink to={'/'}><Search onClick={handleNavClick} data-page='search' className={`w-5.5 h-5.5 nav ${active === 'search' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <RotateCw className="w-5.5 h-5.5 text-gray-500" />
                    <Bell className="w-5.5 h-5.5 text-gray-500" />
                    <NavLink to={'/admin/profile'}><User onClick={handleNavClick} data-page='profile' className={`w-5.5 h-5.5 nav ${active === 'profile' ? 'text-red-700' : 'text-gray-500'}`} /></NavLink>
                </div>
            </nav>
        </>
    )
}

export default SidebarNavigation