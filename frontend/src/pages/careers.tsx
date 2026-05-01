import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  MonitorSmartphone,
  PenTool,
  Rocket,
  User,
  Users,
} from 'lucide-react'
import { CareersApplicationForm } from '@/components/careers-application-form'
import { PageContainer, PageHero, SectionHeading } from '@/components/page-sections'
import { SmoothHashLink } from '@/components/ui/smooth-hash-link'

const whyWorkWithUs = [
  {
    icon: BriefcaseBusiness,
    title: 'Real Project Experience',
    description: 'Work on websites, POS systems, branding, and software projects for real businesses.',
  },
  {
    icon: Users,
    title: 'Remote-Friendly Culture',
    description: 'Collaborate from anywhere while staying connected with our team.',
  },
  {
    icon: Code2,
    title: 'Creative + Technical Growth',
    description: 'Improve your skills in design, development, client communication, and business solutions.',
  },
  {
    icon: Rocket,
    title: 'Growing Startup Environment',
    description: 'Be part of a young company where your ideas and work make a real impact.',
  },
]

const openings = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend Developer Intern',
    skills: 'React, HTML, CSS, JavaScript',
    type: 'Internship / Remote',
  },
  {
    icon: PenTool,
    title: 'Graphic Designer Intern',
    skills: 'Branding, posters, social media designs',
    type: 'Internship / Remote',
  },
  {
    icon: Users,
    title: 'Sales & Marketing Assistant',
    skills: 'Client communication, social media, lead generation',
    type: 'Part-time / Remote',
  },
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
        <PageHero
          eyebrow="Careers at LogozoDev"
          title={
            <>
              Build the Future of <span className="text-[var(--brand)]">Digital Solutions</span> With Us
            </>
          }
          showSpotlight={false}
          showDarkVeil
        >
          <div className="flex flex-wrap justify-center gap-3">
            <SmoothHashLink href="#open-roles" className="btn-primary-site btn-primary-site-brand inline-flex items-center gap-2">
              View Open Roles
              <ArrowRight className="size-4" aria-hidden />
            </SmoothHashLink>
            <SmoothHashLink href="#application-form" className="btn-secondary-site inline-flex items-center gap-2">
              Send Your CV
              <Download className="size-4" aria-hidden />
            </SmoothHashLink>
          </div>
        </PageHero>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Why Work With Us"
            title={
              <>
                Learn fast. <span className="text-[var(--brand)]">Build real impact.</span>
              </>
            }
            description="We provide a practical and supportive environment where your work directly helps businesses improve and grow."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyWorkWithUs.map((item) => (
              <article key={item.title} className="rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <item.icon className="size-5 text-[var(--brand)]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="open-roles" className="mx-auto mt-16 w-full max-w-7xl scroll-mt-28 px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Current Openings"
            title={
              <>
                Opportunities at <span className="text-[var(--brand)]">LogozoDev</span>
              </>
            }
            description="Explore our active roles and apply if your skills and interests match."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {openings.map((role) => (
              <article key={role.title} className="rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <role.icon className="size-5 text-[var(--brand)]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-100">{role.title}</h3>
                <p className="mt-3 text-base text-zinc-300">{role.skills}</p>
                <p className="mt-1 text-sm text-zinc-400">Type: {role.type}</p>
                <SmoothHashLink
                  href="#application-form"
                  className="btn-primary-site btn-primary-site-brand btn-primary-site-sm mt-6 inline-flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="size-4" aria-hidden />
                </SmoothHashLink>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20">
          <SectionHeading
            badge="Who We Are Looking For"
            title={
              <>
                People who are <span className="text-[var(--brand)]">eager to grow</span>
              </>
            }
            description="If these qualities describe you, we would love to hear from you."
          />
          <div className="rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <ul className="grid gap-4 md:grid-cols-2">
                {candidateTraits.map((trait) => (
                  <li key={trait} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" aria-hidden />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
              <div className="hidden items-center justify-center lg:flex">
                <div className="grid size-44 place-items-center rounded-full border border-[color-mix(in_srgb,var(--brand)_38%,transparent)] bg-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
                  <User className="size-16 text-[var(--brand)]" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="application-form" className="mx-auto mt-16 w-full max-w-7xl scroll-mt-28 px-4 sm:px-6 md:mt-20">
          <div className="rounded-3xl border border-brand-medium bg-gradient-brand-card-deep p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Application <span className="text-[var(--brand)]">Form</span>
            </h2>
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
