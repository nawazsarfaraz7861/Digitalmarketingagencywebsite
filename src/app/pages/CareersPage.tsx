import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { motion } from 'motion/react';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
    },
    {
      icon: Laptop,
      title: 'Remote Flexibility',
      description: 'Hybrid work model with flexible hours',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: '$5000 annual budget for courses and conferences',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and mental health days',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Digital Strategist',
      department: 'Strategy',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      description:
        'Lead digital marketing strategies for enterprise clients, combining data analysis with creative thinking to drive measurable results.',
    },
    {
      title: 'Content Marketing Manager',
      department: 'Content',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$75k - $95k',
      description:
        'Create and execute content strategies that drive engagement, build brand awareness, and generate qualified leads.',
    },
    {
      title: 'SEO Specialist',
      department: 'SEO',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $90k',
      description:
        'Optimize websites and content for search engines, conduct keyword research, and analyze performance metrics.',
    },
    {
      title: 'Social Media Manager',
      department: 'Social',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$65k - $85k',
      description:
        'Manage social media accounts, create engaging content, and build communities across multiple platforms.',
    },
    {
      title: 'Paid Advertising Specialist',
      department: 'Advertising',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$70k - $95k',
      description:
        'Plan, execute, and optimize paid advertising campaigns across Google Ads, Facebook, and other platforms.',
    },
    {
      title: 'Marketing Analytics Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $105k',
      description:
        'Transform data into actionable insights, build dashboards, and help clients make data-driven decisions.',
    },
  ];

  const values = [
    { icon: Zap, title: 'Innovation', description: 'We embrace new ideas and technologies' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous learning and development' },
    { icon: Users, title: 'Collaboration', description: 'Teamwork makes the dream work' },
    { icon: Award, title: 'Excellence', description: 'We deliver exceptional quality' },
  ];

  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1752650734567-fca336c8b77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjYXJlZXJ8ZW58MXx8fHwxNzY5NjE5ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/95 to-[#B71C1C]/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
              Build your career with a company that values innovation, creativity, and your
              professional growth
            </p>
            <motion.a
              href="#positions"
              className="inline-flex items-center gap-2 bg-white text-[#C62828] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Majestro Media?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a workplace. We're a community of passionate professionals
              committed to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team's wellbeing and professional development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C62828]/10 to-[#B71C1C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#C62828]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and take the next step in your career
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#C62828] hover:shadow-xl transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users size={16} /> {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} /> {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={16} /> {position.type}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-[#C62828]">
                            <DollarSign size={16} /> {position.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white rounded-xl hover:shadow-lg transition-all whitespace-nowrap font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 mb-4">
              Don't see a perfect fit? We're always looking for talented individuals.
            </p>
            <motion.button
              className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
