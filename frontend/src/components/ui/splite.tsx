import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import type { Application, SPEObject } from '@splinetool/runtime'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

const HEAD_NAME_HINTS = ['Head', 'head', 'Neck', 'neck', 'RobotHead', 'Robot_Head', 'Face', 'face', 'Helmet', 'helmet']

function findLikelyHead(spline: Application): SPEObject | undefined {
  for (const name of HEAD_NAME_HINTS) {
    const obj = spline.findObjectByName(name)
    if (obj) return obj
  }
  const all = spline.getAllObjects()
  return all.find((o) => /head|neck|face|helmet/i.test(o.name))
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const splineAppRef = useRef<Application | null>(null)
  const headRef = useRef<SPEObject | null>(null)
  const baseRotRef = useRef<{ x: number; y: number; z: number } | null>(null)
  const [canRenderScene, setCanRenderScene] = useState(false)
  const [headTracking, setHeadTracking] = useState(false)

  useEffect(() => {
    setHeadTracking(false)
    splineAppRef.current = null
    headRef.current = null
    baseRotRef.current = null
  }, [scene])

  useEffect(() => {
    const isLowPowerDevice =
      window.matchMedia('(max-width: 767px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isLowPowerDevice) return

    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        setCanRenderScene(true)
        observer.disconnect()
      },
      { rootMargin: '250px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const handleSplineLoad = useCallback((app: Application) => {
    splineAppRef.current = app
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const head = findLikelyHead(app)
    if (!head) return

    headRef.current = head
    baseRotRef.current = {
      x: head.rotation.x,
      y: head.rotation.y,
      z: head.rotation.z,
    }
    setHeadTracking(true)
  }, [])

  useEffect(() => {
    if (!headTracking) return

    const el = containerRef.current
    const app = splineAppRef.current
    const head = headRef.current
    const base = baseRotRef.current
    if (!el || !app || !head || !base) return

    let rafId = 0
    let pending: { nx: number; ny: number } | null = null

    const apply = () => {
      rafId = 0
      if (!pending) return
      const { nx, ny } = pending
      pending = null

      const gainY = 1.05
      const gainX = 0.65
      const targetY = base.y + nx * gainY
      const targetX = base.x - ny * gainX
      const follow = 0.58

      head.rotation.y += (targetY - head.rotation.y) * follow
      head.rotation.x += (targetX - head.rotation.x) * follow

      const maxY = 0.95
      const maxX = 0.55
      head.rotation.y = Math.max(base.y - maxY, Math.min(base.y + maxY, head.rotation.y))
      head.rotation.x = Math.max(base.x - maxX, Math.min(base.x + maxX, head.rotation.x))

      app.requestRender()
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      let nx = (e.clientX - cx) / Math.max(rect.width / 2, 1)
      let ny = (e.clientY - cy) / Math.max(rect.height / 2, 1)
      nx = Math.max(-1, Math.min(1, nx))
      ny = Math.max(-1, Math.min(1, ny))
      pending = { nx, ny }
      if (!rafId) rafId = requestAnimationFrame(apply)
    }

    el.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      el.removeEventListener('mousemove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [headTracking])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {canRenderScene ? (
        <Suspense fallback={<div className="h-full w-full bg-black" aria-hidden />}>
          <Spline scene={scene} className="h-full w-full" onLoad={handleSplineLoad}>
            <div className="h-full w-full bg-black" aria-hidden />
          </Spline>
        </Suspense>
      ) : (
        <div className="h-full w-full bg-black" aria-hidden />
      )}
    </div>
  )
}
