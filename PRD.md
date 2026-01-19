# Product Requirements Document (PRD)
## AHAS Website Redesign - Phase 1: Architecture & Planning

**Project:** American Hispanic Associated Services Website Redesign
**Date:** January 19, 2026
**Version:** 1.0

---

## 1. Executive Summary

This PRD outlines the complete redesign of the American Hispanic Associated Services (AHAS) website, transforming it from a single-page WordPress site to a modern, multi-page Next.js application. The new design follows the premium UI/UX patterns established by the insurance-template.framer.website reference.

### Key Objectives
1. Modernize the visual design with a premium, trustworthy aesthetic
2. Improve information architecture with dedicated service pages
3. Enhance user experience with smooth animations and intuitive navigation
4. Maintain all existing content while restructuring for better discoverability
5. Ensure mobile-first responsive design

---

## 2. Sitemap (Derived from Old Site)

```
AHAS Website Structure
├── / (Homepage)
├── /about
├── /services
│   ├── /services/life-insurance-annuities
│   ├── /services/health-insurance
│   ├── /services/bail-bonds
│   ├── /services/itin-applications
│   ├── /services/tax-services
│   ├── /services/home-loans
│   ├── /services/property-casualty-insurance
│   ├── /services/commercial-insurance
│   ├── /services/legal-services
│   └── /services/live-scan-fingerprints
├── /solutions (Value Props)
│   ├── /solutions/protect-your-family
│   ├── /solutions/retirement-planning
│   ├── /solutions/home-protection
│   └── /solutions/college-planning
├── /business-services
│   ├── /business-services/llc-incorporation
│   └── /business-services/ira-401k
└── /contact
```

### Page Inventory

| Page | Priority | Content Source | Dynamic |
|------|----------|----------------|---------|
| Homepage | P0 | Mixed | No |
| About | P0 | Old site "About" | No |
| Services (Index) | P0 | Old site services | No |
| Service Detail (x10) | P1 | Old site + expanded | Yes |
| Solutions (Index) | P1 | Old site value props | No |
| Solution Detail (x4) | P2 | Old site + expanded | Yes |
| Business Services | P2 | Old site | No |
| Contact | P0 | Old site contact | No |

---

## 3. Visual Analysis - Design System

### 3.1 Color Palette Adaptation

| Role | Old Site | New Design | AHAS Adaptation |
|------|----------|------------|-----------------|
| Primary | Blue (#2563eb) | Dark Teal (#003127) | Navy Blue (#1e3a5f) |
| Accent | Orange (#f97316) | Emerald (#11dba3) | Orange (#f97316) - Keep brand |
| Background | White/Gray | White (#fff) | White (#fff) |
| Text | Dark Gray | Gray (#696e77) | Charcoal (#374151) |
| Highlight | Light Blue | Light Mint (#c6fbec) | Light Orange (#fff7ed) |

### 3.2 Typography

```css
/* Font Family */
--font-primary: 'DM Sans', sans-serif;
--font-secondary: 'Inter', sans-serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### 3.3 Spacing System

```css
/* Section Spacing */
--section-padding-y: 8rem;     /* 128px */
--section-padding-y-sm: 5rem;  /* 80px - mobile */

/* Container */
--container-max: 1200px;
--container-padding: 1.5rem;   /* 24px */

/* Component Gaps */
--gap-sm: 1rem;    /* 16px */
--gap-md: 1.5rem;  /* 24px */
--gap-lg: 2rem;    /* 32px */
--gap-xl: 3rem;    /* 48px */
```

### 3.4 Animation Specifications

```typescript
// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

---

## 4. Content Mapping

### 4.1 Homepage Mapping

| New Section | Old Content Source | Notes |
|-------------|-------------------|-------|
| Hero | Hero section | Keep family-owned messaging |
| Feature Cards (3) | "What we do" intro | Peace of Mind, Custom Solutions, Reliable Support |
| Popular Services | Services grid | Show top 6 services |
| Why Choose Us | "Why choose us?" section | Adapt to numbered list format |
| Services Grid | Full services list | 6 featured services |
| Quote/CTA | "Make an appointment" | Integrate Square booking |
| Stats | New content needed | Create: Years in business, Clients served, etc. |
| Testimonials | None (new) | Collect from clients |
| Contact Section | Contact info | Phone, email, address |

### 4.2 Services Mapping

| AHAS Service | Template Equivalent | Icon Style |
|--------------|---------------------|------------|
| Life Insurance & Annuities | Life Insurance | Heart/Shield |
| Health Insurance | Health Insurance | Medical Cross |
| Bail Bonds | (Custom) | Handcuffs/Key |
| ITIN Applications | (Custom) | Document/ID |
| Tax Services | (Custom) | Calculator |
| Home Loans | Home Insurance | House |
| Property & Casualty | Auto Insurance | Car/House |
| Commercial Insurance | Firm Insurance | Building |
| Legal Services | (Custom) | Scale/Gavel |
| Live Scan | (Custom) | Fingerprint |

### 4.3 About Page Mapping

| New Section | Old Content Source |
|-------------|-------------------|
| Page Header | "Explore our company" |
| Mission | "Our Mission" |
| History | New content needed |
| Team | New content needed |
| Stats | Business metrics |
| Values | "Why choose us?" |

### 4.4 Contact Page Mapping

| New Section | Old Content Source |
|-------------|-------------------|
| Contact Info | Address, phone, email |
| Business Hours | Monday-Friday 9AM-5PM |
| Contact Form | Existing form fields |
| Map | Google Maps embed |
| Booking CTA | Square appointments link |

---

## 5. Technical Implementation Plan

### 5.1 Project Structure

```
app/
├── layout.tsx                 # Root layout with header/footer
├── page.tsx                   # Homepage
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx              # Services index
│   └── [slug]/
│       └── page.tsx          # Dynamic service detail
├── solutions/
│   ├── page.tsx              # Solutions index
│   └── [slug]/
│       └── page.tsx          # Dynamic solution detail
├── business-services/
│   └── page.tsx
└── contact/
    └── page.tsx

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MobileNav.tsx
├── sections/
│   ├── Hero.tsx
│   ├── FeatureCards.tsx
│   ├── ServicesGrid.tsx
│   ├── WhyChooseUs.tsx
│   ├── StatsBar.tsx
│   ├── Testimonials.tsx
│   ├── ContactSection.tsx
│   └── QuoteForm.tsx
├── cards/
│   ├── ServiceCard.tsx
│   ├── FeatureCard.tsx
│   └── TestimonialCard.tsx
└── ui/
    └── [shadcn components]

data/
├── services.ts               # Service content
├── solutions.ts              # Solution content
├── testimonials.ts           # Testimonial content
└── site-config.ts            # Site-wide config
```

### 5.2 Data Models

```typescript
// types/index.ts

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

interface Solution {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  relatedServices: string[];
}

interface ContactInfo {
  phones: string[];
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: string;
  bookingUrl: string;
}

interface SiteConfig {
  name: string;
  tagline: string;
  licenses: string[];
  socialLinks: Record<string, string>;
}
```

### 5.3 Component Implementation Priority

**Phase 2A - Core Layout (Week 1)**
1. Header with navigation
2. Footer with links and newsletter
3. Mobile navigation
4. Base layout wrapper

**Phase 2B - Homepage (Week 1-2)**
1. Hero section
2. Feature cards
3. Services grid
4. Stats bar
5. Contact section
6. Quote/CTA form

**Phase 2C - Content Pages (Week 2-3)**
1. About page
2. Services index page
3. Service detail template
4. Contact page

**Phase 2D - Secondary Pages (Week 3-4)**
1. Solutions pages
2. Business services page
3. 404 page

### 5.4 Third-Party Integrations

| Service | Purpose | Implementation |
|---------|---------|----------------|
| Square | Appointment booking | External link + embedded widget option |
| Google Maps | Location display | Embed iframe |
| reCAPTCHA | Form protection | Google reCAPTCHA v3 |
| Google Analytics | Analytics | Next.js Script component |

### 5.5 SEO Requirements

Each page requires:
- Unique `<title>` tag
- Meta description
- Open Graph tags
- Canonical URL
- Structured data (LocalBusiness, Service)

```typescript
// Example metadata
export const metadata: Metadata = {
  title: 'Life Insurance & Annuities | AHAS',
  description: 'Protect your family and invest in your future with life insurance and annuities from American Hispanic Associated Services.',
  openGraph: {
    title: 'Life Insurance & Annuities | AHAS',
    description: '...',
    images: ['/og/life-insurance.jpg'],
  },
};
```

---

## 6. Accessibility Requirements

- All interactive elements must have `aria-label`
- Heading hierarchy must be sequential (h1 → h2 → h3)
- Color contrast: WCAG AA minimum (4.5:1 for text)
- All form inputs must have labels
- All images must have alt text
- Keyboard navigation must work for all interactive elements
- Focus states must be visible

---

## 7. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse Best Practices | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.8s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## 8. Content Requirements (To Be Collected)

### New Content Needed
- [ ] Company history paragraph
- [ ] Team member photos and bios (if applicable)
- [ ] Client testimonials (3-5)
- [ ] Service detail descriptions (expanded)
- [ ] Stats/metrics (years in business, clients served, carriers represented)
- [ ] High-quality hero images
- [ ] Service icons or photos

### Assets to Source
- [ ] AHAS logo (SVG format)
- [ ] Team photos (if showing team)
- [ ] Office photos
- [ ] Service-related imagery

---

## 9. Success Criteria

Phase 1 is complete when:
1. ✅ Old site content is fully documented
2. ✅ New design patterns are analyzed
3. ✅ Sitemap is defined
4. ✅ Content mapping is complete
5. ✅ Technical implementation plan is documented
6. ✅ PRD is approved

Phase 2 begins with implementation of the global layout components.

---

## Appendix A: Reference Files

- Old Site Content: `/client/old/site-content.md`
- New Design Spec: `/client/new/design-specification.md`
- Screenshots: `/.playwright-mcp/client/old/` and `/.playwright-mcp/client/new/`

## Appendix B: External Links

- Current Site: https://ahaspros.com/
- Design Reference: https://insurance-template.framer.website/
- Square Booking: https://squareup.com/appointments/book/58aqskgrbi80xc/LYEMY80QMK81M/services
