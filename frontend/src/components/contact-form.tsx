import { useState } from 'react'
import { useSiteAlert } from '@/components/site-alert-provider'
import { validateEmail, validateMinLength, validateRequired } from '@/lib/form-validation'
import { cn } from '@/lib/utils'

const fieldClass = (invalid: boolean) =>
  cn('form-field-dark mt-2 w-full rounded-xl px-4 py-3 text-base text-zinc-100', invalid && 'border-red-400/70 ring-1 ring-red-400/40')

export function ContactForm() {
  const { showAlert } = useSiteAlert()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const runValidate = (): boolean => {
    const next: Record<string, string | undefined> = {}
    next.name = validateRequired(name, 'Name is required.') ?? validateMinLength(name, 2, 'Name')
    next.email = validateEmail(email)
    next.details = validateRequired(details, 'Please describe your project.') ?? validateMinLength(details, 20, 'Project details')
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
      title: 'Message ready to send',
      message: 'Thanks for reaching out. We will get back to you within one business day.',
    })
    setName('')
    setCompany('')
    setEmail('')
    setDetails('')
    setErrors({})
    setTouched({})
    setAttemptedSubmit(false)
  }

  return (
    <form className="mt-7 space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-base text-white">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => onBlur('name')}
            className={fieldClass(showFieldError('name'))}
            placeholder="Your full name"
            aria-invalid={showFieldError('name')}
            aria-describedby={showFieldError('name') ? 'contact-name-err' : undefined}
          />
          {showFieldError('name') ? (
            <p id="contact-name-err" className="mt-1.5 text-sm text-red-400" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="text-base text-white">
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onBlur={() => onBlur('company')}
            className={fieldClass(false)}
            placeholder="Company name (optional)"
          />
        </div>
      </div>
      <div className="block text-base text-white">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => onBlur('email')}
          className={fieldClass(showFieldError('email'))}
          placeholder="you@company.com"
          aria-invalid={showFieldError('email')}
          aria-describedby={showFieldError('email') ? 'contact-email-err' : undefined}
        />
        {showFieldError('email') ? (
          <p id="contact-email-err" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="block text-base text-white">
        <label htmlFor="contact-details">Project details</label>
        <textarea
          id="contact-details"
          name="details"
          rows={5}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          onBlur={() => onBlur('details')}
          className={fieldClass(showFieldError('details'))}
          placeholder="Tell us about your product, timeline, and goals."
          aria-invalid={showFieldError('details')}
          aria-describedby={showFieldError('details') ? 'contact-details-err' : undefined}
        />
        {showFieldError('details') ? (
          <p id="contact-details-err" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.details}
          </p>
        ) : null}
      </div>
      <button type="submit" className="btn-primary-site min-h-11">
        Send Message
      </button>
    </form>
  )
}
