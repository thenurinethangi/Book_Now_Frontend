import { Search, Download, X, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { addNewAdmin, getAllAdmins } from '../../services/admin/UserService';
import { toast } from 'react-toastify';

function Admins(props: any) {

    const [admins, setAdmins] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAdmin, setNewAdmin] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        mobile: '',
        postCode: '',
        gender: ''
    });

    const [activeOptionsId, setActiveOptionsId] = useState('');

    useEffect(() => {
        loadAllAdmins();
    }, [props.load]);

    useEffect(() => {
        const close = () => setActiveOptionsId('');
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);

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

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setNewAdmin({
            ...newAdmin,
            [e.target.name]: e.target.value
        });
    }

    async function handleAddAdmin() {
        console.log('Adding new admin:', newAdmin);
        try {
            const res = await addNewAdmin(newAdmin);
            console.log(res.data.data);
            toast.success('Added new system admin!');
        }
        catch (e) {
            console.log(e);
            toast.error('Failed to add new system admin!');
        }
        setIsModalOpen(false);
        setNewAdmin({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            mobile: '',
            postCode: '',
            gender: ''
        });
        loadAllAdmins();
    }

    function handleCloseModal() {
        setIsModalOpen(false);
        setNewAdmin({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            mobile: '',
            postCode: '',
            gender: ''
        });
    }

    return (
        <>
            <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 overflow-hidden'>
                {/* Table Header */}
                <div className='flex flex-wrap gap-3 justify-between items-center px-5 py-4 border-b border-gray-800'>
                    <div>
                        <h3 className='text-[18px] font-medium text-white mb-1'>Admins</h3>
                        <p className='text-[12px] text-gray-500'>All adminstrators in synema</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-3'>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-[#121212] border border-gray-800 rounded-lg px-4 py-2 text-[12px] text-gray-400 focus:outline-none focus:border-gray-700 w-64"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]">
                            <Download className="w-4 h-4" />
                            Export CSV
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className='w-[85px] h-[36px] bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px] cursor-pointer'
                        >
                            + Admin
                        </button>
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
                                <tr key={admin._id} className='border-b border-gray-800 hover:bg-[#252525] transition-colors relative'>
                                    <td className='p-4'>
                                        <div className='flex items-center gap-3'>
                                            <input
                                                type="checkbox"
                                                // checked={selectedItems.includes(transaction.id)}
                                                // onChange={() => toggleSelect(transaction.id)}
                                                className='w-4 h-4 rounded border-gray-700 bg-transparent'
                                            />
                                            <span className='text-[12px] font-medium text-gray-400'>{index + 1}</span>
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
                                        <button onClick={(e) => { setActiveOptionsId(admin._id); e.stopPropagation(); }} className='text-gray-500 hover:text-gray-400 cursor-pointer'>
                                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                                <circle cx='12' cy='6' r='1.5' />
                                                <circle cx='12' cy='12' r='1.5' />
                                                <circle cx='12' cy='18' r='1.5' />
                                            </svg>
                                        </button>
                                    </td>
                                    {/* options */}
                                    <div className={`flex flex-col shadow-2xl absolute top-3 right-2 z-[300] bg-[#1e1e1e] border border-gray-700 rounded-md overflow-hidden min-w-[160px] ${activeOptionsId && activeOptionsId === admin._id ? "" : "hidden"}`}>
                                        {/* Delete Option */}
                                        <button
                                            // onClick={handleActivateCinema}
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-900/20 transition-colors group"
                                        >
                                            <X className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                                            <p className="text-[13px] text-gray-300 group-hover:text-red-300">
                                                Deactive
                                            </p>
                                        </button>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className='flex items-center justify-between px-5 py-4 border-t border-gray-800'>
                    <span className='text-[12px] text-gray-500'>
                        Showing <span className='text-white'>1</span> to <span className='text-white'>{admins.length}</span> of <span className='text-white'>{admins.length}</span>
                    </span>
                    <div className='flex items-center gap-2'>
                        <button
                            className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525] disabled:opacity-50 cursor-pointer'
                        // disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button className='px-3 py-2 bg-gray-700 rounded-md text-[12px] text-white'>1</button>
                        <button className='px-2.5 py-1.5 border border-gray-800 rounded-md text-[12px] text-gray-400 hover:bg-[#252525] cursor-pointer'>
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Admin Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-[Poppins]'>
                    <div className='bg-[#1e1e1e] rounded-md border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
                        {/* Modal Header */}
                        <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800 sticky top-0 bg-[#1e1e1e]'>
                            <div>
                                <h3 className='text-[18px] font-medium text-white mb-1'>Add New Admin</h3>
                                <p className='text-[12px] text-gray-500'>Create a new administrator account</p>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className='text-gray-500 hover:text-gray-400 transition-colors cursor-pointer'
                            >
                                <X className='w-5 h-5' />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className='p-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={newAdmin.email}
                                        onChange={handleInputChange}
                                        placeholder="admin@example.com"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={newAdmin.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter password"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={newAdmin.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={newAdmin.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Doe"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={newAdmin.dateOfBirth}
                                        onChange={handleInputChange}
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Mobile Number</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={newAdmin.mobile}
                                        onChange={handleInputChange}
                                        placeholder="0714124926"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Postal Code</label>
                                    <input
                                        type="text"
                                        name="postCode"
                                        value={newAdmin.postCode}
                                        onChange={handleInputChange}
                                        placeholder="11111"
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[12px] text-gray-500 mb-2'>Gender</label>
                                    <select
                                        name="gender"
                                        value={newAdmin.gender}
                                        onChange={handleInputChange}
                                        className='w-full bg-[#121212] border border-gray-800 rounded-lg px-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className='flex justify-end gap-3 px-6 py-4 border-t border-gray-800'>
                            <button
                                onClick={handleCloseModal}
                                className='px-4 py-2.5 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px] cursor-pointer'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddAdmin}
                                className='px-4 py-2.5 bg-red-700 hover:bg-red-600 rounded-lg transition-colors text-[12px] cursor-pointer'
                            >
                                Add Admin
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Admins