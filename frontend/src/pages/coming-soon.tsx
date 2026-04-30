import { Link, useSearchParams } from 'react-router-dom'
import { PageContainer } from '@/components/page-sections'

const itemLabels: Record<string, string> = {
  templates: 'Templates',
  integrations: 'Integrations',
  updates: 'Updates',
  careers: 'Careers',
  docs: 'Docs',
  guides: 'Guides',
  support: 'Support',
  'cookies-policy': 'Cookies Policy',
}

export default function ComingSoonPage() {
  const [searchParams] = useSearchParams()
  const itemKey = searchParams.get('item') ?? ''
  const itemName = itemLabels[itemKey] ?? 'This section'

  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <main className="mx-auto mt-10 w-full max-w-6xl px-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-14">
            <p className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-base text-zinc-300">Coming Soon</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl">{itemName} is coming soon</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
              We are currently preparing this page with detailed content and practical resources for our website. Meanwhile, you can explore our live services or contact us directly for support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-zinc-200">
                View Services
              </Link>
              <Link to="/contact-us" className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/[0.06]">
                Contact Us
              </Link>
            </div>
          </section>
        </main>
      </PageContainer>
    </div>
  )
}
