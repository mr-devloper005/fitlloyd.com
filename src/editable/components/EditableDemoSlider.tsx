import Link from 'next/link'
import type { SitePost } from '@/lib/site-connector'
import { getEditableCategory, getEditablePostImage } from '@/editable/cards/PostCards'

type EditableDemoSliderProps = {
  posts: SitePost[]
  getHref: (post: SitePost) => string
}

export function EditableDemoSlider({ posts, getHref }: EditableDemoSliderProps) {
  if (!posts.length) return null
  const sliderPosts = [...posts, ...posts, ...posts]

  return (
    <div
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden"
      style={{ marginTop: '34px' }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8efe4] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8efe4] to-transparent sm:w-28" />
      <div className="flex w-max uxora-marquee" style={{ gap: '18px', paddingInline: '18px' }}>
        {sliderPosts.map((post, index) => (
          <DemoSlideCard key={`${post.id || post.slug || post.title}-${index}`} post={post} href={getHref(post)} index={index} />
        ))}
      </div>
    </div>
  )
}

function DemoSlideCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[10px] bg-white shadow-[0_18px_38px_rgba(15,8,30,.16)] transition duration-300 hover:-translate-y-2"
      style={{ width: 'min(390px, 82vw)', padding: '10px' }}
    >
      <div className="relative overflow-hidden rounded-[6px] bg-[#eee8df]" style={{ aspectRatio: '16 / 9' }}>
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-[#080f0a] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
          {getEditableCategory(post)}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#070d0a]">
          Collection {String((index % 12) + 1).padStart(2, '0')}
        </div>
      </div>
      <h3 className="line-clamp-2 text-center font-black leading-tight text-[#070d0a]" style={{ marginTop: '12px', fontSize: '18px' }}>{post.title}</h3>
    </Link>
  )
}
