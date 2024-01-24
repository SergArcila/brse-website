import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHouseDamage, FaSun, FaCouch } from 'react-icons/fa';

function AdditionalServices() {
  const [expandedId, setExpandedId] = useState(null);

  const additionalServices = [
    {
      id: 1,
      title: '3D Matterport Tour',
      price: '$200.00',
      priceOptions: [
        '$200.00 | 500-2999 sq ft',
        '$250.00 | 3000-5000 sq ft',
      ],
      features: [{ text: '3D Matterport Tour', icon: <FaHouseDamage /> }],
      link: '/3d-matterport-tour',
      moreInfo: 'Interactive 3D tour of your property, providing an immersive experience with various pricing based on square footage. Starting at $200.00 for a house 500-2999 SqFt and $250.00 for 3000S qFt+'
    },
    {
      id: 2,
      title: 'Twilight Photos',
      price: '$195.00',
      features: [{ text: 'Twilight Photos', icon: <FaSun /> }],
      link: '/twilight-photos',
      moreInfo: 'Professional twilight photography to showcase your property in the best possible light with stunning sunset backgrounds.'
    },
    {
      id: 3,
      title: 'Virtual Twilight Photos',
      price: '$95.00',
      features: [
        { text: '4 Virtual Twilight Photos', icon: <FaSun /> },
      ],
      link: '/virtual-twilight-photos',
      moreInfo: 'Enhance your property photos with a virtual twilight effect, including 4 exterior photos to capture the beauty of your home at dusk.'
    },
    {
      id: 4,
      title: 'Virtual Staging',
      price: '$50.00 per image',
      features: [{ text: 'Virtual Staging', icon: <FaCouch /> }],
      link: '/virtual-staging',
      moreInfo: 'Transform empty spaces into beautifully staged rooms with our virtual staging service, making your listing more appealing.'
    },
    // Add more services as needed
  ];

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };


  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">A La Carte Extra Services</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {additionalServices.map((service) => (
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

export default AdditionalServices;