import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'FitLloyd visual discovery and image sharing',
      description: 'Explore image posts, creative galleries, visual collections, and showcase-ready references on fitlloyd.com.',
      openGraphTitle: 'FitLloyd visual discovery and image sharing',
      openGraphDescription: 'Discover image posts, creative galleries, visual collections, and showcase-ready references on fitlloyd.com.',
      keywords: ['image sharing', 'visual discovery', 'creative galleries', 'portfolio inspiration'],
    },
    hero: {
      badge: 'Latest image collections',
      title: ['A visual home for', 'creative discovery.'],
      description: 'Explore fresh image posts, curated galleries, creator highlights, and visual references across fitlloyd.com.',
      primaryCta: { label: 'Browse images', href: '/image' },
      secondaryCta: { label: 'Search collections', href: '/search' },
      searchPlaceholder: 'Search images, creators, categories, and visual topics',
      focusLabel: 'Visual focus',
      featureCardBadge: 'featured image rotation',
      featureCardTitle: 'Latest image posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent galleries and visual stories stay at the center of the browsing experience.',
    },
    intro: {
      badge: 'About FitLloyd',
      title: 'Built for image sharing, visual browsing, and creative organization.',
      paragraphs: [
        'FitLloyd brings together image-led posts, visual browsing, and structured discovery so visitors can move naturally between galleries, creators, and topics.',
        'Instead of hiding creative references in disconnected pages, the site keeps visual content connected through clear navigation and category-based exploration.',
        'Whether someone starts with a gallery, image post, creator profile, or resource page, they can keep discovering related visuals without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Image-first homepage with strong emphasis on galleries and visual cards.',
        'Connected sections for visuals, creator profiles, resources, and supporting content.',
        'Cleaner browsing rhythm designed to make creative exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse images', href: '/image' },
      secondaryLink: { label: 'Search collections', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore image posts, visual collections, and creator resources.',
      description: 'Move between galleries, image-led posts, creator profiles, and useful references through one connected visual system.',
      primaryCta: { label: 'Browse Images', href: '/image' },
      secondaryCta: { label: 'Contact FitLloyd', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to share, discover, and organize visual content.',
    description: `${slot4BrandConfig.siteName} is built to make image sharing, visual discovery, and creative resources feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting galleries, image posts, and creator references into disconnected pages, FitLloyd keeps related visuals easy to move through and easy to understand.',
      'Whether someone starts with an image post, creator profile, visual category, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Image-first experience',
        description: 'We prioritize visual clarity, pacing, and structure so people can browse, save ideas, and discover without noise.',
      },
      {
        title: 'Connected visual surfaces',
        description: 'Image posts, galleries, resources, and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful visuals faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Let’s talk about your next visual idea.',
    description: 'Share a gallery request, creator feature, partnership idea, or image-related question. We will help point it in the right direction.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search image posts, visual topics, categories, creators, and collections across fitlloyd.com.',
    },
    hero: {
      badge: 'Search visuals',
      title: 'Find images, galleries, creators, and visual resources faster.',
      description: 'Use keywords, categories, and content types to discover image-led posts from every active section of the site.',
      placeholder: 'Search by image topic, creator, category, or title',
    },
    resultsTitle: 'Latest visual content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit image-led content for fitlloyd.com.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to share visual content.',
      description: 'Use your account to open the publishing workspace and prepare image posts, galleries, and creative references.',
    },
    hero: {
      badge: 'Visual publishing workspace',
      title: 'Create image-led content for FitLloyd.',
      description: 'Choose the content type, add visual details, and prepare a clean post with images, links, summary, and supporting notes.',
    },
    formTitle: 'Visual content details',
    submitLabel: 'Submit visual content',
    successTitle: 'Visual content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating image-led content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start sharing visuals.',
      description: 'Create an account to access the publishing workspace, save details, and submit image-led content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related visual stories',
      fallbackTitle: 'Visual story details',
    },
    listing: {
      relatedTitle: 'Related creative listings',
      fallbackTitle: 'Creative listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Creator profile details and visual context will appear here once available.',
      visitButton: 'Visit Creator Site',
    },
  },
} as const
