import React from 'react';

const TeamImage= './logo6.png'; // Replace with path to your image

function AboutUs() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-wrap py-24">
        {/* Image & Intro */}
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">ABOUT BRSE</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Meet the Team Behind the Scenes</h1>
          <div className="flex mb-4">
            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
              Story
            </a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
              Team
            </a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
              Mission
            </a>
          </div>
          <p className="leading-relaxed mb-4">
            BRSE is not just another real estate media company; we are the architects of your brand's image. Our diverse team shares a singular passion – crafting stunning real estate media that captivates and sells. We celebrate the unique perspective each member brings, uniting our skills to offer you unparalleled service and creativity.
          </p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Founder & Lead Photographer</span>
            <span className="ml-auto text-gray-900">Sergio Arcila</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Creative Director</span>
            <span className="ml-auto text-gray-900">Name</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Marketing Head</span>
            <span className="ml-auto text-gray-900">Name</span>
          </div>
          <p className="leading-relaxed text-lg">
            Each click of the shutter, every drone flight, and every line of code we write is done with the intent to create value, tell a story, and enhance your brand's market presence. Let's capture the beauty and essence of your properties together.
          </p>
        </div>
        <img
          alt="team"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src={TeamImage}
        />
      </div>
    </section>
  );
}

export default AboutUs;
