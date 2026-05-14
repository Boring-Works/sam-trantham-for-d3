import { useEffect, useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  howCanHelp: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_FALLBACK = 'samanthatranthamd3commissioner@gmail.com'
const PHONE = '(706) 851-6623'
const PHONE_HREF = 'tel:+17068516623'
const FACEBOOK_URL = 'https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/'

const HELP_OPTIONS = [
  'I want to volunteer',
  'I want a yard sign',
  'I want to donate / host a fundraiser',
  'I have a question or concern',
  'Just saying hello',
] as const

export function Connect() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    howCanHelp: HELP_OPTIONS[0],
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  // Pre-select dropdown based on anchor (#yard-sign, #volunteer, #donate)
  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'yard-sign') setForm((p) => ({ ...p, howCanHelp: 'I want a yard sign' }))
      else if (hash === 'volunteer') setForm((p) => ({ ...p, howCanHelp: 'I want to volunteer' }))
      else if (hash === 'donate') setForm((p) => ({ ...p, howCanHelp: 'I want to donate / host a fundraiser' }))
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://forms.holstonpartners.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: 'sam-trantham',
          type: 'volunteer',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.howCanHelp,
        }),
      })
      if (!res.ok) throw new Error('Network response not ok')
      setStatus('success')
    } catch {
      const subject = encodeURIComponent(`${form.howCanHelp} from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nMessage: ${form.howCanHelp}`
      )
      window.location.href = `mailto:${EMAIL_FALLBACK}?subject=${subject}&body=${body}`
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-primary/20 px-4 py-3 bg-white text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors'

  return (
    <section id="connect" className="bg-surface text-text px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">

        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Three Ways to Help
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary text-center">
          Get Samantha Across the Finish Line
        </h2>
        <p className="text-xl mb-14 opacity-80 text-center max-w-2xl mx-auto">
          August 6 is closer than it sounds. Yard signs, volunteer hours, and small donations decide rural primaries. Pick one.
        </p>

        {/* Three help cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          <a
            id="yard-sign"
            href="#help-form"
            data-animate
            data-delay="1"
            className="group bg-primary text-surface p-8 hover:bg-primary/95 transition-colors flex flex-col"
          >
            <div className="text-accent text-4xl font-display mb-3 leading-none">01</div>
            <h3 className="text-2xl font-display mb-3 text-accent">Yard Sign</h3>
            <p className="text-sm opacity-90 leading-relaxed flex-grow mb-5">
              Put a sign in your yard and you've already done more than 95% of voters. Free. We deliver in the Basin and Benton.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Request a Sign →
            </span>
          </a>

          <a
            id="volunteer"
            href="#help-form"
            data-animate
            data-delay="2"
            className="group bg-primary text-surface p-8 hover:bg-primary/95 transition-colors flex flex-col"
          >
            <div className="text-accent text-4xl font-display mb-3 leading-none">02</div>
            <h3 className="text-2xl font-display mb-3 text-accent">Volunteer</h3>
            <p className="text-sm opacity-90 leading-relaxed flex-grow mb-5">
              Help knock doors, drop literature, work the phones, or staff an early voting location. One Saturday morning makes a real dent.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Sign Up →
            </span>
          </a>

          <a
            id="donate"
            href="#help-form"
            data-animate
            data-delay="3"
            className="group bg-primary text-surface p-8 hover:bg-primary/95 transition-colors flex flex-col"
          >
            <div className="text-accent text-4xl font-display mb-3 leading-none">03</div>
            <h3 className="text-2xl font-display mb-3 text-accent">Donate</h3>
            <p className="text-sm opacity-90 leading-relaxed flex-grow mb-5">
              Yard signs, mailers, and fuel for door-knocking aren't free. Every $25 pays for another stack of signs going up across the Basin. Mail-in checks welcome.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Chip In →
            </span>
          </a>
        </div>

        {/* Mail-in donation address — placeholder until treasurer confirms */}
        <div data-animate className="bg-white border border-primary/15 p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
            Donate by Mail
          </p>
          <p className="text-sm md:text-base text-text leading-relaxed">
            Make checks payable to{' '}
            <strong className="text-primary">Samantha Trantham for Polk County Commission District 3</strong>.
          </p>
          <p className="text-sm md:text-base text-text leading-relaxed mt-1">
            Mailing address available on request — call{' '}
            <a href="tel:+17068516623" className="text-accent font-bold hover:underline">
              (706) 851-6623
            </a>{' '}
            or use the form below.
          </p>
          <p className="text-xs opacity-60 mt-3 leading-relaxed">
            Tennessee campaign finance law limits individual contributions. Contributions are not tax deductible.
          </p>
        </div>

        {/* Direct contact row */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 border-2 border-primary px-6 py-4 text-primary font-bold uppercase tracking-wide text-sm hover:bg-primary hover:text-surface transition-colors"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {PHONE}
          </a>
          <a
            href={`mailto:${EMAIL_FALLBACK}`}
            className="flex items-center justify-center gap-3 border-2 border-primary px-6 py-4 text-primary font-bold uppercase tracking-wide text-sm hover:bg-primary hover:text-surface transition-colors"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Samantha
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-primary px-6 py-4 text-primary font-bold uppercase tracking-wide text-sm hover:bg-primary hover:text-surface transition-colors"
          >
            <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        {/* Form */}
        <div id="help-form" className="max-w-2xl mx-auto bg-white border border-primary/10 p-8 md:p-10 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-display mb-2 text-primary">Tell Samantha How You Can Help</h3>
          <p className="text-sm opacity-70 mb-6">
            She reads every message and gets back to people personally.
          </p>

          {status === 'success' ? (
            <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5">
              <p className="text-lg font-display text-primary mb-1">
                Thank you. Samantha will be in touch.
              </p>
              <p className="text-sm opacity-70">
                In the meantime, the most powerful thing you can do right now is share her story with one neighbor.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              {status === 'error' && (
                <p className="text-sm text-accent border border-accent/30 px-4 py-3 bg-accent/5">
                  Form couldn't send. Your email client opened as a backup. Or call Samantha directly at {PHONE}.
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="volunteer-name" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="volunteer-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="volunteer-email" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="volunteer-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="volunteer-phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Phone <span className="text-muted font-normal normal-case">(optional, but helpful for yard signs)</span>
                </label>
                <input
                  id="volunteer-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="volunteer-how" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  How can you help? <span aria-hidden="true">*</span>
                </label>
                <select
                  id="volunteer-how"
                  name="howCanHelp"
                  required
                  value={form.howCanHelp}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-accent text-white px-8 py-4 font-bold uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 w-full"
              >
                {status === 'loading' ? 'Sending...' : 'Send to Samantha'}
              </button>

              <p className="text-xs opacity-60 text-center mt-2">
                Prefer to talk? Call {PHONE} or email{' '}
                <a href={`mailto:${EMAIL_FALLBACK}`} className="text-accent font-bold hover:underline break-all">
                  Samantha
                </a>{' '}
                directly.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
