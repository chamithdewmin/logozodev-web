import { SiNextdotjs, SiReact, SiShopify, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si'
import LogoLoop from '@/components/logo-loop'
import { sectionLabelChipClassName } from '@/components/page-sections'

const trustedLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiStripe />, title: 'Stripe', href: 'https://stripe.com' },
  { node: <SiShopify />, title: 'Shopify', href: 'https://shopify.com' },
]

export function TrustedLogosSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[84rem] px-4 sm:px-6 md:mt-24">
      <p className={`${sectionLabelChipClassName} mx-auto`}>Trusted by modern businesses</p>
      <h3 className="mt-4 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
        Brands We&apos;ve Worked With
      </h3>
      <div className="mt-8 sm:mt-10">
        <div className="overflow-hidden rounded-xl bg-black px-3 sm:px-6 md:px-8">
          <div className="text-zinc-300">
            <LogoLoop
              logos={trustedLogos}
              speed={90}
              direction="left"
              logoHeight={44}
              gap={42}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Trusted company and technology logos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
