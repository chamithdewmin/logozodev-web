import { BriefcaseBusiness, CheckCircle2, MonitorSmartphone, Palette, Rocket, Users } from 'lucide-react'
import { CareersApplicationForm } from '@/components/careers-application-form'
import { InfoCard, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import { SmoothHashLink } from '@/components/ui/smooth-hash-link'

const whyWorkWithUs = [
  { icon: BriefcaseBusiness, title: 'Real Project Experience', description: 'Work on websites, POS systems, branding, and software projects for real businesses.' },
  { icon: Users, title: 'Remote-Friendly Culture', description: 'Collaborate from anywhere while staying connected with our team.' },
  { icon: Rocket, title: 'Creative + Technical Growth', description: 'Improve your skills in design, development, client communication, and business solutions.' },
  { icon: MonitorSmartphone, title: 'Growing Startup Environment', description: 'Be part of a young company where your ideas and work make a real impact.' },
]

const openings = [
  { title: 'Frontend Developer Intern', skills: 'React, HTML, CSS, JavaScript', type: 'Internship / Remote' },
  { title: 'Graphic Designer Intern', skills: 'Branding, posters, social media designs', type: 'Internship / Remote' },
  { title: 'Sales & Marketing Assistant', skills: 'Client communication, social media, lead generation', type: 'Part-time / Remote' },
]

const candidateTraits = [
  'Passionate about technology and design',
  'Good communication skills',
  'Willing to learn and improve',
  'Creative problem solver',
  'Responsible with deadlines',
  'Interested in helping businesses grow digitally',
]

export default function CareersPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <PageHero eyebrow="Careers at LogozoDev" title="Build the Future of Digital Solutions With Us" showSpotlight={false} showDarkVeil>
          <div className="flex flex-wrap gap-3">
            <SmoothHashLink href="#open-roles" className="btn-primary-site">
              View Open Roles
            </SmoothHashLink>
            <SmoothHashLink href="#application-form" className="btn-secondary-site">
              Send Your CV
            </SmoothHashLink>
          </div>
        </PageHero>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Why Work With Us" title="Learn fast. Build real impact." description="We provide a practical and supportive environment where your work directly helps businesses improve and grow." />
          <div className="grid gap-5 md:grid-cols-2">
            {whyWorkWithUs.map((item) => (
              <InfoCard key={item.title} title={item.title} description={item.description}>
                <item.icon className="mb-5 size-5 text-brand-muted" />
              </InfoCard>
            ))}
          </div>
        </section>

        <section id="open-roles" className="mx-auto mt-16 w-full max-w-7xl scroll-mt-28 px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Current Openings" title="Opportunities at LogozoDev" description="Explore our active roles and apply if your skills and interests match." />
          <div className="grid gap-5 md:grid-cols-3">
            {openings.map((role) => (
              <article key={role.title} className="rounded-2xl border border-brand-subtle bg-gradient-brand-card p-6">
                <Palette className="mb-5 size-5 text-brand-muted" />
                <h3 className="text-lg font-semibold text-zinc-100">{role.title}</h3>
                <p className="mt-3 text-base text-zinc-400">{role.skills}</p>
                <p className="mt-1 text-base text-zinc-500">Type: {role.type}</p>
                <SmoothHashLink href="#application-form" className="btn-primary-site btn-primary-site-sm mt-6 inline-flex">
                  Apply Now
                </SmoothHashLink>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading badge="Who We Are Looking For" title="People who are eager to grow" description="If these qualities describe you, we would love to hear from you." />
          <div className="rounded-3xl border panel-glass p-8 md:p-10">
            <ul className="grid gap-4 md:grid-cols-2">
              {candidateTraits.map((trait) => (
                <li key={trait} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 size-4.5 text-brand-muted" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="application-form" className="mx-auto mt-16 w-full max-w-7xl scroll-mt-28 px-4 sm:px-6 md:mt-20">
          <div className="rounded-3xl border panel-glass p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Application Form</h2>
            <p className="mt-3 text-base text-zinc-500">Share your details and we will review your profile.</p>
            <CareersApplicationForm />
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <div className="rounded-3xl border panel-glass p-6 text-center sm:p-8 md:p-10">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Don’t See a Role That Fits?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500">
              We are always open to talented people. Send us your CV and tell us how you can contribute to LogozoDev.
            </p>
            <div className="mt-8 flex justify-center">
              <SmoothHashLink href="#application-form" className="btn-primary-site">
                Send Your CV
              </SmoothHashLink>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  )
}
