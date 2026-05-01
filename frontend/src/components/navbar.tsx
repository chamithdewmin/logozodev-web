import { useEffect, useState } from 'react'
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
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastY
      setHidden(scrollingDown && currentY > 100 && !mobileOpen)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'isolate z-50 w-full pt-7 transition-transform duration-300',
        shouldOverlay ? 'absolute inset-x-0 top-0' : 'sticky top-0',
        hidden ? '-translate-y-[130%]' : 'translate-y-0'
      )}
    >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border nav-shell px-4 py-3 backdrop-blur sm:px-6 sm:py-3.5">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="LogozoDev" width={1200} height={220} className="h-7 w-auto sm:h-8 md:h-9" />
          </Link>

          <nav className="hidden items-center gap-9 text-base text-zinc-400 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn('transition-colors hover:text-brand-muted', pathname === link.href ? 'text-brand-muted' : 'text-zinc-400')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact-us"
            className="btn-primary-site btn-primary-site-sm btn-primary-site-brand hidden md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-brand-frost text-zinc-200 transition hover:border-white/55 hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn('overflow-hidden transition-all duration-300 md:hidden', mobileOpen ? 'mt-3 max-h-[28rem] opacity-100' : 'max-h-0 opacity-0')}
        >
          <nav className="rounded-2xl border border-brand-subtle bg-black/80 p-3 backdrop-blur">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base transition-colors',
                  pathname === link.href ? 'bg-white/12 text-zinc-100' : 'text-zinc-300 hover:bg-white/8 hover:text-zinc-100'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="btn-primary-site btn-primary-site-sm btn-primary-site-brand mt-2 w-full"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
