import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { services } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;

  // Main pages
  const staticRoutes = ['', 'about', 'services', 'contact'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Service detail pages
  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...staticRoutes, ...serviceRoutes];
}
