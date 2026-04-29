import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'

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

const footerHeadingClassName = 'text-[1.45rem] font-semibold leading-none text-zinc-100 md:text-[1.55rem]'
const edgeDividerClassName = 'w-full border-t border-white/20'

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-[112rem] px-4 pb-6 font-sans md:mt-20 md:px-6">
      <div className="border-t border-white/25 bg-black/70 px-1 pt-10 pb-8 sm:px-3 md:px-8 md:pt-14 md:pb-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Image
              src="/images/logozodev-logo.png"
              alt="LogozoDev"
              width={1200}
              height={220}
              className="h-9 w-auto"
              priority={false}
            />
            <p className="mt-5 text-base leading-relaxed text-zinc-300">
              LogozoDev provides modern websites, POS systems, branding, and custom software for growing businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] text-zinc-400 transition-colors hover:border-white/30 hover:text-zinc-200"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title} className="pt-4">
                <h4 className={footerHeadingClassName}>{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label} className="text-base text-zinc-300">
                      <Link href={item.href} className="transition-colors hover:text-zinc-100">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-4">
              <h4 className={footerHeadingClassName}>Contact</h4>
              <ul className="mt-4 space-y-3.5">
                {contactItems.map((item) => (
                  <li key={item.label} className="text-base text-zinc-300">
                    {item.href ? (
                      <a href={item.href} className="group inline-flex items-start gap-2.5 transition-colors hover:text-zinc-100">
                        <item.icon className="mt-0.5 size-4.5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-200" />
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-start gap-2.5">
                        <item.icon className="mt-0.5 size-4.5 shrink-0 text-zinc-400" />
                        <span>{item.label}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden py-0 md:mt-16">
          <Image
            src="/images/footer%20image.png"
            alt="LogozoDev footer image"
            width={2200}
            height={420}
            className="mx-auto h-auto w-full max-w-[1240px] object-contain"
            priority={false}
          />
        </div>

        <div className="-mt-2">
          <div className={edgeDividerClassName} />
          <div className="pt-2 flex flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
            <p>© 2026 LogozoDev. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href="/terms-of-service" className="transition-colors hover:text-zinc-300">
                Terms of service
              </Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-zinc-300">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
