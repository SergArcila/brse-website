import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
//import About from '../components/About';
import Services from '../components/Services';
//import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Value from '../components/Valuesection'
import Highlighted from '../components/ServicesHighlight'
import { Link } from 'react-router-dom';
import SmallPortfoilio from '../components/SmallPortfoilio';

function Home() {
  return (
    <div>
         <Header />
         <Hero />
         <SmallPortfoilio />
         <Value />
         <Highlighted />
         <Testimonials />
         <Contact />
         <div className= "text-center mb-16">
      <p className="mt-5 ">
    If you want more information regarding our services, please check out our services page:
  </p>
  <Link to="/services" className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Services
          </Link>

          </div>
         <Footer />
    </div>
  );
}

export default Home;
