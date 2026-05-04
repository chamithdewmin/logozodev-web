import type { Transition, Variants } from 'framer-motion'

/** Viewport: run once, subtle threshold for mobile-friendly triggers */
export const viewportOnce = { once: true as const, amount: 0.15 as const, margin: '0px 0px -8% 0px' as const }

/** Primary reveal: ease-out feel, ~0.65–0.7s */
export const transitionReveal: Transition = { duration: 0.68, ease: [0.16, 1, 0.3, 1] }

export const fadeUpY = 28

export const staggerChildren = 0.13
export const staggerDelayChildren = 0.06

export function fadeUpVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  }
  return { hidden: { opacity: 0, y: fadeUpY }, show: { opacity: 1, y: 0 } }
}

export function fadeInVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1 }, show: { opacity: 1 } }
  }
  return { hidden: { opacity: 0 }, show: { opacity: 1 } }
}

export function staggerContainerVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: {},
      show: { transition: { staggerChildren: 0, delayChildren: 0 } },
    }
  }
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerChildren, delayChildren: staggerDelayChildren },
    },
  }
}

export function slideFromXVariants(reduceMotion: boolean | null, direction: 'left' | 'right'): Variants {
  const x = direction === 'left' ? -32 : 32
  if (reduceMotion) {
    return { hidden: { opacity: 1, x: 0 }, show: { opacity: 1, x: 0 } }
  }
  return { hidden: { opacity: 0, x }, show: { opacity: 1, x: 0 } }
}
