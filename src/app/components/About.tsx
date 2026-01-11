import { CheckCircle2, Award, Target, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const { ref, isInView } = useScrollAnimation();
  
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that impact your bottom line',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Staying ahead of trends to give you a competitive edge',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Industries Served' },
    { number: '5M+', label: 'Revenue Generated' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjgwNjE4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C62828] rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl text-[#C62828]">Award</div>
                  <div className="text-sm text-muted-foreground">Winning Agency</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-red-100 text-[#C62828] rounded-full mb-4">
                About Us
              </div>
              <h2 className="text-4xl sm:text-5xl mb-6">
                Your Trusted Partner in Digital Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Majestro Media, we're not just another digital marketing agency. We're your strategic partner in building a powerful online presence that drives real business results.
              </p>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience and a team of certified specialists, we've helped hundreds of businesses achieve their digital marketing goals through innovative strategies and data-driven execution.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C62828] transition-colors">
                      <Icon className="text-[#C62828] group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h4 className="mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-4 gap-4 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-2xl text-[#C62828] mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                'Certified digital marketing professionals',
                'Transparent reporting and communication',
                'Customized strategies for your unique needs',
                'Proven track record of success',
              ].map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <CheckCircle2 className="text-[#C62828] flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}