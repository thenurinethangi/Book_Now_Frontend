import {
    Users,
    Maximize,
    Trash2,
    Edit3,
    CheckCircle,
    XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
    checkScreensHasShowtimes,
    deleteAScreen,
    getAllScreens,
    getTodayBookingsOfScreens,
    updateScreenStatus,
} from "../../services/cinema/screenService";
import { toast } from "react-toastify";
import { getScreenOccupancy } from "../../services/cinema/dashboardService";

const ConfirmToast = (props: any) => {
    const { closeToast, onConfirm } = props;

    return (
        <div className='font-[Poppins]'>
            <p className='text-[17px] mb-1.5'>Delete Screen?</p>
            <p className='text-[14px] text-gray-500'>This deletion will be permanent and cannot be undone. You will no longer be able to add showtimes to this screen.</p>
            <div className="flex gap-3 mt-3">
                <button onClick={closeToast} className='text-[13px] font-medium px-2 py-2 border border-gray-800 rounded-md'>Cancel</button>
                <button onClick={() => { onConfirm(); closeToast(); }} className='text-[13px] font-medium px-2 h-[32px] bg-red-700 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export function askConfirm(onConfirm: () => void) {
    toast((toastProps: any) => (
        <ConfirmToast {...toastProps} onConfirm={onConfirm} />
    ));
}

function Screens(props: any) {

    const [screens, setScreens] = useState([]);
    const [immutableScreens, setImmutableScreens] = useState([]);
    const [activeOptionsId, setActiveOptionsId] = useState<string | null>(null);

    const [screensBookings, setScreensBookings] = useState<any>([]);
    const [screensShowtimes, setScreensShowtimes] = useState<any>([]);

    useEffect(() => {
        const close = () => setActiveOptionsId(null);
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);

    useEffect(() => {
        loadAllScreens();
    }, [props.loadScreens]);

    useEffect(() => {
        filterScreensBySearch(props.searchKey);
    }, [props.searchKey, immutableScreens]);

    async function loadAllScreens() {
        try {
            const res = await getAllScreens();
            setScreens(res.data.data);
            setImmutableScreens(res.data.data);
            props.setData(res.data.data);
            console.log(res.data.data);

            const res2 = await getTodayBookingsOfScreens();
            console.log(res2.data.data);
            setScreensBookings(res2.data.data);

            const res3 = await checkScreensHasShowtimes();
            console.log(res3.data.data);
            setScreensShowtimes(res3.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    async function handleDeleteScreen(e: React.MouseEvent<HTMLButtonElement>) {

        e.stopPropagation();

        const bookings: any = e.currentTarget.dataset.bookings;
        const showtimes: any = e.currentTarget.dataset.showtimes;

        if (bookings && bookings > 0) {
            toast.warn('This screen has bookings, so it cannot be deleted!');
            return;
        }
        if (showtimes && showtimes > 0) {
            toast.warn('This screen has showtimes, so it cannot be deleted!');
            return;
        }

        if (!activeOptionsId) {
            return;
        }

        askConfirm(async () => {
            try {
                const res = await deleteAScreen(activeOptionsId);

                toast.success("Screen deleted successfully!");
                setActiveOptionsId(null);
                loadAllScreens();
            } catch (e) {
                toast.error('Failed to delete screen, please try again later!');
                console.log(e);
            }
        });
    }

    async function switchStatus(e: React.MouseEvent<HTMLButtonElement>) {

        e.stopPropagation();

        let status = e.currentTarget.getAttribute("data-status");
        let bookings: any = e.currentTarget.dataset.bookings;
        let showtimes: any = e.currentTarget.dataset.showtimes;

        if (!activeOptionsId || !status) {
            return;
        }

        if (status === 'ACTIVE') {

            if (bookings && bookings > 0) {
                toast.warn('This screen has bookings, so it cannot be marked as unavailable!');
                return;
            }
            if (showtimes && showtimes > 0) {
                toast.warn('This screen has showtimes, so it cannot be marked as unavailable!');
                return;
            }
            status = 'UNAVAILABLE'
        }
        else {
            status = 'ACTIVE'
        }

        try {
            const res = await updateScreenStatus(activeOptionsId, status);

            toast.success(`Screen ID ${activeOptionsId} is now ${status.toLowerCase()}.`);
            setActiveOptionsId(null);
            loadAllScreens();
        } catch (e) {
            console.log(e);
        }
    }

    function filterScreensBySearch(key: string) {
        if (!key || key === "") {
            setScreens(immutableScreens);
            return;
        }

        const search = key.toLowerCase();

        const filtered = immutableScreens.filter((screen: any) => {
            return (
                screen.screenName?.toLowerCase().includes(search) ||
                screen.status?.toLowerCase().includes(search) ||
                screen.screenTypes?.some((t: string) =>
                    t.toLowerCase().includes(search)
                ) ||
                String(screen.numberOfSeats)?.includes(search)
            );
        });

        setScreens(filtered);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {screens.length > 0 && screens.map((screen: any, index: number) => (
                <div
                    key={screen._id}
                    className="rounded-lg bg-[#1e1e1e] border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group relative"
                >
                    <div className="h-[200px] relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
                            <div
                                className={`px-2 py-1 rounded text-[9px] font-bold ${screen.status === "ACTIVE"
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-orange-500/20 text-orange-500"
                                    }`}
                            >
                                {screen.status}
                            </div>
                            <button
                                onClick={(e) => {
                                    setActiveOptionsId(screen._id);
                                    e.stopPropagation();
                                }}
                                className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="6" r="1.5" />
                                    <circle cx="12" cy="12" r="1.5" />
                                    <circle cx="12" cy="18" r="1.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]" />
                        <img
                            src={screen.screenImageUrl}
                            alt={screen.screenName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-4.5">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-[18px] text-[#dedede] font-medium mb-1">
                                    {screen.screenName}
                                </h3>
                                <p className="text-[12px] text-[#999]">Screen {index + 1}</p>
                            </div>
                            <div className="">
                                {screen.screenTypes.map((type: any) => (
                                    <div className="mb-2 flex items-center gap-1 px-2 py-1 bg-[#353535] rounded text-[9px] text-[#999] font-bold">
                                        <Maximize className="w-3 h-3" />
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1.5">
                                <Users className="w-4 h-4 text-gray-500" />
                                <span className="text-[12px] text-[#999]">
                                    {screen.numberOfSeats} seats
                                </span>
                            </div>
                            {screen.status === "ACTIVE" && screensBookings[index]?.bookings > 0 && (
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <span className="text-[12px] text-green-500">
                                        {screensBookings[index]?.bookings} bookings today
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="pt-3 border-t border-gray-800">
                            <button className="text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1">
                                View details
                                <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* options */}
                    <div
                        className={`flex flex-col shadow-2xl absolute top-10 right-0 z-[300] bg-[#1e1e1e] border border-gray-700 rounded-md overflow-hidden min-w-[160px] ${activeOptionsId && activeOptionsId === screen._id ? "" : "hidden"
                            }`}
                    >
                        {/* Edit Option */}
                        <button
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#252525] transition-colors group"
                        >
                            <Edit3 className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                            <p className="text-[13px] text-gray-300 group-hover:text-white">
                                Edit
                            </p>
                        </button>

                        {/* Divider */}
                        <div className="h-[1px] bg-gray-700/50"></div>

                        {/* Toggle Status Option */}
                        <button
                            onClick={switchStatus}
                            data-status={screen.status}
                            data-bookings={screensBookings[index]?.bookings}
                            data-showtimes={screensShowtimes[index]?.showtimes}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#252525] transition-colors group"
                        >
                            {screen.status === "ACTIVE" ? (
                                <>
                                    <XCircle className="w-4 h-4 text-orange-400 group-hover:text-orange-300" />
                                    <p className="text-[13px] text-gray-300 group-hover:text-white">
                                        Mark Unavailable
                                    </p>
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                                    <p className="text-[13px] text-gray-300 group-hover:text-white">
                                        Mark Available
                                    </p>
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="h-[1px] bg-gray-700/50"></div>

                        {/* Delete Option */}
                        <button
                            onClick={handleDeleteScreen}
                            data-bookings={screensBookings[index]?.bookings}
                            data-showtimes={screensShowtimes[index]?.showtimes}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-900/20 transition-colors group"
                        >
                            <Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                            <p className="text-[13px] text-gray-300 group-hover:text-red-300">
                                Delete
                            </p>
                        </button>
                    </div>
                </div>
            ))}
            {screens.length <= 0 && <p className="text-[14px] text-white/80 font-light">No Screens</p>}
        </div>
    );
}

export default Screens;
