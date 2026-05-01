import { HeroSection } from '@/components/hero'
import { HomeSections } from '@/components/home-sections'
import { CTASection } from '@/components/page-sections'
import { TrustedLogosSection } from '@/components/trusted-logos-section'

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <div className="mx-auto w-full max-w-[1580px]">
        <TrustedLogosSection />
        <HomeSections />
        <CTASection
          title="Need a fast turnaround?"
          description="Share your launch date and we can recommend a focused sprint model."
          primaryLabel="Book Intro Call"
          secondaryLabel="Download Brief Template"
        />
      </div>
    </div>
  )
}
