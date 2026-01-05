import { useEffect, useState } from "react";
import { Search, CheckCircle, XCircle, AlertCircle, Tv } from "lucide-react";
import SidebarNavigation from "../components/admin/SidebarNavigation";
import ActiveScreens from "../components/admin/ActiveScreens";
import DeactiveScreens from "../components/admin/DeactiveScreens";
import { getAllActiveScreens, getAllDeactiveScreens } from "../services/admin/screenService";

function AdminScreen() {

    const [activeTab, setActiveTab] = useState("manage");
    const [statsUpdate, setStatsUpdate] = useState(0);
    const [mngScreens, setMngScreens] = useState([]);
    const [deactScreens, setDeactScreens] = useState([]);

    useEffect(() => {
        initStats();
    }, [statsUpdate])

    async function initStats() {
        try {
            const res1 = await getAllActiveScreens();
            setMngScreens(res1.data.data);

            const res2 = await getAllDeactiveScreens();
            setDeactScreens(res2.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="bg-[#121212] flex font-[Poppins] overflow-hidden min-h-screen">
            {/* nav bar */}
            <SidebarNavigation page={"screen"} />

            {/* content right side */}
            <div className="w-full h-min-screen text-white py-3 pt-7 px-3 sm:px-7 ml-[28px] sm:ml-[65px]">
                {/* title */}
                <div className="flex flex-wrap gap-2.5 justify-between items-center mb-[17px]">
                    <div className='mr-27'>
                        <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                                <span className="text-[18px] font-medium text-gray-500">
                                    Home {`>`}
                                </span>
                                &nbsp;Screen
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
                    <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[12px] text-gray-500 mb-1">Total Screens</p>
                                <p className="text-[18px] font-medium text-white">{mngScreens.length+deactScreens.length}</p>
                            </div>
                            <Tv className="w-8 h-8 text-red-700 opacity-20" />
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[12px] text-gray-500 mb-1">Managed</p>
                                <p className="text-[18px] font-medium text-green-500">{mngScreens.length}</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-green-500 opacity-20" />
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[12px] text-gray-500 mb-1">
                                    Currently Active
                                </p>
                                <p className="text-[18px] font-medium text-orange-500">{mngScreens.filter((screen: any) => screen.status === 'ACTIVE' ).length}</p>
                            </div>
                            <AlertCircle className="w-8 h-8 text-orange-500 opacity-20" />
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[12px] text-gray-500 mb-1">Deactivated</p>
                                <p className="text-[18px] font-medium text-red-500">{deactScreens.length}</p>
                            </div>
                            <XCircle className="w-8 h-8 text-red-500 opacity-20" />
                        </div>
                    </div>
                </div>

                {/* tabs */}
                <div className="flex flex-wrap items-center gap-6 border-b border-gray-800 mb-6">
                    <button
                        onClick={() => setActiveTab("manage")}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === "manage"
                            ? "border-b-2 border-red-900 text-white"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => setActiveTab("deactive")}
                        className={`px-2.5 pb-2 text-[18px] -mb-[1px] transition-colors ${activeTab === "deactive"
                            ? "border-b-2 border-red-900 text-white"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        Deactive
                    </button>
                </div>

                {/* active screen containner */}
                {activeTab === "manage" ? <ActiveScreens statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ""}

                {/* deactive screen containner */}
                {activeTab === "deactive" ? <DeactiveScreens statsUpdate={statsUpdate} setStatsUpdate={setStatsUpdate} /> : ""}
            </div>
        </div>
    );
}

export default AdminScreen;
