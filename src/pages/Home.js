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

function Home() {
  return (
    <div>
         
         <Hero />
         <Value />
         <Highlighted />
         <Testimonials />
         <Contact />
         <Footer />
    </div>
  );
}

export default Home;
