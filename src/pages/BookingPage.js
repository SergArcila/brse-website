// PortfolioPage.js
import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import AboutIntro from '../components/AboutUs';
import Founder from '../components/OurFounder';
import Story from '../components/OurStory';
import Mission from '../components/OurMission';
import Footer from '../components/Footer';
import End from '../components/ServiceConclusion';
import Booking from '../components/BookingPage';

function PortfolioPage() {
  return (
    <div>
        
        <div >
    <Booking />
    </div>
    <End />
    <Footer />
    </div>
  );
}

export default PortfolioPage;
