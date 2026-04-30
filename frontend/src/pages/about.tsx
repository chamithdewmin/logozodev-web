import { Gem, Gauge, Layers, Lock, MessagesSquare, Rocket, Users } from 'lucide-react'
import { CTASection, InfoCard, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="About Us"
          title="About LogozoDev"
          description="LogozoDev is a modern IT solutions company helping small and growing businesses succeed in the digital world through websites, POS systems, branding, and custom software tailored to each client."
          showSpotlight={false}
          showDarkVeil
        />

        <section className="mx-auto mt-24 w-full max-w-6xl px-6">
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
              <Gem className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
            <InfoCard
              title="One-to-One Communication"
              description="You work directly with us throughout the project cycle, so feedback is clear, fast, and aligned to your priorities."
            >
              <MessagesSquare className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
            <InfoCard
              title="Small-Business Focus"
              description="We specialize in helping small businesses move confidently into digital operations with practical tools that scale."
            >
              <Users className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-12">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Our Story, Mission, and Vision</h3>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <InfoCard
                title="Our Story"
                description="Started in 2025 as a graphic design service, LogozoDev quickly evolved into a full IT solutions provider built from the ground up with a results-first mindset."
              >
                <Rocket className="mb-5 size-5 text-zinc-300" />
              </InfoCard>
              <InfoCard title="Mission" description="To provide smart, affordable, and high-quality digital solutions for businesses.">
                <Gauge className="mb-5 size-5 text-zinc-300" />
              </InfoCard>
              <InfoCard title="Vision" description="To become a trusted IT partner for businesses locally and globally.">
                <Lock className="mb-5 size-5 text-zinc-300" />
              </InfoCard>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <SectionHeading
            badge="What Makes Us Different"
            title="Not templates. Real solutions."
            description="We deliver custom solutions with direct collaboration, helping businesses adopt technology in a way that is practical and sustainable."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Personalized service" description="Each engagement is tailored to your exact business model, workflows, and goals.">
              <Gem className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
            <InfoCard title="One-to-one communication" description="Direct communication ensures quick responses, fewer misunderstandings, and smoother delivery.">
              <MessagesSquare className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
            <InfoCard title="Custom solutions, not templates" description="We build systems and experiences around your needs instead of forcing your business into generic templates.">
              <Layers className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
            <InfoCard title="Focused on small businesses" description="Our process is intentionally designed to be budget-aware and growth-friendly for small teams.">
              <Users className="mb-5 size-5 text-zinc-300" />
            </InfoCard>
          </div>
        </section>

        <CTASection
          title="Let LogozoDev power your digital growth."
          description="Tell us what you need, from websites and POS systems to branding and custom software, and we will shape the right solution for your business."
          primaryLabel="Contact LogozoDev"
          secondaryLabel="Explore Our Services"
        />
      </PageContainer>
    </div>
  )
}
