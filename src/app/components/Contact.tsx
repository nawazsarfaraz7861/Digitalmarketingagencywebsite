import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedBackground } from './AnimatedBackground';

export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@maestromedia.com',
      href: 'mailto:hello@maestromedia.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '123 Marketing Ave, Digital City, DC 12345',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-[#C62828] rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Let's Start Your Growth Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to take your digital marketing to the next level? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C62828] transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-[#C62828] group-hover:text-white transition-colors" size={20} />
                      </motion.div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                        <div className="text-foreground">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div 
              className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-2xl p-6 text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="mb-4 text-white relative z-10">Business Hours</h4>
              <div className="space-y-2 text-sm text-red-100 relative z-10">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              {/* Animated background */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all hover:border-[#C62828]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all hover:border-[#C62828]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all hover:border-[#C62828]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all hover:border-[#C62828]"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all hover:border-[#C62828]"
                >
                  <option value="">Select a service</option>
                  <option value="seo">Search Engine Optimization</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="content">Content Creation</option>
                  <option value="analytics">Analytics & Insights</option>
                  <option value="email">Email Marketing</option>
                  <option value="ads">Paid Advertising</option>
                  <option value="all">Complete Digital Marketing</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C62828] transition-all resize-none hover:border-[#C62828]"
                  placeholder="Tell us about your business goals and how we can help..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#C62828] text-white px-8 py-4 rounded-xl hover:bg-[#B71C1C] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}