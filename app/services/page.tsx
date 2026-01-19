import { Metadata } from 'next';
import { ServicesGrid, StatsSection, ContactCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of services including life insurance, health insurance, tax services, home loans, and more.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Comprehensive Services for Your Needs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our wide range of services designed to protect, support, and empower you and your family.
            Quality, reliability, and care—everything you need in one place.
          </p>
        </div>
      </section>

      {/* Services Grid - Show All */}
      <ServicesGrid
        showAll={true}
        title="What We Offer"
        subtitle="Providing honest and affordable services to Northern California."
      />

      <StatsSection />
      <ContactCTA />
    </div>
  );
}
