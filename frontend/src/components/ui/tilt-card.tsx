import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        if (!ref.current || reduceMotion) return
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const rx = (0.5 - y) * 6
        const ry = (x - 0.5) * 7
        ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
      }}
      onMouseLeave={() => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
      }}
      style={{ transition: 'transform 220ms ease-out' }}
    >
      {children}
    </div>
  )
}
