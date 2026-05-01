import { ArrowRight, Bot, Brush, CheckCircle2, Cpu, Headset, MonitorSmartphone, ReceiptText, Target, TrendingUp, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import customSoftwareImage from '@/assets/custome software.png'
import graphicImage from '@/assets/graphic.png'
import posImage from '@/assets/pos.png'
import webImage from '@/assets/web.png'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Website Development',
    details: 'Business websites, e-commerce stores, portfolio websites, and responsive mobile-friendly experiences.',
    value: 'We build fast, modern, and user-friendly websites that convert visitors into customers.',
  },
  {
    icon: ReceiptText,
    title: 'POS Systems',
    details: 'Billing systems, inventory management, sales tracking, and custom POS solutions for shops.',
    value: 'Smart POS systems to manage your business efficiently.',
  },
  {
    icon: Brush,
    title: 'Graphic Design & Branding',
    details: 'Logos, social media creatives, business branding kits, posters, and ad visuals.',
    value: 'Build a strong and professional brand identity.',
  },
  {
    icon: Bot,
    title: 'Custom Software Solutions',
    details: 'Custom business tools, workflow automation systems, and management software built around operations.',
    value: 'We create software tailored to your exact business needs.',
  },
  {
    icon: Wrench,
    title: 'IT Support & Consultation',
    details: 'System setup, technical guidance, and support for business digital transformation.',
    value: 'Helping you choose the right technology for your business.',
  },
]

const serviceHighlights = [
  {
    icon: Target,
    title: 'Business-Focused',
    description: 'We solve real problems.',
  },
  {
    icon: Headset,
    title: 'End-to-End Support',
    description: "We're with you, always.",
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built for growth.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'Future-ready systems.',
  },
]

function toBullets(details: string): string[] {
  return details
    .replace(/\.$/, '')
    .split(/,\s*/)
    .map((s) => s.replace(/^and\s+/i, '').trim())
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .filter(Boolean)
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Services"
          title={
            <>
              Smart IT Solutions.
              <br />
              <span className="text-[var(--brand)]">Real Business Impact.</span>
            </>
          }
          showSpotlight={false}
          showDarkVeil
        />

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="What We Offer"
            title="Clear solutions. Measurable value."
            description="Each service is designed to solve real operational problems and help your business grow faster with the right technology."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, idx) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-strong hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)] sm:p-7 md:p-8 [&:last-child]:md:col-span-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="shadow-brand-icon inline-flex size-12 items-center justify-center rounded-2xl border border-brand-medium bg-brand-frost transition duration-300 group-hover:scale-105 group-hover:border-brand-strong group-hover:bg-white/10">
                    <service.icon className="size-6 text-brand-muted" />
                  </div>
                  <span className="font-mono text-base font-semibold tabular-nums text-[var(--brand)] sm:text-lg">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-400">{service.value}</p>
                {service.title === 'Website Development' ? (
                  <img src={webImage} alt="Website development showcase" className="mt-5 h-auto w-full rounded-2xl object-contain" />
                ) : null}
                {service.title === 'POS Systems' ? <img src={posImage} alt="POS system interface" className="mt-5 h-auto w-full rounded-2xl object-contain" /> : null}
                {service.title === 'Graphic Design & Branding' ? (
                  <img src={graphicImage} alt="Graphic design and branding showcase" className="mt-5 h-auto w-full rounded-2xl object-contain" />
                ) : null}
                {service.title === 'Custom Software Solutions' ? (
                  <img src={customSoftwareImage} alt="Custom software solutions showcase" className="mt-5 h-auto w-full rounded-2xl object-contain" />
                ) : null}

                <ul className="mt-5 space-y-2.5">
                  {toBullets(service.details).map((bullet, bulletIdx) => (
                    <li key={`${service.title}-${bulletIdx}`} className="flex items-start gap-2.5 text-[0.95rem] text-zinc-300">
                      <CheckCircle2 className="mt-0.5 size-[1.125rem] shrink-0 text-[var(--brand)]" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact-us"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-100 transition-colors hover:text-[var(--brand)]"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 md:mt-16">
          <div className="grid gap-2 rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-3 sm:grid-cols-2 sm:gap-3 sm:p-4 lg:grid-cols-4">
            {serviceHighlights.map((item, idx) => (
              <article
                key={item.title}
                className="flex items-start gap-3 rounded-2xl p-3 sm:p-4 lg:rounded-none lg:p-4 lg:not-last:border-r lg:not-last:border-brand-medium"
              >
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand-medium bg-brand-frost">
                  <item.icon className="size-5 text-[var(--brand)]" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTASection
          title="Need the right service mix for your business?"
          description="Share your goals and we will recommend the best combination of website, POS, branding, software, and support services."
          primaryLabel="Contact Us"
          secondaryLabel="Get Free Consultation"
          secondaryHref="/contact-us"
        />
      </PageContainer>
    </div>
  )
}
