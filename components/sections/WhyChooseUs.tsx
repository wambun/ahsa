'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { siteData } from '@/data/site-data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              We understand that everyone&apos;s needs are unique.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              You are our top priority and we build your confidence in our services by providing
              excellent customer service through open communication about the ways we can best
              meet your insurance, tax, Medicare, retirement and service needs.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right Content - Numbered List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {siteData.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
