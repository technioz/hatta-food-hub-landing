import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Store, TrendingUp, Users, Phone, Mail } from 'lucide-react';

const Partnership: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Reach more customers and increase your revenue with our growing user base"
    },
    {
      icon: Users,
      title: "Marketing Support",
      description: "Featured listings, promotional campaigns, and social media exposure"
    },
    {
      icon: Store,
      title: "Easy Integration",
      description: "Simple onboarding process with dedicated support throughout"
    },
    {
      icon: Handshake,
      title: "Fair Partnership",
      description: "Competitive commission rates and transparent business terms"
    }
  ];

  const partnerTypes = [
    {
      title: "Restaurants",
      description: "Traditional and international cuisine establishments",
      examples: ["Fine Dining", "Casual Dining", "Fast Food", "Specialty Cuisine"]
    },
    {
      title: "Cafes",
      description: "Coffee shops, tea houses, and beverage specialists",
      examples: ["Coffee Shops", "Tea Houses", "Juice Bars", "Dessert Cafes"]
    },
    {
      title: "Bakeries",
      description: "Fresh bread, pastries, and baked goods providers",
      examples: ["Traditional Bakeries", "Patisseries", "Custom Cakes", "Fresh Bread"]
    },
    {
      title: "Specialty Stores",
      description: "Unique food providers and specialty item vendors",
      examples: ["Organic Foods", "Local Specialties", "Gourmet Items", "Health Foods"]
    }
  ];

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
    <section id="partnership" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            PARTNER
            <span className="block text-gray-400">WITH US</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Join Hatta's premier food delivery platform and grow your business 
            with our expanding community of food lovers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8"
              variants={itemVariants}
            >
              WHY PARTNER WITH US
            </motion.h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon 
                      size={24} 
                      className="text-white group-hover:text-gray-300 transition-colors" 
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-gray-300 
                                 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 bg-gray-900 border border-gray-800 p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold mb-4">Ready to Get Started?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} />
                  <span>+971-50-1387-766</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} />
                  <span>info@hattafoodhub.com</span>
                </div>
              </div>
              <motion.button
                className="mt-4 bg-white text-black px-6 py-2 font-semibold 
                         hover:bg-gray-200 transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                APPLY NOW
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Partner Types */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8"
              variants={itemVariants}
            >
              WHO CAN PARTNER
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gray-900 border border-gray-800 p-6 h-full
                                hover:border-gray-600 transition-all duration-300">
                    
                    <h4 className="text-lg font-bold mb-3 group-hover:text-gray-300 
                                 transition-colors">
                      {type.title}
                    </h4>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {type.description}
                    </p>

                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-500 text-sm flex items-center">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mr-3" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Story */}
            <motion.div
              className="mt-8 bg-gray-900 border border-gray-800 p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold mb-3">Partner Success Story</h4>
              <blockquote className="text-gray-300 italic mb-3">
                "Since joining Hatta Food Hub, our orders have increased by 40%. 
                The platform is easy to use and their support team is fantastic."
              </blockquote>
              <cite className="text-gray-400 text-sm">
                - Owner, Blue Bottle Cafe
              </cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Join 50+ successful partners already growing with Hatta Food Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-black px-8 py-3 font-semibold 
                       hover:bg-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BECOME A PARTNER
            </motion.button>
            <motion.button
              className="border border-gray-400 px-8 py-3 text-gray-300 
                       hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;