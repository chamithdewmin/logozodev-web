import Image from 'next/image'
import { BriefcaseBusiness, MessageSquareQuote } from 'lucide-react'
import { CTASection, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'

// Replace image URLs below with your real uploaded project image URLs later.
const projects = [
  {
    projectName: 'Retail POS System',
    clientType: 'Local Shop',
    serviceType: 'POS System',
    coverImageUrl:
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80',
    result: 'Improved sales tracking and reduced billing time with faster checkout and better stock visibility.',
    beforeImageUrl:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    afterImageUrl:
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    projectName: 'Restaurant Brand Website',
    clientType: 'Restaurant',
    serviceType: 'Website + Branding',
    coverImageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    result: 'Delivered a modern mobile-friendly site that increased online inquiries and menu engagement.',
    beforeImageUrl:
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=80',
    afterImageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    projectName: 'Startup Business Dashboard',
    clientType: 'Startup',
    serviceType: 'Custom Software',
    coverImageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    result: 'Automated routine workflows and gave the team one place to monitor daily operations.',
    beforeImageUrl: '',
    afterImageUrl: '',
  },
]

const testimonials = [
  {
    quote: 'LogozoDev helped us build our website quickly and professionally.',
    author: 'Owner, Local Restaurant',
  },
  {
    quote: 'Our billing process became much faster after the new POS setup from LogozoDev.',
    author: 'Manager, Retail Shop',
  },
  {
    quote: 'They understood our needs and delivered custom software that actually fits our workflow.',
    author: 'Founder, Startup Team',
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageContainer>
        <PageHero
          eyebrow="Work"
          title="Project Showcase built for client trust."
          description="Explore real LogozoDev work across websites, POS systems, branding, and software solutions with clear business outcomes."
        />

        <section className="mx-auto mt-24 w-full max-w-6xl px-6">
          <SectionHeading
            badge="Project Showcase"
            title="Real projects. Real business impact."
            description="Each project highlights who the client was, what service we delivered, and what result the business achieved."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.projectName}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01]"
              >
                <Image
                  src={project.coverImageUrl}
                  alt={project.projectName}
                  width={1200}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-zinc-100">{project.projectName}</h3>
                  <p className="mt-3 text-base text-zinc-400">
                    <span className="font-medium text-zinc-300">Client:</span> {project.clientType}
                  </p>
                  <p className="mt-1 text-base text-zinc-400">
                    <span className="font-medium text-zinc-300">Service:</span> {project.serviceType}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-zinc-500">
                    <span className="font-medium text-zinc-300">Result:</span> {project.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <SectionHeading
            badge="Before / After"
            title="Old system vs new system"
            description="Where available, compare past workflows with upgraded LogozoDev implementations."
          />
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={`${project.projectName}-before-after`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="mb-5 flex items-center gap-2 text-zinc-100">
                  <BriefcaseBusiness className="size-4.5 text-zinc-300" />
                  <h3 className="text-xl font-semibold">{project.projectName}</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <p className="mb-3 text-sm uppercase tracking-wide text-zinc-400">Old System</p>
                    {project.beforeImageUrl ? (
                      <Image
                        src={project.beforeImageUrl}
                        alt={`${project.projectName} old system`}
                        width={1000}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-44 w-full rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-44 items-center justify-center rounded-lg border border-dashed border-white/15 text-base text-zinc-500">
                        Before image coming soon
                      </div>
                    )}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <p className="mb-3 text-sm uppercase tracking-wide text-zinc-400">New System</p>
                    {project.afterImageUrl ? (
                      <Image
                        src={project.afterImageUrl}
                        alt={`${project.projectName} new system`}
                        width={1000}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-44 w-full rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-44 items-center justify-center rounded-lg border border-dashed border-white/15 text-base text-zinc-500">
                        After image coming soon
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <SectionHeading
            badge="Client Testimonials"
            title="What clients say about LogozoDev"
            description="Strong delivery and practical communication are why clients trust us with critical business projects."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
              >
                <MessageSquareQuote className="mb-5 size-5 text-zinc-300" />
                <p className="text-base leading-relaxed text-zinc-300">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm uppercase tracking-wide text-zinc-500">{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <CTASection
          title="Ready to showcase your business transformation next?"
          description="Talk to LogozoDev about your next website, POS, branding, or software project and get a practical execution plan."
          primaryLabel="Discuss Your Project"
          secondaryLabel="Contact Us"
        />
      </PageContainer>
    </div>
  )
}
