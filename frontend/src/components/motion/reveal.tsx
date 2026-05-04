import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  fadeInVariants,
  fadeUpVariants,
  slideFromXVariants,
  staggerContainerVariants,
  staggerHeroColumnVariants,
  transitionSection,
  viewportOnce,
} from '@/lib/motion-presets'

type FadeUpProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const reduceMotion = useReducedMotion()
  const v = fadeUpVariants(!!reduceMotion)

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={v}
      transition={reduceMotion ? { duration: 0 } : { ...transitionSection, delay }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0 }: FadeUpProps) {
  const reduceMotion = useReducedMotion()
  const v = fadeInVariants(!!reduceMotion)

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={v}
      transition={reduceMotion ? { duration: 0 } : { ...transitionSection, delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerParentProps = {
  children: ReactNode
  className?: string
  /** Tighter timing for home hero column */
  preset?: 'default' | 'hero'
}

export function StaggerParent({ children, className, preset = 'default' }: StaggerParentProps) {
  const reduceMotion = useReducedMotion()
  const v = preset === 'hero' ? staggerHeroColumnVariants(!!reduceMotion) : staggerContainerVariants(!!reduceMotion)

  return (
    <motion.div className={cn(className)} initial="hidden" whileInView="show" viewport={viewportOnce} variants={v}>
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  const reduceMotion = useReducedMotion()
  const v = fadeUpVariants(!!reduceMotion)

  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={v}
      transition={reduceMotion ? { duration: 0 } : transitionSection}
    >
      {children}
    </motion.div>
  )
}

type SlideInXProps = {
  children: ReactNode
  className?: string
  direction: 'left' | 'right'
}

export function SlideInX({ children, className, direction }: SlideInXProps) {
  const reduceMotion = useReducedMotion()
  const v = slideFromXVariants(!!reduceMotion, direction)

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={v}
      transition={reduceMotion ? { duration: 0 } : transitionSection}
    >
      {children}
    </motion.div>
  )
}
