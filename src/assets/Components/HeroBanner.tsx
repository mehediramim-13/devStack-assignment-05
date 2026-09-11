import HeroImg from '../images/banner-stack.png'

const HeroBanner = () => {
    return (
  <div className='container mx-auto flex justify-between items-center'>
    <div className='flex flex-col justify-center ml-20'>
       <h2 className='font-bold text-[60px] leading-none text-[#0f172aFF]'>
    Build Your Ideal <br /> 
    <span className="bg-[linear-gradient(to_right,rgba(255,87,34,1)_0%,rgba(216,27,126,1)_50%,rgba(124,58,237,1)_100%)] bg-clip-text text-transparent">
        Development Stack
    </span>
</h2>
        <p className='text-[#475569FF] text-[18px] my-8'>Explore frontend, backend, database, and tooling options, <br />
        compare them side by side, and put together the stack that fits your <br />
        next project.</p>

        <div className='flex gap-3'>
            <button className='bg-gradient-to-r from-orange-500 to-[#d91b7e] rounded w-[180px] h-8 font-bold text-white'>
                Explore Technologies
            </button>
            <button className='bg-white rounded w-[180px] border border-[#E5E6EB] h-8 text-black'>
                Learn More
            </button>
        </div>
    </div>
    <div>
        <img src={HeroImg} alt={'Hero Image'} className='w-[450px] h-[450px]' />
    </div>
</div>
    );
};

export default HeroBanner;