const YourStack = () => {
  return (
    <div className='card bg-base-100 shadow-sm rounded-2xl p-6 max-w-sm w-full'>
      <h3 className='font-bold text-lg'>Your Stack</h3>
      <p className='text-gray-400 text-sm mt-1'>No technologies selected yet.</p>

      <div className='border-2 border-dashed border-gray-200 rounded-xl mt-4 py-10 text-center text-gray-400 text-sm'>
        Your stack is empty.
      </div>
    </div>
  );
};

export default YourStack;