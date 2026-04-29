'use client'

import Image from 'next/image'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './logo-loop.css'

type LogoNodeItem = {
  node: React.ReactNode
  title: string
  href?: string
  ariaLabel?: string
}

type LogoImageItem = {
  src: string
  alt?: string
  href?: string
  title?: string
  width?: number
  height?: number
}

type LogoItem = LogoNodeItem | LogoImageItem

type LogoLoopProps = {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
}

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 }

const toCssLength = (value?: number | string) => (typeof value === 'number' ? `${value}px` : value)

function isNodeItem(item: LogoItem): item is LogoNodeItem {
  return 'node' in item
}

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Trusted company logos',
    className,
    style,
  }: LogoLoopProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const seqRef = useRef<HTMLUListElement>(null)

    const [seqWidth, setSeqWidth] = useState(0)
    const [seqHeight, setSeqHeight] = useState(0)
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES)
    const [isHovered, setIsHovered] = useState(false)

    const rafRef = useRef<number | null>(null)
    const lastTimestampRef = useRef<number | null>(null)
    const offsetRef = useRef(0)
    const velocityRef = useRef(0)

    const isVertical = direction === 'up' || direction === 'down'

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed)
      const axisDirection = isVertical ? (direction === 'up' ? 1 : -1) : direction === 'left' ? 1 : -1
      const signed = speed < 0 ? -1 : 1
      return magnitude * axisDirection * signed
    }, [speed, direction, isVertical])

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed
      if (pauseOnHover === true) return 0
      return undefined
    }, [hoverSpeed, pauseOnHover])

    const updateDimensions = useCallback(() => {
      const container = containerRef.current
      const seq = seqRef.current
      if (!container || !seq) return

      const seqRect = seq.getBoundingClientRect()
      const containerWidth = container.clientWidth

      if (isVertical) {
        const height = Math.ceil(seqRect.height)
        if (height > 0) {
          setSeqHeight(height)
          const viewport = container.clientHeight || height
          const copiesNeeded = Math.ceil(viewport / height) + ANIMATION_CONFIG.COPY_HEADROOM
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded))
        }
      } else {
        const widthPx = Math.ceil(seqRect.width)
        if (widthPx > 0) {
          setSeqWidth(widthPx)
          const copiesNeeded = Math.ceil(containerWidth / widthPx) + ANIMATION_CONFIG.COPY_HEADROOM
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded))
        }
      }
    }, [isVertical])

    useEffect(() => {
      updateDimensions()
      const handleResize = () => updateDimensions()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [updateDimensions, logos, gap, logoHeight, width])

    useEffect(() => {
      const seqSize = isVertical ? seqHeight : seqWidth
      const track = trackRef.current
      if (!track) return

      const animate = (timestamp: number) => {
        if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp
        const dt = Math.max(0, timestamp - lastTimestampRef.current) / 1000
        lastTimestampRef.current = timestamp

        const target = effectiveHoverSpeed !== undefined && isHovered ? effectiveHoverSpeed : targetVelocity
        const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU)
        velocityRef.current += (target - velocityRef.current) * easing

        if (seqSize > 0) {
          let next = offsetRef.current + velocityRef.current * dt
          next = ((next % seqSize) + seqSize) % seqSize
          offsetRef.current = next

          track.style.transform = isVertical
            ? `translate3d(0, ${-offsetRef.current}px, 0)`
            : `translate3d(${-offsetRef.current}px, 0, 0)`
        }

        rafRef.current = requestAnimationFrame(animate)
      }

      rafRef.current = requestAnimationFrame(animate)
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
        lastTimestampRef.current = null
      }
    }, [targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical])

    const cssVars = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    )

    const rootClass = [
      'logoloop',
      isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
      fadeOut ? 'logoloop--fade' : '',
      scaleOnHover ? 'logoloop--scale-hover' : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div
        ref={containerRef}
        className={rootClass}
        role="region"
        aria-label={ariaLabel}
        style={{ width: toCssLength(width) ?? '100%', ...cssVars, ...style }}
      >
        <div
          ref={trackRef}
          className="logoloop__track"
          onMouseEnter={() => effectiveHoverSpeed !== undefined && setIsHovered(true)}
          onMouseLeave={() => effectiveHoverSpeed !== undefined && setIsHovered(false)}
        >
          {Array.from({ length: copyCount }).map((_, copyIndex) => (
            <ul
              key={`copy-${copyIndex}`}
              ref={copyIndex === 0 ? seqRef : undefined}
              className="logoloop__list"
              role="list"
              aria-hidden={copyIndex > 0}
            >
              {logos.map((item, itemIndex) => (
                <li key={`${copyIndex}-${itemIndex}`} className="logoloop__item" role="listitem">
                  {isNodeItem(item) ? (
                    item.href ? (
                      <a
                        className="logoloop__link"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={item.ariaLabel ?? item.title}
                      >
                        <span className="logoloop__node">{item.node}</span>
                      </a>
                    ) : (
                      <span className="logoloop__node">{item.node}</span>
                    )
                  ) : item.href ? (
                    <a
                      className="logoloop__link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.alt ?? item.title ?? 'logo link'}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt ?? ''}
                        width={item.width ?? 140}
                        height={item.height ?? 36}
                        sizes="140px"
                        draggable={false}
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt ?? ''}
                      width={item.width ?? 140}
                      height={item.height ?? 36}
                      sizes="140px"
                      draggable={false}
                    />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    )
  }
)

LogoLoop.displayName = 'LogoLoop'

export default LogoLoop
