import { Search, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getAllAdmins } from '../../services/admin/UserService';

function Admins(props: any) {

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        loadAllAdmins();
    }, [props.load]);

    async function loadAllAdmins() {
        try {
            const res = await getAllAdmins();
            console.log(res.data.data);
            setAdmins(res.data.data);
            // props.setShowtimesList(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getStatusBadge = (status: string) => {
        const styles = {
            'ACTIVE': 'bg-green-500/20 text-green-500',
            'DEACTIVE': 'bg-red-500/20 text-red-500'
        };
        return styles[status] || '';
    };


    return (
        <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
            {/* Table Header */}
            <div className='flex justify-between items-center px-5 py-4 border-b border-gray-800'>
                <div>
                    <h3 className='text-[18px] font-medium text-white mb-1'>Admins</h3>
                    <p className='text-[12px] text-gray-500'>All adminstrators in synema</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-red-900 w-64"
                        />
                        <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]">
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button className='w-[85px] h-[36px] bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]'>+ Admin</button>
                </div>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-gray-800'>
                            <th className='p-4 text-left'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[12px] font-medium text-gray-500'>No</span>
                                </div>
                            </th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Email</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>First Name</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Last Name</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Mobile</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Status</th>
                            <th className='p-4 text-left text-[12px] font-medium text-gray-500'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin: any, index: number) => (
                            <tr key={admin._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                <td className='p-4'>
                                    <div className='flex items-center gap-3'>
                                        <input
                                            type="checkbox"
                                            // checked={selectedItems.includes(transaction.id)}
                                            // onChange={() => toggleSelect(transaction.id)}
                                            className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                        />
                                        <span className='text-[12px] font-medium text-gray-400'>{index}</span>
                                    </div>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-300'>{admin.email}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-300'>{admin.firstName}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-300'>{admin.lastName}</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-[12px] text-gray-500'>{admin.mobile}</span>
                                </td>
                                <td className='p-4'>
                                    <span className={`text-[9px] px-2 py-1 rounded-full font-semibold ${getStatusBadge(admin.status)}`}>
                                        {admin.status}
                                    </span>
                                </td>
                                <td className='p-4'>
                                    <button className='text-gray-500 hover:text-gray-400'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                            <circle cx='12' cy='6' r='1.5' />
                                            <circle cx='12' cy='12' r='1.5' />
                                            <circle cx='12' cy='18' r='1.5' />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-between px-5 py-4 border-t border-gray-800'>
                <span className='text-[12px] text-gray-500'>
                    Showing <span className='text-white'>1</span> to <span className='text-white'>10</span> of <span className='text-white'>{0}</span>
                </span>
                <div className='flex items-center gap-2'>
                    <button
                        className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50'
                    // disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button className='px-3 py-2 bg-gray-700 rounded-md text-[12px] text-white'>1</button>
                    <button className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525]'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Admins