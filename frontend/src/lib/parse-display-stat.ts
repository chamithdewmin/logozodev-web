export type ParsedDisplayStat = { value: number; suffix: string }

/** Parse marketing stat strings for count-up (e.g. "50+", "98%", "24/7"). */
export function parseDisplayStat(raw: string): ParsedDisplayStat | null {
  const t = raw.trim()
  const plus = /^(\d+)\+$/.exec(t)
  if (plus) return { value: Number(plus[1]), suffix: '+' }
  const pct = /^(\d+)%$/.exec(t)
  if (pct) return { value: Number(pct[1]), suffix: '%' }
  if (t === '24/7') return { value: 24, suffix: '/7' }
  return null
}
