import { ArrowUpRight } from 'lucide-react'
import type { WorkProject } from '@/types/work-project'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/logozodev-web-logo.png'

type WorkProjectCardProps = {
  project: WorkProject
  onOpen: () => void
}

export function WorkProjectCard({ project, onOpen }: WorkProjectCardProps) {
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
      <article
        className={cn(
          'relative overflow-hidden rounded-3xl border border-brand-subtle bg-zinc-950/95 shadow-brand-card-hover transition-[transform,box-shadow] duration-200',
          'hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgb(255_255_255_/0.08)]',
        )}
      >
        <div className="relative">
          <img
            src={project.coverImageUrl}
            alt=""
            width={1200}
            height={800}
            className="aspect-[5/4] w-full object-cover sm:aspect-[11/9]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-zinc-950" aria-hidden />
        </div>
        <div className="relative px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
          <img src={logoUrl} alt="LogozoDev" className="h-6 w-auto opacity-90" />
          <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white">{project.projectName}</h3>
          <p className="mt-1 text-base text-white/60">{project.shortTagline}</p>
          <div className="mt-5 flex flex-wrap gap-2 pr-16">
            {project.serviceChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-lg border border-[color-mix(in_srgb,var(--brand)_28%,transparent)] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] px-2.5 py-1 text-xs font-medium text-brand-muted"
              >
                {chip}
              </span>
            ))}
          </div>
          <span
            className="absolute bottom-3 right-3 grid size-12 place-items-center rounded-full border border-white/14 bg-black transition-transform duration-200 group-hover:rotate-12"
            aria-hidden
          >
            <ArrowUpRight className="size-5 text-white" strokeWidth={2} />
          </span>
        </div>
      </article>
    </button>
  )
}
