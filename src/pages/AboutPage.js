// PortfolioPage.js
import React from 'react';
import Contact from '../components/Services';
import Header from '../components/Header';
import AboutIntro from '../components/AboutUs';
import Founder from '../components/OurFounder';
import Story from '../components/OurStory';
import Mission from '../components/OurMission';
import Footer from '../components/Footer';

function PortfolioPage() {
  return (
    <div className="">
    <Header />
    <div className='py-16' style={{paddingBottom: '1rem'}}>
    <AboutIntro />
    </div>
    <Story />
        <Footer />
    </div>
  );
}

export default PortfolioPage;
