import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/ContactPage'
import Portfolio from './pages/PortfolioPage'
import Services from './pages/ServicesPage'
// Import other pages/components you want to route to

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
