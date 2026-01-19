import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteData, footerLinks } from '@/data/site-data';

export function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-xl p-3">
                <Image
                  src="/static/images/logo.png"
                  alt="AHAS - American Hispanic Associated Services"
                  width={150}
                  height={54}
                  className="h-11 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Family-owned business providing honest and affordable services to Northern California.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 text-white/90 hover:text-secondary-400 transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{siteData.contact.phones[0]}</span>
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-3 text-white/90 hover:text-secondary-400 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{siteData.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-secondary-300 font-medium transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p>{siteData.contact.address.street}</p>
                  <p>
                    {siteData.contact.address.city}, {siteData.contact.address.state}{' '}
                    {siteData.contact.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteData.contact.hours}</span>
              </div>
              <a
                href={siteData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} {siteData.name}. All Rights Reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                License #: {siteData.licenses.join(' | ')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">EHO</span>
              </div>
              <span className="text-white/60 text-xs">Equal Housing Opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
