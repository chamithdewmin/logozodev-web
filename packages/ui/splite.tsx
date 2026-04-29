'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const [canMount, setCanMount] = useState(false)

  useEffect(() => {
    const node = hostRef.current
    if (!node || canMount) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCanMount(true)
          observer.disconnect()
        }
      },
      { rootMargin: '250px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [canMount])

  return (
    <div ref={hostRef} className={className}>
      {canMount ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Spline scene={scene} className={className} />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  )
}
