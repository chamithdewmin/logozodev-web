import { Gem, Gauge, Lock, MessagesSquare, Rocket, Users } from 'lucide-react'
import { CTASection, InfoCard, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero eyebrow="About Us" title="About LogozoDev" showSpotlight={false} showDarkVeil />

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Core Values"
            title="Practical. Personal. Purpose-built."
            description="Our approach is shaped by real business needs and focused on delivering solutions that are affordable, reliable, and built for growth."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Personalized Service"
              description="Every project is planned around your business goals, current challenges, and budget, not a one-size-fits-all checklist."
            >
              <Gem className="mb-5 size-5 text-brand-muted" />
            </InfoCard>
            <InfoCard
              title="One-to-One Communication"
              description="You work directly with us throughout the project cycle, so feedback is clear, fast, and aligned to your priorities."
            >
              <MessagesSquare className="mb-5 size-5 text-brand-muted" />
            </InfoCard>
            <InfoCard
              title="Small-Business Focus"
              description="We specialize in helping small businesses move confidently into digital operations with practical tools that scale."
            >
              <Users className="mb-5 size-5 text-brand-muted" />
            </InfoCard>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <div className="rounded-3xl border panel-glass p-6 sm:p-8 md:p-10">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Our Story, Mission, and Vision</h3>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <InfoCard
                title="Our Story"
                description="Started in 2025 as a graphic design service, LogozoDev quickly evolved into a full IT solutions provider built from the ground up with a results-first mindset."
              >
                <Rocket className="mb-5 size-5 text-brand-muted" />
              </InfoCard>
              <InfoCard title="Mission" description="To provide smart, affordable, and high-quality digital solutions for businesses.">
                <Gauge className="mb-5 size-5 text-brand-muted" />
              </InfoCard>
              <InfoCard title="Vision" description="To become a trusted IT partner for businesses locally and globally.">
                <Lock className="mb-5 size-5 text-brand-muted" />
              </InfoCard>
            </div>
          </div>
        </section>

        <CTASection
          title="Let LogozoDev power your digital growth."
          description="Tell us what you need, from websites and POS systems to branding and custom software, and we will shape the right solution for your business."
          primaryLabel="Contact LogozoDev"
          secondaryLabel="Explore Our Services"
          secondaryHref="/services"
        />
      </PageContainer>
    </div>
  )
}
