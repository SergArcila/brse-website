// ContactPage.js
import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import FadeIn from '../components/FadeIn';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
    <Header/>
    <div className="py-16">
    <Contact />
    </div>
    <Footer />
    </div>
  );
}

export default ContactPage;
