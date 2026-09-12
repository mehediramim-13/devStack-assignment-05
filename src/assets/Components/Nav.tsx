import { useState } from 'react'
import Logo from '../images/logo-text.png'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='w-full bg-[#FFFEFE] sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto flex items-center justify-between h-[70px] px-4 font-jakarta'>

                <div className='flex items-center gap-3 lg:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
                        ☰
                    </button>
                    <img src={Logo} alt={"Logo"} className='h-6 w-auto' />
                </div>

                <div className='hidden lg:block'>
                    <img src={Logo} alt={"Logo"} />
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex justify-between gap-6 '>
                        <li className='text-[#db2777FF]'><a href="">Home</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Technologies</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Projects</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>About</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-2 sm:gap-3'>
                    <button className='bg-white text-black w-[60px] sm:w-[92px] h-[39px] rounded-full hover:bg-gray-100 transition-colors text-xs sm:text-base'> Sign in  </button>
                <button className='bg-[#d91b7e] text-white w-[60px] sm:w-[92px] h-[39px] rounded-full hover:bg-[#c01870] transition-colors text-xs sm:text-base'>
                Sign up </button>
                </div>

            </div>

            {menuOpen && (
                <div className='lg:hidden px-4 pb-4'>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#db2777FF]'><a href="">Home</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Technologies</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Projects</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>About</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;