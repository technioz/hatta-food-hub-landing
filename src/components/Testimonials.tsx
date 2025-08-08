import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Hatta Resident",
      rating: 5,
      comment: "Exceptional service! The food quality is consistently outstanding and delivery is always on time. Hatta Food Hub has transformed how we enjoy dining in our area.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Fatima Hassan",
      location: "Regular Customer",
      rating: 5,
      comment: "The variety of restaurants is impressive. From traditional Emirati cuisine to international dishes, there's something for every taste. Highly recommend!",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Mohammad Khalil",
      location: "Business Owner",
      rating: 5,
      comment: "As a local business owner, I appreciate their support for the Hatta community. Professional service and excellent customer support. Five stars!",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Sarah Johnson",
      location: "Tourist",
      rating: 5,
      comment: "Visiting Hatta was made so much better with this app. Easy to use, fast delivery, and authentic local food. Will definitely use again on our next visit!",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            CUSTOMER
            <span className="block text-gray-400">REVIEWS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Hear from our satisfied customers who trust Hatta Food Hub 
            for their daily culinary needs
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 px-6 py-3">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-white fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.3</span>
            <span className="text-gray-400">/ 5 based on 500+ reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-900 border border-gray-800 p-8 h-full relative
                            hover:border-gray-600 transition-all duration-300">
                
                {/* Quote Icon */}
                <Quote 
                  size={40} 
                  className="text-gray-700 mb-6 group-hover:text-gray-600 transition-colors" 
                />

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-white fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 grayscale group-hover:grayscale-0 
                             transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-gray-300 
                                 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br 
                           from-transparent to-gray-800/20 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">Join thousands of satisfied customers</p>
          <motion.button
            className="border border-gray-400 px-8 py-3 text-gray-300 
                     hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEAVE A REVIEW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;