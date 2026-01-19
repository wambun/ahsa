'use client';

import { motion } from 'framer-motion';
import { Check, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '@/data/site-data';
import { StatsSection, ContactCTA } from '@/components/sections';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We understand the importance of protecting what matters most to you.
              With our comprehensive services, we aim to provide you with the peace of mind you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Reliable solutions to protect what matters most
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {siteData.mission}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With a focus on exceptional customer service, personalized coverage, and a commitment
                to meeting your needs, we strive to be your trusted insurance partner.
              </p>

              {/* Checkmarks */}
              <div className="space-y-4">
                {['Customized Coverage', 'Top Customer Service', 'Trusted Expertise', 'Community Focused'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-6">
                    Our Story
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    American Hispanic Associated Services has been serving individuals, families,
                    and businesses for over 15 years. We were founded with a vision to provide
                    comprehensive and tailored insurance solutions that offer peace of mind and
                    financial security.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As a family-owned business in South Lake Tahoe, we&apos;re deeply committed to
                    our community and the values that make the American dream possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AHAS?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              You are our top priority and we build your confidence through excellent customer service
              and open communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-5">
                  {index + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: siteData.contact.phones[0],
                href: `tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`,
              },
              {
                icon: Mail,
                title: 'Email',
                content: siteData.contact.email,
                href: `mailto:${siteData.contact.email}`,
              },
              {
                icon: MapPin,
                title: 'Address',
                content: `${siteData.contact.address.city}, ${siteData.contact.address.state}`,
                href: `https://maps.google.com/?q=${encodeURIComponent(
                  `${siteData.contact.address.street}, ${siteData.contact.address.city}, ${siteData.contact.address.state} ${siteData.contact.address.zip}`
                )}`,
              },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === 'Address' ? '_blank' : undefined}
                rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 bg-gray-50 rounded-2xl p-6 hover:bg-primary-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="font-semibold text-gray-900 text-lg">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
