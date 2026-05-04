import { Link, useSearchParams } from 'react-router-dom'
import { FadeUp } from '@/components/motion/reveal'
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
        <main className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6">
          <FadeUp>
            <section className="rounded-3xl border panel-glass p-6 sm:p-8 md:p-10">
            <p className="inline-flex w-fit items-center rounded-full border border-brand-subtle bg-brand-frost px-3.5 py-1 text-sm text-brand-muted sm:text-base">Coming Soon</p>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{itemName} is coming soon</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              We are currently preparing this page with detailed content and practical resources for our website. Meanwhile, you can explore our live services or contact us directly for support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary-site">
                View Services
              </Link>
              <Link to="/contact-us" className="btn-secondary-site">
                Contact Us
              </Link>
            </div>
          </section>
          </FadeUp>
        </main>
      </PageContainer>
    </div>
  )
}
