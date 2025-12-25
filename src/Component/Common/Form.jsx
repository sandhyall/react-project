import React, { useState } from 'react';
import validate from './Validate';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { DatePicker } from '@heroui/react';
import moment from 'moment';

const Form = () => {
  const initialValues = {
    name: '',
    email: '',
    dateofbirth:'',
    age: '',
    password: '',
    confirmPassword: '',
  };


  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (validationErrors.confirmPassword) {
      alert(validationErrors.confirmPassword);
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', form);
      setForm(initialValues);
    }
  };
  const calculate_age = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);

  if( birthDate > today){
    // alert("date of birth cannot show future")
    return "";

  }
  let age_now = today.getFullYear()- birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
}   

const handleDobChange = (e) => {
  const birth = e.target.value;
  const age = birth ? calculate_age(birth) : "";

  setForm({
    ...form,
    dateofbirth: birth,
       age: age,
  });
};

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>


       <div className="flex flex-col">
          <label className="mb-1 font-medium">Birth Date</label>
               <input
            type="date"
            name="dateofbirth"
            placeholder="Enter your age"
            value={form.dateofbirth}
            max={moment().format("YYYY-MM-DD")}
            min={moment().subtract(100, "years").format("YYYY-MM-DD")}
           
            onChange={handleDobChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* <DatePicker className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"  /> */}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={form.age}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

               
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={toggleConfirmPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showConfirmPassword ? <FaEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
