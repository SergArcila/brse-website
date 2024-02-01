import React from 'react';
import { Link } from 'react-router-dom';

const BookNowPage = () => {
        const serviceCategories = [
          {
            title: "Packages",
            services: [
              { name: "Base Media Package", price: "$195.00" },
              { name: "Pro Media Package (Most Popular)", price: "$365.00" },
              { name: "Plus Media Package", price: "$825.00" },
              { name: "Lot Listing Package", price: "$135.00" },
              { name: "Land Listing", price: "$175.00" },
              { name: "Plus Land Package", price: "$465.00" }
            ]
          },
          {
            title: "Photo A La Carte Services",
            services: [
              { name: "60 MLS Photos", price: "$235.00" },
              { name: "40 MLS Photos", price: "$195.00" },
              { name: "25 MLS Photos", price: "$165.00" },
              { name: "10-15 MLS Photos", price: "$135.00" },
              { name: "20/20/20 Package", price: "$595.00" },
              { name: "20/20/20 Photos", price: "$325.00" }
            ]
          },
          {
            title: "Drone A La Carte Services",
            services: [
              { name: "12 Drone Photos", price: "$95.00" },
              { name: "25 Drone Photos", price: "$180.00" },
              { name: "30s Drone Video", price: "$145.00" },
              { name: "60s Drone Video", price: "$200.00" },
              { name: "Comprehensive Aerial Package", price: "$250.00" }
            ]
          },
          {
            title: "Video A La Carte Services",
            services: [
              { name: "Reel/Social Walkthrough Video", price: "$125.00" },
              { name: "Social Media Video Bundle", price: "$425.00" },
              { name: "60 Second Video", price: "$250.00" },
              { name: "120 Second Video", price: "$350.00" }
            ]
          },
          {
            title: "A La Carte Extra Services",
            services: [
              { name: "3D Matterport Tour", price: "$200.00" },
              { name: "Twilight Photos", price: "$195.00" },
              { name: "Virtual Twilight Photos", price: "$95.00" },
              { name: "Virtual Staging", price: "$50 per photo" }
            ]
          }
        ];
      
  return (
    <div >
      {/* Hero Section */}
      <div className="flex justify-between items-center p-4">
  <button onClick={() => window.history.back()} className="text-gray-600 bg-white hover:bg-gray-200 rounded py-2 px-4">
    ← Back
  </button>

  {/* Logo - Replace 'path/to/logo.png' with your actual logo path */}
  <div className="flex-grow text-center ">
    <img src="/logo10.png" alt="Logo" className="inline-block w-100 h-10" /> {/* Adjust size as needed */}
  </div>

  {/* Empty div to balance the flex space */}
  <div></div>
  
</div>

<hr className="border-t border-gray-300" />
<div className="text-center p-8 bg-white text-black ">
  <h1 className="text-5xl font-bold">Gainesville, Are You Ready to Book Your Session?</h1>
  <p className="text-xl mt-4 text-blue-600">Contact us via phone or email to schedule your appointment.</p>
  
  <p className="mt-2">
    Phone: 
    <a href="tel:+17862039240" className="text-blue-600 hover:text-blue-800">
      (786) 203-9240
    </a>
    ‎  | Email: 
    <a href="mailto:contact@brsephotography.com" className="text-blue-600 hover:text-blue-800">
      contact@brsephotography.com
    </a>
  </p>

  <p className="mt-5">
    For booking, please provide your full name, address of the property, requested services, and preferred date. Note: A 50% deposit is required for new customers before visiting the property. We accept credit cards (with a 5% processing fee), Venmo, Cashapp, Zelle, and crypto payments.
  </p>
</div>
<div className="bg-white"> 
<div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      
      {serviceCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{category.title}</h2>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <ul>
              {category.services.map((service, idx) => (
                <li key={idx} className="border-b border-gray-200 py-2 flex justify-between">
                  <span className="text-lg text-gray-700">{service.name}</span>
                  <span className="font-semibold text-gray-900">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
      ))}
      <div className= "text-center mb-16">
      <p className="mt-5 ">
    If you want more information regarding our services, please check out our services page:
  </p>
  <Link to="/services" className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Services
          </Link>

          </div>
    </div>
    
    
    </div>
    </div>
  );
}

export default BookNowPage;
