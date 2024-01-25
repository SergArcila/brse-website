
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useRoutes} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Services from './pages/ServicesPage';
import About from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './components/CartContext';
import Sidebar from './components/CheckoutSideBar';
import CartDisplayComponent from './components/CartDisplayComponent';
import Header from './components/Header';


import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  let routes = useRoutes([
    // Define your routes here, similar to the Route elements you'd use
    { path: '/', element: <Home /> },
    { path: '/contact', element: <Contact /> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    // Add other routes as needed
  ]);

  return (
    <TransitionGroup component={null}> {/* component={null} removes extra div */}
     
        {routes}
     
    </TransitionGroup>
  );
};

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
 
  return (
    <CartProvider>
    <Router>
    <Header toggleCart={toggleCart} />
      <ScrollToTop />
      <AnimatedRoutes /> {/* Use the wrapper component */}
    </Router>
    </CartProvider>
  );
}

export default App;
