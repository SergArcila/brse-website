import React from 'react';

function ContactUsSection() {
  return (
    <section className="text-gray-600 body-font relative" style={{ backgroundImage: 'url(/background3.png)', backgroundSize: 'cover' }}>
        {/* Centered Contact Us Header */}
        <div className="flex justify-center items-center p-4"style={{ paddingTop: '6rem'}}>
            <h2 className="text-gray-900 text-6xl mb-4 font-bold title-font">Contact Us</h2>
        </div>

        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* Left Side Content */}
            <div className="lg:w-2/4 md:w-1/2 flex flex-col justify-start">
                <div className="text-black p-4 rounded-tr-md rounded-bl-md">
                    <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font pb-4">Let's Discuss Your Next Project</h2>
                    <p className="leading-relaxed mb-5 text-gray-600 text-lg">Get in touch with us, and we'd love to discuss your next real estate media project! From listing media, to branding content & lead generation we have you covered! We service Alachua and neighboring counties.</p>
                </div>
  <div className="bg-white bg-opacity-75 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">2800 SW Williston RD, Gainesville, Fl 32608</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">contact@brsephotography.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">786-203-9240</p>
            </div>
          </div>
</div>
        {/* Updated form */}
        <div className="lg:w-3/5 md:w-1/2 bg-white bg-opacity-75 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">How Can We Help?</h2>
          <p className="leading-relaxed mb-5 text-gray-600">We'd love to discuss your real estate media needs. Fill out the form, and we'll get back to you as soon as possible!</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          <p className="text-xs text-gray-500 mt-3">We'll get back to you as soon as possible.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
