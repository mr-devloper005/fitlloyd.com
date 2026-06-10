import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Visual essays',
    headline: 'Image-supported articles for creative context.',
    description: 'Browse guides, explainers, and visual notes that help creators understand trends, categories, and image-led ideas.',
    filterLabel: 'Choose visual topic',
    secondaryNote: 'Editorial surfaces support the images with helpful context and structure.',
    chips: ['Visual context', 'Topic filters', 'Creator-friendly'],
  },
  classified: {
    eyebrow: 'Creative notices',
    headline: 'Visual opportunities, requests, and time-sensitive posts.',
    description: 'Browse creative calls, service notes, and image-related opportunities with quick scanning and direct action cues.',
    filterLabel: 'Filter notice category',
    secondaryNote: 'Prioritize clear details, short summaries, and direct browsing.',
    chips: ['Creative calls', 'Fast scan', 'Action cues'],
  },
  sbm: {
    eyebrow: 'Saved visual resources',
    headline: 'Bookmarks arranged like curated inspiration shelves.',
    description: 'Browse useful tools, references, boards, and image resources that support creative workflows.',
    filterLabel: 'Filter visual collection',
    secondaryNote: 'Curated resources need grouping, calm metadata, and clear labels.',
    chips: ['Visual collections', 'Resources', 'Reference flow'],
  },
  profile: {
    eyebrow: 'Creators and profiles',
    headline: 'Profiles with identity, visual style, and reputation cues.',
    description: 'Profile pages make creators, studios, and visual brands discoverable through clear identity and image-led context.',
    filterLabel: 'Filter creator category',
    secondaryNote: 'Make identity and visual credibility visible before the grid begins.',
    chips: ['Creator identity', 'Trust cues', 'Visual cards'],
  },
  pdf: {
    eyebrow: 'Creative document library',
    headline: 'Guides and documents for image-led workflows.',
    description: 'Browse downloadable guides, visual briefs, checklists, and reference material that supports creative work.',
    filterLabel: 'Filter resource type',
    secondaryNote: 'Document surfaces need archive cues, file context, and clear browsing.',
    chips: ['Visual guides', 'Briefs', 'Archive ready'],
  },
  listing: {
    eyebrow: 'Creative directory',
    headline: 'Studios, services, and visual businesses built for discovery.',
    description: 'Listing pages help visitors compare creative services, studios, and image-related businesses with practical metadata.',
    filterLabel: 'Filter creative category',
    secondaryNote: 'Prioritize comparison, location, and direct action paths.',
    chips: ['Creative directory', 'Compare', 'Service discovery'],
  },
  image: {
    eyebrow: 'Visual gallery',
    headline: 'Image posts with a gallery-first FitLloyd browsing experience.',
    description: 'Image pages lead with visual impact, stronger cards, and a portfolio-like rhythm for creative discovery.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let images carry the page before long text does.',
    chips: ['Gallery', 'Visual-first', 'Portfolio mood'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
