import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'Majestro Media transformed our digital presence completely. Their strategic approach to SEO and content marketing helped us achieve a 385% increase in organic traffic within just 6 months. The team is professional, responsive, and truly invested in our success.',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, Urban Fashion Co.',
      image: '👨‍💼',
      rating: 5,
      text: 'Working with Majestro Media has been a game-changer for our e-commerce business. Their social media campaigns and paid advertising expertise delivered a 4.2x ROAS. They understand retail and know how to drive conversions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GreenLife Wellness',
      image: '👩‍⚕️',
      rating: 5,
      text: 'The content strategy developed by Majestro Media established us as thought leaders in the wellness industry. We gained over 15,000 email subscribers and saw a 275% increase in website traffic. Their team truly gets our brand.',
    },
    {
      name: 'David Thompson',
      role: 'VP of Sales, BuildRight Construction',
      image: '👨‍🔧',
      rating: 5,
      text: 'Majestro Media helped us generate high-quality B2B leads through targeted LinkedIn campaigns and content marketing. The lead quality improved dramatically, and our sales cycle shortened by 30%. Highly recommend!',
    },
    {
      name: 'Jessica Park',
      role: 'Owner, Bella Boutique',
      image: '👩‍💼',
      rating: 5,
      text: 'As a small business owner, I was worried about marketing costs. Majestro Media created an affordable strategy that fit my budget and delivered incredible results. My store traffic doubled, and online sales increased by 180%.',
    },
    {
      name: 'Robert Martinez',
      role: 'CMO, FinanceFirst',
      image: '👨‍💻',
      rating: 5,
      text: 'In the competitive fintech space, standing out is crucial. Majestro Media\'s integrated digital marketing approach helped us increase brand awareness by 320% and generate qualified leads consistently. True marketing partners.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-[#C62828] rounded-full mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from businesses that have experienced the Majestro Media difference.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#C62828] rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="text-white" size={20} />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="fill-[#C62828] text-[#C62828]" size={16} />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 line-clamp-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by leading brands and certified by</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {['Google Partner', 'Meta Business', 'HubSpot', 'Semrush'].map((badge, index) => (
              <motion.div
                key={index}
                className="text-2xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}