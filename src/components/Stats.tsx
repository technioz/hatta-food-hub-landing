import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, MapPin, Users } from 'lucide-react';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      icon: TrendingUp,
      number: "15,000+",
      label: "Orders Delivered",
      description: "Successfully completed orders",
      color: "text-white"
    },
    {
      icon: Clock,
      number: "28",
      label: "Avg Delivery Time",
      description: "Minutes from order to your door",
      color: "text-white"
    },
    {
      icon: MapPin,
      number: "100%",
      label: "Hatta Coverage",
      description: "We deliver to every corner of Hatta",
      color: "text-white"
    },
    {
      icon: Users,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on customer reviews and ratings",
      color: "text-white"
    }
  ];

  const milestones = [
    { year: "2023", event: "Hatta Food Hub Founded", description: "Started with 5 restaurant partners" },
    { year: "2023", event: "Reached 10 Partners", description: "Expanded to include cafes and bakeries" },
    { year: "2024", event: "1000+ Customers", description: "Achieved milestone of 1000 active users" },
    { year: "2024", event: "50+ Partners", description: "Now serving from 50+ local businesses" }
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
    <section id="stats" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            BY THE
            <span className="block text-gray-400">NUMBERS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Our growth reflects the trust and satisfaction of the Hatta community
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-gray-900 border border-gray-800 p-8
                            hover:border-gray-600 transition-all duration-300 relative overflow-hidden">
                
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon 
                    size={48} 
                    className={`mx-auto ${stat.color} group-hover:text-gray-300 transition-colors`}
                  />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-gray-300 
                             transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Background Pattern */}
                <div className="absolute -top-4 -right-4 w-16 h-16 opacity-5">
                  <stat.icon size={64} />
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">OUR JOURNEY</h3>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 group"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 1 + (index * 0.2) }}
                whileHover={{ x: 10 }}
              >
                {/* Year */}
                <div className="bg-white text-black px-4 py-2 font-bold text-lg min-w-[80px] text-center
                              group-hover:bg-gray-200 transition-colors">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-300 
                               transition-colors">
                    {milestone.event}
                  </h4>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;