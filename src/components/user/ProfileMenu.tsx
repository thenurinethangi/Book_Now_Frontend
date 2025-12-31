import { useEffect, useRef } from "react";
import { logout } from "../../services/user/authService";
import { toast } from "react-toastify";

function ProfileMenu({ closeMenu }: { closeMenu: () => void }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeMenu]);

    async function handleLogout(){
        try{
            const res = await logout();
            localStorage.removeItem('accessToken');
            window.location.reload();
        }
        catch(e){
            toast.error('Failed to logout!');
        }
    }

    return (
        <div
            ref={ref}
            className="absolute right-5 top-16 w-44 bg-black rounded-lg shadow-2xl z-50 font-[Poppins]"
        >
            <ul className="flex flex-col py-2">
                <li className="px-5 py-3 text-[14.5px] text-[#e0e0e0] hover:bg-[#1c2128] cursor-pointer transition-colors">
                    Profile
                </li>
                <li className="px-5 py-3 text-[14.5px] text-[#e0e0e0] hover:bg-[#1c2128] cursor-pointer transition-colors">
                    Watchlist
                </li>
                <li className="px-5 py-3 text-[14.5px] text-[#e0e0e0] hover:bg-[#1c2128] cursor-pointer transition-colors">
                    Bookings
                </li>

                <div className="h-px bg-[#2d2d2d] my-2 mx-4" />

                <li onClick={handleLogout} className="px-5 py-2 text-[14.5px] text-[#e0e0e0] hover:bg-[#1c2128] cursor-pointer transition-colors">
                    Logout
                </li>
            </ul>
        </div>
    );
}

export default ProfileMenu;