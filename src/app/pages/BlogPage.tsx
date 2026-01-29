import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      title: '10 Digital Marketing Trends to Watch in 2026',
      excerpt: 'Discover the emerging trends that will shape the future of digital marketing and how to leverage them for your business growth.',
      author: 'Sarah Johnson',
      date: 'Jan 25, 2026',
      readTime: '8 min read',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYmxvZyUyMGNvbnRlbnR8ZW58MXx8fHwxNzY5NjE5ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Ultimate Guide to SEO in 2026',
      excerpt: 'Master the latest SEO strategies and techniques to improve your search rankings and drive organic traffic to your website.',
      author: 'Michael Chen',
      date: 'Jan 20, 2026',
      readTime: '12 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk2MTY5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Social Media Marketing: Best Practices for 2026',
      excerpt: 'Learn how to create engaging content, build communities, and drive conversions through effective social media strategies.',
      author: 'Emily Rodriguez',
      date: 'Jan 15, 2026',
      readTime: '10 min read',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk1ODM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Email Marketing: How to Write Compelling Copy',
      excerpt: 'Discover the secrets to writing email copy that captures attention, engages readers, and drives conversions.',
      author: 'David Kim',
      date: 'Jan 10, 2026',
      readTime: '7 min read',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1752650734567-fca336c8b77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjYXJlZXJ8ZW58MXx8fHwxNzY5NjE5ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Content Marketing Strategy for B2B Success',
      excerpt: 'Build a content marketing strategy that attracts, engages, and converts your target B2B audience effectively.',
      author: 'Jessica Taylor',
      date: 'Jan 5, 2026',
      readTime: '11 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTU5ODYyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'PPC Advertising: Maximize Your ROI',
      excerpt: 'Learn advanced PPC strategies to optimize your campaigns, reduce costs, and maximize return on investment.',
      author: 'Robert Martinez',
      date: 'Dec 28, 2025',
      readTime: '9 min read',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk1ODM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Trends', 'SEO', 'Social Media', 'Email Marketing', 'Content Marketing', 'PPC'];

  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#C62828] to-gray-900 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Marketing Insights</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Expert tips, industry trends, and actionable strategies to grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className="px-6 py-2 rounded-full border-2 border-gray-200 hover:border-[#C62828] hover:text-[#C62828] transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-full">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-[#C62828] text-white rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-[#C62828] font-semibold mb-4">
                  <Tag size={16} />
                  {blogPosts[0].category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {blogPosts[0].readTime}
                  </span>
                </div>
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white rounded-xl font-semibold w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Recent Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#C62828] rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#C62828] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  <motion.button
                    className="inline-flex items-center gap-2 text-[#C62828] font-semibold hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Read More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
