export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'life-insurance-annuities',
    title: 'Life Insurance & Annuities',
    shortDescription: 'Protect your family and invest in your future with life insurance and annuities.',
    fullDescription: 'Protect your family and be prepared for the future. Invest and grow your money with annuities. All AHAS agents are state licensed and represent multiple carriers and products, so their loyalty is to you, the client.',
    icon: 'heart',
    features: [
      'Multiple carrier options',
      'No medical exam options available',
      'Cash back on premiums paid',
      'Living benefits included',
      'Affordable monthly payments',
    ],
  },
  {
    slug: 'health-insurance',
    title: 'Health Insurance',
    shortDescription: 'Comprehensive health coverage for you and your family.',
    fullDescription: 'Protect yourself and your family with a health plan. Avoid unexpected health and medical expenses with comprehensive coverage tailored to your needs.',
    icon: 'medical',
    features: [
      'Individual and family plans',
      'Medicare assistance',
      'Prescription coverage',
      'Preventive care included',
      'Network of trusted providers',
    ],
  },
  {
    slug: 'bail-bonds',
    title: 'Bail Bonds',
    shortDescription: 'Professional bail bond services when you need them most.',
    fullDescription: 'We support you with your bond in case of any problem. Our licensed bail bond agents are here to help you navigate difficult situations with professionalism and discretion.',
    icon: 'key',
    features: [
      'Licensed bail bond agents',
      '24/7 availability',
      'Flexible payment plans',
      'Confidential service',
      'Fast processing',
    ],
  },
  {
    slug: 'itin-applications',
    title: 'ITIN Applications & Renewals',
    shortDescription: 'Expert assistance with ITIN applications and renewals.',
    fullDescription: 'Renew your expired ITIN and file a United States federal tax return. Our experts guide you through the entire process to ensure accurate and timely submission.',
    icon: 'document',
    features: [
      'New ITIN applications',
      'ITIN renewals',
      'Document preparation',
      'IRS correspondence handling',
      'Fast turnaround times',
    ],
  },
  {
    slug: 'tax-services',
    title: 'Tax Services',
    shortDescription: 'Professional tax preparation for any situation.',
    fullDescription: 'Each tax situation requires a different approach. No matter how complicated your situation is, we have you covered with expert tax preparation services.',
    icon: 'calculator',
    features: [
      'Individual tax returns',
      'Business tax returns',
      'Tax planning strategies',
      'IRS representation',
      'Year-round support',
    ],
  },
  {
    slug: 'home-loans',
    title: 'Home Loans',
    shortDescription: 'Make homeownership a reality with our loan services.',
    fullDescription: 'Home loans make it easy to buy your first home or refinance your existing home loans. We work with you to find the best rates and terms.',
    icon: 'home',
    features: [
      'First-time buyer programs',
      'Refinancing options',
      'Competitive rates',
      'Pre-approval assistance',
      'Personalized guidance',
    ],
  },
  {
    slug: 'property-casualty-insurance',
    title: 'Property & Casualty Insurance',
    shortDescription: 'Protect your assets with comprehensive coverage.',
    fullDescription: 'Including Auto, Home, Boats, Bonds, General Liability, Workers Comp and Commercial insurance. We offer comprehensive protection for all your valuable assets.',
    icon: 'shield',
    features: [
      'Auto insurance',
      'Homeowners insurance',
      'Boat insurance',
      'General liability',
      'Workers compensation',
    ],
  },
  {
    slug: 'commercial-insurance',
    title: 'Commercial Insurance',
    shortDescription: 'Tailored insurance solutions for your business.',
    fullDescription: 'Catering to your unique needs and requirements, with policies designed to protect your company\'s assets, mitigate risks, and ensure the continuity of your operations.',
    icon: 'building',
    features: [
      'Business liability coverage',
      'Property protection',
      'Workers compensation',
      'Professional liability',
      'Custom policy design',
    ],
  },
  {
    slug: 'legal-services',
    title: 'Legal Services',
    shortDescription: 'Professional legal assistance for various needs.',
    fullDescription: 'Access professional legal services to help navigate complex legal matters. Our network of trusted attorneys is ready to assist you.',
    icon: 'scale',
    features: [
      'Legal consultation',
      'Document preparation',
      'Notary services',
      'Immigration assistance',
      'Business formation',
    ],
  },
  {
    slug: 'live-scan-fingerprints',
    title: 'Live Scan Fingerprints',
    shortDescription: 'Certified fingerprinting services for background checks.',
    fullDescription: 'Certified fingerprint technicians capture your fingerprints and transmit them for a fingerprint-based background check. Fast, accurate, and professional service.',
    icon: 'fingerprint',
    features: [
      'Certified technicians',
      'Electronic submission',
      'Fast processing',
      'DOJ & FBI checks',
      'Walk-ins welcome',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(count: number = 6): Service[] {
  return services.slice(0, count);
}
