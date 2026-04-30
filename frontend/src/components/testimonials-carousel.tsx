import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type TestimonialItem = {
  quote: string
  author: string
}

export function TestimonialsCarousel({ items }: { items: TestimonialItem[] }) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const len = Math.max(items.length, 1)

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + len) % len)
    },
    [len]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const btnClass =
    'inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/55 bg-black/55 text-white shadow-sm backdrop-blur-sm transition-colors hover:border-white hover:bg-black/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-40'

  return (
    <div className="relative">
      <div className="overflow-hidden pb-1">
        <div
          className={cn('flex', !reduceMotion && 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]')}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <article
              key={`${item.author}-${i}`}
              className="w-full shrink-0 px-1 sm:px-6 md:px-10"
              aria-hidden={i !== index}
            >
              <div className="mx-auto max-w-2xl rounded-2xl border border-brand-subtle bg-gradient-brand-card p-6 md:p-8">
                <MessageSquareQuote className="mb-5 size-5 text-[#5DD62C]" aria-hidden />
                <p className="text-base leading-relaxed text-white md:text-lg">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm uppercase tracking-wide text-white">{item.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <button type="button" className={btnClass} aria-label="Previous review" onClick={() => go(-1)}>
          <ChevronLeft className="size-5" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${len}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/40'
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button type="button" className={btnClass} aria-label="Next review" onClick={() => go(1)}>
          <ChevronRight className="size-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
