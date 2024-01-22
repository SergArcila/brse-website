import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">BRSE Photography</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear()} BRSE Photography — All Rights Reserved</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="ml-3 text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="ml-3 text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
