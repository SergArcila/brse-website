import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaRulerCombined} from 'react-icons/fa';

function Packages() {
  const [expandedId, setExpandedId] = useState(null); // State to track expanded card

  const packageDetails = [
    {
        id: 1,
        name: 'Base Media Package',
        features: [
          { text: '25 MLS Photos', icon: <FaCamera /> },
          { text: '6 Drone Photos', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        price: '$195.00',
        link: '/base-media-package',
        src: "/basic2.webp",
        moreInfo: "Our Base Package includes 25 Interior and Exterior photos, 6 drone photos, as well as a Schematic Floor Plan with room measurements. This package is best suited for smaller listings or rental properties!"
      },
      {
        id: 2,
        name: 'Pro Media Package (Most Popular)',
        features: [
          { text: '40 MLS Photos', icon: <FaCamera /> },
          { text: '12 Drone Photos', icon: <FaCamera /> },
          { text: 'Zillow 3D Tour', icon: <FaCamera /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
        ],
        price: '$365.00',
        link: '/pro-media-package',
        src: "/pro.jpeg",
        moreInfo: "Our Pro Package includes 40 Interior and Exterior Photos, a Schematic Floor Plan with room measurements along with a 3D version , Drone Photos, and a Marketing Kit! This is our most popular package and is designed for most standard listings!"
      },
      // New Plus Media Package
      {
        id: 3,
        name: 'Plus Media Package',
        features: [
          { text: '40 MLS Photos', icon: <FaCamera /> },
          { text: '60 Second Video', icon: <FaCamera /> },
          { text: 'Matterport 3D Virtual Tour (500-2,999sqft.)', icon: <FaCamera /> },
          { text: '3D Floor Plan', icon: <FaRulerCombined /> },
          { text: 'Basic Floor Plan with Room Measurements', icon: <FaRulerCombined /> },
          { text: '12 Drone Photos', icon: <FaCamera /> },
          { text: 'Virtual Twilight Photos', icon: <FaCamera /> },
        ],
        price: '$825.00',
        link: '/plus-media-package',
        src: "/plus.jpeg",
        moreInfo: "Our Plus Package includes 40 Interior and Exterior Photos, a 60 Second Cinematic Video, a Matterport 3D Tour, Drone Photos, 2 Virtual Twilight Photos, a Schematic Floor Plan along with a 3D version, and a Marketing Kit! If you have a listing you want to pull out all the stops on, the plus package is designed to do just that!"
      },
      {
        id: 4,
        name: 'Lot Listing Package',
        features: [
          { text: 'Mix of 15 Ground/Drone', icon: <FaCamera /> }
        ],
        price: '$135.00',
        link: '/lot-listing-package',
        src: "/lot.jpeg",
        moreInfo: "Choose a mix of 15 photos taken from both drone and the ground, tailored to your specific requests. Recommended for under 10 acres."
      },
      // Land Listing Package
      {
        id: 5,
        name: 'Land Listing',
        features: [
          { text: 'Mix of 25 Ground/Drone', icon: <FaCamera /> }
        ],
        price: '$175.00',
        link: '/land-listing-package',
        src: "/land.jpeg",
        moreInfo: "Choose a mix of 25 photos taken from both drone and the ground, tailored to your specific requests. Recommended for 10+ acres."
      },
      // Plus Land Package
      {
        id: 6,
        name: 'Plus Land Package',
        features: [
          { text: 'Mix of 25 Ground/Drone', icon: <FaCamera /> },
          { text: 'Aerial Only Video | 30 Seconds', icon: <FaCamera /> },
          { text: '360 Drone Tours', icon: <FaCamera /> }
        ],
        price: '$465.00',
        link: '/plus-land-package',
        src: "/landPlus.jpeg",
        moreInfo: "Choose a mix of 25 photos taken from both drones and the ground, tailored to your specific requests."
      }
    // ... other package objects
  ];

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
      <div className="text-center mb-4">
        <h2 className="text-6xl font-bold">Our Packages</h2>
        </div>
        <p className="text-xl text-blue-600 font-semibold mb-6">Created just for you. The Realtor® </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {packageDetails.map((pkg) => (
            <div key={pkg.id} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className={`border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg bg-white ${expandedId === pkg.id ? 'mb-8' : ''}`}>
              <div className="w-full flex justify-center"> {/* This will center the image */}
                  <img className="object-cover object-center rounded mb-4" alt={pkg.name} src={pkg.src} style={{ width: 'auto', maxHeight: '200px' }} />
                </div>
                <h3 className="title-font font-medium text-3xl text-gray-900 mb-3">{pkg.name}</h3>
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
                  <Link to={pkg.link} className="inline-block bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 transition-colors duration-300">
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

export default Packages;
