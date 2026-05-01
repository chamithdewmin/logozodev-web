import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import type { WorkProject } from '@/types/work-project'
import { sectionLabelChipClassName } from '@/components/page-sections'
import { cn } from '@/lib/utils'

type WorkProjectModalProps = {
  project: WorkProject | null
  onClose: () => void
}

export function WorkProjectModal({ project, onClose }: WorkProjectModalProps) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [project])

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
        >
          <button type="button" className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-label="Close modal" onClick={onClose} />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-brand-subtle bg-zinc-950 shadow-2xl"
          >
            <div className="flex max-h-[90vh] flex-col overflow-y-auto overscroll-contain">
              <div className="relative shrink-0">
                <img src={project.coverImageUrl} alt="" className="aspect-[21/9] min-h-[140px] w-full object-cover sm:aspect-[2.2/1]" width={1200} height={520} />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="space-y-8 p-5 sm:p-8">
                <header className="space-y-4">
                  <p className={cn(sectionLabelChipClassName, 'w-fit')}>Case Study</p>
                  <h2 id="work-project-modal-title" className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {project.projectName}
                  </h2>
                  <p className="text-lg text-white/65">{project.shortTagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.serviceChips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-lg border border-[color-mix(in_srgb,var(--brand)_28%,transparent)] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] px-2.5 py-1 text-xs font-medium text-brand-muted"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </header>

                <dl className="grid gap-4 rounded-2xl border border-brand-subtle bg-zinc-900/50 p-4 sm:grid-cols-3 sm:p-5">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-brand-muted">Client</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{project.clientType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-brand-muted">Service</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{project.serviceType}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-xs font-medium uppercase tracking-wide text-brand-muted">Outcome</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{project.result}</dd>
                  </div>
                </dl>

                <section className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-white">Overview</h3>
                  <p className="text-base leading-relaxed text-white/80">{project.overview}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-white">The Challenge</h3>
                  <p className="text-base leading-relaxed text-white/80">{project.challenge}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-white">Our Approach</h3>
                  <p className="text-base leading-relaxed text-white/80">{project.approach}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-white">The Outcome</h3>
                  <p className="text-base leading-relaxed text-white/80">{project.outcome}</p>
                  {project.resultMetric ? (
                    <p className="rounded-xl border border-[color-mix(in_srgb,var(--brand)_35%,transparent)] bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] px-4 py-3 text-sm font-medium text-brand-muted">
                      {project.resultMetric}
                    </p>
                  ) : null}
                </section>

                {project.gallery.length > 0 ? (
                  <section className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-white">Gallery</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {project.gallery.map((item, idx) => (
                        <figure key={`${item.src}-${idx}`} className="overflow-hidden rounded-2xl border border-brand-subtle bg-zinc-900/40">
                          <img src={item.src} alt={item.caption ?? ''} className="aspect-[4/3] w-full object-cover" width={800} height={600} />
                          {item.caption ? <figcaption className="px-3 py-2 text-xs text-white/55">{item.caption}</figcaption> : null}
                        </figure>
                      ))}
                    </div>
                  </section>
                ) : null}

                <footer className="rounded-2xl border border-brand-subtle bg-gradient-brand-card p-6 text-center">
                  <p className="font-heading text-lg font-semibold text-white">Want a similar project?</p>
                  <p className="mt-2 text-sm text-white/70">Tell us about your goals and we will map a practical build plan.</p>
                  <Link to="/contact-us" className="btn-primary-site btn-primary-site-brand mt-6 inline-flex" onClick={onClose}>
                    Discuss Your Project
                  </Link>
                </footer>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
