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

  useEffect(() => {
    console.log('Counter 1 value:', counter1.count);
  }, [counter1.count]);

  useEffect(() => {
    console.log('Counter 2 value:', counter2.count);
  }, [counter2.count]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <div className='container flex flex-col items-center justify-center bg-gray-400 space-y-4 p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md'
      >
        <h2 className='text-xl font-bold text-center mb-4'>User Form</h2>

        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          className='px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
          className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />

        <input
          type='number'
          name='age'
          placeholder='Enter your age'
          value={formData.age || ''}
          onChange={handleChange}
          className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
        >
          Submit
        </button>
      </form>

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
