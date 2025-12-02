import { Users, Maximize } from 'lucide-react';
import { useEffect, useState } from 'react';

function Screens() {

    const [load,setLoad] = useState(false);

    useEffect(() => {

    }, [load]);

    const screens = [
        {
            id: 1,
            name: 'IMAX Premium',
            screenNumber: '01',
            seats: 250,
            type: '3D',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
            status: 'Active',
            bookings: 142
        },
        {
            id: 2,
            name: 'Dolby Atmos Hall',
            screenNumber: '02',
            seats: 180,
            type: 'ATMOS',
            image: 'https://images.unsplash.com/photo-1574267432644-f610f4ac60b4?w=800&q=80',
            status: 'Active',
            bookings: 98
        },
        {
            id: 3,
            name: 'Standard Plus',
            screenNumber: '03',
            seats: 150,
            type: '2D',
            image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
            status: 'Active',
            bookings: 76
        },
        {
            id: 4,
            name: 'VIP Lounge',
            screenNumber: '04',
            seats: 80,
            type: '4DX',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
            status: 'Maintenance',
            bookings: 0
        }
    ];

    return (
        <div className='grid grid-cols-2 gap-5'>
            {screens.map((screen) => (
                <div key={screen.id} className='rounded-lg bg-[#1e1e1e] border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group'>
                    <div className='h-[200px] relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10'>
                            <div className={`px-2 py-1 rounded text-[9px] font-bold ${screen.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>
                                {screen.status}
                            </div>
                            <button className='w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <circle cx='12' cy='6' r='1.5' />
                                    <circle cx='12' cy='12' r='1.5' />
                                    <circle cx='12' cy='18' r='1.5' />
                                </svg>
                            </button>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent z-[1]' />
                        <img
                            src={screen.image}
                            alt={screen.name}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>

                    <div className='p-4.5'>
                        <div className='flex items-start justify-between mb-3'>
                            <div>
                                <h3 className='text-[18px] text-[#dedede] font-medium mb-1'>{screen.name}</h3>
                                <p className='text-[12px] text-[#999]'>Screen {screen.screenNumber}</p>
                            </div>
                            <div className='flex items-center gap-1 px-2 py-1 bg-[#353535] rounded text-[9px] text-[#999] font-bold'>
                                <Maximize className='w-3 h-3' />
                                {screen.type}
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mb-4'>
                            <div className='flex items-center gap-1.5'>
                                <Users className='w-4 h-4 text-gray-500' />
                                <span className='text-[12px] text-[#999]'>{screen.seats} seats</span>
                            </div>
                            {screen.status === 'Active' && (
                                <div className='flex items-center gap-1.5'>
                                    <div className='w-1.5 h-1.5 bg-green-500 rounded-full' />
                                    <span className='text-[12px] text-green-500'>{screen.bookings} bookings today</span>
                                </div>
                            )}
                        </div>

                        <div className='pt-3 border-t border-gray-800'>
                            <button className='text-red-700 text-[12px] font-medium hover:text-red-600 transition-colors flex items-center gap-1'>
                                View details
                                <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Screens