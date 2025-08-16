import React from 'react';

function SmallPortfoilio() {
  return (
    <div className="bg-black text-white p-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sell listings <span className="text-blue-300">FAST</span> working with us.
        </h1>
        <p className="text-lg md:text-xl">
          We provide professional media services for <span href="#" className="text-blue-300 ">Residential</span>, <span href="#" className="text-blue-300 ">Commercial</span> and <span href="#" className="text-blue-300 ">Industrial</span> properties.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="gallery-item"><img src="image1.jpg" alt="Property 1" className="w-full h-auto" /></div>
        <div className="gallery-item"><img src="image2.jpg" alt="Property 2" className="w-full h-auto" /></div>
        <div className="gallery-item"><img src="image3.jpg" alt="Property 3" className="w-full h-auto" /></div>
        <div className="gallery-item"><img src="image4.jpg" alt="Property 4" className="w-full h-auto" /></div>
        <div className="gallery-item"><img src="image5.jpg" alt="Property 5" className="w-full h-auto" /></div>
        <div className="gallery-item"><img src="image6.jpg" alt="Property 6" className="w-full h-auto" /></div>
      </div>
      <div className="text-center">
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-black transition">
          View Portfolio
        </button>
      </div>
    </div>
  );
};
export default SmallPortfoilio;
