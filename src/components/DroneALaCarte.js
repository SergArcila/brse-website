import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaDrone } from 'react-icons/fa';

function DronesALaCarte() {
  const [expandedId, setExpandedId] = useState(null); // State to track expanded card

  const droneServices = [
    {
      id: 1,
      title: '12 Drone Photos',
      price: '$95.00',
      features: [
        { text: '12 High-Quality Drone Photos', icon: <FaCamera /> },
      ],
      link: '/drone-photos',
      src: '/drone.jpeg',
      moreInfo: 'Capture your property from above with 12 high-quality drone photographs that provide a comprehensive view and standout imagery for your listings.'
    },
    {
        id: 3,
        title: '25 Drone Photos',
        price: '$180.00',
        features: [
          { text: '25 Drone Photos', icon: <FaCamera /> },
        ],
        link: '/25-drone',
        src: '/drone25.jpg',
        moreInfo: 'This package includes 25 drone photos to showcase your property in its entirety.'
      },
    {
      id: 2,
      title: 'Aerial Only Video | 30 Seconds',
      price: '$145.00',
      features: [
        { text: 'Aerial Only Video', icon: <FaCamera /> },
      ],
      link: '/aerial-video',
      src: '/30sd.jpeg',
      moreInfo: 'A 30-second aerial video to showcase your property with stunning visuals from the sky, giving potential buyers a unique perspective of the property.'
    },
    // Sample additional drone service
    {
        id: 4,
        title: 'Aerial Only Video | 60 Seconds',
        price: '$200.00',
        features: [
          { text: 'Aerial Only Video', icon: <FaCamera /> },
        ],
        link: '/aerial-video',
        src: '/aerial-video-sample.jpg',
        moreInfo: 'A 60-second aerial video to showcase your property with stunning visuals from the sky, giving potential buyers a unique perspective of the property.'
      },
      {
        id: 5,
        title: 'Comprehensive Aerial Package',
        price: '$250.00',
        features: [
          { text: '20 Drone Photos', icon: <FaCamera /> },
          { text: '1 Minute Aerial Video', icon: <FaCamera /> },
        ],
        link: '/comprehensive-aerial',
        src: '/comprehensive-aerial-sample.jpg',
        moreInfo: 'The complete aerial package includes 20 drone photos, a 1-minute video, and a 360° drone tour to showcase your property in its entirety.'
      },
    // Add more services as needed
  ];

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">A La Carte Drone Services</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {droneServices.map((service) => (
            <div key={service.id} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className={`border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg bg-white ${expandedId === service.id ? 'mb-8' : ''}`}>
                <img className="object-cover object-center rounded mb-4" alt={service.title} src={service.src} />
                <h3 className="title-font font-medium text-3xl text-gray-900 mb-3">{service.title}</h3>
                <ul className={`${expandedId === service.id ? '' : 'mb-4'}`}>
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      {feature.icon} <span className="ml-2">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                {expandedId === service.id && (
                  <p className="text-gray-600 mb-4">{service.moreInfo}</p>
                )}
                <div className="text-center mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">from {service.price}</span>
                  <span 
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => toggleExpansion(service.id)}
                  >
                    {expandedId === service.id ? 'Less' : 'Learn More'}
                  </span>
                </div>
                <div className="text-center" style={{paddingTop:'1rem'}}>
                  {/*
                  <Link to={service.link} className="inline-block bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 transition-colors duration-300">
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

export default DronesALaCarte;
