import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#vendors', label: 'Vendors' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-bold text-xl tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">HATTA</span>
          <span className="text-gray-400 ml-1">FOOD HUB</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Hatta, UAE</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={14} />
            <span>+971-50-1387-766</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block text-gray-300 hover:text-white transition-colors py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="pt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Hatta, UAE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+971-50-1387-766</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;