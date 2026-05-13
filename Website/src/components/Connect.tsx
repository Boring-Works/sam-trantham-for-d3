import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  howCanHelp: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_FALLBACK = 'samanthatranthamd3commissioner@gmail.com'

export function Connect() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    howCanHelp: 'I want to volunteer',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

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
      // Fallback: open mailto
      const subject = encodeURIComponent(`${form.howCanHelp} from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nMessage: ${form.howCanHelp}`
      )
      window.location.href = `mailto:${EMAIL_FALLBACK}?subject=${subject}&body=${body}`
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-primary/20 px-4 py-3 bg-white text-text focus:outline-none focus:border-accent transition-colors'

  return (
    <section id="connect" className="bg-surface text-text px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary text-center">I'm Always Available</h2>
        <p className="text-xl md:text-2xl mb-16 opacity-80 text-center max-w-2xl mx-auto">
          Have a concern? Want to talk? That's what I'm here for. Call me, email me, or reach out on Facebook. I'll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Reach Out */}
          <div>
            <h3 className="text-2xl font-display mb-6 text-primary">Reach Out</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+17068516623"
                className="bg-primary text-surface px-8 py-4 text-lg font-bold uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-3 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (706) 851-6623
              </a>
              <a
                href="mailto:samanthatranthamd3commissioner@gmail.com"
                className="bg-primary text-surface px-8 py-4 text-base font-bold uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-3 w-full break-all text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Samantha
              </a>
              <a
                href="https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-surface px-8 py-4 text-lg font-bold uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-3 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Right: Volunteer form */}
          <div>
            <h3 className="text-2xl font-display mb-6 text-primary">Want to get involved?</h3>

            {status === 'success' ? (
              <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5">
                <p className="text-lg font-display text-primary">
                  Thank you! Samantha will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {status === 'error' && (
                  <p className="text-sm text-accent border border-accent/30 px-4 py-3 bg-accent/5">
                    Form couldn't send. Your email client opened as a backup. Or call Samantha directly at (706) 851-6623.
                  </p>
                )}
                <div>
                  <label htmlFor="volunteer-name" className="block text-sm font-bold uppercase tracking-wide text-primary mb-1">
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
                  <label htmlFor="volunteer-email" className="block text-sm font-bold uppercase tracking-wide text-primary mb-1">
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

                <div>
                  <label htmlFor="volunteer-phone" className="block text-sm font-bold uppercase tracking-wide text-primary mb-1">
                    Phone <span className="text-muted font-normal normal-case">(optional)</span>
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
                  <label htmlFor="volunteer-how" className="block text-sm font-bold uppercase tracking-wide text-primary mb-1">
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
                    <option value="I want to volunteer">I want to volunteer</option>
                    <option value="I want a yard sign">I want a yard sign</option>
                    <option value="I have a question or concern">I have a question or concern</option>
                    <option value="Just saying hello">Just saying hello</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-accent text-white px-8 py-4 font-bold uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 w-full"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
