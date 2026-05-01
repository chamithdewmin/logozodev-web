import { useState } from 'react'
import { useSiteAlert } from '@/components/site-alert-provider'
import {
  validateCvFile,
  validateEmail,
  validateMinLength,
  validatePhone,
  validateRequired,
  validateOptionalUrl,
} from '@/lib/form-validation'
import { cn } from '@/lib/utils'

const fieldClass = (invalid: boolean) =>
  cn('form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100', invalid && 'border-red-400/70 ring-1 ring-red-400/40')

export function CareersApplicationForm() {
  const { showAlert } = useSiteAlert()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [cv, setCv] = useState<File | undefined>()
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [cvKey, setCvKey] = useState(0)

  const runValidate = (): boolean => {
    const next: Record<string, string | undefined> = {}
    next.fullName = validateRequired(fullName, 'Full name is required.') ?? validateMinLength(fullName, 2, 'Full name')
    next.email = validateEmail(email)
    next.phone = validatePhone(phone, true)
    next.position = validateRequired(position, 'Position is required.')
    next.portfolio = validateOptionalUrl(portfolio)
    next.cv = validateCvFile(cv, true, 10)
    next.message = validateRequired(message, 'Please write a short message.') ?? validateMinLength(message, 20, 'Message')
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const onBlur = (key: string) => setTouched((t) => ({ ...t, [key]: true }))

  const showFieldError = (key: string) => Boolean(errors[key] && (touched[key] || attemptedSubmit))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttemptedSubmit(true)
    if (!runValidate()) {
      showAlert({
        variant: 'error',
        title: 'Check the form',
        message: 'Fix the highlighted fields and try again.',
      })
      return
    }
    showAlert({
      variant: 'success',
      title: 'Application received',
      message: 'Thanks for applying. If your profile matches an open role, we will contact you by email.',
    })
    setFullName('')
    setEmail('')
    setPhone('')
    setPosition('')
    setPortfolio('')
    setCv(undefined)
    setMessage('')
    setErrors({})
    setTouched({})
    setAttemptedSubmit(false)
    setCvKey((k) => k + 1)
  }

  return (
    <form className="mt-7 space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-base text-zinc-300">
          <label htmlFor="careers-name">Full Name</label>
          <input
            id="careers-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => onBlur('fullName')}
            className={fieldClass(showFieldError('fullName'))}
            placeholder="Your full name"
            aria-invalid={showFieldError('fullName')}
            aria-describedby={showFieldError('fullName') ? 'careers-name-err' : undefined}
          />
          {showFieldError('fullName') ? (
            <p id="careers-name-err" className="mt-1.5 text-sm text-red-400" role="alert">
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div className="text-base text-zinc-300">
          <label htmlFor="careers-email">Email</label>
          <input
            id="careers-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => onBlur('email')}
            className={fieldClass(showFieldError('email'))}
            placeholder="you@example.com"
            aria-invalid={showFieldError('email')}
            aria-describedby={showFieldError('email') ? 'careers-email-err' : undefined}
          />
          {showFieldError('email') ? (
            <p id="careers-email-err" className="mt-1.5 text-sm text-red-400" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-base text-zinc-300">
          <label htmlFor="careers-phone">Phone Number</label>
          <input
            id="careers-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => onBlur('phone')}
            className={fieldClass(showFieldError('phone'))}
            placeholder="+94 ..."
            aria-invalid={showFieldError('phone')}
            aria-describedby={showFieldError('phone') ? 'careers-phone-err' : undefined}
          />
          {showFieldError('phone') ? (
            <p id="careers-phone-err" className="mt-1.5 text-sm text-red-400" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div className="text-base text-zinc-300">
          <label htmlFor="careers-position">Position Applying For</label>
          <input
            id="careers-position"
            name="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            onBlur={() => onBlur('position')}
            className={fieldClass(showFieldError('position'))}
            placeholder="Frontend Developer Intern"
            aria-invalid={showFieldError('position')}
            aria-describedby={showFieldError('position') ? 'careers-position-err' : undefined}
          />
          {showFieldError('position') ? (
            <p id="careers-position-err" className="mt-1.5 text-sm text-red-400" role="alert">
              {errors.position}
            </p>
          ) : null}
        </div>
      </div>
      <div className="block text-base text-zinc-300">
        <label htmlFor="careers-portfolio">Portfolio / GitHub / Behance Link</label>
        <input
          id="careers-portfolio"
          name="portfolio"
          type="url"
          inputMode="url"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          onBlur={() => onBlur('portfolio')}
          className={fieldClass(showFieldError('portfolio'))}
          placeholder="https://..."
          aria-invalid={showFieldError('portfolio')}
          aria-describedby={showFieldError('portfolio') ? 'careers-portfolio-err' : undefined}
        />
        {showFieldError('portfolio') ? (
          <p id="careers-portfolio-err" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.portfolio}
          </p>
        ) : null}
      </div>
      <div className="block text-base text-zinc-300">
        <label htmlFor="careers-cv">Upload CV</label>
        <input
          key={cvKey}
          id="careers-cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => {
            const f = e.target.files?.[0]
            setCv(f)
          }}
          onBlur={() => onBlur('cv')}
          className={cn(
            'form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100 file:mr-3 file:rounded-md file:border file:border-white/50 file:bg-white file:px-3 file:py-1.5 file:text-base file:font-medium file:text-neutral-950 file:transition-colors hover:file:bg-zinc-100',
            showFieldError('cv') && 'border-red-400/70 ring-1 ring-red-400/40',
          )}
          aria-invalid={showFieldError('cv')}
          aria-describedby={showFieldError('cv') ? 'careers-cv-err' : undefined}
        />
        {showFieldError('cv') ? (
          <p id="careers-cv-err" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.cv}
          </p>
        ) : null}
      </div>
      <div className="block text-base text-zinc-300">
        <label htmlFor="careers-message">Short Message</label>
        <textarea
          id="careers-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => onBlur('message')}
          className={fieldClass(showFieldError('message'))}
          placeholder="Tell us about yourself and why you want to join LogozoDev."
          aria-invalid={showFieldError('message')}
          aria-describedby={showFieldError('message') ? 'careers-message-err' : undefined}
        />
        {showFieldError('message') ? (
          <p id="careers-message-err" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button type="submit" className="btn-primary-site">
        Submit Application
      </button>
    </form>
  )
}
