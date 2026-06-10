import type { Metadata } from 'next'
import Link from 'next/link'
import { Image as ImageIcon, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="uxora-grid-bg text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1328px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#82ff63]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/72">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/12 p-5 backdrop-blur">
                <ImageIcon className="h-6 w-6 text-[#82ff63]" />
                <p className="mt-4 text-xl font-black">Save visual boards</p>
              </div>
              <div className="rounded-[14px] bg-white/12 p-5 backdrop-blur">
                <Sparkles className="h-6 w-6 text-[#82ff63]" />
                <p className="mt-4 text-xl font-black">Share image posts</p>
              </div>
            </div>
          </div>
          <div className="rounded-[18px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur sm:p-8">
            <h2 className="text-2xl font-black tracking-normal">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-white/70">New here? <Link href="/signup" className="font-black text-white underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
