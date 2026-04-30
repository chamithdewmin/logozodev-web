import { CTASection, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

const projects = [
  {
    projectName: 'Retail POS System',
    clientType: 'Local Shop',
    serviceType: 'POS System',
    coverImageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80',
    result: 'Improved sales tracking and reduced billing time with faster checkout and better stock visibility.',
    beforeImageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    projectName: 'Restaurant Brand Website',
    clientType: 'Restaurant',
    serviceType: 'Website + Branding',
    coverImageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    result: 'Delivered a modern mobile-friendly site that increased online inquiries and menu engagement.',
    beforeImageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    projectName: 'Startup Business Dashboard',
    clientType: 'Startup',
    serviceType: 'Custom Software',
    coverImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    result: 'Automated routine workflows and gave the team one place to monitor daily operations.',
    beforeImageUrl: '',
    afterImageUrl: '',
  },
]

const testimonials = [
  { quote: 'LogozoDev helped us build our website quickly and professionally.', author: 'Owner, Local Restaurant' },
  { quote: 'Our billing process became much faster after the new POS setup from LogozoDev.', author: 'Manager, Retail Shop' },
  { quote: 'They understood our needs and delivered custom software that actually fits our workflow.', author: 'Founder, Startup Team' },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Work"
          title="Project Showcase built for client trust."
          description="Explore real LogozoDev work across websites, POS systems, branding, and software solutions with clear business outcomes."
          showSpotlight={false}
          showDarkVeil
        />
        <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Project Showcase" title="Real projects. Real business impact." description="Each project highlights who the client was, what service we delivered, and what result the business achieved." />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.projectName} className="overflow-hidden rounded-2xl border border-brand-subtle bg-gradient-brand-card">
                <img src={project.coverImageUrl} alt={project.projectName} width={1200} height={600} className="h-52 w-full object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">{project.projectName}</h3>
                  <p className="mt-3 text-base text-white"><span className="font-medium text-brand-muted">Client:</span> {project.clientType}</p>
                  <p className="mt-1 text-base text-white"><span className="font-medium text-brand-muted">Service:</span> {project.serviceType}</p>
                  <p className="mt-4 text-base leading-relaxed text-white"><span className="font-medium text-brand-muted">Result:</span> {project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Client Testimonials" title="What clients say about LogozoDev" description="Strong delivery and practical communication are why clients trust us with critical business projects." />
          <TestimonialsCarousel items={testimonials} />
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
