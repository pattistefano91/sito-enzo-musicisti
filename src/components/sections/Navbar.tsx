'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/data/navigation'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-surface-page)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo EB */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logo-eb.png"
                alt="Enzo Boscarino logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="text-[1.1rem] text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                ENZO <span className="text-[var(--color-primary)]">BOSCARINO</span>
              </span>
              <span className="text-[0.6rem] text-[var(--color-text-muted)] tracking-widest uppercase">
                Batterista
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.72rem] font-medium tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-elevated)] transition-colors"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={cn('block h-0.5 w-5 bg-[var(--color-text-primary)] transition-all duration-300', menuOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-5 bg-[var(--color-text-primary)] transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-[var(--color-text-primary)] transition-all duration-300', menuOpen && '-translate-y-2 -rotate-45')} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn('lg:hidden overflow-hidden transition-all duration-300', menuOpen ? 'max-h-96 pb-4' : 'max-h-0')}>
          <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-2 py-2.5 text-[0.75rem] font-medium tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors rounded-[var(--radius-md)] hover:bg-[var(--color-surface-elevated)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
