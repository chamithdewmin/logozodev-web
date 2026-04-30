import { useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setCount(value)
      return
    }

    let frameId = 0
    const start = performance.now()
    const duration = 1200

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(progress * value))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
