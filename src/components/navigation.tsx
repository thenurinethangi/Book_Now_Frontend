import { Search, User } from "lucide-react";
import logo2 from '../assets/images/attachment_69652587-removebg-preview.png'

function Navigation() {

    return (
        <nav className='px-9 flex justify-between items-center w-full bg-transparent absolute top-0 z-10'>
            <div className='flex items-center gap-10'>
                <div className="flex items-center space-x-3 ml-4 mr-9">
                    <div className="flex items-center justify-center z-10">
                        <img src={logo2} width={'80px'} alt="logo"></img>
                    </div>
                </div>
                <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Movie</div>
                <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Cinema</div>
                <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>Showtime</div>
                <div className='-translate-x-18 text-[14px] text-white/90 font-light cursor-pointer hover:text-white transition-colors'>About Us</div>
            </div>
            <div className='flex items-center gap-5'>
                <Search className='w-5 h-5 cursor-pointer' />
                <User className='w-[18px] h-[18px] cursor-pointer' />
            </div>
        </nav>
    )
}

export default Navigation