import { PageContainer } from '@/components/page-sections'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <main className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6">
          <section className="rounded-3xl border panel-glass p-6 sm:p-8 md:p-10">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-zinc-300 sm:text-base">Effective Date: [Add Date]</p>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Welcome to LogozoDev. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
            <div className="mt-8 space-y-8 text-zinc-300">
              <section><h2 className="text-xl font-semibold text-white">1. Information We Collect</h2><p className="mt-3">We may collect the following information:</p><ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400"><li>Name</li><li>Email address</li><li>Phone number</li><li>Project details or messages you send</li><li>Basic website usage data (cookies, analytics)</li></ul></section>
              <section><h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2><p className="mt-3">We use your information to:</p><ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400"><li>Respond to inquiries and provide services</li><li>Communicate about your project</li><li>Improve our website and services</li><li>Send updates (only if you agree)</li></ul></section>
              <section><h2 className="text-xl font-semibold text-white">3. Data Protection</h2><p className="mt-3 text-zinc-400">We take reasonable steps to protect your personal information. However, no method of transmission over the internet is 100% secure.</p></section>
              <section><h2 className="text-xl font-semibold text-white">4. Sharing of Information</h2><p className="mt-3">We do NOT sell or share your personal information with third parties, except:</p><ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400"><li>When required by law</li><li>To deliver services (if needed)</li></ul></section>
              <section><h2 className="text-xl font-semibold text-white">5. Cookies</h2><p className="mt-3 text-zinc-400">Our website may use cookies to improve user experience and analyze traffic.</p></section>
              <section><h2 className="text-xl font-semibold text-white">6. Third-Party Services</h2><p className="mt-3 text-zinc-400">We may use tools like Google Analytics or hosting services that collect basic usage data.</p></section>
              <section><h2 className="text-xl font-semibold text-white">7. Your Rights</h2><p className="mt-3">You can request to:</p><ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400"><li>Access your data</li><li>Correct your data</li><li>Delete your data</li></ul><p className="mt-3 text-zinc-400">Contact us anytime for these requests.</p></section>
              <section><h2 className="text-xl font-semibold text-white">8. Contact Us</h2><p className="mt-3 text-zinc-400">If you have any questions about this Privacy Policy, contact us:</p><p className="mt-2 text-zinc-300">Email: hello@logozodev.com</p><p className="mt-1 text-zinc-300">Phone: +94 74 152 5537</p></section>
              <section><h2 className="text-xl font-semibold text-white">9. Updates</h2><p className="mt-3 text-zinc-400">We may update this policy from time to time. Changes will be posted on this page.</p></section>
              <section className="border-t border-brand-subtle pt-6 text-zinc-400"><p className="font-medium text-zinc-300">LogozoDev</p><p>Tissamaharama, Sri Lanka</p><p>Serving clients across Sri Lanka remotely</p></section>
            </div>
          </section>
        </main>
      </PageContainer>
    </div>
  )
}
