import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // You'll need to install react-icons if you haven't already
import { useLocation } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false); // Added state for mobile nav visibility
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Determine if the current path is one that requires a solid header
  const needsSolidHeader = location.pathname === '/contact' || location.pathname === '/about';

  // Build the header class string based on the scroll position and current path
  const headerClass = `fixed w-full z-30 transition duration-300 ease-in-out ${
    isScrolled || needsSolidHeader ? 'bg-gray-800' : 'md:bg-opacity-90 bg-transparent'
  }`;

    
    useEffect(() => {
      // Reset the scroll state every time the location changes
      setIsScrolled(false);
    }, [location]);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible); // Toggle mobile nav visibility
    };
  
    const headerStyle = `fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${isScrolled ? 'bg-gray-800' : 'bg-gray-800 md:bg-transparent'}`;
  
  return (
    <header className={headerClass} >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link to="/" className="flex title-font font-medium items-center text-white">
          <img src="/logo2.png" alt="BRSE Photography Logo" className="w-15 h-12" />
        </Link>

        {/* Mobile Nav Icon */}
        <div className="md:hidden flex items-center">
        <button onClick={toggleMobileNav}> {/* Add onClick event handler */}
                        <FaBars className="text-white text-2xl" />
                    </button>
        </div>

        {/* Navigation Links */}
        <nav className={`hidden md:flex flex-grow items-center justify-center ${isMobileNavVisible ? 'flex' : 'hidden'}`}>
          <NavLink to="/" className={({ isActive }) => `mx-5 hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `mx-5 hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `mx-5 hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mx-5 hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`}>Contact</NavLink>
        </nav>

        {/* Book Now Button */}
        <div className="inline-flex items-center">
          <NavLink to="/booking" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </NavLink>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileNavVisible && (
        <div className="md:hidden bg-gray-800">
          <NavLink to="/" className="block hover:text-gray-300 text-white p-4">Home</NavLink>
          <NavLink to="/services" className="block hover:text-gray-300 text-white p-4">Services</NavLink>
          <NavLink to="/about" className="block hover:text-gray-300 text-white p-4">About us</NavLink>
          <NavLink to="/contact" className="block hover:text-gray-300 text-white p-4">Contact</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
