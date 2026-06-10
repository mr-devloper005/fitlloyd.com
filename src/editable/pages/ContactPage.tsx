'use client'

import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Creative directory updates', body: 'Add or refine studio, creator, and visual service listings with accurate details.' },
          { icon: Phone, title: 'Visual partnership support', body: 'Talk through collection features, image-led campaigns, and creator collaboration ideas.' },
          { icon: MapPin, title: 'Category coverage requests', body: 'Need a new creative category, location, or visual service lane? We can shape it around the audience.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Visual story submissions', body: 'Pitch image-supported essays, creator notes, and collection features that fit FitLloyd.' },
            { icon: Mail, title: 'Creative partnerships', body: 'Coordinate visual collaborations, collection sponsorships, and creator-focused campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with image context, formatting, and visual publishing workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Gallery submissions', body: 'Send image collections, portfolio ideas, or visual stories for review.' },
              { icon: Sparkles, title: 'Creator features', body: 'Suggest a creator profile, showcase page, or visual collaboration.' },
              { icon: Mail, title: 'Partnership questions', body: 'Ask about image usage, campaigns, sponsorships, or brand opportunities.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest visual resources, boards, and references that deserve a place in the FitLloyd library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, image reference pages, and creator resource collections.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing galleries, collections, or profile-connected visual boards?' },
            ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f8efe4] text-[#070d0a]">
        <section className="uxora-grid-bg px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1328px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#82ff63]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/76">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[14px] border border-white/15 bg-white/12 p-5 shadow-[0_18px_42px_rgba(0,0,0,.12)] backdrop-blur">
                  <lane.icon className="h-5 w-5 text-[#82ff63]" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/68">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-white/15 bg-white/12 p-7 shadow-[0_24px_70px_rgba(0,0,0,.25)] backdrop-blur">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
