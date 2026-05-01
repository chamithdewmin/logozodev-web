import { Headphones, MoveRight, ShieldCheck, Trophy, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function HeroSection() {
  const heroWords = ['Smart', 'IT', 'Solutions']
  const heroStats = [
    { icon: ShieldCheck, value: '5+', label: 'Years Experience' },
    { icon: Trophy, value: '100+', label: 'Happy Clients' },
    { icon: Users, value: '20+', label: 'Industries Served' },
    { icon: Headphones, value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="relative w-full overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24 md:min-h-screen md:px-10 md:pt-28 md:pb-36">
      <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="#5DD62C" />
      <div className="relative z-10 flex w-full flex-col items-center md:min-h-[calc(100vh-7rem)] md:flex-row md:items-stretch">
        <div className="mt-8 flex w-full flex-[1.1] flex-col items-center justify-center gap-5 py-6 text-center sm:mt-10 sm:gap-6 sm:py-8 md:mt-0 md:items-start md:gap-5 md:p-14 md:py-4 md:text-left">
          <p className={`${sectionLabelChipClassName} animate-hero-enter`}>Spline 3D Integration</p>
          <h1 className="animate-hero-enter animate-hero-heading max-w-[20rem] text-[1.95rem] font-semibold leading-[1.04] tracking-tight text-white sm:max-w-[30rem] sm:text-4xl md:max-w-2xl md:text-6xl lg:text-7xl">
            <span className="block whitespace-nowrap">
              {heroWords.map((word, idx) => (
                <span key={word} className="animate-word-reveal mr-3 inline-block whitespace-nowrap" style={{ animationDelay: `${220 + idx * 90}ms` }}>
                  {word}
                </span>
              ))}
            </span>
            <span className="block whitespace-nowrap">
              <span className="animate-word-reveal mr-2 inline-block whitespace-nowrap" style={{ animationDelay: `${220 + 3 * 90}ms` }}>
                for
              </span>
              <span className="animate-word-reveal inline-block whitespace-nowrap text-[#5DD62C]" style={{ animationDelay: `${220 + 4 * 90}ms` }}>
                Growing
              </span>
            </span>
            <span className="block whitespace-nowrap">
              <span className="animate-word-reveal inline-block whitespace-nowrap" style={{ animationDelay: `${220 + 5 * 90}ms` }}>
                Businesses
              </span>
            </span>
          </h1>
          <p className="animate-hero-enter animate-hero-subtext max-w-[34ch] text-base leading-relaxed text-zinc-400 sm:max-w-2xl sm:text-lg">
            We create modern websites, powerful POS systems, and tailored digital solutions that help businesses
            enhance their operations, strengthen their brand presence, and grow faster with confidence.
          </p>
          <div className="animate-hero-enter animate-hero-cta mt-1 flex w-full flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center md:mt-2 md:justify-start">
            <MagneticButton>
              <Link to="/contact-us" className="btn-primary-site inline-flex min-h-11 items-center gap-2">
                Start Building
                <MoveRight className="size-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/work"
                className="btn-secondary-site inline-flex min-h-11 items-center"
              >
                View our Work
              </Link>
            </MagneticButton>
          </div>
        </div>
        <div className="relative mt-6 hidden min-h-[280px] flex-[0.9] sm:min-h-[320px] md:mt-0 md:block md:min-h-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-24 z-20 hidden px-4 md:block md:px-40 lg:bottom-48">
        <div className="ml-auto grid w-full max-w-6xl gap-1 rounded-full border border-white/15 bg-black/55 p-3 backdrop-blur-md lg:grid-cols-4">
          {heroStats.map((item) => (
            <article key={item.label} className="flex items-center gap-3 rounded-2xl p-3">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-frost">
                <item.icon className="size-7 text-[var(--brand)]" aria-hidden />
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none text-zinc-100">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-300">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
