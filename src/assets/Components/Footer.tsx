import FooterLogo from '../images/logo-text.png'

const Footer = () => {
    return (
        <footer className='w-full bg-[#FFFEFE]'>
            <div className='container mx-auto px-4 pt-12 sm:pt-16 pb-8 font-jakarta'>

                <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 text-center lg:text-left items-center lg:items-start'>

                    <div className='lg:ml-20 max-w-[280px]'>
                        <div className='mb-4 flex justify-center lg:justify-start'>
                            <img src={FooterLogo} alt={'Footer Logo'} />
                        </div>
                        <p className='text-gray-500 text-sm mb-4'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='flex justify-center lg:justify-start gap-4 text-sm font-medium text-[#0f172a]'>
                            <a href='#'>GitHub</a>
                            <a href='#'>Twitter</a>
                            <a href='#'>LinkedIn</a>
                        </div>
                    </div>

                    <div className='flex gap-12 sm:gap-16 lg:gap-0'>
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
                    </div>

                    <div className='lg:mr-20'>
                        <h4 className='font-bold text-xs tracking-wider mb-4'>LEGAL</h4>
                        <ul className='flex flex-col gap-3 text-gray-500 text-sm'>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <hr className='my-8 border-gray-200 lg:ml-20 lg:mr-20' />

                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 lg:ml-20 lg:mr-20 text-sm text-gray-400'>
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