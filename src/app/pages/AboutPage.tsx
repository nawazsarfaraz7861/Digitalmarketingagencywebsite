import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp, Heart, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that drive real business growth and ROI.',
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Your success is our success. We build lasting partnerships based on trust.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from strategy to execution.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of trends to deliver cutting-edge marketing solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in the quality of our work.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changes and opportunities in the digital landscape.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ];

  const timeline = [
    { year: '2014', title: 'The Beginning', description: 'Founded with a vision to transform digital marketing' },
    { year: '2017', title: 'Expansion', description: 'Opened offices in 3 new cities and grew our team to 20+' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched AI-powered marketing analytics platform' },
    { year: '2023', title: 'Industry Leadership', description: 'Recognized as top 10 digital marketing agency' },
    { year: '2026', title: 'Global Reach', description: 'Serving clients across 25 countries worldwide' },
  ];

  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#C62828] to-gray-900">
        {/* Animated Background Patterns */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Majestro Media
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're not just a marketing agency. We're your growth partner, dedicated to transforming
            brands into digital powerhouses.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#C62828] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2014, Majestro Media began with a simple yet powerful vision: to help
                businesses thrive in the digital age. What started as a small team of passionate
                marketers has grown into a full-service digital marketing powerhouse.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, we've evolved with the industry, staying at the forefront of digital
                innovation. From social media marketing to AI-powered analytics, we've continuously
                adapted to serve our clients better.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to work with leading brands across industries, helping them achieve
                remarkable growth through data-driven strategies and creative excellence.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk1ODM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C62828]/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C62828]/5 rounded-full blur-3xl -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#C62828] hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leaders
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C62828] to-[#B71C1C] hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#C62828] transition-all">
                    <div className="text-3xl font-bold text-[#C62828] mb-2">{item.year}</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">{item.title}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-6 h-6 bg-[#C62828] rounded-full border-4 border-white shadow-lg z-10" />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
