import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Visual discovery and image sharing',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Visual discovery and image sharing',
    primaryLinks: [
      { label: 'Images', href: '/image' },
      { label: 'Collections', href: '/search' },
      { label: 'Creators', href: '/profiles' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Explore images', href: '/image' },
      secondary: { label: 'Share a visual', href: '/create' },
    },
  },
  footer: {
    tagline: 'Image posts, visual boards, and creative references',
    description: 'A connected visual discovery surface for image posts, galleries, creator profiles, resources, and showcase-ready collections.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Images', href: '/image' },
          { label: 'Image Sharing', href: '/image-sharing' },
          { label: 'Creator Profiles', href: '/profiles' },
          { label: 'Saved Resources', href: '/sbm' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean visual discovery and creative publishing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
