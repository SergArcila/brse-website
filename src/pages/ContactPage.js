// ContactPage.js
import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import FadeIn from '../components/FadeIn';

function ContactPage() {
  return (
    <div>
    <Header />
    <div className="py-16">
    <Contact />
    </div>
    </div>
  );
}

export default ContactPage;
