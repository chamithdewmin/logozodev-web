import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, AlertCircle as AlertCircleIcon, CircleCheck, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type SiteAlertVariant = 'success' | 'error' | 'info' | 'warning'

export type SiteAlertPayload = {
  variant: SiteAlertVariant
  title: string
  message?: string
}

type AlertItem = SiteAlertPayload & { id: string }

const AUTO_DISMISS_MS = 6200

const SiteAlertContext = createContext<{ showAlert: (p: SiteAlertPayload) => void } | null>(null)

export function useSiteAlert() {
  const ctx = useContext(SiteAlertContext)
  if (!ctx) throw new Error('useSiteAlert must be used within SiteAlertProvider')
  return ctx
}

export function SiteAlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertItem[]>([])
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  useEffect(() => {
    const m = timers.current
    return () => {
      m.forEach((t) => clearTimeout(t))
      m.clear()
    }
  }, [])

  const dismiss = useCallback((id: string) => {
    const t = timers.current.get(id)
    if (t) {
      clearTimeout(t)
      timers.current.delete(id)
    }
    setAlerts((prev) => prev.filter((a) => a.id !== id))
  }, [])

  const showAlert = useCallback(
    (p: SiteAlertPayload) => {
      const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : String(Date.now())
      setAlerts((prev) => [...prev, { ...p, id }])
      const to = window.setTimeout(() => dismiss(id), AUTO_DISMISS_MS)
      timers.current.set(id, to)
    },
    [dismiss],
  )

  const value = useMemo(() => ({ showAlert }), [showAlert])

  return (
    <SiteAlertContext.Provider value={value}>
      {children}
      <AlertStackPortal alerts={alerts} onDismiss={dismiss} />
    </SiteAlertContext.Provider>
  )
}

function AlertStackPortal({ alerts, onDismiss }: { alerts: AlertItem[]; onDismiss: (id: string) => void }) {
  if (typeof document === 'undefined') return null
  return createPortal(<AlertToastStack alerts={alerts} onDismiss={onDismiss} />, document.body)
}

const toastShell =
  'pointer-events-auto overflow-hidden rounded-xl border shadow-[0_12px_40px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-white/[0.04]'

function variantTone(variant: SiteAlertVariant) {
  switch (variant) {
    case 'success':
      return cn(
        toastShell,
        'border-white/[0.08] bg-zinc-950/[0.94] border-l-[3px] border-l-[var(--brand)]',
      )
    case 'error':
      return cn(
        toastShell,
        'border-white/[0.08] bg-zinc-950/[0.96] border-l-[3px] border-l-red-500/85',
      )
    case 'warning':
      return cn(
        toastShell,
        'border-white/[0.08] bg-zinc-950/[0.96] border-l-[3px] border-l-amber-400/85',
      )
    default:
      return cn(toastShell, 'border-white/[0.08] bg-zinc-950/[0.96] border-l-[3px] border-l-brand-muted')
  }
}

function iconBubble(variant: SiteAlertVariant) {
  switch (variant) {
    case 'success':
      return 'bg-[color-mix(in_srgb,var(--brand)_16%,transparent)] text-[var(--brand)] shadow-[inset_0_1px_0_rgb(255_255_255_/0.06)]'
    case 'error':
      return 'bg-red-500/[0.12] text-red-400 shadow-[inset_0_1px_0_rgb(255_255_255_/0.06)]'
    case 'warning':
      return 'bg-amber-500/[0.12] text-amber-300 shadow-[inset_0_1px_0_rgb(255_255_255_/0.06)]'
    default:
      return 'bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand-muted shadow-[inset_0_1px_0_rgb(255_255_255_/0.06)]'
  }
}

function AlertToastStack({ alerts, onDismiss }: { alerts: AlertItem[]; onDismiss: (id: string) => void }) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none fixed top-[5.25rem] right-4 z-[10050] flex w-[min(100vw-2rem,23.5rem)] flex-col gap-2.5 sm:right-6"
      aria-live="polite"
      aria-relevant="additions removals"
    >
      <AnimatePresence initial={false} mode="sync">
        {alerts.map((a) => (
          <motion.div
            key={a.id}
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 14, scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            className={cn(variantTone(a.variant))}
            role="alert"
          >
            <div className="flex items-start gap-3.5 pl-3 pr-2.5 py-3 sm:gap-4 sm:pl-3.5 sm:pr-3 sm:py-3.5">
              <div
                className={cn(
                  'flex size-10 shrink-0 items-center justify-center rounded-full [&>svg]:size-[1.125rem]',
                  iconBubble(a.variant),
                )}
              >
                {a.variant === 'success' ? (
                  <CircleCheck className="shrink-0" strokeWidth={2.25} aria-hidden />
                ) : a.variant === 'error' ? (
                  <AlertCircleIcon className="shrink-0" strokeWidth={2.25} aria-hidden />
                ) : a.variant === 'warning' ? (
                  <AlertTriangle className="shrink-0" strokeWidth={2.25} aria-hidden />
                ) : (
                  <Info className="shrink-0" strokeWidth={2.25} aria-hidden />
                )}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-white">{a.title}</p>
                {a.message ? (
                  <p className="mt-1 text-[0.8125rem] leading-relaxed tracking-wide text-zinc-400 sm:text-[0.84375rem]">{a.message}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => onDismiss(a.id)}
                className="-mr-1 -mt-1 flex size-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                aria-label="Dismiss"
              >
                <X className="size-[17px]" strokeWidth={2} aria-hidden />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
