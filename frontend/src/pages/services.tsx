import { Bot, Brush, MonitorSmartphone, PackageSearch, ReceiptText, Wrench } from 'lucide-react'
import { CTASection, InfoCard, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Services"
          title="Practical IT services built for real business growth."
          description="LogozoDev delivers complete digital solutions for small and growing businesses, from websites and POS systems to branding, software, and ongoing IT guidance."
          showSpotlight={false}
        />

        <section className="mx-auto mt-24 w-full max-w-6xl px-6">
          <SectionHeading
            badge="What We Offer"
            title="Clear solutions. Measurable value."
            description="Each service is designed to solve real operational problems and help your business grow faster with the right technology."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <InfoCard key={service.title} title={service.title} description={`${service.details} ${service.value}`} className="min-h-[220px]">
                <service.icon className="mb-5 size-5 text-zinc-300" />
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <InfoCard
            title="Service Delivery Approach"
            description="We start by understanding your workflow, then recommend only the tools and systems that fit your business stage. This keeps projects focused, affordable, and aligned to outcomes."
            className="rounded-3xl p-8 md:p-10"
          >
            <PackageSearch className="mb-5 size-5 text-zinc-300" />
          </InfoCard>
        </section>

        <CTASection
          title="Need the right service mix for your business?"
          description="Share your goals and we will recommend the best combination of website, POS, branding, software, and support services."
          primaryLabel="Contact Us"
          secondaryLabel="Get Free Consultation"
        />
      </PageContainer>
    </div>
  )
}
