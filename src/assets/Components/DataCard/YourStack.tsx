import type{ CardTypeProps } from "../Type/CardType";


interface YourStackProps {
stack : CardTypeProps[],
removeFromStack : (id:string) => void,
removeAll : ()=> void
}



const YourStack = ({stack, removeFromStack, removeAll}:YourStackProps) => {
 return (
  <div className='card bg-base-100 shadow-sm rounded-2xl p-6 max-w-sm w-full'>
    <h3 className='font-bold text-lg'>Your Stack</h3>
    <p className='text-gray-400 text-sm mt-1'>
      {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
    </p>

    {stack.length === 0 ? (
      <div className='border-2 border-dashed border-gray-200 rounded-xl mt-4 py-10 text-center text-gray-400 text-sm'>
        Your stack is empty.
      </div>
    ) : (
      <div className='flex flex-col gap-3 mt-4'>
        {stack.map((tech) => (
          <div key={tech.id} className='flex items-center justify-between border border-gray-100 rounded-xl p-3'>
            <div className='flex items-center gap-3'>
              <img src={tech.icon} alt={tech.name} className='w-6 h-6' />
              <div>
                <p className='font-medium text-sm'>{tech.name}</p>
                <p className='text-gray-400 text-xs'>{tech.category}</p>
              </div>
            </div>
            <button onClick={() => removeFromStack(tech.id)} className='text-gray-400  hover:text-gray-600 cursor-pointer'>
              ✕
            </button>
          </div>
        ))}
      </div>
    )}

    {stack.length > 0 && (
      <button
        onClick={removeAll}
        className='btn w-full border border-red-200 text-red-500 bg-white rounded-xl h-11 mt-4 hover:bg-red-50'
      >
        Remove All
      </button>
    )}
  </div>
);
};

export default YourStack;