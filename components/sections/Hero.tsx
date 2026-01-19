'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, Shield, Heart, Users } from 'lucide-react';
import { siteData } from '@/data/site-data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary-500/3 to-transparent rounded-full" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary-100">
              <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
              Family-Owned Since 2009
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Insurance & Financial Services for{' '}
            <span className="text-secondary-500">Everyone</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
          >
            {siteData.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteData.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-secondary-500/25"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-200 shadow-sm hover:shadow-md"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Phone CTA */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
              <Phone className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Call us anytime</p>
              <a
                href={`tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`}
                className="text-gray-900 font-semibold text-lg hover:text-secondary-500 transition-colors"
              >
                {siteData.contact.phones[0]}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Shield,
              title: 'Peace of Mind',
              description: 'Protect your family and assets with comprehensive coverage.',
            },
            {
              icon: Heart,
              title: 'Custom Solutions',
              description: 'Personalized insurance solutions for your unique needs.',
            },
            {
              icon: Users,
              title: 'Reliable Support',
              description: 'Our dedicated team is here to help every step of the way.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <card.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-secondary-500 text-sm font-medium mt-4 group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
