import { PageContainer, sectionLabelChipClassName } from '@/components/page-sections'

const faqs = [
  { question: '1. What services does LogozoDev provide?', answer: 'We provide complete IT solutions including website development, POS systems, graphic design and branding, and custom software solutions tailored to business needs.' },
  { question: '2. Do you work with small businesses?', answer: 'Yes. We mainly work with small and growing businesses, helping them build a strong digital presence and improve their operations.' },
  { question: '3. Do you offer custom solutions?', answer: 'Absolutely. Every business is different, so we create custom solutions based on your specific requirements rather than using generic templates.' },
  { question: '4. How long does it take to complete a project?', answer: 'Project timelines depend on scope and complexity. A simple website may take a few days to weeks, while larger systems like POS or custom software may take longer.' },
  { question: '5. What is your pricing structure?', answer: 'Pricing varies depending on the project. We provide clear quotations based on your requirements before starting any work.' },
  { question: '6. Do I need to pay upfront?', answer: 'Yes, we usually require an initial payment before starting the project, with the remaining balance paid in agreed milestones.' },
  { question: '7. Do you provide revisions?', answer: 'Yes, we offer reasonable revisions based on the agreed project scope to ensure you are satisfied with the final result.' },
  { question: '8. Will my website be mobile-friendly?', answer: 'Yes. All websites we build are fully responsive and optimized for mobile, tablet, and desktop devices.' },
  { question: '9. Do you provide support after project delivery?', answer: 'Yes, we offer support and maintenance options after delivery. We can also assist with updates and improvements when needed.' },
  { question: '10. Can you redesign my existing website?', answer: 'Yes, we can redesign and improve your current website to make it more modern, user-friendly, and effective.' },
  { question: '11. Do you provide hosting and domain services?', answer: 'We can guide you in choosing the right hosting and domain, and assist with setup if needed.' },
  { question: '12. How can I start a project with LogozoDev?', answer: 'You can contact us via WhatsApp, phone, or email. Share your requirements, and we will guide you through the process step by step.' },
  { question: '13. Where are you located?', answer: 'We are based in Sri Lanka and provide services remotely to clients across the country.' },
  { question: '14. How can I contact you?', answer: 'Email: hello@logozodev.com | Phone: +94 74 152 5537' },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen text-white">
      <PageContainer>
        <main className="mx-auto mt-8 w-full max-w-[84rem] px-4 sm:px-6 md:mt-10">
          <section className="mx-auto max-w-4xl text-center">
            <p className={`${sectionLabelChipClassName} mx-auto mb-4`}>FAQ</p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-6xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-400 sm:text-lg">Find answers to common questions about our services, process, and support.</p>
          </section>
          <section className="mx-auto mt-12 max-w-5xl space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-brand-subtle bg-brand-frost p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-zinc-100 sm:text-xl">{faq.question}</h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-400">{faq.answer}</p>
              </article>
            ))}
          </section>
          <section className="mx-auto mt-12 max-w-4xl rounded-3xl border panel-glass p-6 text-center sm:p-8 md:mt-14 md:p-10">
            <h3 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">Still have questions?</h3>
            <p className="mt-3 text-base text-zinc-400">Feel free to contact us — we are happy to help.</p>
            <div className="mt-5 space-y-1 text-base text-zinc-300">
              <p>Email: hello@logozodev.com</p>
              <p>Phone: +94 74 152 5537</p>
            </div>
          </section>
        </main>
      </PageContainer>
    </div>
  )
}
