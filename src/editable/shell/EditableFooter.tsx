'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#210b47', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="uxora-grid-bg px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1328px] gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-[0_14px_34px_rgba(0,0,0,.2)]">
              <img src="/favicon.png?v=20260413" alt="FitLloyd logo" className="h-full w-full scale-125 object-contain" />
            </span>
            <span className="text-3xl font-black tracking-normal">FitLloyd</span>
          </Link>
          <p className="mt-6 max-w-xl text-xl font-bold leading-8 opacity-90">Explore image posts, curated visual collections, creative references, and showcase-ready pages built for discovery.</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#180735] px-4 py-5 text-center text-xs font-bold text-white/60">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
