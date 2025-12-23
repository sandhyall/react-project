import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 border-1 ">
      <div className="  flex items-center justify-between px-6 py-4">
        
      
        <Link 
          to="/" 
          className="text-2xl font-bold text-gray-800 hover:text-red-500"
        >
          Sandhya
        </Link>

       
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 "
          >
            Form
          </Link>

          <Link
            to="/signup"
            className="text-gray-700 font-medium hover:text-blue-600 "
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
