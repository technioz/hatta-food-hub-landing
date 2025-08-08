import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Born and raised in Hatta, we understand the unique needs of our mountain community"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local businesses and bringing the community together through food"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every partner restaurant is carefully vetted for quality, hygiene, and authenticity"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Consistent delivery times and exceptional customer service, rain or shine"
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
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ABOUT
              <span className="block text-gray-400">HATTA FOOD HUB</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl">
                Hatta Food Hub was founded with a simple mission: to connect our beautiful 
                mountain community with the finest culinary experiences, delivered right to your doorstep.
              </p>
              
              <p>
                As Hatta's first premium food delivery platform, we've carefully curated partnerships 
                with over 22 local restaurants, cafes, and specialty food providers. From traditional 
                Emirati cuisine at Qariyat Al Hajarain to artisan coffee at Blue Bottle Cafe, we bring 
                you the authentic flavors that make Hatta special.
              </p>
              
              <p>
                Our commitment goes beyond just delivery. We're invested in supporting local businesses, 
                creating jobs for our community, and ensuring that whether you're a long-time resident 
                or visiting our stunning mountain landscape, you have access to exceptional food experiences.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2" />
                  Established 2023
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2" />
                  Hatta Based
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2" />
                  Community Focused
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-900 border border-gray-800 p-6 h-full
                              hover:border-gray-600 transition-all duration-300">
                  
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <highlight.icon 
                      size={32} 
                      className="text-white group-hover:text-gray-300 transition-colors" 
                    />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-gray-300 
                               transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;