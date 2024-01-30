import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa';

function VideoServices() {
  const [expandedId, setExpandedId] = useState(null);

  const videoServices = [
    {
      id: 1,
      title: 'Reel/Social Walkthrough Video',
      price: '$125.00',
      features: [
        { text: 'Reel/Social Media Walkthrough Video', icon: <FaVideo /> },
      ],
      link: '/reel-social-walkthrough',
      src: '/reel.jpeg',
      moreInfo: 'A quick, engaging video perfect for social media to give a walkthrough of your property highlights.'
    },
    {
      id: 2,
      title: 'Social Media Video Bundle',
      price: '$425.00',
      features: [
        { text: '15 Second Highlight Video', icon: <FaVideo /> },
        { text: '60 Second Video', icon: <FaVideo /> },
        { text: 'Reel/Social Media Walkthrough Video', icon: <FaVideo /> },
      ],
      link: '/social-media-bundle',
      src: '/social.jpeg',
      moreInfo: 'The ultimate video package for social media, featuring a highlight reel and a full-length video to showcase your listing.'
    },
    {
      id: 3,
      title: '60 Second Video',
      price: '$250.00',
      features: [
        { text: '60 Second Cinematic Video', icon: <FaVideo /> },
      ],
      link: '/60-second-video',
      src: '/60s.jpeg',
      moreInfo: 'A one-minute cinematic video providing a comprehensive and engaging overview of the residential listing.'
    },
    {
      id: 4,
      title: '120 Second Video',
      price: '$350.00',
      features: [
        { text: '120 Second Detailed Video', icon: <FaVideo /> },
      ],
      link: '/120-second-video',
      src: '120s.jpeg',
      moreInfo: 'A detailed two-minute video for an immersive experience of the property, perfect for websites and presentations.'
    },
    // Add more services as needed
  ];

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white py-16">
      <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">A La Carte Video Services</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {videoServices.map((pkg) => (
            <div key={pkg.id} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className={`border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg bg-white ${expandedId === pkg.id ? 'mb-8' : ''}`}>
              <div className="w-full flex justify-center"> {/* This will center the image */}
                  <img className="block mx-auto w-full h-auto rounded mb-4" alt={pkg.name} src={pkg.src} style={{ width: 'auto', maxHeight: '200px' }} />
                </div>
                <h3 className="title-font font-medium text-3xl text-gray-900 mb-3">{pkg.title}</h3>
                <ul className={`${expandedId === pkg.id ? '' : 'mb-4'}`}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      {feature.icon} <span className="ml-2">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                {expandedId === pkg.id && (
                  <p className="text-gray-600 mb-4">{pkg.moreInfo}</p>
                )}
                <div className="text-center mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">from {pkg.price}</span>
                  <span 
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => toggleExpansion(pkg.id)}
                  >
                    {expandedId === pkg.id ? 'Less' : 'Learn More'}
                  </span>
                </div>
                <div className="text-center" style={{paddingTop:'1rem'}}>
                  {/*
                  <Link to={pkg.link} className="inline-block bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 transition-colors duration-300">
                    Select
                  </Link>
                */}
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="text-center mt-6">
                {/* Book Now Button */}
                <a href="/booking" className=" text-xl font-medium inline-block bg-blue-500 text-white py-4 px-16 rounded hover:bg-blue-600 transition-colors duration-300">
                  Book Now
                </a>
              </div>
      </div>
    </div>
  );
}

export default VideoServices;
