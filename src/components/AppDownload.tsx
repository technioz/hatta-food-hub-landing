import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Download, Apple, Shield, Clock, Star } from 'lucide-react';

const AppDownload: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    { icon: Shield, text: "Secure Payments" },
    { icon: Clock, text: "Real-time Tracking" },
    { icon: Star, text: "4.3 Rating" }
  ];

  return (
    <section id="app-download" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              DOWNLOAD
              <span className="block text-gray-400">THE APP</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get the premium Hatta Food Hub experience on your mobile device. 
              Order from your favorite restaurants with just a few taps.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-900 border border-gray-800 
                           px-4 py-2 hover:border-gray-600 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon size={18} className="text-white" />
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* App Store */}
              <motion.a
                href="https://apps.apple.com/ae/app/hattafoodhub/id1672007981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white text-black px-8 py-4 w-full 
                         hover:bg-gray-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Apple size={32} />
                <div className="text-left">
                  <div className="text-sm font-medium">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
                <motion.div
                  className="ml-auto"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download size={24} />
                </motion.div>
              </motion.a>

              {/* Google Play Store */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.hattaFoodHub.order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white text-black px-8 py-4 w-full 
                         hover:bg-gray-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Google Play Icon as SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-medium">Get it on</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
                <motion.div
                  className="ml-auto"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download size={24} />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone Frame */}
            <div className="relative">
              <motion.div
                className="w-80 h-[600px] bg-black border-8 border-gray-800 rounded-[3rem] 
                         shadow-2xl overflow-hidden relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black 
                              flex flex-col items-center justify-center p-8 text-center">
                  
                  {/* App Logo */}
                  <motion.div
                    className="mb-8"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4">
                      <Smartphone size={40} className="text-black" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Hatta Food Hub</h3>
                    <p className="text-gray-400 text-sm">Premium Delivery</p>
                  </motion.div>

                  {/* Stats */}
                  <div className="space-y-4 w-full">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">4.3 ★</div>
                      <div className="text-gray-400 text-sm">App Rating</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-gray-400 text-sm">Partners</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">1K+</div>
                      <div className="text-gray-400 text-sm">Users</div>
                    </div>
                  </div>
                </div>

                {/* Screen Reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                           pointer-events-none"
                  animate={{ 
                    background: [
                      'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.05) 100%)',
                      'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${-10 + i * 5}px`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-4">
            Join the premium food delivery experience in Hatta
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Free Download</span>
            <span>✓ Easy Setup</span>
            <span>✓ Instant Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;