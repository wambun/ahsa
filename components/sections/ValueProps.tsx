'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, PiggyBank, Home, GraduationCap } from 'lucide-react';
import { siteData } from '@/data/site-data';

const iconMap: Record<string, React.ElementType> = {
  family: Users,
  retirement: PiggyBank,
  home: Home,
  education: GraduationCap,
};

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

export function ValueProps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            How We Help
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Protecting What Matters Most
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We&apos;re more than just insurance. We&apos;re your partners in building a secure future.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {siteData.valuePropCards.map((card, index) => {
            const Icon = iconMap[card.icon] || Users;
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-primary-500 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon className="w-7 h-7 text-white group-hover:text-secondary-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-gray-900 group-hover:text-white mb-3 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors">
                      {card.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-secondary-500 group-hover:text-secondary-300 font-medium mt-4 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
