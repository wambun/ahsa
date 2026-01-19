'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/data/site-data';

export function StatsSection() {
  return (
    <section className="py-16 bg-primary-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
