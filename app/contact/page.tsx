'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { siteData } from '@/data/site-data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s Get in Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We&apos;re here to help with all your insurance, tax, and financial service needs.
              Reach out to us today and let&apos;s start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: siteData.contact.phones[0],
                subContent: siteData.contact.phones[1],
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
                content: siteData.contact.address.street,
                subContent: `${siteData.contact.address.city}, ${siteData.contact.address.state} ${siteData.contact.address.zip}`,
                href: `https://maps.google.com/?q=${encodeURIComponent(
                  `${siteData.contact.address.street}, ${siteData.contact.address.city}, ${siteData.contact.address.state} ${siteData.contact.address.zip}`
                )}`,
                external: true,
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Mon - Fri: 9AM - 5PM',
                subContent: 'Weekends: Closed',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium">{item.content}</p>
                    {item.subContent && (
                      <p className="text-gray-500 text-sm mt-1">{item.subContent}</p>
                    )}
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium">{item.content}</p>
                    {item.subContent && (
                      <p className="text-gray-500 text-sm mt-1">{item.subContent}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="life-insurance">Life Insurance & Annuities</option>
                    <option value="health-insurance">Health Insurance</option>
                    <option value="tax-services">Tax Services</option>
                    <option value="home-loans">Home Loans</option>
                    <option value="bail-bonds">Bail Bonds</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Booking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Booking Card */}
              <div className="bg-primary-500 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl">
                      Book an Appointment
                    </h3>
                    <p className="text-white/70">Schedule a meeting online</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  Prefer to meet in person or have a video call? Book an appointment online
                  and choose a time that works best for you.
                </p>
                <a
                  href={siteData.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all w-full"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </a>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.8!2d-119.9847!3d38.9399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809978a1b91f1151%3A0x1c2c8d8f8f8f8f8f!2s3053%20Harrison%20Ave%2C%20South%20Lake%20Tahoe%2C%20CA%2096150!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AHAS Office Location - 3053 Harrison Blvd, Suite 202, South Lake Tahoe, CA"
                />
              </div>

              {/* Licenses */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-4">
                  Our Licenses
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {siteData.licenses.map((license) => (
                    <div key={license} className="bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                      {license}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm text-center">
            {siteData.complianceText}
          </p>
        </div>
      </section>
    </div>
  );
}
