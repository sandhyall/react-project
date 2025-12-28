import React, { useEffect, useState } from 'react';

export const Usecustom = (initialvalue) => {
  const [count, setcount] = useState(initialvalue);

  const increment = () => {       
    setcount((count) => count + 1);
  };
  const decrement = () => {
    setcount((count) => (count > 0 ? count - 1 : 0));
  };
  const reset = () => {
    setcount(0);
  };
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

const IncrementDecrement = () => {
  const counter1 = Usecustom(0);
  const counter2 = Usecustom(0);

  // useEffect(() => {
  //   console.log('Counter 1 value:', counter1.count);
  // }, [counter1.count]);

  // useEffect(() => {
  //   console.log('Counter 2 value:', counter2.count);
  // }, [counter2.count]);

  

  return (
    <div className='container flex flex-col items-center justify-center bg-gray-400 space-y-4 p-4'>
      <h1 className='text-2xl font-bold'>{counter1.count}</h1>
      <div className='flex gap-4'>
        <button className='px-6 py-3 text-black' onClick={counter1.decrement}>
          -
        </button>
        <button onClick={counter1.reset}>Reset</button>
        <button className='px-6 py-3 text-black' onClick={counter1.increment}>
          +
        </button>
      </div>

      <div className='items-center justify-center flex flex-col'>
        <h1 className='text-2xl font-bold'>{counter2.count}</h1>
        <div className='flex gap-4'>
          <button className='px-6 py-3 text-black' onClick={counter2.decrement}>
            -
          </button>
          <button onClick={counter2.reset}>Reset</button>
          <button className='px-6 py-3 text-black' onClick={counter2.increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncrementDecrement;



