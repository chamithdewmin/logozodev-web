import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoImage from '@/assets/logozodev-web-logo.png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact-us' },
]

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const location = useLocation()
  const pathname = location.pathname
  const shouldOverlay = overlay || pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('isolate z-50 w-full pt-7', shouldOverlay ? 'absolute inset-x-0 top-0' : 'relative')}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur sm:px-6 sm:py-3.5">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="LogozoDev" width={1200} height={220} className="h-7 w-auto sm:h-8 md:h-9" />
          </Link>

          <nav className="hidden items-center gap-9 text-base text-zinc-400 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn('transition-colors hover:text-zinc-200', pathname === link.href ? 'text-zinc-100' : 'text-zinc-400')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact-us"
            className="hidden rounded-full bg-white px-5 py-2.5 text-base font-medium text-black transition hover:bg-zinc-200 sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-zinc-200 transition hover:bg-white/[0.08] md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn('overflow-hidden transition-all duration-300 md:hidden', mobileOpen ? 'mt-3 max-h-[28rem] opacity-100' : 'max-h-0 opacity-0')}
        >
          <nav className="rounded-2xl border border-white/10 bg-black/80 p-3 backdrop-blur">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base transition-colors',
                  pathname === link.href ? 'bg-white/10 text-zinc-100' : 'text-zinc-300 hover:bg-white/5 hover:text-zinc-100'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-base font-medium text-black transition hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
