import HeroImg from '../images/banner-stack.png'

const HeroBanner = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left min-w-0'>
            <div className='flex flex-col justify-center items-center lg:items-start w-full lg:w-auto min-w-0'>
                <h2 className='font-bold text-[32px] sm:text-[42px] lg:text-[60px] leading-tight lg:leading-none text-[#0f172aFF] w-full'>
                    Build Your Ideal <br className='hidden lg:block' />
                    <span className="bg-[linear-gradient(to_right,rgba(255,87,34,1)_0%,rgba(216,27,126,1)_50%,rgba(124,58,237,1)_100%)] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>
                <p className='text-[#475569FF] text-[15px] sm:text-[18px] my-6 lg:my-8 w-full'>Explore frontend, backend, database, and tooling options, <br className='hidden lg:block' />
                    compare them side by side, and put together the stack that fits your <br className='hidden lg:block' />
                    next project.</p>

                <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                    <button className='bg-gradient-to-r from-orange-500 to-[#d91b7e] rounded-[10px] w-full sm:w-[190px] h-10 font-bold text-white hover:opacity-90 hover:scale-[1.02] transition-all'>
                        Explore Technologies
                    </button>
                    <button className='bg-white rounded-[10px] w-full sm:w-[180px] border border-[#E5E6EB] h-10 text-black hover:bg-gray-50 hover:border-gray-300 transition-all'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='mt-10 lg:mt-0'>
                <img src={HeroImg} alt={'Hero Image'} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]' />
            </div>
        </div>
    );
};

export default HeroBanner;