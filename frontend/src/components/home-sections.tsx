import { Briefcase, ClipboardList, Code2, Cpu, Globe, Handshake, MessageCircle, Palette, ReceiptText, Rocket, ShieldCheck, TimerReset } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
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

const testimonials = [
  { quote: 'LogozoDev helped us build our website quickly and professionally.', author: 'Owner, Local Restaurant' },
  { quote: 'Our billing process became much faster after the new POS setup from LogozoDev.', author: 'Manager, Retail Shop' },
  { quote: 'They understood our needs and delivered custom software that actually fits our workflow.', author: 'Founder, Startup Team' },
]

const whyChooseItems = [
  { icon: Handshake, title: 'Dedicated Team', description: 'A skilled team focused on your success.' },
  { icon: Cpu, title: 'Scalable Solutions', description: 'Built to grow with your business.' },
  { icon: TimerReset, title: 'Transparent Process', description: 'Clear communication at every step.' },
  { icon: ShieldCheck, title: 'Security First', description: 'We follow best practices to keep your data safe.' },
  { icon: Briefcase, title: 'Results Driven', description: 'Our solutions are built to deliver real impact.' },
]

export function HomeSections() {
  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-[90rem] px-4 sm:px-6 md:mt-24">
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
              <TiltCard className="rounded-2xl border border-brand-subtle bg-gradient-brand-card p-6 hover:border-brand-medium shadow-brand-soft">
                <div className="mb-5 flex size-9 items-center justify-center rounded-full border border-brand-medium bg-brand-frost">
                  <card.icon className="size-4.5 text-brand-muted" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-zinc-500">{card.description}</p>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[90rem] px-4 sm:px-6 md:mt-16">
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
                stroke="#5DD62C"
                strokeOpacity="0.95"
                strokeWidth="4"
                filter="url(#processGlow)"
              />
              <path
                d="M20 270 C170 320, 220 80, 360 120 C500 160, 560 310, 700 240 C840 170, 900 60, 1180 110"
                stroke="#5DD62C"
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
                <div className="shadow-brand-node shadow-brand-node-hover mx-auto flex size-12 items-center justify-center rounded-full border border-brand-medium bg-black transition duration-300 group-hover:scale-110">
                  <step.icon className="size-5 text-brand-muted" />
                </div>
                <div className="shadow-brand-tooltip mt-3 w-52 rounded-xl border border-brand-subtle bg-black/65 p-3 text-center backdrop-blur-sm transition duration-300 group-hover:border-brand-medium group-hover:bg-black/85">
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
                className="shadow-brand-card-hover rounded-2xl border border-brand-medium bg-black/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-strong hover:bg-black/60"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-brand-strong bg-brand-frost transition duration-300 hover:scale-105 hover:border-brand-medium">
                  <step.icon className="size-4.5 text-brand-muted" />
                </div>
                <h4 className="text-base font-semibold text-zinc-100">{step.title}</h4>
                <p className="mt-1.5 text-sm text-zinc-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[90rem] px-4 sm:px-6 md:mt-20">
        <div className="mb-9 sm:mb-11">
          <div className={`${sectionLabelChipClassName} mx-auto mb-5`}>Why Choose LogozoDev?</div>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            More Than Just a Service Provider
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-brand-medium bg-gradient-brand-card-deep p-5 text-center">
                <div className="mx-auto inline-flex size-10 items-center justify-center rounded-full border border-brand-medium bg-brand-frost shadow-brand-icon">
                  <item.icon className="size-5 text-[var(--brand)]" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 mb-9 sm:mt-24 sm:mb-11">
          <div className={`${sectionLabelChipClassName} mx-auto mb-5 -translate-y-1`}>Client Testimonials</div>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            What clients say about LogozoDev
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white sm:text-lg">
            Strong delivery and practical communication are why clients trust us with critical business projects.
          </p>
        </div>
        <TestimonialsCarousel items={testimonials} />
      </section>
    </>
  )
}
