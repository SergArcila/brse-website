import React from 'react';
import Video1 from './background.mp4';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="relative flex items-center justify-center min-h-[50vh] text-white">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" style={{ zIndex: -1 }}>
          <source src={Video1} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold" style={{ 
            lineHeight: '1.2', 
            fontFamily: "'Montserrat', sans-serif", 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // This adds a shadow to the text for better readability
          }}>
            Listing Media for Agents
          </h1>
          <h2 className="text-2xl lg:text-4xl" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // This adds a shadow to the text for better readability
          }}>
            in Gainesville & Ocala
          </h2>
        </div>
      </div>
    </>
  );
}

export default Services;
