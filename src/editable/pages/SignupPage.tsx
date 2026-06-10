import type { Metadata } from 'next'
import Link from 'next/link'
import { Image as ImageIcon, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="uxora-grid-bg text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1328px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-[18px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur sm:p-8">
            <h1 className="text-3xl font-black tracking-normal">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-white/65">Already have an account? <Link href="/login" className="font-black text-white underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#82ff63]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/72">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/12 p-5 backdrop-blur">
                <ImageIcon className="h-6 w-6 text-[#82ff63]" />
                <p className="mt-4 text-xl font-black">Publish galleries</p>
              </div>
              <div className="rounded-[14px] bg-white/12 p-5 backdrop-blur">
                <Sparkles className="h-6 w-6 text-[#82ff63]" />
                <p className="mt-4 text-xl font-black">Build creator identity</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
