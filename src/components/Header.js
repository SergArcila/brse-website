import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white body-font">
      <div className="container mx-auto flex items-center justify-between p-5">
        
        {/* Logo */}
        <a href="/" className="flex title-font font-medium items-center text-gray-900">
          <img src="/logo2.png" alt="BRSE Photography Logo" className="w-15 h-12" />
        </a>

        {/* Navigation Links - Centered */}
        <nav className="hidden md:flex flex-grow items-center justify-center">
          <a href="#services" className="mx-5 hover:text-gray-400">Services</a>
          <a href="#portfolio" className="mx-5 hover:text-gray-400">Portfolio</a>
          <a href="#contact" className="mx-5 hover:text-gray-400">Contact</a>
        </nav>

        {/* Book Now Button - Right Aligned */}
        <div className="inline-flex items-center">
          <a href="#booking" className="button">Book Now</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
