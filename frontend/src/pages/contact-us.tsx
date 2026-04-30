import { Mail, MapPin, Phone } from 'lucide-react'
import { CTASection, InfoCard, PageContainer, PageHero } from '@/components/page-sections'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero
          eyebrow="Contact Us"
          title="Tell us what you are building."
          description="Share your goals, timeline, and current challenges. We will come back with a practical plan tailored to your team."
          showSpotlight={false}
          showDarkVeil
        />
        <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20">
          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border panel-glass p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">Start the conversation</h2>
              <p className="mt-3 text-base text-white">We usually respond within one business day.</p>
              <form className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-base text-white">Name<input type="text" className="form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100" placeholder="Your full name" /></label>
                  <label className="text-base text-white">Company<input type="text" className="form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100" placeholder="Company name" /></label>
                </div>
                <label className="block text-base text-white">Email<input type="email" className="form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100" placeholder="you@company.com" /></label>
                <label className="block text-base text-white">Project details<textarea rows={5} className="form-field-dark mt-2 w-full resize-none rounded-xl px-4 py-3 text-base text-zinc-100" placeholder="Tell us about your product, timeline, and goals." /></label>
                <button type="submit" className="btn-primary-site min-h-11">Send Message</button>
              </form>
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
