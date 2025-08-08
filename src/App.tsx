import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import VendorShowcase from './components/VendorShowcase';
import Services from './components/Services';
import AppDownload from './components/AppDownload';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Partnership from './components/Partnership';
import WebGLBackground from './components/WebGLBackground';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for WebGL initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Update document title and meta
    document.title = 'Hatta Food Hub - Premium Food Delivery in Hatta';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hatta Food Hub - Your premium food delivery platform in Hatta. 4.3 rated app with 50+ restaurant partners. Order from top cafes, restaurants, and bakeries.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Hatta Food Hub - Your premium food delivery platform in Hatta. 4.3 rated app with 50+ restaurant partners. Order from top cafes, restaurants, and bakeries.';
      document.head.appendChild(meta);
    }

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* WebGL Background */}
      <WebGLBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <VendorShowcase />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <AppDownload />
        <Partnership />
        <Contact />
      </motion.main>
      
    </div>
  );
}

export default App;