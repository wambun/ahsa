import { Hero, ServicesGrid, StatsSection, WhyChooseUs, ValueProps, ContactCTA } from '@/components/sections';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ValueProps />
      <StatsSection />
      <ContactCTA />
    </div>
  );
}
