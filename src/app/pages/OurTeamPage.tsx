import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OurTeamPage() {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'Visionary leader with 15+ years in digital marketing' },
    { name: 'Michael Chen', role: 'Head of Strategy', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'Data-driven strategist specializing in growth marketing' },
    { name: 'Emily Rodriguez', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'Award-winning creative with a passion for brand storytelling' },
    { name: 'David Kim', role: 'Head of SEO', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'SEO expert who has ranked 100+ websites on page 1' },
    { name: 'Jessica Taylor', role: 'Content Lead', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'Content strategist creating compelling narratives' },
    { name: 'Robert Martinez', role: 'PPC Specialist', image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400', bio: 'Performance marketer managing $10M+ in ad spend' },
  ];

  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      <section className="relative py-24 bg-gradient-to-br from-[#C62828] to-[#B71C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The talented individuals behind Majestro Media's success
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C62828]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    <motion.a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                      <Linkedin size={20} className="text-[#C62828]" />
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                      <Twitter size={20} className="text-[#C62828]" />
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                      <Mail size={20} className="text-[#C62828]" />
                    </motion.a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#C62828] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
