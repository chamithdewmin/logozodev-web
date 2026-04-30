import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reduceMotion) return
    if (!window.matchMedia('(pointer:fine)').matches) return

    setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9998] h-3 w-3 rounded-full bg-white/85 mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: 'spring', stiffness: 450, damping: 35, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9997] h-8 w-8 rounded-full border border-white/35"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: 'spring', stiffness: 190, damping: 22, mass: 0.6 }}
      />
    </>
  )
}
