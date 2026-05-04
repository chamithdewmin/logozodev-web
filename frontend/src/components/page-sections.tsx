import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeUp, StaggerParent } from '@/components/motion/reveal'
import { Spotlight } from '@/components/ui/spotlight'
import { useSiteAlert } from '@/components/site-alert-provider'
import { fadeUpVariants, transitionReveal, viewportOnce } from '@/lib/motion-presets'
import { cn } from '@/lib/utils'
import ctaRocketUrl from '@/assets/cta.png'

/** Shown when a CTA has no secondary link (e.g. brief template download). */
export const CTA_SECONDARY_ALERT_DEFAULT =
  'We are preparing a downloadable project brief. Use the contact form with your timeline and goals — we will confirm next steps shortly.'

export const sectionLabelChipClassName =
  'flex w-fit items-center justify-center rounded-full border border-brand-subtle bg-brand-frost px-5 py-2 text-sm font-medium text-brand-muted backdrop-blur-sm'

const ctaEyebrowClass =
  'inline-flex w-fit items-center rounded-full border border-[color-mix(in_srgb,var(--brand)_38%,transparent)] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--brand)]'

function splitTitleAccent(title: string, accentWords = 2) {
  const words = title.trim().split(/\s+/)
  if (words.length <= accentWords) return { lead: '', accent: title.trim() }
  const lead = words.slice(0, words.length - accentWords).join(' ')
  const accent = words.slice(-accentWords).join(' ')
  return { lead, accent }
}

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1400px] overflow-x-clip">{children}</div>
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
  title: ReactNode
  description?: string
  children?: ReactNode
  showSpotlight?: boolean
  showDarkVeil?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const item = fadeUpVariants(!!reduceMotion)

  return (
    <section className="mx-auto mt-4 w-full max-w-7xl px-4 sm:px-6 md:mt-6">
      <div className="relative isolate overflow-visible py-6 px-4 sm:py-7 sm:px-5 md:py-8 md:px-6 lg:py-9 lg:px-7">
        {showDarkVeil ? (
          <div
            className="pointer-events-none absolute inset-x-0 -top-2 z-[-1] h-[260px] rounded-t-3xl bg-black/45 sm:top-0 sm:h-[288px] md:top-1 md:h-[300px]"
            aria-hidden="true"
          />
        ) : null}
        {showSpotlight ? <Spotlight className="-top-28 left-0 z-10 sm:-top-32 md:left-48 md:-top-14" fill="#5DD62C" /> : null}
        <StaggerParent className="relative z-20 text-center">
          <motion.p
            className={cn(sectionLabelChipClassName, 'mx-auto mb-3')}
            variants={item}
            transition={reduceMotion ? { duration: 0 } : transitionReveal}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="mx-auto max-w-[20rem] text-3xl font-semibold leading-[1.04] tracking-tight text-white sm:max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            variants={item}
            transition={reduceMotion ? { duration: 0 } : transitionReveal}
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              className="mx-auto mt-3 max-w-[34ch] text-base leading-relaxed text-white sm:mt-4 sm:max-w-3xl sm:text-lg"
              variants={item}
              transition={reduceMotion ? { duration: 0 } : transitionReveal}
            >
              {description}
            </motion.p>
          ) : null}
          {children ? (
            <motion.div
              className={cn(description ? 'mt-6' : 'mt-5', 'flex justify-center')}
              variants={item}
              transition={reduceMotion ? { duration: 0 } : transitionReveal}
            >
              {children}
            </motion.div>
          ) : null}
        </StaggerParent>
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
  title: ReactNode
  description: string
}) {
  return (
    <FadeUp className="mb-9 sm:mb-11">
      <div className={cn(sectionLabelChipClassName, 'mx-auto mb-5')}>{badge}</div>
      <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white sm:text-lg">{description}</p>
    </FadeUp>
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
      whileHover={reduceMotion ? {} : { scale: 1.025 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
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
  eyebrow = "Let's Build Something Great",
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref = '/contact-us',
  secondaryHref,
  secondaryAlertMessage = CTA_SECONDARY_ALERT_DEFAULT,
}: {
  eyebrow?: string
  title: string
  description: string
  primaryLabel: string
  secondaryLabel: string
  primaryHref?: string
  secondaryHref?: string
  secondaryAlertMessage?: string
}) {
  const { showAlert } = useSiteAlert()
  const { lead, accent } = splitTitleAccent(title, 2)
  const reduceMotion = useReducedMotion()
  const v = fadeUpVariants(!!reduceMotion)

  return (
    <motion.section
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={v}
      transition={reduceMotion ? { duration: 0 } : transitionReveal}
    >
      <div className="relative overflow-visible rounded-3xl border panel-glass shadow-sm backdrop-blur-md">
        <span
          className="pointer-events-none absolute right-14 top-1/2 hidden size-[270px] -translate-y-1/2 rounded-full border border-[color-mix(in_srgb,var(--brand)_78%,transparent)] opacity-90 lg:block"
          aria-hidden
        />
        <div className="grid items-center gap-4 p-5 sm:p-6 md:p-7 lg:grid-cols-1 lg:gap-5 lg:px-7 lg:py-14 lg:pr-[21rem]">
          <div className="text-left lg:pl-5 xl:pl-8">
            <p className={ctaEyebrowClass}>{eyebrow}</p>
            <h3 className="mt-2.5 font-heading text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[1.85rem] lg:leading-[1.1]">
              {lead ? (
                <>
                  {lead}{' '}
                  <span className="text-[var(--brand)]">{accent}</span>
                </>
              ) : (
                <span className="text-[var(--brand)]">{accent}</span>
              )}
            </h3>
            <p className="mt-2.5 max-w-[62ch] text-[0.9rem] leading-relaxed text-zinc-300 sm:text-[0.96rem]">{description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link to={primaryHref} className="btn-primary-site btn-primary-site-brand inline-flex min-h-11 items-center gap-2">
                {primaryLabel}
                <MoveRight className="size-4" aria-hidden />
              </Link>
              {secondaryHref ? (
                <Link to={secondaryHref} className="btn-secondary-site inline-flex min-h-11 items-center gap-2">
                  {secondaryLabel}
                  <MoveRight className="size-4" aria-hidden />
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn-secondary-site inline-flex min-h-11 items-center gap-2"
                  onClick={() =>
                    showAlert({
                      variant: 'info',
                      title: secondaryLabel,
                      message: secondaryAlertMessage,
                    })
                  }
                >
                  {secondaryLabel}
                  <MoveRight className="size-4" aria-hidden />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-8 -bottom-9 hidden lg:block">
          <img
            src={ctaRocketUrl}
            alt=""
            aria-hidden
            width={1200}
            height={1200}
            loading="lazy"
            className="relative z-10 h-auto w-[260px] -translate-x-[35%] -translate-y-[1%] select-none object-contain drop-shadow-[0_0_40px_color-mix(in_srgb,var(--brand)_36%,transparent)] xl:w-[292px]"
          />
        </div>
      </div>
    </motion.section>
  )
}
