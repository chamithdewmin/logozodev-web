import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  fadeInVariants,
  fadeUpVariants,
  slideFromXVariants,
  staggerContainerVariants,
  transitionReveal,
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
      transition={reduceMotion ? { duration: 0 } : { ...transitionReveal, delay }}
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
      transition={reduceMotion ? { duration: 0 } : { ...transitionReveal, delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerParentProps = {
  children: ReactNode
  className?: string
}

export function StaggerParent({ children, className }: StaggerParentProps) {
  const reduceMotion = useReducedMotion()
  const v = staggerContainerVariants(!!reduceMotion)

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
      transition={reduceMotion ? { duration: 0 } : transitionReveal}
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
      transition={reduceMotion ? { duration: 0 } : transitionReveal}
    >
      {children}
    </motion.div>
  )
}
