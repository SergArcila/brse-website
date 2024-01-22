import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = {
    color: '#a9b3c1', // This is the color you want for the active link
  };

  return (
    <header className="bg-gray-800 text-white body-font">
      <div className="container mx-auto flex items-center justify-between p-5">
        
        {/* Logo */}
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900">
          <img src="/logo2.png" alt="BRSE Photography Logo" className="w-15 h-12" />
        </NavLink>

        {/* Navigation Links - Centered */}
        <nav className="hidden md:flex flex-grow items-center justify-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "mx-5 text-gray-400" : "mx-5 hover:text-gray-400"}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "mx-5 text-gray-400" : "mx-5 hover:text-gray-400"}>Services</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "mx-5 text-gray-400" : "mx-5 hover:text-gray-400"}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "mx-5 text-gray-400" : "mx-5 hover:text-gray-400"}>Contact</NavLink>
        </nav>

        {/* Book Now Button - Right Aligned */}
        <div className="inline-flex items-center">
          <NavLink to="/booking" className="button">Book Now</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
