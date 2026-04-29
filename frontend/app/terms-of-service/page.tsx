import { PageContainer } from '@/components/page-sections'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageContainer>
        <main className="mx-auto mt-10 w-full max-w-6xl px-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Terms of Service</h1>
            <p className="mt-3 text-sm text-zinc-400">Effective Date: [Add Date]</p>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Welcome to LogozoDev. By using our website and services, you agree to the following terms:
            </p>

            <div className="mt-8 space-y-8 text-zinc-300">
              <section>
                <h2 className="text-xl font-semibold text-white">1. Services</h2>
                <p className="mt-3">LogozoDev provides IT solutions including:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Website development</li>
                  <li>POS systems</li>
                  <li>Graphic design and branding</li>
                  <li>Custom software solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">2. Project Agreement</h2>
                <p className="mt-3 text-zinc-400">
                  All projects will be discussed and confirmed before starting. Scope, pricing, and timelines will be
                  clearly agreed upon.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">3. Payments</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Payments may be required upfront or in milestones</li>
                  <li>Work may begin only after initial payment</li>
                  <li>No refunds once work has started (unless agreed)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">4. Client Responsibilities</h2>
                <p className="mt-3 text-zinc-400">Clients must:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Provide accurate information</li>
                  <li>Respond on time</li>
                  <li>Approve designs/content promptly</li>
                </ul>
                <p className="mt-3 text-zinc-400">Delays from client side may affect delivery time.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">5. Revisions</h2>
                <p className="mt-3 text-zinc-400">
                  We provide reasonable revisions based on the agreed project scope. Major changes outside scope may
                  require additional cost.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">6. Delivery</h2>
                <p className="mt-3 text-zinc-400">
                  We aim to deliver projects on time, but timelines may vary depending on:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Project complexity</li>
                  <li>Client response time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">7. Intellectual Property</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Final work belongs to the client after full payment</li>
                  <li>LogozoDev may showcase work in portfolio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">8. Limitation of Liability</h2>
                <p className="mt-3 text-zinc-400">LogozoDev is not responsible for:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
                  <li>Business losses</li>
                  <li>Data loss due to third-party services</li>
                  <li>Delays caused by external factors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">9. Termination</h2>
                <p className="mt-3 text-zinc-400">
                  We reserve the right to stop a project if terms are violated or payments are not completed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">10. Changes to Terms</h2>
                <p className="mt-3 text-zinc-400">
                  We may update these terms at any time. Continued use means acceptance of changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">11. Contact</h2>
                <p className="mt-3 text-zinc-300">Email: hello@logozodev.com</p>
                <p className="mt-1 text-zinc-300">Phone: +94 74 152 5537</p>
              </section>

              <section className="border-t border-white/10 pt-6 text-zinc-400">
                <p className="font-medium text-zinc-300">LogozoDev</p>
                <p>Tissamaharama, Sri Lanka</p>
                <p>Serving clients across Sri Lanka remotely</p>
              </section>
            </div>
          </section>
        </main>
      </PageContainer>
    </div>
  )
}
