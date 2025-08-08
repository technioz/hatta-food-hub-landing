import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const PortfolioFooter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    { icon: Code, text: "React TypeScript" },
    { icon: Palette, text: "Tailwind CSS" },
    { icon: Zap, text: "Framer Motion" }
  ];

  return (
    <footer ref={ref} className="bg-black border-t border-gray-800 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Portfolio Project
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                This premium landing page was designed and developed as a showcase project, 
                demonstrating modern web development techniques and best practices. 
                Built with cutting-edge technologies for optimal performance and user experience.
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-800 border border-gray-700 
                             px-4 py-2 rounded-lg hover:border-gray-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon size={16} className="text-blue-400" />
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">32</div>
                  <div className="text-gray-400 text-sm">Files</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8K+</div>
                  <div className="text-gray-400 text-sm">Lines of Code</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Responsive</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Developed By
              </h3>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GB</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Gaurav Bhatia</h4>
                <p className="text-gray-400 text-sm mb-4">Full Stack Developer</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Specializing in modern web applications with React, TypeScript, and Node.js. 
                  Creating premium user experiences with attention to detail and performance.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 
                           border border-gray-700 hover:border-gray-600 px-4 py-3 rounded-lg 
                           transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={20} className="text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                  <ExternalLink size={16} className="text-gray-500 ml-auto" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 
                           border border-gray-700 hover:border-gray-600 px-4 py-3 rounded-lg 
                           transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                  <ExternalLink size={16} className="text-gray-500 ml-auto" />
                </motion.a>

                <motion.a
                  href="mailto:gaurav@example.com"
                  className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 
                           border border-gray-700 hover:border-gray-600 px-4 py-3 rounded-lg 
                           transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} className="text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Email</span>
                  <ExternalLink size={16} className="text-gray-500 ml-auto" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            This project showcases modern web development practices and premium design principles.
          </p>
          <div className="flex justify-center space-x-8 text-xs text-gray-500">
            <span>✓ SEO Optimized</span>
            <span>✓ Performance Focused</span>
            <span>✓ Mobile First</span>
            <span>✓ Accessibility Compliant</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PortfolioFooter; 