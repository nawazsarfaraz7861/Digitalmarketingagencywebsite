import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-red-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-[#C62828] rounded-full">
                <Zap size={16} className="fill-current" />
                <span>Your Growth Partner</span>
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Elevate Your
              <span className="block text-[#C62828] mt-2">Digital Presence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform your brand with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C62828] text-white px-8 py-4 rounded-full hover:bg-[#B71C1C] transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight size={20} />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#C62828] text-[#C62828] px-8 py-4 rounded-full hover:bg-[#C62828] hover:text-white transition-all duration-200"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl text-[#C62828]">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl text-[#C62828]">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl text-[#C62828]">250+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-[#C62828]" size={24} />
              </div>
              <h3 className="mb-2">ROI Focused</h3>
              <p className="text-sm text-muted-foreground">
                Every campaign is optimized for maximum return on investment
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border mt-8 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#C62828]" size={24} />
              </div>
              <h3 className="mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Certified specialists in all aspects of digital marketing
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-[#C62828]" size={24} />
              </div>
              <h3 className="mb-2">Fast Results</h3>
              <p className="text-sm text-muted-foreground">
                See meaningful improvements within the first 30 days
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white mt-8 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">📈</div>
              <h3 className="mb-2 text-white">Growth Guaranteed</h3>
              <p className="text-sm text-red-100">
                Data-driven strategies that scale with your business
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}