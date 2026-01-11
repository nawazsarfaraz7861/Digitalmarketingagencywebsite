import { Search, Share2, PenTool, BarChart3, Mail, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Services() {
  const { ref, isInView } = useScrollAnimation();
  
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search rankings with our proven SEO strategies. We optimize your website for maximum visibility and organic traffic growth.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a powerful social presence across all platforms. Engage your audience and convert followers into loyal customers.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Compelling content that resonates with your audience. From blog posts to videos, we craft stories that drive engagement.',
      features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Copywriting'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven decisions for maximum ROI. Track, measure, and optimize every aspect of your digital marketing campaigns.',
      features: ['Performance Tracking', 'Custom Reports', 'Competitor Analysis', 'Conversion Optimization'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Turn subscribers into customers with targeted email campaigns. Personalized messages that deliver results.',
      features: ['Campaign Design', 'List Segmentation', 'Automation', 'A/B Testing'],
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Maximize your ad spend with expertly managed campaigns. Get immediate visibility and qualified leads.',
      features: ['Google Ads', 'Facebook Ads', 'Display Advertising', 'Retargeting'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-[#C62828] rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we provide end-to-end digital marketing services tailored to your business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white border border-border rounded-2xl p-8 hover:border-[#C62828] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C62828] transition-colors">
                  <Icon className="text-[#C62828] group-hover:text-white transition-colors" size={28} />
                </div>
                
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#C62828] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C62828] text-white px-8 py-4 rounded-full hover:bg-[#B71C1C] transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}