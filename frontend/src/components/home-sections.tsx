import { ClipboardList, Code2, Cpu, Globe, MessageCircle, Palette, ReceiptText, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { TiltCard } from '@/components/ui/tilt-card'

const serviceCards = [
  { icon: Globe, title: 'Website Development', description: 'Modern business websites that are fast, responsive, and conversion-focused.' },
  { icon: ReceiptText, title: 'POS Systems', description: 'Smart billing and inventory systems to simplify daily business operations.' },
  { icon: Palette, title: 'Branding & Design', description: 'Professional visual identity design to build trust and market recognition.' },
  { icon: Cpu, title: 'Custom Software', description: 'Tailored digital tools that solve real workflow challenges for your team.' },
]

const processSteps = [
  { icon: MessageCircle, title: 'Consultation', description: 'We understand your goals, business model, and challenges.' },
  { icon: ClipboardList, title: 'Planning', description: 'We map the best solution, timeline, and delivery milestones.' },
  { icon: Code2, title: 'Development', description: 'We design and build your solution with regular progress updates.' },
  { icon: Rocket, title: 'Delivery', description: 'We launch, test, and support your final solution confidently.' },
]

const processCurveLayout = [
  { left: '8%', top: '72%' },
  { left: '34%', top: '32%' },
  { left: '60%', top: '58%' },
  { left: '86%', top: '34%' },
]

export function HomeSections() {
  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-[84rem] px-4 sm:px-6 md:mt-24">
        <div className={`${sectionLabelChipClassName} mx-auto mb-11`}>What We Offer</div>
        <motion.div
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {serviceCards.map((card) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <TiltCard className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 hover:border-white/25 hover:shadow-[0_0_35px_rgba(255,255,255,0.06)]">
                <div className="mb-5 flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
                  <card.icon className="size-4.5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-zinc-500">{card.description}</p>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/12 bg-white/[0.02] p-4 text-center">
            <p className="text-3xl font-semibold text-zinc-100">
              <AnimatedCounter value={120} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-zinc-400">Projects Delivered</p>
          </div>
          <div className="rounded-xl border border-white/12 bg-white/[0.02] p-4 text-center">
            <p className="text-3xl font-semibold text-zinc-100">
              <AnimatedCounter value={98} suffix="%" />
            </p>
            <p className="mt-1 text-sm text-zinc-400">Client Satisfaction</p>
          </div>
          <div className="rounded-xl border border-white/12 bg-white/[0.02] p-4 text-center">
            <p className="text-3xl font-semibold text-zinc-100">
              <AnimatedCounter value={24} suffix="/7" />
            </p>
            <p className="mt-1 text-sm text-zinc-400">Support Window</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[84rem] px-4 sm:px-6 md:mt-16">
        <div className="p-3 sm:p-6 md:p-10">
          <div className="mb-8 text-center">
            <p className={`${sectionLabelChipClassName} mx-auto mb-3`}>Process Flow</p>
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">How We Work</h3>
          </div>

          <div className="relative hidden h-[360px] lg:block">
            <svg viewBox="0 0 1200 360" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <filter id="processGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M20 270 C170 320, 220 80, 360 120 C500 160, 560 310, 700 240 C840 170, 900 60, 1180 110"
                stroke="#FFFFFF"
                strokeOpacity="0.95"
                strokeWidth="4"
                filter="url(#processGlow)"
              />
              <path
                d="M20 270 C170 320, 220 80, 360 120 C500 160, 560 310, 700 240 C840 170, 900 60, 1180 110"
                stroke="#FFFFFF"
                strokeOpacity="0.25"
                strokeWidth="10"
              />
            </svg>

            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="group absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out hover:-translate-y-[56%]"
                style={{ left: processCurveLayout[idx].left, top: processCurveLayout[idx].top }}
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/35 bg-black shadow-[0_0_28px_rgba(255,255,255,0.35)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_38px_rgba(255,255,255,0.5)]">
                  <step.icon className="size-5 text-zinc-100" />
                </div>
                <div className="mt-3 w-52 rounded-xl border border-white/10 bg-black/65 p-3 text-center backdrop-blur-sm transition duration-300 group-hover:border-white/25 group-hover:bg-black/85 group-hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]">
                  <p className="text-base font-semibold text-zinc-100">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:hidden sm:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={`${step.title}-mobile`}
                className="rounded-2xl border border-white/15 bg-black/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/5 transition duration-300 hover:scale-105 hover:border-white/45">
                  <step.icon className="size-4.5 text-zinc-100" />
                </div>
                <h4 className="text-base font-semibold text-zinc-100">{step.title}</h4>
                <p className="mt-1.5 text-sm text-zinc-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
