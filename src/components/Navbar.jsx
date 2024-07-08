import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center">
          <NavLink className="flex items-center text-white" to="/">
            <span className="hidden md:block font-bold ml-2">Maxenov</span>
          </NavLink>

          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center md:space-x-2`}>
            <NavLink to="/" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
              Home
            </NavLink>
            <NavLink to="/jobs" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
              Jobs
            </NavLink>
            <NavLink to="/condidature" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
              Condidature
            </NavLink>
            <NavLink to="/services" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
              Services
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







