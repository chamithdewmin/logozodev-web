import { ClipboardCheck, Database, Eye, Fingerprint, Lock, Shield, ShieldCheck, TriangleAlert } from 'lucide-react'
import { sectionLabelChipClassName } from '@/components/page-sections'

const features = [
  {
    icon: Shield,
    title: 'Threat Detection',
    description: 'Real-time monitoring for suspicious activities.',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption for sensitive data.',
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: '24/7 surveillance of your infrastructure.',
  },
  {
    icon: Database,
    title: 'Secure Backups',
    description: 'Automated backups with instant recovery.',
  },
  {
    icon: TriangleAlert,
    title: 'Breach Prevention',
    description: 'Proactive defense against cyber attacks.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Management',
    description: 'GDPR, SOC 2, and ISO compliance tools.',
  },
  {
    icon: Fingerprint,
    title: 'Identity Protection',
    description: 'Multi-factor authentication and access control.',
  },
  {
    icon: ShieldCheck,
    title: 'Vulnerability Scanning',
    description: 'Continuous scanning to identify security gaps.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto mt-32 w-full max-w-[84rem] px-6">
      <div className={`${sectionLabelChipClassName} mb-8`}>
        Enterprise IT Services
      </div>
      <h2 className="max-w-5xl text-6xl font-semibold tracking-tight text-white md:text-7xl">
        Protect and scale what matters most
      </h2>
      <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-[1.35rem]">
        LogozoDev delivers complete digital solutions that strengthen operations, improve reliability, and help growing
        businesses move forward with confidence.
      </p>

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="border-b border-white/10 pb-5 pr-1">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.02]">
                <feature.icon className="size-4.5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">{feature.title}</h3>
            </div>
            <p className="pl-[3.25rem] text-base leading-relaxed text-zinc-400">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
