import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canRenderScene, setCanRenderScene] = useState(false)

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

  return (
    <div ref={containerRef} className={className}>
      {canRenderScene ? (
        <Suspense
          fallback={
            <div className="h-full w-full bg-black" aria-hidden />
          }
        >
          <Spline scene={scene} className="h-full w-full">
            <div className="h-full w-full bg-black" aria-hidden />
          </Spline>
        </Suspense>
      ) : (
        <div className="h-full w-full bg-black" aria-hidden />
      )}
    </div>
  )
}
