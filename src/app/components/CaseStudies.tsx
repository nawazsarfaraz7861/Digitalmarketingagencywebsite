import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CaseStudies() {
  const { ref, isInView } = useScrollAnimation();
  
  const caseStudies = [
    {
      client: 'TechStart Solutions',
      industry: 'SaaS Technology',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgwMDI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Low brand visibility in competitive market',
      results: [
        { metric: '385%', label: 'Increase in organic traffic' },
        { metric: '250%', label: 'Growth in qualified leads' },
        { metric: '180%', label: 'Boost in conversion rate' },
      ],
    },
    {
      client: 'Urban Fashion Co.',
      industry: 'E-commerce Retail',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjgwOTkxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Struggling social media ROI and engagement',
      results: [
        { metric: '520%', label: 'Social media engagement' },
        { metric: '340%', label: 'Revenue from ads' },
        { metric: '4.2x', label: 'Return on ad spend' },
      ],
    },
    {
      client: 'GreenLife Wellness',
      industry: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1760712491426-ef0e797b8c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MDQzODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Need to establish thought leadership',
      results: [
        { metric: '450%', label: 'Content engagement' },
        { metric: '15k+', label: 'New email subscribers' },
        { metric: '275%', label: 'Website traffic growth' },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-[#C62828] rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses like yours achieve remarkable growth through strategic digital marketing.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-white text-2xl">{study.client}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="text-sm text-[#C62828] mb-2">The Challenge</div>
                    <p className="text-lg text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-[#C62828] mb-4">The Results</div>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <motion.div 
                          key={idx} 
                          className="text-center p-4 bg-white rounded-xl border border-border hover:border-[#C62828] transition-colors"
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="flex items-center justify-center gap-1 text-2xl text-[#C62828] mb-1">
                            <TrendingUp size={20} />
                            <span>{result.metric}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#C62828] hover:gap-3 transition-all group"
                  >
                    Get similar results
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-3xl p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl mb-4 text-white">Ready to Write Your Success Story?</h3>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence with our proven strategies.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#C62828] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation
              <ArrowUpRight size={20} />
            </motion.a>
          </div>
          
          {/* Animated background circles */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}