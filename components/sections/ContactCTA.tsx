'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { siteData } from '@/data/site-data';

export function ContactCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-500 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Get a Free Consultation Today
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Contact us today to experience the difference of working with a trusted,
                family-owned insurance provider. We&apos;re here to help you find the perfect
                coverage for your needs.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-4 text-white hover:text-secondary-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <span className="font-semibold text-lg">{siteData.contact.phones[0]}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-center gap-4 text-white hover:text-secondary-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <span className="font-semibold text-lg">{siteData.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Visit us</p>
                    <span className="font-semibold">
                      {siteData.contact.address.city}, {siteData.contact.address.state}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6">
                Request a Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-500">
                    <option value="">Interested in...</option>
                    <option value="life-insurance">Life Insurance</option>
                    <option value="health-insurance">Health Insurance</option>
                    <option value="home-loans">Home Loans</option>
                    <option value="tax-services">Tax Services</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Get a Quote
                </button>
              </form>
              <p className="text-gray-500 text-sm text-center mt-4">
                Or{' '}
                <a
                  href={siteData.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 font-medium hover:underline"
                >
                  book an appointment online
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
