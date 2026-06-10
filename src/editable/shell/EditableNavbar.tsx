'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X, PlusCircle, LogIn } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#210b47', '--editable-nav-text': '#ffffff', '--editable-nav-active': '#ffffff', '--editable-nav-active-text': '#210b47', '--editable-cta-bg': '#7600e8', '--editable-cta-text': '#ffffff', '--editable-search-bg': 'rgba(255,255,255,.08)', '--editable-border': 'rgba(255,255,255,.12)', '--editable-container': '1328px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
      <nav className="mx-auto flex min-h-[88px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-[0_10px_26px_rgba(0,0,0,.18)] transition-transform group-hover:scale-105">
            <img src="/favicon.png?v=20260413" alt="FitLloyd logo" className="h-full w-full scale-125 object-contain" />
          </span>
          <span className="block max-w-[210px] truncate text-3xl font-black tracking-normal">FitLloyd</span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center xl:flex">
          <label className="relative flex w-full max-w-sm items-center rounded-full border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-2.5">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder={'Search images'} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {[{ label: 'Home', href: '/' }, { label: 'Images', href: '/image' }, { label: 'Collections', href: '/search' }, { label: 'Contact', href: '/contact' }].map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-base font-black transition ${active ? 'bg-white/10 text-white' : 'hover:bg-white/10'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-8 py-4 text-sm font-black text-[var(--editable-cta-text)] shadow-[0_18px_42px_rgba(118,0,232,.28)] sm:inline-flex">Sign Up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white/10 p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search images" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white/10 px-4 py-3 text-sm font-black text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
