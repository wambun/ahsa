export const siteData = {
  name: 'American Hispanic Associated Services',
  shortName: 'AHAS',
  tagline: 'Family-owned business promoting strong national and international public relations through values deep-rooted in the American dream.',
  mission: 'Promote strong national and international public relations in business through values deeply rooted in the American dream.',

  contact: {
    phones: ['(530) 600-4025', '(530) 665-8100'],
    email: 'info@ahaspros.com',
    address: {
      street: '3053 Harrison Blvd, Suite 202',
      city: 'South Lake Tahoe',
      state: 'CA',
      zip: '96150',
    },
    hours: 'Monday - Friday: 9AM - 5PM',
    bookingUrl: 'https://squareup.com/appointments/book/58aqskgrbi80xc/LYEMY80QMK81M/services',
  },

  licenses: [
    'CA 4017597',
    'NV 3501719',
    'Bail Bond License 1N13034',
    'NMLS # 2065774',
  ],

  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Clients Served' },
    { value: '14+', label: 'Insurance Partners' },
    { value: '98%', label: 'Client Satisfaction' },
  ],

  whyChooseUs: [
    {
      title: 'Independent Brokers',
      description: 'Our loyalty is to you, the client. We represent multiple carriers and products to find you the best fit.',
    },
    {
      title: 'Licensed Professionals',
      description: 'All AHAS agents are state licensed with expertise across insurance, tax, and financial services.',
    },
    {
      title: 'Personalized Service',
      description: 'We build your confidence through open communication and personalized solutions for your unique needs.',
    },
    {
      title: 'Community Focused',
      description: 'As a family-owned business, we\'re deeply committed to serving our Northern California community.',
    },
  ],

  valuePropCards: [
    {
      title: 'Protect Your Family',
      description: 'All AHAS agents are state licensed and represent multiple carriers and products. We are independent brokers, allowing us to remain impartial while finding you the best fit for your insurance and annuity needs.',
      icon: 'family',
    },
    {
      title: 'Retirement Planning',
      description: 'Making the right financial decisions can make all the difference. We help you structure your retirement money as a lifetime income guarantee and plan for funeral expenses.',
      icon: 'retirement',
    },
    {
      title: 'Home Protection',
      description: 'Have the security that if you die, your home will go to your family and not the bank. We offer affordable life insurance with no medical exams required.',
      icon: 'home',
    },
    {
      title: 'College Planning',
      description: 'With college costs continuing to rise, we work with Gerber College Plan, offering up to $150,000 in financial support per policy with guaranteed payout and zero risk.',
      icon: 'education',
    },
  ],

  complianceText: 'This Act (Title VII of the Consumer Credit Protection Act) prohibits discrimination on the basis of race, color, religion, national origin, sex, marital status, age, receipt of public assistance, or good faith exercise of any rights under the Consumer Credit Protection Act.',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export const footerLinks = {
  services: [
    { href: '/services/life-insurance-annuities', label: 'Life Insurance' },
    { href: '/services/health-insurance', label: 'Health Insurance' },
    { href: '/services/tax-services', label: 'Tax Services' },
    { href: '/services/home-loans', label: 'Home Loans' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'All Services' },
    { href: '/contact', label: 'Contact' },
  ],
};
