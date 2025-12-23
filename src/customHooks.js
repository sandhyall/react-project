

import React, { useState } from 'react';
const customHooks = () => {


  return (
    <div className='container flex flex-col items-center justify-center bg-gray-400 space-2'>

      <h1 className='text-2xl font-bold'>{count}</h1>
      <div className='flex gap-4'>
        <button className='px-6 py-3  text-black ' onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
     
      <div>
        <h1 className='text-2xl font-bold'>{count2}</h1>
      <div className='flex gap-4'>
        <button className='px-6 py-3  text-black ' onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount1(0)}>Reset</button>
      <button onClick={() => setCount1(count + 1)}>+</button>
      </div>
      </div>
     
    </div>
  );
};

export default customHooks