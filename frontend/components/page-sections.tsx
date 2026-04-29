import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

export const sectionLabelChipClassName =
  'flex w-fit items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-2 text-sm font-medium text-zinc-200 backdrop-blur-sm'

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1280px] overflow-x-clip">{children}</div>
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6 md:mt-10">
      <Card className="relative overflow-hidden border-white/10 bg-black/[0.96] p-6 sm:p-8 md:p-12 lg:p-14">
        <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="white" />
        <div className="relative z-10">
          <p className={cn(sectionLabelChipClassName, 'mb-5')}>
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Card>
    </section>
  )
}

export function SectionHeading({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <div className="mb-9 sm:mb-11">
      <div className={cn(sectionLabelChipClassName, 'mx-auto mb-5')}>
        {badge}
      </div>
      <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-zinc-500 sm:text-lg">{description}</p>
    </div>
  )
}

export function InfoCard({
  title,
  description,
  className,
  children,
}: {
  title: string
  description: string
  className?: string
  children?: ReactNode
}) {
  return (
    <Card className={cn('rounded-2xl border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6', className)}>
      {children}
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2.5 text-base leading-relaxed text-zinc-500">{description}</p>
    </Card>
  )
}

export function CTASection({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: {
  title: string
  description: string
  primaryLabel: string
  secondaryLabel: string
}) {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20">
      <Card className="rounded-3xl border-white/10 bg-white/[0.02] p-6 text-center sm:p-8 md:p-12">
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500 sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-white px-6 py-3 text-base font-medium text-black">{primaryLabel}</button>
          <button className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-zinc-200">
            {secondaryLabel}
          </button>
        </div>
      </Card>
    </section>
  )
}
