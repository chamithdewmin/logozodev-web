import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <>{children}</>

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
      }}
      onMouseLeave={() => {
        if (!ref.current) return
        ref.current.style.transform = 'translate(0px, 0px)'
      }}
      className="inline-flex transition-transform duration-200 ease-out"
    >
      {children}
    </motion.div>
  )
}
