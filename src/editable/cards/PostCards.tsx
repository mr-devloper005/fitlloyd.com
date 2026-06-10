import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export const editableFallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23210b47'/%3E%3Cstop offset='.52' stop-color='%237600e8'/%3E%3Cstop offset='1' stop-color='%23f8efe4'/%3E%3C/linearGradient%3E%3Cpattern id='grid' width='90' height='90' patternUnits='userSpaceOnUse'%3E%3Cpath d='M90 0H0v90' fill='none' stroke='rgba(255,255,255,.18)' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23bg)'/%3E%3Crect width='1400' height='900' fill='url(%23grid)' opacity='.7'/%3E%3Ccircle cx='1090' cy='210' r='150' fill='%2382ff63' opacity='.32'/%3E%3Ccircle cx='245' cy='690' r='190' fill='%23ffffff' opacity='.18'/%3E%3Crect x='235' y='190' width='930' height='520' rx='34' fill='rgba(255,255,255,.16)' stroke='rgba(255,255,255,.45)' stroke-width='5'/%3E%3Cpath d='M335 590l190-210 165 145 115-125 255 190' fill='none' stroke='%23ffffff' stroke-width='34' stroke-linecap='round' stroke-linejoin='round' opacity='.92'/%3E%3Ccircle cx='875' cy='320' r='56' fill='%23ffffff' opacity='.92'/%3E%3Ctext x='700' y='790' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='54' font-weight='800' fill='%23ffffff'%3EFitLloyd visual collection%3C/text%3E%3C/svg%3E"

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((url): url is string => typeof url === 'string' && Boolean(url))
  const logo = typeof content.logo === 'string' ? content.logo : ''
  return mediaUrl || contentImage || logo || editableFallbackImage
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Featured'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured read' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className={`group block min-w-0 overflow-hidden ${dc.surface.dark} ${dc.motion.lift}`}>
      <div className="relative min-h-[520px] p-6 sm:p-8 lg:min-h-[620px]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,20,17,0.1),rgba(24,20,17,0.86))]" />
        <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-end lg:min-h-[560px]">
          <span className={`${dc.type.eyebrow} ${pal.accentSoftText}`}>{label}</span>
          <h3 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-6xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">{getEditableExcerpt(post, 190)}</p>
          <span className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold ${pal.panelText}`}>
            Read story <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden ${dc.surface.card} ${dc.motion.lift}`}>
      <div className={`${dc.media.frame} ${dc.media.ratio}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className={`absolute left-4 top-4 rounded-full ${pal.darkBg} px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white`}>No. {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="p-5">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{getEditableCategory(post)}</p>
        <h3 className={`mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] ${pal.panelText}`}>{post.title}</h3>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.softMutedText}`}>{getEditableExcerpt(post, 135)}</p>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group block min-w-0 ${dc.surface.soft} p-5 ${dc.motion.lift}`}>
      <div className="flex items-start gap-4">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${pal.darkBg} text-xs font-black text-white`}>{index + 1}</span>
        <div className="min-w-0">
          <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${pal.accentText}`}><Clock3 className="h-3.5 w-3.5" /> {getEditableCategory(post)}</p>
          <h3 className={`mt-2 line-clamp-2 text-xl font-black leading-tight tracking-[-0.04em] ${pal.panelText}`}>{post.title}</h3>
          <p className={`mt-2 line-clamp-2 text-sm leading-6 ${pal.softMutedText}`}>{getEditableExcerpt(post, 105)}</p>
        </div>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid min-w-0 gap-5 overflow-hidden ${dc.surface.card} p-4 ${dc.motion.lift} sm:grid-cols-[220px_minmax(0,1fr)]`}>
      <div className={`${dc.media.frame} aspect-[16/12] sm:aspect-auto sm:min-h-[190px]`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-2 sm:py-4 sm:pr-5">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Read {String(index + 1).padStart(2, '0')}</p>
        <h2 className={`mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] ${pal.panelText} sm:text-3xl`}>{post.title}</h2>
        <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.softMutedText}`}>{getEditableExcerpt(post, 180)}</p>
        <span className={`mt-5 inline-flex items-center gap-2 text-sm font-black ${pal.panelText}`}>Open article <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
