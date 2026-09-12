import YourStack from "./YourStack";
import { use, useState } from "react";
import type { CardTypeProps } from '../Type/CardType';
import { toast } from 'react-toastify';
interface TechCardProps {
  promise: Promise<CardTypeProps[]>
}

const TechCard = ({ promise }: TechCardProps) => {
  const techs = use(promise);
  const [stack, setStack] = useState<CardTypeProps[]>([]);

  const addToStack = (tech: CardTypeProps) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <div className='max-w-6xl mx-auto px-4 mt-12 lg:mt-20'>
      <div>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-center lg:text-left">
          Explore the <span className="text-[#E44AA1]">Technologies</span>
        </h2>
        <p className="text-[14px] sm:text-4 text-[#64748bFF] text-center lg:text-left">
          Pick one technology per catagory to build your ideal stack
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 my-8 lg:my-15'>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {techs.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);

              return (
                <div key={tech.id} className='card bg-base-100 shadow-sm rounded-2xl p-4 sm:p-6 max-w-sm w-full mx-auto sm:mx-0 flex flex-col'>
                  <div className='flex justify-between items-start'>
                    <img src={tech.icon} alt={tech.name} className='w-7 h-7 sm:w-8 sm:h-8' />
                    <span className='badge bg-sky-100 text-sky-600 border-none rounded-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium'>
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className='font-bold text-xl sm:text-2xl mt-3 sm:mt-4'>{tech.name}</h3>

                  <p className='text-gray-400 text-[14px] sm:text-[15px] mt-2 leading-relaxed flex-1'>
                    {tech.description}
                  </p>

                  <div className='border-t border-gray-100 mt-4 sm:mt-5 pt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm'>
                    <span className='bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-md'>{tech.category}</span>
                    <span className='text-gray-500'>{tech.difficulty}</span>
                    <span className='flex items-center gap-1 text-gray-700 font-medium'>⭐ {tech.rating}</span>
                  </div>

                  <button
                    onClick={() => addToStack(tech)}
                    disabled={isAdded}
                    className={`btn w-full rounded-xl h-11 sm:h-12 mt-4 sm:mt-5 border-none text-sm sm:text-base ${isAdded
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-[#0f172a] text-white hover:bg-[#0f172a]/90'
                      }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className='lg:sticky lg:top-24 h-fit'>
            <YourStack stack={stack} removeFromStack={removeFromStack} removeAll={removeAll} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default TechCard;