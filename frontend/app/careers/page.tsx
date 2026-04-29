import Link from 'next/link'
import { BriefcaseBusiness, CheckCircle2, MonitorSmartphone, Palette, Rocket, Users } from 'lucide-react'
import { InfoCard, PageContainer, PageHero, SectionHeading } from '@/components/page-sections'

const whyWorkWithUs = [
  {
    icon: BriefcaseBusiness,
    title: 'Real Project Experience',
    description:
      'Work on websites, POS systems, branding, and software projects for real businesses.',
  },
  {
    icon: Users,
    title: 'Remote-Friendly Culture',
    description: 'Collaborate from anywhere while staying connected with our team.',
  },
  {
    icon: Rocket,
    title: 'Creative + Technical Growth',
    description:
      'Improve your skills in design, development, client communication, and business solutions.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Growing Startup Environment',
    description: 'Be part of a young company where your ideas and work make a real impact.',
  },
]

const openings = [
  {
    title: 'Frontend Developer Intern',
    skills: 'React, HTML, CSS, JavaScript',
    type: 'Internship / Remote',
  },
  {
    title: 'Graphic Designer Intern',
    skills: 'Branding, posters, social media designs',
    type: 'Internship / Remote',
  },
  {
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
    <div className="min-h-screen bg-black text-white">
      <PageContainer>
        <PageHero
          eyebrow="Careers at LogozoDev"
          title="Build the Future of Digital Solutions With Us"
          description="At LogozoDev, we create modern websites, POS systems, branding, and custom digital solutions for small and growing businesses. We are a growing IT solutions company based in Sri Lanka, working remotely with clients across the country."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="#open-roles"
              className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-zinc-200"
            >
              View Open Roles
            </Link>
            <Link
              href="#application-form"
              className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/[0.06]"
            >
              Send Your CV
            </Link>
          </div>
        </PageHero>

        <section className="mx-auto mt-24 w-full max-w-6xl px-6">
          <SectionHeading
            badge="Why Work With Us"
            title="Learn fast. Build real impact."
            description="We provide a practical and supportive environment where your work directly helps businesses improve and grow."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyWorkWithUs.map((item) => (
              <InfoCard key={item.title} title={item.title} description={item.description}>
                <item.icon className="mb-5 size-5 text-zinc-300" />
              </InfoCard>
            ))}
          </div>
        </section>

        <section id="open-roles" className="mx-auto mt-24 w-full max-w-6xl scroll-mt-28 px-6">
          <SectionHeading
            badge="Current Openings"
            title="Opportunities at LogozoDev"
            description="Explore our active roles and apply if your skills and interests match."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {openings.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
              >
                <Palette className="mb-5 size-5 text-zinc-300" />
                <h3 className="text-lg font-semibold text-zinc-100">{role.title}</h3>
                <p className="mt-3 text-base text-zinc-400">{role.skills}</p>
                <p className="mt-1 text-base text-zinc-500">Type: {role.type}</p>
                <Link
                  href="#application-form"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-base font-medium text-black transition hover:bg-zinc-200"
                >
                  Apply Now
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-6xl px-6">
          <SectionHeading
            badge="Who We Are Looking For"
            title="People who are eager to grow"
            description="If these qualities describe you, we would love to hear from you."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <ul className="grid gap-4 md:grid-cols-2">
              {candidateTraits.map((trait) => (
                <li key={trait} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 size-4.5 text-zinc-400" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="application-form" className="mx-auto mt-24 w-full max-w-6xl scroll-mt-28 px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Application Form</h2>
            <p className="mt-3 text-base text-zinc-500">Share your details and we will review your profile.</p>
            {/* UI-only form for now; backend submission will be connected later. */}
            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-base text-zinc-300">
                  Full Name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                    placeholder="Your full name"
                  />
                </label>
                <label className="text-base text-zinc-300">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-base text-zinc-300">
                  Phone Number
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                    placeholder="+94 ..."
                  />
                </label>
                <label className="text-base text-zinc-300">
                  Position Applying For
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                    placeholder="Frontend Developer Intern"
                  />
                </label>
              </div>
              <label className="block text-base text-zinc-300">
                Portfolio / GitHub / Behance Link
                <input
                  type="url"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                  placeholder="https://..."
                />
              </label>
              <label className="block text-base text-zinc-300">
                Upload CV
                <input
                  type="file"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none file:mr-3 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-1.5 file:text-base file:font-medium file:text-black"
                />
              </label>
              <label className="block text-base text-zinc-300">
                Short Message
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-zinc-100 outline-none transition focus:border-white/30"
                  placeholder="Tell us about yourself and why you want to join LogozoDev."
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-zinc-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center md:p-12">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Don’t See a Role That Fits?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500">
              We are always open to talented people. Send us your CV and tell us how you can contribute to LogozoDev.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="#application-form"
                className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-zinc-200"
              >
                Send Your CV
              </Link>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  )
}
