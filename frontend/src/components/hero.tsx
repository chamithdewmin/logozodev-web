import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function HeroSection() {
  const heroWords = ['Smart', 'IT', 'Solutions']

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 pt-24 sm:px-6 md:px-10 md:pt-28 animate-page-fade-in">
      <div className="pointer-events-none absolute inset-0 animate-hero-clip-main bg-transparent" />
      <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="white" />
      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full flex-col md:flex-row">
        <div className="flex flex-[1.1] flex-col justify-center py-4 md:p-14">
          <p className={`${sectionLabelChipClassName} animate-hero-enter mb-5`}>Spline 3D Integration</p>
          <h1 className="animate-hero-enter animate-hero-heading max-w-2xl text-[1.75rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block whitespace-nowrap">
              {heroWords.map((word, idx) => (
                <span key={word} className="animate-word-reveal mr-3 inline-block whitespace-nowrap" style={{ animationDelay: `${220 + idx * 90}ms` }}>
                  {word}
                </span>
              ))}
            </span>
            <span className="text-gradient-shimmer block whitespace-nowrap">for Growing</span>
            <span className="block whitespace-nowrap">Businesses</span>
          </h1>
          <p className="animate-hero-enter animate-hero-subtext mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            We create modern websites, powerful POS systems, and tailored digital solutions that help businesses
            enhance their operations, strengthen their brand presence, and grow faster with confidence.
          </p>
          <div className="animate-hero-enter animate-hero-cta mt-8 flex flex-wrap gap-3.5">
            <MagneticButton>
              <Link to="/contact-us" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black">
                Start Building
                <MoveRight className="size-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/work"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-zinc-200"
              >
                View our Work
              </Link>
            </MagneticButton>
          </div>
        </div>
        <div className="relative mt-6 min-h-[280px] flex-[0.9] sm:min-h-[320px] md:mt-0 md:min-h-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
