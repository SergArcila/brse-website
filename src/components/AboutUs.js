import React from 'react';

function AboutIntro() {
  return (
    <section className="text-gray-600 body-font relative">
        <div className="container mx-auto px-5">
      <div className="text-center mb-4">
        <div style={{ paddingTop: '6rem', paddingBottom: '0rem' }}>
          <h2 className="text-gray-900 text-6xl mb-4 font-bold title-font">About Us</h2>
        </div>
        <p className="text-xl text-blue-600 font-semibold mb-6">Who we are & why you can trust us</p>
      </div>

      <p className="max-w-3xl mx-auto leading-relaxed text-base">
        At BRSE, we blend innovation with expertise to capture the essence of real estate. Our team's dedication goes beyond photography, embracing each project's unique story to showcase properties at their finest. Join us on a journey through our story, mission, and the people behind Gainesville's premier real estate media company.
      </p>
      </div>
    </section>
  );
}

export default AboutIntro;
