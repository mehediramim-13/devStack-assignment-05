import Logo from '../images/logo-text.png'

const Nav = () => {
    return (
        <nav className='w-full bg-[#FFFEFE] sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between items-center h-[70px] px-4 font-jakarta'>

                <div className='ml-20'>
                    <img src={Logo} alt={"Logo"} />
                </div>

                <div>
                    <ul className='flex justify-between gap-6 '>
                        <li className='text-[#db2777FF]'><a href="">Home</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Technologies</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Projects</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>About</a></li>
                        <li><a href="#" className='hover:text-[#d91b7e] transition-colors'>Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-3 mr-20'>
                    <button className='bg-white text-black w-[92px] h-[39px] rounded-full hover:bg-gray-100 transition-colors'> Sign in  </button>
                    
                   
                <button className='bg-[#d91b7e] text-white w-[92px] h-[39px] rounded-full hover:bg-[#c01870] transition-colors'>
                Sign up </button>

                </div>

            </div>
        </nav>
    );
};

export default Nav;