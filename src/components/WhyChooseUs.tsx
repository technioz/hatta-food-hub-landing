import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Heart, Truck, Star, CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const reasons = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Secure payments, verified restaurants, and reliable service you can count on",
      features: ["SSL Encrypted", "Verified Partners", "Safe Payments"]
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick ordering process and fast delivery times across all of Hatta",
      features: ["30-min Average", "Real-time Tracking", "Quick Reorder"]
    },
    {
      icon: Heart,
      title: "Community Love",
      description: "Supporting local Hatta businesses and bringing neighbors together through food",
      features: ["Local Partners", "Community Events", "Neighbor Reviews"]
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Professional delivery team with local knowledge and mountain-ready vehicles",
      features: ["All-Weather Service", "Local Drivers", "GPS Tracking"]
    }
  ];

  const achievements = [
    { number: "4.3", label: "App Rating", icon: Star },
    { number: "50+", label: "Restaurant Partners", icon: CheckCircle },
    { number: "1000+", label: "Happy Customers", icon: Heart },
    { number: "98%", label: "On-Time Delivery", icon: Truck }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-choose-us" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            WHY CHOOSE
            <span className="block text-gray-400">HATTA FOOD HUB</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            More than just food delivery - we're your trusted partner in experiencing 
            the best of Hatta's culinary scene
          </p>
        </motion.div>

        {/* Achievements Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gray-900 border border-gray-800 p-6 
                            hover:border-gray-600 transition-all duration-300">
                <achievement.icon 
                  size={32} 
                  className="mx-auto mb-3 text-white group-hover:text-gray-300 transition-colors" 
                />
                <div className="text-3xl font-bold mb-1">{achievement.number}</div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-900 border border-gray-800 p-8 h-full
                            hover:border-gray-600 transition-all duration-300 relative overflow-hidden">
                
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon 
                    size={48} 
                    className="text-white group-hover:text-gray-300 transition-colors" 
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 
                             transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {reason.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: (index * 0.15) + (featureIndex * 0.1) + 0.5 }}
                    >
                      <CheckCircle size={14} className="mr-3 text-gray-600" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <reason.icon size={80} />
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to experience the difference?
          </p>
          <motion.button
            className="bg-white text-black px-8 py-4 text-lg font-semibold 
                     hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">START ORDERING NOW</span>
            <motion.div
              className="absolute inset-0 bg-gray-800"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;