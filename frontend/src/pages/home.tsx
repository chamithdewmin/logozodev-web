import { HeroSection } from '@/components/hero'
import { HomeSections } from '@/components/home-sections'
import { TrustedLogosSection } from '@/components/trusted-logos-section'

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <div className="mx-auto w-full max-w-[1480px]">
        <TrustedLogosSection />
        <HomeSections />
      </div>
    </div>
  )
}
