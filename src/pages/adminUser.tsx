import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdAlarm, MdSlideshow } from "react-icons/md";
import { House, UserCog, SquareCheck, Disc, Search, Layers2, RotateCw, CircleQuestionMark, Bell, Clapperboard, Tv, Video, MapPinHouse, User, DollarSign, Ticket, Film, CircleX, SquarePen, Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import SidebarNavigation from '../components/admin/SidebarNavigation';
import Users from '../components/admin/Users';
import Admins from '../components/admin/Admins';

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

function AdminUser() {

    const { user, loading } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('users');

    useEffect(() => {
        if (!loading) {
            if (!user || !user.roles?.includes('ADMIN')) {
                navigate('/admin/landing', { replace: true });
            }
        }
    }, [loading, user, navigate]);

    return (
        <div className='bg-[#121212] flex font-[Poppins] overflow-hidden'>

            {/* nav bar */}
            <SidebarNavigation page={'user'} />

            {/* content right side */}
            <div className='w-full min-h-screen text-white py-3 pt-7 px-3 sm:px-7 ml-[27px] sm:ml-[65px]'>

                {/* title */}
                <div className='flex justify-between items-center mb-[17px]'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;User
                            </span>
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className="flex flex-wrap items-center gap-6 border-b border-gray-800 mb-6 mt-7">
                    <button
                        onClick={() => setActiveTab("users")}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === "users"
                            ? "border-b-2 border-red-900 text-white"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => setActiveTab("admins")}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === "admins"
                            ? "border-b-2 border-red-900 text-white"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        Admins
                    </button>
                </div>

                {/* users containner */}
                {activeTab === 'users' ? <Users /> : ''}

                {/* admins containner */}
                {activeTab === 'admins' ? <Admins /> : ''}

            </div>
        </div>
    )
}

export default AdminUser