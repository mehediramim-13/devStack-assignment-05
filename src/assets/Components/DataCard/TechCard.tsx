import YourStack from "./YourStack";
import { use } from "react";
import type { CardTypeProps } from '../Type/CardType';

interface TechCardProps {
    promise: Promise<CardTypeProps[]>
}

const TechCard = ({ promise }: TechCardProps) => {
  const techs = use(promise);

  return (
    <div className='container mx-auto px-4 mt-20'>
      <div className='ml-20'>

        <h2 className="text-[32px] font-bold ">Explore the <span className="text-[#E44AA1]">Technologies</span></h2>
        <p className="text-4 text-[#64748bFF]">Pick one technology per catagory to build your ideal stack</p>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 my-15'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {techs.map((tech) => (
              <div key={tech.id} className='card bg-base-100 shadow-sm rounded-2xl p-6 max-w-sm w-full flex flex-col'>
                <div className='flex justify-between items-start'>
                  <img src={tech.icon} alt={tech.name} className='w-8 h-8' />
                  <span className='badge bg-sky-100 text-sky-600 border-none rounded-full px-4 py-3 font-medium'>
                    {tech.badge}
                  </span>
                </div>

                <h3 className='font-bold text-2xl mt-4'>{tech.name}</h3>

                <p className='text-gray-400 text-[15px] mt-2 leading-relaxed flex-1'>
                  {tech.description}
                </p>

                <div className='border-t border-gray-100 mt-5 pt-4 flex items-center gap-4 text-sm'>
                  <span className='bg-gray-100 text-gray-600 px-3 py-1 rounded-md'>{tech.category}</span>
                  <span className='text-gray-500'>{tech.difficulty}</span>
                  <span className='flex items-center gap-1 text-gray-700 font-medium'>⭐ {tech.rating}</span>
                </div>

                <button className='btn w-full bg-[#0f172a] text-white rounded-xl h-12 mt-5 hover:bg-[#0f172a]/90 border-none'>
                  Add to Stack
                </button>
              </div>
            ))}
          </div>

          <div className='sticky top-24 h-fit'>
            <YourStack />
          </div>

        </div>

      </div>
    </div>
  );
};

export default TechCard;