import React from 'react';
import { FaStar } from 'react-icons/fa'; // Ensure you have installed react-icons

function TestimonialsSection() {
  return (
    <section className="text-gray-600 body-font" style={{ backgroundImage: 'url(/testi2.png)', backgroundSize: 'cover' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">What Our Clients Have Said</h1>
          <div className="border-t border-gray-300"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Testimonial 1 */}
          {/* ... other testimonials ... */}
          <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full bg-white bg-opacity-90 p-8 rounded-lg overflow-hidden text-center relative">
              <p className="leading-relaxed mb-3">"They are very professional. They show up on time to every shoot and deliver quality photos and video to each without fail."</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500">THE REALTOR</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900">Becky Robinson</h1>
              {/* Realtor's logo here */}
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full bg-white bg-opacity-90 p-8 rounded-lg overflow-hidden text-center relative">
              <p className="leading-relaxed mb-3">"Their communication and service is among the best in the industry."</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500">THE AGENT</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900">Jeremy Bravo</h1>
              {/* Realtor's logo here */}
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full bg-white bg-opacity-90 p-8 rounded-lg overflow-hidden text-center relative">
              <p className="leading-relaxed mb-3">"I have incredibly high expectations and BRSE Real Estate Photography exceeds them every time."</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500">THE BROKER</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900">Zeke Dorr</h1>
              {/* Realtor's logo here */}
            </div>
          </div>
          

          {/* ... other testimonials ... */}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
