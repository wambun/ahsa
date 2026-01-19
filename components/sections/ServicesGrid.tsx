'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services, getFeaturedServices } from '@/data/services';
import { ServiceIcon } from '@/components/icons/ServiceIcons';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ServicesGridProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function ServicesGrid({
  showAll = false,
  title = 'What We Do',
  subtitle = 'If you are looking to get great service at an affordable price then you\'re at the right place.',
}: ServicesGridProps) {
  const displayServices = showAll ? services : getFeaturedServices(6);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayServices.map((service) => (
            <motion.div key={service.slug} variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Link
                href={`/services/${service.slug}`}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group border border-gray-100 h-full"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
                  <ServiceIcon
                    name={service.icon}
                    className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-secondary-500 font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
