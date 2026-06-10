import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Image as ImageIcon, Layers3, Monitor, Palette, Search, Sparkles, Star, Wand2, type LucideIcon } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { EditableDemoSlider } from '@/editable/components/EditableDemoSlider'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { editableFallbackImage, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

type IconItem = [string, string, LucideIcon]
type ElementItem = [string, LucideIcon]

const fitLloydFallbackPosts: SitePost[] = [
  'Creative portfolio images for fresh visual ideas',
  'Curated moodboards for designers and makers',
  'Editorial photography collections worth saving',
  'Minimal image boards for clean inspiration',
  'Responsive artwork archives with rich cards',
  'Studio-style image stories and showcases',
  'Professional visual references for creative teams',
  'Gallery categories built for quick discovery',
  'Featured collections with motion and depth',
  'Compact image cards for mobile browsing',
  'Creator profile highlights and visual sets',
  'Organized resources for image-led projects',
].map((title, index) => ({
  id: `fitlloyd-collection-${index + 1}`,
  slug: '',
  title,
  summary: 'A fitlloyd.com visual collection for sharing work, browsing inspiration, and keeping creative references easy to explore.',
  tags: ['Visual'],
  content: {
    category: index % 2 ? 'Gallery' : 'Showcase',
    images: [editableFallbackImage],
  },
})) as SitePost[]

const deviceItems: IconItem[] = [
  ['1920 x 1080px', 'Desktop gallery view', Monitor],
  ['1364 x 768px', 'Notebook browsing view', Monitor],
  ['1024 x 768px', 'Tablet collection view', Palette],
  ['375 x 667px', 'Mobile image view', ImageIcon],
]

const elementItems: ElementItem[] = [
  ['Image Stories', Layers3],
  ['Creator Sets', Sparkles],
  ['Share Tools', Wand2],
  ['Visual Search', Search],
  ['Saved Picks', Star],
  ['Collection CTA', Palette],
  ['Gallery Menu', Layers3],
  ['Image Gallery', ImageIcon],
  ['Color Boards', Palette],
  ['Portfolio Grid', Monitor],
]

const fallbackPosts = (posts: SitePost[]) => posts.length ? posts : fitLloydFallbackPosts

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function ImageFirstCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-[10px] bg-white p-3 shadow-[0_18px_48px_rgba(17,12,8,.12)] transition duration-300 hover:-translate-y-2 ${index % 3 === 0 ? 'md:row-span-2' : ''}`}>
      <div className={`relative overflow-hidden rounded-[7px] bg-[#eee8df] ${index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,.72))]" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#070d0a]">Gallery {index + 1}</span>
      </div>
      <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-tight text-[#070d0a]">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-[#62616a]">{getEditableExcerpt(post, 110)}</p>
    </Link>
  )
}

function HorizontalCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-[12px] bg-white p-3 shadow-[0_14px_34px_rgba(17,12,8,.10)] transition duration-300 hover:-translate-y-1 sm:grid-cols-[150px_minmax(0,1fr)]">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] bg-[#eee8df] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7600e8]">Pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight text-[#070d0a]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-[#62616a]">{getEditableExcerpt(post, 140)}</p>
      </div>
    </Link>
  )
}

function EditorialListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group flex items-start gap-4 border-b border-black/10 py-5">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7600e8] text-2xl font-black text-white">{index + 1}</span>
      <span className="min-w-0">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#7600e8]">{getEditableCategory(post)}</span>
        <span className="mt-2 block line-clamp-2 text-2xl font-black leading-tight text-[#070d0a]">{post.title}</span>
      </span>
      <ArrowRight className="ml-auto mt-4 h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const livePosts = fallbackPosts(posts)
  const heroPost = livePosts[0]
  const heroImage = heroPost ? getEditablePostImage(heroPost) : editableFallbackImage
  const secondaryImage = livePosts[1] ? getEditablePostImage(livePosts[1]) : heroImage

  return (
    <section className="uxora-grid-bg relative overflow-hidden text-white">
      <div className="pointer-events-none absolute left-[8%] top-[34%] hidden text-5xl font-black text-white/80 lg:block">+</div>
      <div className="pointer-events-none absolute right-[9%] top-[17%] hidden rotate-6 text-2xl font-black italic text-[#82ff63] lg:block"></div>
      <div className="mx-auto max-w-[1328px] px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8 lg:pb-20">
        <h1 className="mx-auto max-w-6xl text-6xl font-black leading-[.92] tracking-normal sm:text-7xl lg:text-[7.4rem]">
          Discover visual ideas with FitLloyd
        </h1>
        <p className="mx-auto mt-7 max-w-4xl text-lg font-semibold leading-8 text-white/88 sm:text-2xl">
          A flexible image-sharing experience for creative people who want to share, discover, organize, and showcase standout visual content.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href={primaryRoute} className="uxora-soft-pulse inline-flex items-center gap-3 rounded-full bg-[#7600e8] px-8 py-4 text-base font-black text-white">
            <Sparkles className="h-5 w-5 text-[#82ff63]" /> Explore images
          </Link>
          <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-white/14 px-8 py-4 text-base font-black text-white backdrop-blur">
            Search collections
          </Link>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-[26px] border-[6px] border-white/70 bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,.32)]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[16px] bg-[#f8efe4]">
              <img src={heroImage} alt={heroPost?.title || SITE_CONFIG.name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-white/88 px-5 py-3 text-xs font-black text-[#070d0a]">
                <span>FitLloyd</span><span className="hidden sm:inline">Images - Collections - Creators - Search</span><span className="rounded-full bg-[#7600e8] px-4 py-2 text-white">Share work</span>
              </div>
            </div>
          </div>
          <div className="uxora-float absolute -left-8 bottom-12 hidden w-64 rounded-[10px] bg-[#101010] p-5 text-left shadow-[0_20px_44px_rgba(0,0,0,.28)] md:block">
            <p className="text-sm font-black">Collections</p>
            <div className="mt-4 h-24 rounded-md bg-white/8" />
            <div className="mt-5 flex gap-3 text-[10px] font-black"><span>Saved boards</span><span>Creator sets</span></div>
          </div>
          <div className="uxora-float-delayed absolute -right-4 top-20 hidden rounded-[18px] bg-[#101010] p-6 text-left shadow-[0_20px_44px_rgba(0,0,0,.28)] md:block">
            <p className="text-6xl font-black text-[#82ff63]">75%</p>
            <p className="mt-2 max-w-[220px] text-3xl font-black leading-tight">Fast image browsing and discovery</p>
          </div>
          <div className="uxora-float absolute -bottom-6 right-24 hidden w-44 rounded-[10px] bg-white p-2 shadow-[0_20px_44px_rgba(0,0,0,.22)] lg:block">
            <img src={secondaryImage} alt="" className="aspect-[4/3] rounded-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = fallbackPosts(posts).slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className="overflow-hidden bg-[#080f0a] text-white">
      <div className="mx-auto flex max-w-[1328px] flex-wrap items-center justify-center gap-8 px-4 py-8 text-lg font-black sm:justify-between">
        {['Image-first browsing', 'Creator-ready galleries', 'Organized visual boards', 'Responsive discovery'].map((item) => (
          <div key={item} className="inline-flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10d6d5] text-[#080f0a]"><Check className="h-4 w-4" /></span>{item}</div>
        ))}
      </div>
      <div className="bg-[#f8efe4] text-[#070d0a]" style={{ paddingBlock: '46px 58px' }}>
        <h2 className="mx-auto max-w-4xl px-4 text-center font-black leading-tight" style={{ fontSize: 'clamp(34px, 4.2vw, 58px)' }}>Image collections made for creative discovery</h2>
        <EditableDemoSlider posts={railPosts} getHref={(post) => postHref(primaryTask, post, primaryRoute)} />
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = fallbackPosts(posts).slice(0, 9)
  if (!featured.length) return null
  const hero = featured[0]
  return (
    <section className="bg-white text-[#070d0a]">
      <div className="mx-auto grid max-w-[1328px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <h2 className={dc.type.sectionTitle}>Organize every visual collection with clarity</h2>
          <p className="mt-7 max-w-xl text-2xl font-medium leading-9 text-[#242a34]">Browse galleries, highlights, and story pages with a polished layout made for image-first discovery.</p>
          <div className="mt-9 grid gap-5 text-xl font-black">
            {['Browse by visual category', 'Save inspiring image ideas', 'Showcase creators and collections'].map((item) => (
              <p key={item} className="flex items-center gap-4"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7600e8] to-[#ffbd66] text-white"><Check className="h-4 w-4" /></span>{item}</p>
            ))}
          </div>
          <Link href={primaryRoute} className="mt-12 inline-flex rounded-full bg-[#7600e8] px-8 py-4 text-base font-black text-white">Browse image posts</Link>
        </div>
        <div className="relative min-h-[520px]">
          <div className="absolute left-8 top-12 w-[82%] overflow-hidden rounded-[14px] border-[5px] border-[#e400a4] bg-white shadow-[0_28px_70px_rgba(0,0,0,.14)]">
            <img src={getEditablePostImage(hero)} alt={hero.title} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="uxora-float absolute right-0 top-0 w-48 rounded-[6px] border-2 border-[#e400a4] bg-white p-3 shadow-xl">
            <div className="h-28 rounded bg-gradient-to-br from-white via-[#ff8282] to-[#2b031c]" />
            <p className="mt-2 text-xs font-black">Color mood</p>
          </div>
          <div className="uxora-float-delayed absolute bottom-0 left-0 w-72 rounded-[6px] border-2 border-[#e400a4] bg-white p-4 shadow-xl">
            <p className="text-sm font-black">Gallery motion</p>
            <div className="mt-3 grid gap-2">{['Scroll', 'Blur', 'Rotate', 'Scale'].map((item) => <span key={item} className="rounded bg-black/5 px-3 py-2 text-xs font-bold">{item}</span>)}</div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1328px] gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="grid gap-4">
          {featured.slice(1, 5).map((post, index) => <HorizontalCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
        <div className="rounded-[18px] bg-[#080f0a] p-8 text-white">
          <h3 className="text-5xl font-black leading-tight">Fresh visual categories, creator sets, and inspiration boards.</h3>
          <p className="mt-6 text-lg font-semibold leading-8 text-white/70">fitlloyd.com keeps image browsing quick, organized, and useful for creative professionals.</p>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const timed = timeSections.flatMap((section) => section.posts)
  const collection = fallbackPosts(timed.length ? timed : posts).slice(0, 12)
  if (!collection.length) return null
  return (
    <section className="bg-[#fbf6ef] text-[#070d0a]">
      <div className="mx-auto max-w-[1328px] px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-5xl font-black leading-tight sm:text-6xl">Image-led pages for every collection</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collection.slice(0, 6).map((post, index) => <ImageFirstCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>

  

      <div className="mx-auto max-w-[1328px] px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-black leading-tight sm:text-6xl">Essential tools for visual discovery</h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {elementItems.map(([label, Icon]) => (
            <div key={String(label)} className="rounded-[8px] bg-white p-8 text-center text-[#7600e8] shadow-[0_16px_42px_rgba(0,0,0,.06)] transition hover:-translate-y-1">
              <Icon className="mx-auto h-8 w-8" />
              <p className="mt-5 text-base font-black">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1328px] gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <h2 className={dc.type.sectionTitle}>Popular directions across FitLloyd</h2>
          <form action="/search" className="mt-10 flex rounded-full bg-white p-2 shadow-sm">
            <input name="q" placeholder={`Search ${taskLabel(primaryTask).toLowerCase()} and galleries`} className="min-w-0 flex-1 bg-transparent px-5 text-sm font-semibold outline-none" />
            <button className="rounded-full bg-[#080f0a] px-5 py-3 text-sm font-black text-white">Search</button>
          </form>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {collection.slice(6, 10).map((post, index) => <EditorialListCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="uxora-grid-bg relative overflow-hidden px-4 py-24 text-center text-white sm:px-6 lg:px-8">
      <div className="mx-auto mb-20 grid max-w-3xl gap-6 md:grid-cols-2">
        <Link href="/about" className="rounded-[10px] bg-white/12 p-8 text-left backdrop-blur transition hover:-translate-y-1">
          <p className="text-xl font-black">Built for visual discovery</p>
          <h3 className="mt-2 text-5xl font-black">Image Guide</h3>
        </Link>
        <Link href="/contact" className="rounded-[10px] bg-white/12 p-8 text-left backdrop-blur transition hover:-translate-y-1">
          <p className="text-xl font-black">Questions or collaboration ideas</p>
          <h3 className="mt-2 text-5xl font-black">Contact us</h3>
        </Link>
      </div>
      <h2 className="mx-auto max-w-5xl text-6xl font-black leading-tight sm:text-7xl">Share, discover, and organize visual work with FitLloyd</h2>
      <p className="mx-auto mt-7 max-w-3xl text-xl font-semibold leading-8 text-white/82">Browse image posts, collect ideas, and give creative work a memorable place to live.</p>
      <Link href="/image" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#7600e8] px-9 py-4 text-base font-black text-white">
        <Sparkles className="h-5 w-5 text-[#82ff63]" /> Explore image posts <ChevronRight className="h-5 w-5" />
      </Link>
    </section>
  )
}
