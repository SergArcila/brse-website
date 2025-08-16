import React, { useState } from 'react';
import Video1 from './Hero.m4v';
import { Helmet } from 'react-helmet'; // Ensure you have installed the react-helmet package
import { Link } from 'react-router-dom';

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      {/* Ensuring the font is loaded */}
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="relative flex items-center justify-center min-h-screen text-white font-montserrat">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" style={{ zIndex: -1 }}>
          <source src={Video1} type="video/mp4" />
        </video>

        {/* Overlay (Adds a dark shade for better text visibility) */}
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="z-10 p-4 text-center">
          {/* Logo */}
          
          <img src={"/logo6.png"} alt="Arcila Real Estate Photography" className="mx-auto mb-4" style={{marginBottom: '1rem', maxHeight:"250px", marginTop: '-4rem'}} />
          

          {/* Text */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-2" style={{ lineHeight: '1.2' }}>LET YOUR LISTINGS BE EXTRAORDINARY.</h1>
          <p className="text-xl lg:text-2xl mb-4" style={{ lineHeight: '1.5', marginBottom: '3rem' }}>Listing Media & Branding Content For Agents in GNV & Alachua</p>
         
          <Link to="/services" className="mt-4 bg-indigo-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded" >
  View Services
</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;

