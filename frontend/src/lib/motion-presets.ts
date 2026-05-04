import type { Transition, Variants } from 'framer-motion'

/** Ease-out (cubic-bezier(0.22, 1, 0.36, 1)) */
export const easeOutSmooth = [0.22, 1, 0.36, 1] as const

/** Viewport: run once */
export const viewportOnce = { once: true as const, amount: 0.15 as const, margin: '0px 0px -6% 0px' as const }

/** Hero band: 0.45s–0.6s */
export const transitionHero: Transition = { duration: 0.5, ease: easeOutSmooth }

/** Sections / site-wide scroll reveals: 0.55s–0.7s */
export const transitionSection: Transition = { duration: 0.62, ease: easeOutSmooth }

/** Alias for existing imports */
export const transitionReveal = transitionSection

/** Vertical offset for scroll reveals (12–24px) */
export const fadeUpY = 18

/** Tighter offset for hero copy */
export const fadeUpYHero = 12

export const slideDistanceX = 20

/** Grid / section stagger (0.06–0.12s) */
export const staggerChildren = 0.09
export const staggerDelayChildren = 0.03

/** Hero: chip → headline block → subtext → CTA row */
export function staggerHeroColumnVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: {}, show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
  }
  return {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
  }
}

/** Hero headline word spans */
export function staggerHeroWordsVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: {}, show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
  }
  return {
    hidden: {},
    show: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
  }
}

/** Hero CTA buttons */
export function staggerHeroButtonsVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: {}, show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
  }
  return {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
  }
}

export function fadeUpVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  }
  return { hidden: { opacity: 0, y: fadeUpY }, show: { opacity: 1, y: 0 } }
}

export function fadeUpHeroVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  }
  return { hidden: { opacity: 0, y: fadeUpYHero }, show: { opacity: 1, y: 0 } }
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
  const x = direction === 'left' ? -slideDistanceX : slideDistanceX
  if (reduceMotion) {
    return { hidden: { opacity: 1, x: 0 }, show: { opacity: 1, x: 0 } }
  }
  return { hidden: { opacity: 0, x }, show: { opacity: 1, x: 0 } }
}
