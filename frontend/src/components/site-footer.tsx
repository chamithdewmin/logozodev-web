import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import logoImage from '@/assets/logozodev-web-logo.png'
import footerImage from '@/assets/footer image.png'

const footerColumns = [
  {
    title: 'Services',
    items: [
      { label: 'Website Development', href: '/services' },
      { label: 'POS Systems', href: '/services' },
      { label: 'Branding & Design', href: '/services' },
      { label: 'Custom Software', href: '/services' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Email Us', href: 'mailto:hello@logozodev.com' },
      { label: 'Call Us', href: 'tel:+94741525537' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Work', href: '/work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
]

const socials = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const contactItems = [
  { icon: Phone, label: '+94 74 152 5537', href: 'tel:+94741525537' },
  { icon: Mail, label: 'hello@logozodev.com', href: 'mailto:hello@logozodev.com' },
  { icon: MapPin, label: 'Tissamaharama, Sri Lanka' },
]

const footerHeadingClassName = 'text-[0.95rem] font-semibold leading-none text-zinc-100 md:text-[1rem]'
const edgeDividerClassName = 'w-full border-t border-white/18'

const InternalOrExternalLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) =>
  href.startsWith('/') ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )

export function SiteFooter() {
  return (
    <footer className="mt-12 w-full border-y border-white/18 bg-black font-sans md:mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 pb-5 md:px-5">
        <div className="px-1 pt-10 pb-7 sm:px-2 md:px-4 md:pt-12 md:pb-9">
          <div className="grid gap-8 md:grid-cols-[1.1fr_2fr]">
            <div className="max-w-sm">
              <img src={logoImage} alt="LogozoDev" width={1200} height={220} className="h-8 w-auto" />
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                LogozoDev provides modern websites, POS systems, branding, and custom software for growing businesses.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-8 items-center justify-center rounded-lg border border-white/17 bg-brand-frost text-zinc-400 transition-colors hover:border-white/28 hover:text-brand-muted"
                  >
                    <social.icon className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((col) => (
                <div key={col.title} className="pt-3">
                  <h4 className={footerHeadingClassName}>{col.title}</h4>
                  <ul className="mt-3.5 space-y-2">
                    {col.items.map((item) => (
                      <li key={item.label} className="text-sm text-zinc-300">
                        <InternalOrExternalLink href={item.href} className="transition-colors hover:text-brand-muted">
                          {item.label}
                        </InternalOrExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-3">
                <h4 className={footerHeadingClassName}>Contact</h4>
                <ul className="mt-3.5 space-y-2.5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="text-sm text-zinc-300">
                      {item.href ? (
                        <a href={item.href} className="group inline-flex items-start gap-2 transition-colors hover:text-brand-muted">
                          <item.icon className="mt-0.5 size-4 shrink-0 text-brand-muted/80 transition-colors group-hover:text-brand-muted" />
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-start gap-2">
                          <item.icon className="mt-0.5 size-4 shrink-0 text-brand-muted/80" />
                          <span>{item.label}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-7 overflow-hidden py-0 [content-visibility:auto] [contain-intrinsic-size:1px_420px] md:mt-12">
            <img
              src={footerImage}
              alt="LogozoDev footer image"
              width={2200}
              height={420}
              className="mx-auto h-auto w-full max-w-[1080px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="-mt-2">
            <div className={edgeDividerClassName} />
            <div className="mt-2.5 px-2.5 py-2 sm:px-3.5">
              <div className="flex flex-col justify-between gap-2.5 text-[0.8rem] text-zinc-500 sm:flex-row">
                <p>© 2026 LogozoDev. All rights reserved.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/terms-of-service" className="transition-colors hover:text-brand-muted">
                    Terms of service
                  </Link>
                  <Link to="/privacy-policy" className="transition-colors hover:text-brand-muted">
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
