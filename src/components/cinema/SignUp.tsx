import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { X } from 'lucide-react';
import logo2 from '../../assets/images/attachment_69652587-removebg-preview.png'

import { toast } from 'react-toastify';
import { signUp } from '../../services/cinema/auth';

const SignUp = (props: any) => {

    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    const [cinemaName, setCinemaName] = useState('');
    const [description, setDescription] = useState('');
    const [cinemaEmail, setCinemaEmail] = useState('');
    const [cinemaPhoneNo, setCinemaPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [distric, setDistric] = useState('');
    const [postCode, setPostCode] = useState('');
    const [googleMapLink, setGoogleMapLink] = useState('');
    const [website, setWebsite] = useState('');
    const [noOfScreens, setNoOfScreens] = useState('');
    const [bussinessRegisterNo, setBussinessRegisterNo] = useState('');
    const [cinemaImage, setCinemaImage] = useState(null);
    const [bussinessRegisterDocuments, setBussinessRegisterDocuments] = useState(null);

    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerNicNo, setOwnerNicNo] = useState('');
    const [ownerNicDocuments, setOwnerNicDocuments] = useState(null);

    const [adminEmail, setAdminEmail] = useState('');
    const [adminFirstName, setAdminFirstName] = useState('');
    const [adminLastName, setAdminLastName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    function handleCloseSignUpModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setAuthVisible(false);
            props.setAuthType('');
        }, 150);
    }

    function handleOpenSignInModel() {
        setIsVisible(false);
        setTimeout(() => {
            props.setAuthVisible(true);
            props.setAuthType('SignIn');
        }, 0);
    }

    async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!cinemaName.trim() || !description.trim() || !cinemaEmail.trim() || !cinemaPhoneNo.trim() || !address.trim() || !city.trim() || !distric.trim() || !postCode.trim() || !googleMapLink.trim() || !noOfScreens.trim() || !ownerEmail.trim() || !ownerName.trim() || !ownerNicNo.trim() || !adminEmail.trim() || !adminFirstName.trim() || !adminLastName.trim() || !adminPassword.trim()) {
            toast.warn("Please fill all required fields.");
            return;
        }

        if (!cinemaImage || !bussinessRegisterDocuments || !ownerNicDocuments) {
            toast.warn("Please upload all required documents.");
            return;
        }

        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(adminPassword)) {
            toast.warn("Password must be at least 6 characters.");
            return;
        }

        const phoneRegex = /^(?:\+94|0)?7\d{8}$|^(?:0)?1\d{8}$/;
        if (!phoneRegex.test(cinemaPhoneNo)) {
            toast.warn("Invalid phone number.");
            return;
        }

        const nicRegex = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
        if (!nicRegex.test(ownerNicNo)) {
            toast.warn("Invalid NIC number.");
            return;
        }

        const screensRegex = /^[1-9]\d*$/;
        if (!screensRegex.test(noOfScreens)) {
            toast.warn("Number of screens must be a valid positive number.");
            return;
        }

        const formdata = new FormData();
        formdata.append("cinemaName", cinemaName);
        formdata.append("description", description);
        formdata.append("cinemaEmail", cinemaEmail);
        formdata.append("cinemaPhoneNo", cinemaPhoneNo);
        formdata.append("address", address);
        formdata.append("city", city);
        formdata.append("distric", distric);
        formdata.append("postCode", postCode);
        formdata.append("googleMapLink", googleMapLink);
        formdata.append("website", website);
        formdata.append("noOfScreens", noOfScreens);
        formdata.append("bussinessRegisterNo", bussinessRegisterNo);

        formdata.append("cinemaImage", cinemaImage);
        formdata.append("bussinessRegisterDocuments", bussinessRegisterDocuments);
        formdata.append("ownerNicDocuments", ownerNicDocuments);

        formdata.append("ownerEmail", ownerEmail);
        formdata.append("ownerName", ownerName);
        formdata.append("ownerNicNo", ownerNicNo);

        formdata.append("adminEmail", adminEmail);
        formdata.append("adminFirstName", adminFirstName);
        formdata.append("adminLastName", adminLastName);
        formdata.append("adminPassword", adminPassword);

        const data = await signUp(formdata);
        
        if (data.status === 200) {
            setIsVisible(false);
            setTimeout(() => {
                props.setAuthVisible(true);
                props.setAuthType('OTP');
                props.setCinemaAdminEmail(data.data.data.email);
            }, 0);
        }
        else {
            toast.error('Failed to sign up, please try again later!');
        }
    }

    return (
        <div>
            <div className={`overflow-y-auto overflow-x-hidden fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-md flex justify-end items-center z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <div className={`h-screen py-10 px-7 bg-black shadow-2xl rounded-lg flex flex-col justify-start items-center gap-5 relative transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-20"}`}>

                    <X onClick={handleCloseSignUpModel} className='absolute right-4.5 top-4.5 w-5.5 h-5.5' />

                    <div className="flex justify-center items-center space-x-3 absolute left-0.5 top-0.5">
                        <div className="flex items-center justify-center z-10">
                            <img src={logo2} width={'55px'}></img>
                        </div>
                    </div>

                    <div>
                        <p className='text-[20px] font-[Poppins] font-medium mb-0.5'>Register your cinema</p>
                    </div>

                    <form onSubmit={handleSignUp} className='flex flex-col gap-4 font-[Poppins] pt-7'>

                        <input value={cinemaName} onChange={(e) => setCinemaName(e.target.value)} type='text' placeholder='Cinema name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' rows={5} required className='w-[440px] px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></textarea>
                        <input value={cinemaEmail} onChange={(e) => setCinemaEmail(e.target.value)} type='email' placeholder='Cinema email' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={cinemaPhoneNo} onChange={(e) => setCinemaPhoneNo(e.target.value)} type='text' placeholder='Cinema phone number' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='Address' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <div className='flex items-center gap-2'>
                            <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='City' required className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                            <input value={distric} onChange={(e) => setDistric(e.target.value)} type='text' placeholder='Distric' required className='w-[215px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        </div>
                        <input value={postCode} onChange={(e) => setPostCode(e.target.value)} type='text' placeholder='Post code' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={googleMapLink} onChange={(e) => setGoogleMapLink(e.target.value)} type='text' placeholder='Google map link' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={website} onChange={(e) => setWebsite(e.target.value)} type='text' placeholder='Website (Optional)' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={noOfScreens} onChange={(e) => setNoOfScreens(e.target.value)} type='text' placeholder='Number of screen' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <div className='flex items-center gap-3'>
                            <p className='text-[14.8px] font-normal'>Choose cinema image</p>
                            <input onChange={(e) => setCinemaImage(e.target.files[0])} type='file' required className='text-[14.5px] text-[#616161] w-[200px]'></input>
                        </div>
                        <input value={bussinessRegisterNo} onChange={(e) => setBussinessRegisterNo(e.target.value)} type='text' placeholder='Business register number' className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <div className='flex items-center gap-3'>
                            <p className='text-[14.8px] font-normal'>Bussiness register documents</p>
                            <input onChange={(e) => setBussinessRegisterDocuments(e.target.files[0])} type='file' required className='text-[14.5px] text-[#616161] w-[200px]'></input>
                        </div>

                        <hr className='my-7 mb-2 border-white/30'></hr>

                        <p className='mb-3'>Cinema Owner Details</p>

                        <input value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} type='email' placeholder='Owner email' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type='text' placeholder='Owner name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={ownerNicNo} onChange={(e) => setOwnerNicNo(e.target.value)} type='text' placeholder='Owner nic number' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <div className='flex items-center gap-3'>
                            <p className='text-[14.8px] font-normal'>National Id document</p>
                            <input onChange={(e) => setOwnerNicDocuments(e.target.files[0])} type='file' required className='text-[14.5px] text-[#616161] w-[200px]'></input>
                        </div>

                        <hr className='my-7 mb-2 border-white/30'></hr>

                        <p className=''>Cinema Admin Details</p>
                        <p className='w-[440px] text-[12.5px] text-[#9E9E9E] -translate-y-1.5 mb-1'>Please note that after registration, access to manage your cinema will be available only through the admin email and password.</p>

                        <input value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} type='email' placeholder='Email' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={adminFirstName} onChange={(e) => setAdminFirstName(e.target.value)} type='text' placeholder='First name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <input value={adminLastName} onChange={(e) => setAdminLastName(e.target.value)} type='text' placeholder='Last name' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                        <div>
                            <input value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} type='password' placeholder='Password' required className='w-[440px]  h-12 px-3 py-[15px] border border-[#616161] text-[14.5px] bg-[#353535] rounded-sm text-white focus:outline-none focus:ring-0'></input>
                            <p className='text-[12px] text-[#9E9E9E] mt-1.5 mb-0.5'>Minimum of 6 characters</p>
                        </div>

                        <div className='w-[440px] mt-5 mb-4 flex flex-col gap-2.5'>
                            <div className='flex items-start gap-3'>
                                <input type='checkbox' required className='w-5 h-5'></input>
                                <p className='text-[14.5px] text-[#9E9E9E]'>Yes, I would like to receive offers from SYNEMA</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <input type='checkbox' required className='w-6 h-6'></input>
                                <p className='text-[14.5px] text-[#9E9E9E]'>I have read and agree to the Terms & Conditions and Privacy Policy</p>
                            </div>
                        </div>
                        <button className='w-[440px] bg-red-900 border border-red-800 rounded-sm font-semibold text-[15px] px-6 py-3'>Sign up</button>
                    </form>

                    <div className='-translate-y-1 pb-6'>
                        <p className='font-[Poppins] text-[14.5px] text-[#999]'>Already have an account? <span onClick={handleOpenSignInModel} className='text-red-700 cursor-pointer'>Sign In</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;