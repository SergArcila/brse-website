import React from 'react';
import { Link } from 'react-router-dom';

function ServiceConclusion() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Ready to get a specific quote or book a shoot?</h2>
          <div className=" max-w-3xl mx-auto text-lg text-gray-600 py-3">
            <p>
            Click the button below to book a shoot! If you'd prefer to talk to us first, please send us an email
            to contact@brsephotography.com or call us at (786) 203-9240 and we'd love to answer your questions!
            </p>
          </div>
          <Link to="/book-now" className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceConclusion;
