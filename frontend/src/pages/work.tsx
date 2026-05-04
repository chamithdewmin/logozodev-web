import { useMemo, useState } from 'react'
import { FadeUp, StaggerItem, StaggerParent } from '@/components/motion/reveal'
import { CTASection, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { WorkProjectCard } from '@/components/work-project-card'
import { WorkProjectModal } from '@/components/work-project-modal'
import { parseDisplayStat } from '@/lib/parse-display-stat'
import { cn } from '@/lib/utils'
import type { WorkProject } from '@/types/work-project'
import { Clock3, Rocket, Smile, TrendingUp } from 'lucide-react'

const projects: WorkProject[] = [
  {
    slug: 'retail-pos-system',
    projectName: 'Retail POS System',
    shortTagline: 'Billing, inventory, and checkout in one flow',
    clientType: 'Local Shop',
    serviceType: 'POS System',
    serviceChips: ['POS', 'Inventory', 'Billing', 'Reporting'],
    coverImageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A local retail shop needed a dependable point-of-sale setup that matched how staff actually work at the counter—fast scans, simple discounts, and stock that stays honest at the end of the day.',
    challenge:
      'Checkout was slow during peak hours, and stock counts rarely matched what was on the shelf. Managers spent extra time reconciling sales in spreadsheets instead of serving customers.',
    approach:
      'We mapped the shop’s daily flow, simplified the billing screen for common actions, and wired inventory updates into each sale so counts move with every transaction. Training was kept short with clear on-screen cues.',
    outcome:
      'The team now trusts daily numbers without a second spreadsheet. Checkout steps are fewer, and low-stock items surface before they run out.',
    result: 'Improved sales tracking and reduced billing time with faster checkout and better stock visibility.',
    resultMetric: 'Faster checkout, clearer stock visibility, less end-of-day reconciliation.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
        caption: 'Before: manual tracking and slower counter flow',
      },
      {
        src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1000&q=80',
        caption: 'After: streamlined POS and clearer operations',
      },
      {
        src: 'https://images.unsplash.com/photo-1556740752-90de374c12ad?auto=format&fit=crop&w=1000&q=80',
        caption: 'Retail floor: faster service during peak traffic',
      },
    ],
  },
  {
    slug: 'restaurant-brand-website',
    projectName: 'Restaurant Brand Website',
    shortTagline: 'Menu-first web presence with strong brand feel',
    clientType: 'Restaurant',
    serviceType: 'Website + Branding',
    serviceChips: ['Website', 'Branding', 'Menu', 'Mobile'],
    coverImageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A neighborhood restaurant wanted a site that feels as warm as the dining room—easy to browse on a phone, clear hours and location, and a menu people actually read before they visit.',
    challenge:
      'The old site was hard to update, looked dated on mobile, and did not reflect the brand the owners had built in the room itself. Online inquiries were inconsistent.',
    approach:
      'We rebuilt the information architecture around menu and visits, tightened typography and color to match the brand, and set up a content pattern the team can update without developer help.',
    outcome:
      'Guests find hours, specials, and the menu faster. The brand reads consistently from street sign to homepage, and the team can refresh seasonal items with confidence.',
    result: 'Delivered a modern mobile-friendly site that increased online inquiries and menu engagement.',
    resultMetric: 'Stronger mobile experience and higher menu engagement.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=80',
        caption: 'Before: cluttered layout and weak mobile hierarchy',
      },
      {
        src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
        caption: 'After: clear menu-led layout and brand-forward visuals',
      },
      {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
        caption: 'Dining experience aligned with the digital first impression',
      },
    ],
  },
  {
    slug: 'startup-business-dashboard',
    projectName: 'Startup Business Dashboard',
    shortTagline: 'One hub for daily ops and team visibility',
    clientType: 'Startup',
    serviceType: 'Custom Software',
    serviceChips: ['Dashboard', 'Automation', 'Analytics', 'Workflow'],
    coverImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    overview:
      'An early-stage team was juggling tasks across tools and chat threads. They needed a single dashboard that surfaces the metrics and workflows that matter each morning.',
    challenge:
      'Routine work lived in too many places, so status meetings repeated the same questions. Leadership lacked a simple snapshot of pipeline health and operational load.',
    approach:
      'We prioritized the top five daily signals, automated repetitive updates where possible, and designed screens around decisions—not raw data dumps. Iteration stayed tight with weekly feedback.',
    outcome:
      'The team spends less time hunting for numbers and more time acting on them. Onboarding new hires is faster because the “source of truth” is obvious.',
    result: 'Automated routine workflows and gave the team one place to monitor daily operations.',
    resultMetric: 'One daily hub for operations and clearer ownership.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        caption: 'Analytics and KPIs in a focused executive view',
      },
      {
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Workflow visibility across the team',
      },
      {
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
        caption: 'Planning and ops aligned in one workspace',
      },
    ],
  },
]

const testimonials = [
  { quote: 'LogozoDev helped us build our website quickly and professionally.', author: 'Owner, Local Restaurant' },
  { quote: 'Our billing process became much faster after the new POS setup from LogozoDev.', author: 'Manager, Retail Shop' },
  { quote: 'They understood our needs and delivered custom software that actually fits our workflow.', author: 'Founder, Startup Team' },
]

const workStats = [
  { icon: Rocket, value: '50+', label: 'Projects Delivered' },
  { icon: Smile, value: '35+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock3, value: '5+', label: 'Years of Excellence' },
]

type WorkFilterKey = 'all' | 'web' | 'software' | 'pos' | 'dashboard'

const workFilters: { key: WorkFilterKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'software', label: 'Software Solutions' },
  { key: 'pos', label: 'POS Systems' },
  { key: 'dashboard', label: 'Dashboards' },
]

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null)
  const [activeFilter, setActiveFilter] = useState<WorkFilterKey>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }

    return projects.filter((project) => {
      const serviceType = project.serviceType.toLowerCase()
      const chips = project.serviceChips.map((chip) => chip.toLowerCase())

      if (activeFilter === 'web') {
        return serviceType.includes('website') || chips.includes('website')
      }
      if (activeFilter === 'software') {
        return serviceType.includes('software')
      }
      if (activeFilter === 'pos') {
        return serviceType.includes('pos') || chips.includes('pos')
      }

      return chips.includes('dashboard')
    })
  }, [activeFilter])

  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Work"
          title={
            <>
              Projects that deliver <span className="text-[var(--brand)]">results.</span>
            </>
          }
          showSpotlight={false}
          showDarkVeil
        />
        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Project Showcase" title="Real projects. Real business impact." description="Each project highlights who the client was, what service we delivered, and what result the business achieved." />
          <div className="mb-6 overflow-x-auto sm:mb-7">
            <div className="mx-auto flex min-w-max items-center justify-center gap-1.5">
              {workFilters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5',
                    activeFilter === filter.key
                      ? 'border border-[color-mix(in_srgb,var(--brand)_52%,transparent)] bg-[color-mix(in_srgb,var(--brand)_16%,transparent)] text-[var(--brand)]'
                      : 'border border-transparent text-zinc-300 hover:text-zinc-100',
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <StaggerParent className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <WorkProjectCard project={project} onOpen={() => setActiveProject(project)} />
              </StaggerItem>
            ))}
          </StaggerParent>
        </section>

        <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 md:mt-12">
          <FadeUp>
            <div className="grid gap-2 rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-3 sm:grid-cols-2 sm:gap-3 sm:p-4 lg:grid-cols-4">
              {workStats.map((stat) => {
                const parsed = parseDisplayStat(stat.value)
                return (
                  <article key={stat.label} className="flex items-center gap-3 rounded-2xl p-3 sm:p-4 lg:rounded-none lg:p-4 lg:not-last:border-r lg:not-last:border-brand-medium">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand-medium bg-brand-frost">
                      <stat.icon className="size-5 text-[var(--brand)]" aria-hidden />
                    </div>
                    <div>
                      <p className="text-3xl font-semibold leading-none text-[var(--brand)] tabular-nums">
                        {parsed ? <AnimatedCounter value={parsed.value} suffix={parsed.suffix} durationMs={900} /> : stat.value}
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">{stat.label}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </FadeUp>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Client Testimonials"
            title={
              <>
                What clients say about <span className="text-[var(--brand)]">LogozoDev</span>
              </>
            }
            description="Strong delivery and practical communication are why clients trust us with critical business projects."
          />
          <TestimonialsCarousel items={testimonials} />
        </section>

        <CTASection
          title="Ready to showcase your business transformation next?"
          description="Talk to LogozoDev about your next website, POS, branding, or software project and get a practical execution plan."
          primaryLabel="Discuss Your Project"
          secondaryLabel="Contact Us"
          secondaryHref="/contact-us"
        />
      </PageContainer>

      <WorkProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
