import { Gem, MessagesSquare, Target, Users, Eye, Rocket } from 'lucide-react'
import { FadeUp, SlideInX, StaggerItem, StaggerParent } from '@/components/motion/reveal'
import { CTASection, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import mountImage from '@/assets/mount.png'

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="About Us"
          title={
            <>
              About <span className="text-[var(--brand)]">LogozoDev</span>
            </>
          }
          showSpotlight={false}
          showDarkVeil
        />

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Core Values"
            title="Practical. Personal. Purpose-built."
            description="Our approach is shaped by real business needs and focused on delivering solutions that are affordable, reliable, and built for growth."
          />
          <StaggerParent className="grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <article className="h-full rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <Gem className="size-5 text-[var(--brand)]" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-100">Personalized Service</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">
                  Every project is planned around your business goals, current challenges, and budget, not a one-size-fits-all checklist.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <MessagesSquare className="size-5 text-[var(--brand)]" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-100">One-to-One Communication</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">
                  You work directly with us throughout the project cycle, so feedback is clear, fast, and aligned to your priorities.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <Users className="size-5 text-[var(--brand)]" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-100">Small-Business Focus</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">
                  We specialize in helping small businesses move confidently into digital operations with practical tools that scale.
                </p>
              </article>
            </StaggerItem>
          </StaggerParent>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <div className="rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-8 md:p-10">
            <FadeUp>
              <h3 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">Our Story, Mission and Vision</h3>
            </FadeUp>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_1.95fr]">
              <SlideInX direction="left" className="relative overflow-hidden rounded-2xl bg-black/30">
                <img src={mountImage} alt="Mountain illustration representing growth journey" className="h-full min-h-[280px] w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden />
              </SlideInX>

              <StaggerParent className="grid gap-4 md:grid-cols-2 md:gap-0">
                <StaggerItem>
                  <article className="h-full rounded-2xl border border-brand-medium bg-black/20 p-5 md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:border-brand-medium md:bg-transparent md:px-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                      <Target className="size-5 text-[var(--brand)]" />
                    </div>
                    <h4 className="mt-4 text-2xl font-semibold text-zinc-100">Mission</h4>
                    <p className="mt-3 text-base leading-relaxed text-zinc-300">
                      To provide smart, affordable, and high-quality digital solutions that help businesses work better, grow faster, and achieve more.
                    </p>
                  </article>
                </StaggerItem>

                <StaggerItem>
                  <article className="h-full rounded-2xl border border-brand-medium bg-black/20 p-5 md:rounded-none md:border-y-0 md:border-l-0 md:border-r-0 md:bg-transparent md:px-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                      <Eye className="size-5 text-[var(--brand)]" />
                    </div>
                    <h4 className="mt-4 text-2xl font-semibold text-zinc-100">Vision</h4>
                    <p className="mt-3 text-base leading-relaxed text-zinc-300">
                      To become a trusted IT partner for businesses locally and globally, known for our reliability, innovation, and client success.
                    </p>
                  </article>
                </StaggerItem>

                <StaggerItem className="md:col-span-2">
                  <article className="h-full rounded-2xl border border-brand-medium bg-black/20 p-5 md:rounded-none md:border-x-0 md:border-b-0 md:border-t md:border-brand-medium md:bg-transparent md:px-6 md:pt-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                      <Rocket className="size-5 text-[var(--brand)]" />
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold text-zinc-100">Our Story</h4>
                    <p className="mt-3 text-base leading-relaxed text-zinc-300">
                      Started in 2025 as a graphic design service, LogozoDev quickly evolved into a full IT solutions provider built from the ground up with a results-first mindset.
                    </p>
                  </article>
                </StaggerItem>
              </StaggerParent>
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
