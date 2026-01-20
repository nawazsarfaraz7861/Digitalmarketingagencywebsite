import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/8175a1ba3ab442652c3bf5298c1b9eef57c323a5.png';
import { AnimatedBackground } from './AnimatedBackground';

export function Footer() {
  const services = [
    'SEO Optimization',
    'Social Media Marketing',
    'Content Creation',
    'Email Marketing',
    'Paid Advertising',
    'Analytics & Reporting',
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Case Studies',
    'Contact',
  ];

  const resources = [
    'Free Tools',
    'Marketing Guides',
    'Webinars',
    'Templates',
    'FAQ',
    'Privacy Policy',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="dark" />
      
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-[#C62828]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Majestro Media" className="h-12 w-auto mb-6" />
            <p className="text-gray-300 mb-6 max-w-sm">
              Transform your brand with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </p>
            <div className="space-y-3">
              <motion.a 
                href="mailto:hello@maestromedia.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#C62828] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>hello@maestromedia.com</span>
              </motion.a>
              <motion.a 
                href="tel:+15551234567" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#C62828] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#services" className="text-gray-300 hover:text-[#C62828] transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#C62828] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#C62828] transition-colors">
                    {resource}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="bg-gradient-to-r from-[#C62828] to-[#B71C1C] rounded-2xl p-8 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
            <div>
              <h3 className="text-white text-2xl mb-2">Stay Updated</h3>
              <p className="text-red-100">
                Subscribe to our newsletter for marketing tips, trends, and exclusive insights.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all hover:bg-white/20"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-white text-[#C62828] rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
          
          {/* Animated background */}
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2026 Majestro Media. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C62828] transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-[#C62828] transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-[#C62828] transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}