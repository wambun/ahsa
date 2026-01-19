# Insurance Template - Design Specification
## Design Target Reference

**Website URL:** https://insurance-template.framer.website/
**Type:** Multi-page modern insurance website template

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Dark Teal | `#003127` | Footer background, accent sections, primary dark |
| Emerald Green | `#11dba3` | CTAs, highlights, primary accent |
| White | `#ffffff` | Primary background |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Light Mint | `#c6fbec` | Badges, subtle highlights, pills |
| Gray | `#696e77` | Body text |
| Light Gray | `#e4e4e7` | Dividers, borders |
| Off-white | `#fafafa` | Section backgrounds |

### Accent/Shadow
| Name | Hex | Usage |
|------|-----|-------|
| Dark Shadow | `#0031271a` | Card shadows (10% opacity) |
| White Transparent | `#ffffff1a` | Form backgrounds |

---

## Typography

### Font Families
- **Primary:** DM Sans (weights: 400, 500, 600, 700, 900)
- **Secondary:** Inter (weights: 400-900, including italics)

### Type Scale
| Element | Weight | Size | Line Height |
|---------|--------|------|-------------|
| H1 | 900 | 56px | 1.1 |
| H2 | 700 | 42px | 1.2 |
| H3 | 700 | 32px | 1.3 |
| H4 | 600 | 24px | 1.3 |
| H5 | 600 | 20px | 1.4 |
| H6 | 600 | 18px | 1.4 |
| Body | 400-500 | 16px | 1.6 |
| Small | 400 | 14px | 1.5 |

---

## Layout System

### Container
- **Max Width:** 1200px
- **Horizontal Padding:** 15px (mobile), 20px (tablet), 40px (desktop)

### Spacing Scale
```
8px  - xs
16px - sm
24px - md
32px - lg
50px - xl
70px - 2xl
100px - 3xl
130px - 4xl (section padding)
```

### Section Rhythm
- Vertical padding: 130px (major sections)
- Gap between content blocks: 50px
- Gap between cards: 30px

---

## Component Patterns

### Cards
```css
border-radius: 8px;
box-shadow: 0 18px 30px rgba(0, 49, 39, 0.1);
background: white;
padding: 32px;
```

### Service Cards
- Icon (40x40) at top
- Heading (H5)
- Description paragraph
- "Learn More" button with arrow

### Buttons
```css
/* Primary Button */
background: #11dba3;
color: #003127;
border-radius: 10px;
padding: 16px 32px;
font-weight: 600;
transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

/* Secondary Button */
background: #003127;
color: white;
border-radius: 10px;
padding: 16px 32px;

/* Ghost Button */
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.4);
color: white;
```

### Form Inputs
```css
border-radius: 10px;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.4);
padding: 16px 20px;
transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

/* Focus State */
border-color: #11dba3;
```

### Pills/Badges
```css
background: #c6fbec;
color: #003127;
border-radius: 100px;
padding: 8px 16px;
font-size: 14px;
font-weight: 500;
```

---

## Page Templates

### Homepage Sections
1. **Navigation** - Fixed header with logo, nav links, CTA button
2. **Hero** - Full-width with image, headline, sub-headline, feature cards
3. **Popular Services** - Grid of service cards with "All Services" link
4. **Why Insurance** - Split layout with image and content
5. **Services Grid** - 6 service cards in 3-column layout
6. **Why Choose Us** - Numbered list with benefits
7. **Quote Form** - CTA section with form
8. **Stats** - 4-column stats bar (40k+, 12+, 25, 98%)
9. **Team** - Grid of team member cards
10. **Testimonials** - Horizontal scroll of testimonial cards
11. **Blog/News** - 3-column blog post cards
12. **Footer** - Multi-column with newsletter

### About Us Sections
1. Navigation
2. Page Header (with decorative waves)
3. Hero Image
4. Company Overview
5. History Section
6. Team Section
7. Stats Bar
8. Showcases Grid
9. Testimonials
10. Blog Section
11. Footer

### Services Page Sections
1. Navigation
2. Page Header
3. Services Grid (9 services)
4. Stats with Logos
5. FAQ Section
6. Contact CTA
7. Footer

### Contact Page Sections
1. Navigation
2. Page Header
3. Hero Image
4. Location Cards (3 locations)
5. Offerings Grid
6. Contact Form
7. Support Info
8. Footer

---

## Animation Guidelines

### Transitions
```css
/* Standard transition */
transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

/* Hover states */
transform: translateY(-4px);
box-shadow: 0 24px 40px rgba(0, 49, 39, 0.15);
```

### Scroll Animations (Framer Motion)
- Fade up on scroll
- Stagger children animations
- Duration: 0.5-0.8s
- Ease: [0.44, 0, 0.56, 1]

---

## Responsive Breakpoints
```css
/* Mobile First */
xs: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile Adaptations
- Stack columns vertically
- Reduce section padding to 80px
- Hamburger menu navigation
- Full-width cards
- Reduce heading sizes by ~20%

---

## Sitemap

```
/
├── /about-us
├── /services
│   ├── /services/home-insurance
│   ├── /services/auto-insurance
│   ├── /services/life-insurance
│   ├── /services/travel-insurance
│   ├── /services/firm-insurance
│   ├── /services/health-insurance
│   ├── /services/dental-insurance
│   ├── /services/pet-insurance
│   └── /services/renters-insurance
├── /showcases
│   ├── /showcases/future-education
│   ├── /showcases/insurance-journey
│   ├── /showcases/road-insurance
│   ├── /showcases/home-insurance
│   ├── /showcases/business-shield
│   └── /showcases/property-preservation
├── /team
│   ├── /team/john-mitchell
│   ├── /team/emily-johnson
│   ├── /team/jessica-parker
│   └── /team/bob-saylas
├── /blog
│   ├── /blog/insurance-horizons-exploring-latest-trends
│   ├── /blog/securing-futures-insurance-professionals
│   └── /blog/a-guide-to-choosing-excellent-coverage
├── /pricing
└── /contact-us
```

---

## Icon Style
- Line icons (stroke weight: 1.5-2px)
- Consistent 24x24 or 40x40 sizing
- Color: inherits from parent or dark teal

---

## Image Guidelines
- Hero images: High quality, professional photography
- Team photos: Consistent aspect ratio (1:1 or 3:4)
- Service icons: Simple, clean line art
- Decorative elements: Subtle wave patterns, dashed lines
