import React from 'react';
// Import your icons from wherever you have them (e.g., react-icons, custom SVGs, etc.)

function ValuesSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
      
        <h2 className="text-gray-900 text-6xl mb-4 font-bold title-font pb-3">
  We Exist To Serve You, <span className="text-orange-500">The Agent</span>
</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Arcila Real Estate Studios, we're not just a company; we're your creative partners in real estate marketing. We specialize in crafting striking visuals through professional property photography and videography, enhancing your brand identity, and supporting your sales efforts. Our skilled team, comprising over two decades of collective experience with photographers, visual editors, and client relations specialists, is at the forefront of delivering bespoke real estate media solutions. Your dedication to your brand resonates with us, and we're here to ensure that every snapshot and frame adds value to your hard-earned reputation.
</p>
        </div>
        <div className="flex flex-wrap">
          
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" px-4 py-6 rounded-lg">
            <img
        src="/time.png" // Replace with the path to your image
        alt="On Time"
        className="w-32 h-32  mx-auto mb-4"
      />
              <h2 className="title-font font-medium text-3xl text-gray-900">We Show Up On Time</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className=" px-4 py-6 rounded-lg">
            <img
        src="/love.png" // Replace with the path to your image
        alt="On Time"
        className="w-32 h-32  mx-auto mb-4"
      />
              <h2 className="title-font font-medium text-3xl text-gray-900">We Love Our Clients</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className=" px-4 py-6 rounded-lg">
            <img
        src="/efficient.png" // Replace with the path to your image
        alt="On Time"
        className="w-32 h-32  mx-auto mb-4"
      />
              <h2 className="title-font font-medium text-3xl text-gray-900">We Are Efficient & Friendly</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className=" px-4 py-6 rounded-lg">
            <img
        src="/pricing.png" // Replace with the path to your image
        alt="On Time"
        className="w-32 h-32  mx-auto mb-4"
      />
              <h2 className="title-font font-medium text-3xl text-gray-900">We Have Simple Pricing</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ValuesSection;