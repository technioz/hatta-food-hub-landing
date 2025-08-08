import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Clock, MapPin } from 'lucide-react';

const VendorShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const vendors = [
    {
      name: "Qariyat Al Hajarain",
      category: "Traditional Cuisine",
      rating: 4.9,
      deliveryTime: "25-35 min",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "Authentic Emirati dishes"
    },
    {
      name: "Blue Bottle Cafe",
      category: "Coffee & Pastries",
      rating: 4.8,
      deliveryTime: "15-25 min",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "Artisan coffee & fresh pastries"
    },
    {
      name: "Desert Delights",
      category: "Bakery",
      rating: 4.7,
      deliveryTime: "20-30 min",
      image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "Fresh bread & desserts"
    },
    {
      name: "Hatta Heights Restaurant",
      category: "International",
      rating: 4.9,
      deliveryTime: "30-40 min",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "Fine dining experience"
    },
    {
      name: "Mountain View Grill",
      category: "Grilled Specialties",
      rating: 4.6,
      deliveryTime: "25-35 min",
      image: "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "BBQ & grilled delicacies"
    },
    {
      name: "Fresh Garden",
      category: "Healthy Options",
      rating: 4.8,
      deliveryTime: "20-30 min",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      speciality: "Fresh salads & smoothies"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="vendors" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            FEATURED
            <span className="block text-gray-400">VENDORS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Discover Hatta's finest restaurants and cafes, 
            carefully curated for exceptional quality
          </p>
        </motion.div>

        {/* Vendor Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {vendors.map((vendor, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-900 border border-gray-800 overflow-hidden relative
                            hover:border-gray-600 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                             transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                transition-colors duration-300" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 
                                text-sm flex items-center space-x-1">
                    <Star size={14} className="text-white" />
                    <span>{vendor.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-gray-300 
                               transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{vendor.category}</p>
                  
                  <p className="text-gray-300 text-sm mb-4">{vendor.speciality}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{vendor.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>Hatta</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 border-2 border-white opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="border border-gray-400 px-8 py-3 text-gray-300 
                     hover:bg-white hover:text-black transition-all duration-300
                     relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL VENDORS
            <motion.div
              className="absolute inset-0 bg-white"
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

export default VendorShowcase;