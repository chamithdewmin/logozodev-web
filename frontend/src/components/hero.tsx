import { Headphones, MoveRight, ShieldCheck, Trophy, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { StaggerParent } from '@/components/motion/reveal'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { fadeUpVariants, staggerContainerVariants, transitionReveal, viewportOnce } from '@/lib/motion-presets'
import { parseDisplayStat } from '@/lib/parse-display-stat'

export function HeroSection() {
  const heroWords = ['Smart', 'IT', 'Solutions']
  const heroStats = [
    { icon: ShieldCheck, value: '5+', label: 'Years Experience' },
    { icon: Trophy, value: '100+', label: 'Happy Clients' },
    { icon: Users, value: '20+', label: 'Industries Served' },
    { icon: Headphones, value: '24/7', label: 'Support Available' },
  ]
  const reduceMotion = useReducedMotion()
  const item = fadeUpVariants(!!reduceMotion)
  const wordContainer = staggerContainerVariants(!!reduceMotion)
  const wordItem = fadeUpVariants(!!reduceMotion)
  const btnRow = staggerContainerVariants(!!reduceMotion)

  return (
    <section className="relative w-full overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24 md:min-h-screen md:px-10 md:pt-28 md:pb-36">
      <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="#5DD62C" />
      <div className="relative z-10 flex w-full flex-col items-center md:min-h-[calc(100vh-7rem)] md:flex-row md:items-stretch">
        <div className="mt-8 flex w-full flex-[1.1] flex-col items-center justify-center gap-5 py-6 text-center sm:mt-10 sm:gap-6 sm:py-8 md:mt-0 md:items-start md:gap-5 md:p-14 md:py-4 md:text-left">
          <StaggerParent className="flex w-full flex-col items-center gap-5 md:items-start">
            <motion.p className={sectionLabelChipClassName} variants={item} transition={reduceMotion ? { duration: 0 } : transitionReveal}>
              Smart Solutions For The Future
            </motion.p>

            <motion.h1
              className="max-w-[20rem] text-[1.95rem] font-semibold leading-[1.04] tracking-tight text-white sm:max-w-[30rem] sm:text-4xl md:max-w-2xl md:text-6xl lg:text-7xl"
              variants={wordContainer}
              transition={reduceMotion ? { duration: 0 } : transitionReveal}
            >
              <span className="block whitespace-nowrap">
                {heroWords.map((word) => (
                  <motion.span key={word} className="mr-3 inline-block whitespace-nowrap" variants={wordItem} transition={transitionReveal}>
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block whitespace-nowrap">
                <motion.span className="mr-2 inline-block whitespace-nowrap" variants={wordItem} transition={transitionReveal}>
                  for
                </motion.span>
                <motion.span className="inline-block whitespace-nowrap text-[#5DD62C]" variants={wordItem} transition={transitionReveal}>
                  Growing
                </motion.span>
              </span>
              <span className="block whitespace-nowrap">
                <motion.span className="inline-block whitespace-nowrap" variants={wordItem} transition={transitionReveal}>
                  Businesses
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="max-w-[34ch] text-base leading-relaxed text-zinc-400 sm:max-w-2xl sm:text-lg"
              variants={item}
              transition={reduceMotion ? { duration: 0 } : { ...transitionReveal, delay: 0.14 }}
            >
              We create modern websites, powerful POS systems, and tailored digital solutions that help businesses enhance their operations,
              strengthen their brand presence, and grow faster with confidence.
            </motion.p>

            <motion.div
              className="mt-1 flex w-full flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center md:mt-2 md:justify-start"
              variants={btnRow}
            >
              <motion.div variants={item} transition={transitionReveal}>
                <MagneticButton>
                  <Link to="/contact-us" className="btn-primary-site inline-flex min-h-11 items-center gap-2">
                    Start Building
                    <MoveRight className="size-4" />
                  </Link>
                </MagneticButton>
              </motion.div>
              <motion.div variants={item} transition={transitionReveal}>
                <MagneticButton>
                  <Link to="/work" className="btn-secondary-site inline-flex min-h-11 items-center">
                    View our Work
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </StaggerParent>
        </div>
        <div className="relative mt-6 hidden min-h-[280px] flex-[0.9] sm:min-h-[320px] md:mt-0 md:block md:min-h-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-24 z-20 hidden px-4 md:block md:px-40 lg:bottom-48"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={item}
        transition={reduceMotion ? { duration: 0 } : { ...transitionReveal, delay: 0.08 }}
      >
        <div className="ml-auto grid w-full max-w-6xl gap-1 rounded-full border border-white/15 bg-black/55 p-3 backdrop-blur-md lg:grid-cols-4">
          {heroStats.map((stat) => {
            const parsed = parseDisplayStat(stat.value)
            return (
              <article key={stat.label} className="flex items-center gap-3 rounded-2xl p-3">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-frost">
                  <stat.icon className="size-7 text-[var(--brand)]" aria-hidden />
                </div>
                <div>
                  <p className="text-3xl font-semibold leading-none text-zinc-100 tabular-nums">
                    {parsed ? <AnimatedCounter value={parsed.value} suffix={parsed.suffix} durationMs={900} /> : stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">{stat.label}</p>
                </div>
              </article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
