import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, company information, and any other information you choose to provide.',
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, to send you technical notices and support messages, and to respond to your comments and questions.',
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.',
    },
    {
      icon: FileText,
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet is 100% secure.',
    },
  ];

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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy is important to us. Learn how we protect your information.
          </motion.p>
          <motion.p
            className="text-sm text-red-200 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: January 28, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              At Majestro Media, we are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C62828] to-[#B71C1C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-[#C62828] to-[#B71C1C] rounded-2xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
            </ul>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a
              href="mailto:privacy@maestromedia.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              privacy@maestromedia.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
