
const FACEBOOK_URL = 'https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t-2 border-accent shadow-lg">
      <a
        href="tel:+17068516623"
        className="flex-1 bg-primary text-surface py-4 text-center text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
      >
        Call Samantha
      </a>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-accent text-white py-4 text-center text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
      >
        Facebook
      </a>
    </div>
  )
}
