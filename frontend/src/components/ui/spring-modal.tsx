import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function SpringModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" className="absolute inset-0 bg-black/65 backdrop-blur-sm" aria-label="Close modal overlay" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-white/18 bg-zinc-950 p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
            <div className="mt-3 text-zinc-400">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
