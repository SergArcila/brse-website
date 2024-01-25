import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaRulerCombined } from 'react-icons/fa';

function PhotosALaCarte() {
  const [expandedId, setExpandedId] = useState(null); // State to track expanded card

  const alaCarteDetails = [
    // Define your A La Carte services here
    {
        id: 1,
        title: '60 MLS Photos',
        features: [
          { text: '60 MLS Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        price: '$235.00',
        link: '/60-mls-photos',
        src: '/60.jpeg', // Replace with your image path
        moreInfo: 'Get a comprehensive portfolio of 60 high-quality MLS photos showcasing every aspect of your property, complemented with a basic floor plan complete with room measurements.'
      },
      {
        id: 2,
        title: '40 MLS Photos',
        features: [
          { text: '40 MLS Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        price: '$195.00',
        link: '/40-mls-photos',
        src: '/40.jpeg', // Replace with your image path
        moreInfo: 'This package offers 40 MLS photos, ideal for capturing the essential features of your property, along with a floor plan detailing room sizes and layout.'
      },
      {
        id: 3,
        title: '25 MLS Photos',
        price: '$165.00',
        features: [
          { text: '25 MLS Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        link: '/25-mls-photos',
        src: '/25.jpeg',
        moreInfo: 'Perfect for highlighting the key areas of your property, this package offers 25 professionally taken MLS photos along with a floor plan detailing the essential measurements.'
      },
      {
        id: 4,
        title: '10-15 MLS Photos',
        price: '$135.00',
        features: [
          { text: '10-15 MLS Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        link: '/10-15-mls-photos',
        src: '/10.jpeg',
        moreInfo: 'Ideal for smaller properties or rentals, this package includes 10-15 MLS photos to cover the essentials, accompanied by a floor plan with room measurements.'
      },
      {
        id: 5,
        title: '20/20/20 Package',
        price: '$595.00',
        features: [
          { text: '20 Before Photos', icon: <FaCamera /> },
          { text: 'Before Reel', icon: <FaCamera /> },
          { text: '20 Construction Photos', icon: <FaCamera /> },
          { text: 'Construction Reel', icon: <FaCamera /> },
          { text: '20 After Photos', icon: <FaCamera /> },
          { text: 'After Reel', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        link: '/20-20-20-package',
        src: '/20p.jpeg',
        moreInfo: 'A comprehensive visual documentation package capturing the transformation of your property before, during, and after construction, including photos, reels, and a floor plan.'
    },    
    {
        id: 6,
        title: '20/20/20 Photos',
        price: '$325.00',
        features: [
          { text: '20 Before Photos', icon: <FaCamera /> },
          { text: '20 Construction Photos', icon: <FaCamera /> },
          { text: '20 After Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        link: '/20-20-20-photos',
        src: '/20.jpeg',
        moreInfo: 'Document the progress of your property with 20 photos each of the before, during, and after stages of your construction project, along with a basic floor plan.'
      },
    // ... other A La Carte service objects
  ];

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">A La Carte Photo Services</h2>
          {/* You can add more text here */}
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {alaCarteDetails.map((service) => (
            <div key={service.id} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className={`border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg bg-white ${expandedId === service.id ? 'mb-8' : ''}`}>
                <img className="block mx-auto w-full h-auto rounded mb-4" alt={service.title} src={service.src} />
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
                  <Link to={service.link} className="inline-block bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 transition-colors duration-300">
                    Select
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotosALaCarte;
