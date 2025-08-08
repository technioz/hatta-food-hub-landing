import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Hatta, Dubai", "United Arab Emirates"],
      action: "View on Map"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971-50-1387-766", "Customer Support"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hattafoodhub.com", "Business Inquiries"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Daily: 9:00 AM - 2:00 AM+1", "Food Delivery"],
      action: "Order Now"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" }
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
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            GET IN
            <span className="block text-gray-400">TOUCH</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Have questions about our service? Want to partner with us? 
            We're here to help and always ready to serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">CONTACT INFORMATION</h3>
            </motion.div>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start space-x-4 p-6 bg-gray-900 border border-gray-800 
                              hover:border-gray-600 transition-all duration-300">
                  <motion.div
                    className="mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-gray-300 
                                 transition-colors">
                      {item.title}
                    </h4>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} 
                         className={`${detailIndex === 0 ? 'text-gray-300' : 'text-gray-500'} 
                                   text-sm mb-1`}>
                        {detail}
                      </p>
                    ))}
                    <button className="text-white text-sm mt-2 hover:text-gray-300 
                                     transition-colors underline">
                      {item.action}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">SEND US A MESSAGE</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white 
                             placeholder-gray-500 focus:border-gray-600 focus:outline-none 
                             transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white 
                             placeholder-gray-500 focus:border-gray-600 focus:outline-none 
                             transition-colors"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white 
                           placeholder-gray-500 focus:border-gray-600 focus:outline-none 
                           transition-colors"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white 
                           placeholder-gray-500 focus:border-gray-600 focus:outline-none 
                           transition-colors resize-none"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-white text-black py-3 font-semibold 
                         hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-12 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold">
                HATTA <span className="text-gray-400">FOOD HUB</span>
              </h4>
              <p className="text-gray-400 text-sm mt-1">Premium Food Delivery in Hatta</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 flex items-center 
                           justify-center hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Hatta Food Hub. All rights reserved. | Premium food delivery service in Hatta, UAE</p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;