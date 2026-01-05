import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Lock, LogOut, Save, X } from 'lucide-react';
import SidebarNavigation from '../components/admin/SidebarNavigation';
import { getCurrentUserData } from '../services/user/authService';
import { toast } from 'react-toastify';
import { adminLogout } from '../services/admin/auth';
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import type { AppDispatch } from "../store/store";

function AdminUserProfile() {

  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [userDetails, setUserDetails] = useState<any>({});

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (!loading) {
      if (!user || !user.roles?.includes('ADMIN')) {
        navigate('/admin/landing', { replace: true });
      }
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    getUserAndDetails();
  }, []);

  async function getUserAndDetails() {
    try {
      const res = await getCurrentUserData();
      console.log(res.data.data);
      setUserDetails(res.data.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    console.log('Saving profile:', userDetails);
    setIsEditingProfile(false);
  };

  const handleChangePassword = () => {
    console.log('Changing password');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setIsChangingPassword(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  async function handleLogout() {
    try {
      const res = await adminLogout();
      localStorage.removeItem('accessToken');
      navigate('/admin/landing');

      dispatch(logout());
      navigate('/admin/landing', { replace: true });
    }
    catch (e) {
      toast.error('Failed to logout!');
    }
  }

  return (
    <div className='bg-[#121212] flex font-[Poppins] min-h-screen'>

      {/* Sidebar Navigation */}
      <SidebarNavigation page={'profile'} />

      {/* Main Content */}
      <div className='flex-1 text-white px-3 sm:px-7 ml-[27px] sm:ml-[65px] py-3 pt-7 overflow-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-[22px]'>
          <div>
            <div className="flex items-center space-x-3">
              <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-[16.5px] font-semibold z-0">
                <span className='text-[18px] font-medium text-gray-500'>Home {`>`}</span>&nbsp;Profile
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Profile Card */}
          <div className='lg:col-span-1'>
            <div className='bg-[#1e1e1e] rounded-lg border border-gray-800 p-6'>
              <div className='flex flex-col items-center'>
                <div className='relative mb-4'>
                  <div className='w-32 h-32 rounded-full bg-gradient-to-br from-black/50 to-black/20 flex items-center justify-center overflow-hidden'>
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className='w-full h-full object-cover' />
                    ) : (
                      <User className='w-16 h-16 text-white' />
                    )}
                  </div>
                  <label className='absolute bottom-0 right-0 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors'>
                    <Camera className='w-5 h-5 text-white' />
                    <input
                      type="file"
                      accept="image/*"
                      className='hidden'
                      onChange={handleProfileImageChange}
                    />
                  </label>
                </div>
                <h2 className='text-[20px] font-semibold text-white mb-1'>
                  {userDetails.firstName} {userDetails.lastName}
                </h2>
                <p className='text-[12px] text-gray-500 mb-4'>{userDetails.email}</p>
                <div className='flex items-center gap-2 text-[11px] text-gray-500'>
                  <Calendar className='w-3.5 h-3.5' />
                  <span>Joined {formatDate(userDetails.createdAt)}</span>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-gray-800 flex justify-center items-center'>
                <button
                  onClick={handleLogout}
                  className='flex items-center justify-center gap-2 rounded-lg transition-colors text-[13px] font-medium cursor-pointer'
                >
                  <LogOut className='w-4 h-4' />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Profile Details & Settings */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Personal Information */}
            <div className='bg-[#1e1e1e] rounded-lg border border-gray-800'>
              <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800'>
                <div>
                  <h3 className='text-[18px] font-medium text-white mb-1'>Personal Information</h3>
                  <p className='text-[12px] text-gray-500'>Update your personal details</p>
                </div>
                {!isEditingProfile ? (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className='px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]'
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className='flex gap-2'>
                    <button
                      onClick={() => setIsEditingProfile(false)}
                      className='px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px] flex items-center gap-2'
                    >
                      <X className='w-3.5 h-3.5' />
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className='px-4 py-2 bg-red-800 hover:bg-red-700 rounded-lg transition-colors text-[12px] flex items-center gap-2'
                    >
                      <Save className='w-3.5 h-3.5' />
                      Save
                    </button>
                  </div>
                )}
              </div>

              <div className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-[12px] text-gray-500 mb-2'>First Name</label>
                    <div className='relative'>
                      <User className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                      <input
                        type="text"
                        name="firstName"
                        value={userDetails.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditingProfile}
                        className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-[12px] text-gray-500 mb-2'>Last Name</label>
                    <div className='relative'>
                      <User className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                      <input
                        type="text"
                        name="lastName"
                        value={userDetails.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditingProfile}
                        className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-[12px] text-gray-500 mb-2'>Email Address</label>
                    <div className='relative'>
                      <Mail className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                      <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        disabled={!isEditingProfile}
                        className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-[12px] text-gray-500 mb-2'>Phone Number</label>
                    <div className='relative'>
                      <Phone className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                      <input
                        type="text"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        disabled={!isEditingProfile}
                        className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                      />
                    </div>
                  </div>
                  <div className='md:col-span-2'>
                    <label className='block text-[12px] text-gray-500 mb-2'>Address</label>
                    <div className='relative'>
                      <MapPin className='w-4 h-4 text-gray-500 absolute left-3 top-3' />
                      <input
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        disabled={!isEditingProfile}
                        className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className='bg-[#1e1e1e] rounded-lg border border-gray-800'>
              <div className='flex justify-between items-center px-6 py-4 border-b border-gray-800'>
                <div>
                  <h3 className='text-[18px] font-medium text-white mb-1'>Change Password</h3>
                  <p className='text-[12px] text-gray-500'>Update your account password</p>
                </div>
                {!isChangingPassword && (
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className='px-4 py-2 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px]'
                  >
                    Change Password
                  </button>
                )}
              </div>

              {isChangingPassword && (
                <div className='p-6'>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-[12px] text-gray-500 mb-2'>Current Password</label>
                      <div className='relative'>
                        <Lock className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                        <input
                          type="password"
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          placeholder="Enter current password"
                          className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-[12px] text-gray-500 mb-2'>New Password</label>
                      <div className='relative'>
                        <Lock className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                        <input
                          type="password"
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          placeholder="Enter new password"
                          className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-[12px] text-gray-500 mb-2'>Confirm New Password</label>
                      <div className='relative'>
                        <Lock className='w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2' />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                          placeholder="Confirm new password"
                          className='w-full bg-[#121212] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-[12px] text-gray-300 focus:outline-none focus:border-gray-700'
                        />
                      </div>
                    </div>
                    <div className='flex gap-3 pt-2'>
                      <button
                        onClick={() => setIsChangingPassword(false)}
                        className='flex-1 px-4 py-2.5 bg-[#121212] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-[12px] flex items-center justify-center gap-2'
                      >
                        <X className='w-3.5 h-3.5' />
                        Cancel
                      </button>
                      <button
                        onClick={handleChangePassword}
                        className='flex-1 px-4 py-2.5 bg-red-800 hover:bg-red-700 rounded-lg transition-colors text-[12px] flex items-center justify-center gap-2'
                      >
                        <Lock className='w-3.5 h-3.5' />
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserProfile;