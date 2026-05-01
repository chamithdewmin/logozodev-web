import type { AnchorHTMLAttributes } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { smoothScrollToId } from '@/lib/smooth-scroll'

export function SmoothHashLink({ href, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <a
      href={href}
      onClick={(e) => {
        if (typeof href !== 'string' || !href.startsWith('#')) {
          onClick?.(e)
          return
        }
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
          onClick?.(e)
          return
        }
        e.preventDefault()
        if (location.hash === href) {
          smoothScrollToId(href.slice(1))
        } else {
          navigate({ pathname: location.pathname, search: location.search, hash: href })
        }
        onClick?.(e)
      }}
      {...rest}
    />
  )
}
