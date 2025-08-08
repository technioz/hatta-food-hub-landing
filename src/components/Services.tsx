import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils, ShoppingCart, Coffee, Cake } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: Utensils,
      title: "Food Delivery",
      description: "Wide selection of restaurants delivering fresh, hot meals to your doorstep in Hatta",
      features: ["30+ Restaurants", "Live Tracking", "Quality Assured"]
    },
    {
      icon: ShoppingCart,
      title: "Groceries",
      description: "Essential groceries and daily necessities delivered quickly and efficiently",
      features: ["Fresh Produce", "Same Day Delivery", "Best Prices"]
    },
    {
      icon: Coffee,
      title: "Cafes",
      description: "Premium coffee and beverages from Hatta's top cafes and coffee shops",
      features: ["Artisan Coffee", "Quick Service", "Premium Quality"]
    },
    {
      icon: Cake,
      title: "Bakery",
      description: "Fresh bread, pastries, and desserts from local bakeries and patisseries",
      features: ["Fresh Daily", "Custom Orders", "Local Favorites"]
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
    <section id="services" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            OUR
            <span className="block text-gray-400">SERVICES</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Comprehensive delivery solutions designed to meet all your culinary needs in Hatta
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
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
                  <service.icon 
                    size={48} 
                    className="text-white group-hover:text-gray-300 transition-colors" 
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 
                             transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <service.icon size={80} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12">HOW IT WORKS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Browse", description: "Explore restaurants and shops" },
              { step: "02", title: "Order", description: "Select items and place order" },
              { step: "03", title: "Enjoy", description: "Receive fresh delivery at your door" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + (index * 0.2) }}
              >
                <div className="text-6xl font-bold text-gray-800 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;