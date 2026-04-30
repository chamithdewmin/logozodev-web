import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import DarkVeil from '@/components/ui/dark-veil'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

export const sectionLabelChipClassName =
  'flex w-fit items-center justify-center rounded-full border border-brand-subtle bg-brand-frost px-5 py-2 text-sm font-medium text-brand-muted backdrop-blur-sm'

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mx-auto w-full max-w-[1280px] overflow-x-clip"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  showSpotlight = true,
  showDarkVeil = false,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  showSpotlight?: boolean
  showDarkVeil?: boolean
}) {
  return (
    <section className="mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6 md:mt-10">
      <div className="relative isolate overflow-visible p-4 sm:p-6 md:p-10 lg:p-12">
        {showDarkVeil ? (
          <div
            className="pointer-events-none absolute inset-x-0 -top-2 z-[-1] h-[440px] overflow-hidden rounded-t-3xl opacity-55 sm:top-0 md:top-2"
            aria-hidden="true"
          >
            <DarkVeil hueShift={120} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} />
          </div>
        ) : null}
        {showSpotlight ? <Spotlight className="-top-36 left-0 z-10 md:left-48 md:-top-16" fill="#5DD62C" /> : null}
        <div className="relative z-20 text-center">
          <p className={cn(sectionLabelChipClassName, 'mx-auto mb-5')}>{eyebrow}</p>
          <h1 className="mx-auto max-w-[20rem] text-3xl font-semibold leading-[1.04] tracking-tight text-white sm:max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-[34ch] text-base leading-relaxed text-white sm:mt-5 sm:max-w-3xl sm:text-lg">{description}</p>
          {children ? <div className="mt-8 flex justify-center">{children}</div> : null}
        </div>
      </div>
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
      <div className={cn(sectionLabelChipClassName, 'mx-auto mb-5')}>{badge}</div>
      <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white sm:text-lg">{description}</p>
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
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { rotateX: 4, rotateY: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={cn('rounded-2xl border border-brand-subtle bg-gradient-brand-card p-6 backdrop-blur-[2px]', className)}>
        {children}
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-white sm:text-base">{description}</p>
      </div>
    </motion.div>
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
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20 animate-page-fade-in">
      <div className="rounded-3xl border panel-glass p-6 text-center shadow-sm backdrop-blur-md sm:p-8 md:p-12">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="btn-primary-site">
            {primaryLabel}
          </button>
          <button type="button" className="btn-secondary-site">
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
