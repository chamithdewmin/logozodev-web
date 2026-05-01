const easeOutQuint = (t: number) => 1 - (1 - t) ** 5

function flash(el: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  el.setAttribute('data-flash', 'true')
  window.setTimeout(() => el.removeAttribute('data-flash'), 800)
}

/**
 * Smooth-scroll to an element by id (fixed header offset).
 * Cancels if the user scrolls, touches, or presses Escape mid-flight.
 */
export function smoothScrollToId(id: string, offsetPx = 112, durationMs = 520): void {
  const el = document.getElementById(id)
  if (!el) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offsetPx)

  if (reduce) {
    window.scrollTo({ top: targetY, left: 0, behavior: 'auto' })
    return
  }

  const startY = window.scrollY
  const delta = targetY - startY
  const start = performance.now()
  let cancelled = false
  let rafId = 0

  const cancel = () => {
    cancelled = true
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
    window.removeEventListener('keydown', onKey)
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cancel()
  }

  window.addEventListener('wheel', cancel, { passive: true })
  window.addEventListener('touchstart', cancel, { passive: true })
  window.addEventListener('keydown', onKey)

  const step = (now: number) => {
    if (cancelled) {
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', onKey)
      return
    }
    const t = Math.min(1, (now - start) / durationMs)
    window.scrollTo(0, startY + delta * easeOutQuint(t))
    if (t < 1) {
      rafId = requestAnimationFrame(step)
    } else {
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', onKey)
      flash(el)
    }
  }

  rafId = requestAnimationFrame(step)
}
