import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-4 pt-24 sm:px-6 md:px-10 md:pt-28">
      <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="white" />
      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full flex-col md:flex-row">
        <div className="flex flex-[1.1] flex-col justify-center py-4 md:p-14">
            <p className={`${sectionLabelChipClassName} mb-5`}>
              Spline 3D Integration
            </p>
            <h1 className="max-w-2xl text-[1.75rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
              <span className="block whitespace-nowrap">Smart IT Solutions</span>
              <span className="block whitespace-nowrap">for Growing</span>
              <span className="block whitespace-nowrap">Businesses</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              We create modern websites, powerful POS systems, and tailored digital solutions that help businesses
              enhance their operations, strengthen their brand presence, and grow faster with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <button className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black">
                Start Building
                <MoveRight className="size-4" />
              </button>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-zinc-200"
              >
                View Services
              </Link>
            </div>
        </div>
        <div className="relative mt-6 min-h-[280px] flex-[0.9] sm:min-h-[320px] md:mt-0 md:min-h-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
