import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, Calendar } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { siteData } from '@/data/site-data';
import { ServiceIcon } from '@/components/icons/ServiceIcons';
import { ContactCTA } from '@/components/sections';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (excluding current)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ServiceIcon name={service.icon} className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                About This Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                What&apos;s Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                <a
                  href={siteData.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
                <a
                  href={`tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {siteData.contact.phones[0]}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-primary-500 rounded-2xl p-6 text-white mb-8">
                <h3 className="font-display font-semibold text-xl mb-4">
                  Need Help?
                </h3>
                <p className="text-white/80 mb-6">
                  Our experts are ready to help you find the right coverage for your needs.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteData.contact.phones[0].replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 text-white hover:text-secondary-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{siteData.contact.phones[0]}</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-4">
                  Other Services
                </h3>
                <div className="space-y-4">
                  {relatedServices.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <ServiceIcon
                          name={related.icon}
                          className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-primary-500 transition-colors">
                        {related.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
