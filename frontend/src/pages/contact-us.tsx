import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CTASection, InfoCard, PageContainer, PageHero } from '@/components/page-sections'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Contact Us"
          title={
            <>
              Tell us what you are <span className="text-[var(--brand)]">building.</span>
            </>
          }
          showSpotlight={false}
          showDarkVeil
        />
        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border panel-glass p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">Start the conversation</h2>
              <p className="mt-3 text-base text-white">We usually respond within one business day.</p>
              <ContactForm />
            </div>
            <div className="grid gap-5">
              <InfoCard title="Phone" description="+94 74 152 5537"><Phone className="mb-5 size-5 text-brand-muted" /></InfoCard>
              <InfoCard title="Email" description="hello@logozodev.com"><Mail className="mb-5 size-5 text-brand-muted" /></InfoCard>
              <InfoCard title="Office" description="Tissamaharama, Sri Lanka"><MapPin className="mb-5 size-5 text-brand-muted" /></InfoCard>
            </div>
          </div>
        </section>
        <CTASection title="Need a fast turnaround?" description="Share your launch date and we can recommend a focused sprint model." primaryLabel="Book Intro Call" secondaryLabel="Download Brief Template" />
      </PageContainer>
    </div>
  )
}
