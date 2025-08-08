import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Users, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none"
          variants={itemVariants}
        >
          PREMIUM
          <br />
          <span className="text-gray-400">FOOD DELIVERY</span>
          <br />
          IN HATTA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Experience the finest culinary journey with Hatta's most trusted 
          food delivery platform
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
          variants={itemVariants}
        >
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 mr-2 text-white group-hover:scale-110 transition-transform" />
              <span className="text-4xl md:text-5xl font-bold">4.3</span>
            </div>
            <p className="text-gray-400 text-sm">App Rating</p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 mr-2 text-white group-hover:scale-110 transition-transform" />
              <span className="text-4xl md:text-5xl font-bold">50+</span>
            </div>
            <p className="text-gray-400 text-sm">Vendor Partners</p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <Download className="w-8 h-8 mr-2 text-white group-hover:scale-110 transition-transform" />
              <span className="text-4xl md:text-5xl font-bold">1K+</span>
            </div>
            <p className="text-gray-400 text-sm">Happy Users</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-white text-black px-8 py-4 text-lg font-semibold tracking-wide
                     hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">DOWNLOAD APP</span>
            <motion.div
              className="absolute inset-0 bg-gray-800"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;