import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { CaseStudies } from '../components/CaseStudies';
import { motion } from 'motion/react';

export function CaseStudiesPage() {
  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#C62828] to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Success Stories
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real results for real businesses. See how we've helped our clients achieve their goals.
          </motion.p>
        </div>
      </section>

      <CaseStudies />

      <Footer />
    </div>
  );
}
