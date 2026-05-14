function buildShareUrl(network: 'facebook' | 'twitter' | 'sms'): string {
  const url = typeof window !== 'undefined' ? window.location.origin || 'https://votetrantham.com' : 'https://votetrantham.com'
  const text = 'She fought for two years to stop the biosolids dumping in the Copper Basin. She won. Vote Samantha Trantham, Polk County District 3 — August 6 Republican Primary.'
  const enc = encodeURIComponent
  if (network === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`
  if (network === 'twitter') return `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`
  // SMS: most mobile clients accept &body=
  return `sms:?&body=${enc(text + ' ' + url)}`
}

function handleNativeShare(e: React.MouseEvent<HTMLButtonElement>) {
  if (typeof navigator !== 'undefined' && navigator.share) {
    e.preventDefault()
    navigator.share({
      title: 'Samantha Trantham — A Voice for the Copper Basin',
      text: 'She fought two years to stop the biosolids dumping. She won. Vote Samantha Trantham, Polk County District 3, August 6 Primary.',
      url: window.location.href,
    }).catch(() => { /* dismissed */ })
  }
}

export function ShareCallout() {
  return (
    <section className="bg-accent text-white px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-90 mb-3">
          One More Thing You Can Do
        </p>
        <h2 className="text-2xl md:text-4xl font-display mb-4 leading-tight">
          Send this story to one neighbor in the Basin.
        </h2>
        <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
          A rural primary turns on a few hundred votes. Sharing this with one person who hasn't heard her story is the single highest-leverage thing you can do this week.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={buildShareUrl('facebook')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-surface transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Share on Facebook
          </a>
          <a
            href={buildShareUrl('twitter')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-surface transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Tweet
          </a>
          <a
            href={buildShareUrl('sms')}
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-surface transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-3.5-7.1L21 3v6h-6" />
            </svg>
            Text It
          </a>
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 6l-4-4m0 0L8 6m4-4v12" />
            </svg>
            Share…
          </button>
        </div>
      </div>
    </section>
  )
}
