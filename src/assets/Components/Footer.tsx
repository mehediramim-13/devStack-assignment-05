import FooterLogo from '../images/logo-text.png'

const Footer = () => {
    return (
        <footer className='w-full bg-[#FFFEFE]'>
            <div className='container mx-auto px-4 pt-16 pb-8 font-jakarta'>

                <div className='flex justify-between'>
                  
                    <div className='ml-20 max-w-[280px]'>
                        <div className='mb-4'>
                            <img src={FooterLogo} alt={'Footer Logo'} />
                        </div>
                        <p className='text-gray-500 text-sm mb-4'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='flex gap-4 text-sm font-medium text-[#0f172a]'>
                            <a href='#'>GitHub</a>
                            <a href='#'>Twitter</a>
                            <a href='#'>LinkedIn</a>
                        </div>
                    </div>

                  
                    <div>
                        <h4 className='font-bold text-xs tracking-wider mb-4'>PRODUCT</h4>
                        <ul className='flex flex-col gap-3 text-gray-500 text-sm'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Technologies</a></li>
                            <li><a href='#'>Projects</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h4 className='font-bold text-xs tracking-wider mb-4'>COMPANY</h4>
                        <ul className='flex flex-col gap-3 text-gray-500 text-sm'>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>Careers</a></li>
                        </ul>
                    </div>

                   
                    <div className='mr-20'>
                        <h4 className='font-bold text-xs tracking-wider mb-4'>LEGAL</h4>
                        <ul className='flex flex-col gap-3 text-gray-500 text-sm'>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

               
                <hr className='my-8 border-gray-200 ml-20 mr-20' />

                
                <div className='flex justify-between ml-20 mr-20 text-sm text-gray-400'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <a href='#'>Privacy</a>
                        <a href='#'>Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;