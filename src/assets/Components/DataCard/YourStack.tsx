import type{ CardTypeProps } from "../Type/CardType";


interface YourStackProps {
stack : CardTypeProps[],
removeFromStack : (id:string) => void,
removeAll : ()=> void
}



const YourStack = ({stack, removeFromStack, removeAll}:YourStackProps) => {
 return (
  <div className='card bg-base-100 shadow-sm rounded-2xl p-4 sm:p-6 max-w-sm w-full mx-auto lg:mx-0'>
    <h3 className='font-bold text-base sm:text-lg'>Your Stack</h3>
    <p className='text-gray-400 text-xs sm:text-sm mt-1'>
      {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
    </p>

    {stack.length === 0 ? (
      <div className='border-2 border-dashed border-gray-200 rounded-xl mt-4 py-8 sm:py-10 text-center text-gray-400 text-xs sm:text-sm'>
        Your stack is empty.
      </div>
    ) : (
      <div className='flex flex-col gap-3 mt-4'>
        {stack.map((tech) => (
          <div key={tech.id} className='flex items-center justify-between border border-gray-100 rounded-xl p-2 sm:p-3'>
            <div className='flex items-center gap-2 sm:gap-3'>
              <img src={tech.icon} alt={tech.name} className='w-5 h-5 sm:w-6 sm:h-6' />
              <div>
                <p className='font-medium text-xs sm:text-sm'>{tech.name}</p>
                <p className='text-gray-400 text-[11px] sm:text-xs'>{tech.category}</p>
              </div>
            </div>
            <button onClick={() => removeFromStack(tech.id)} className='text-gray-400  hover:text-gray-600 cursor-pointer text-sm sm:text-base'>
              ✕
            </button>
          </div>
        ))}
      </div>
    )}

    {stack.length > 0 && (
      <button
        onClick={removeAll}
        className='btn w-full border border-red-200 text-red-500 bg-white rounded-xl h-10 sm:h-11 mt-4 hover:bg-red-50 text-sm sm:text-base'
      >
        Remove All
      </button>
    )}
  </div>
);
};

export default YourStack;