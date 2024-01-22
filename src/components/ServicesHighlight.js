import React from 'react';

function ServicesHighlight() {
  return (
    <section className="text-white body-font relative">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url(/background1.jpg)',
        zIndex: '-1'  // Ensure the image stays in the background
      }}></div>
      
      {/* Title at the top middle */}
      <div className="container mx-auto px-5 pt-24 flex flex-col items-center relative z-10 pb-4">
        <h2 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-center">How We Serve You</h2>
      </div>
      
      {/* Content box */}
      <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold">Photos, Videos, 3D Tours, Drone Services & More</h1>
          <p className="mb-8 leading-relaxed">
            BRSE Real Estate Photography is a premier full-service provider for real estate visual content. We excel in delivering a suite of services that includes top-tier property photos, dynamic videos, detailed 3D tours, and expansive aerial drone footage. Our comprehensive approach also encompasses floor plans and virtual staging, ensuring your listings capture attention and engage potential buyers.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">View Listing Media</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:ml-12">
          <img className="object-cover object-center rounded" alt="listing media" src="/listingMedia.png" />
        </div>
      </div>
    </section>
  );
}

export default ServicesHighlight;
