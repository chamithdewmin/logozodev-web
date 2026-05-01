const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Looser URL check — allows localhost and paths without full protocol hacks */
export function looksLikeUrl(raw: string): boolean {
  const s = raw.trim()
  if (!s) return true
  try {
    const u = new URL(s.includes('://') ? s : `https://${s}`)
    return Boolean(u.hostname)
  } catch {
    return false
  }
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export function validateRequired(value: string, message = 'This field is required.'): string | undefined {
  if (!value.trim()) return message
}

export function validateMinLength(value: string, min: number, label: string): string | undefined {
  if (value.trim().length < min) return `${label} must be at least ${min} characters.`
}

export function validateEmail(value: string): string | undefined {
  const t = normalizeEmail(value)
  if (!t) return 'Email is required.'
  if (!EMAIL_RE.test(t)) return 'Enter a valid email address.'
}

export function validateOptionalUrl(value: string): string | undefined {
  const t = value.trim()
  if (!t) return
  if (!looksLikeUrl(t)) return 'Enter a valid URL (including https://).'
}

const PHONE_ALLOWED = /^[\d+\s()-]{8,}$/

export function validatePhone(value: string, required = false): string | undefined {
  const t = value.trim()
  if (!t && required) return 'Phone number is required.'
  if (!t && !required) return
  if (!PHONE_ALLOWED.test(t) || (t.match(/\d/g)?.length ?? 0) < 8) return 'Enter a valid phone number (at least 8 digits).'
}

const CV_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export function validateCvFile(file: File | undefined, required = true, maxMb = 10): string | undefined {
  if (!file || file.size === 0) return required ? 'Please upload your CV.' : undefined
  if (file.size > maxMb * 1024 * 1024) return `File must be under ${maxMb} MB.`
  const ext = file.name.split('.').pop()?.toLowerCase()
  const okExt = ext !== undefined && ['pdf', 'doc', 'docx'].includes(ext)
  if (!CV_TYPES.includes(file.type) && !okExt) return 'CV must be a PDF or Word document (.pdf, .doc, .docx).'
}
