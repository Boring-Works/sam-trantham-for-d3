
export function Connect() {
  return (
    <section id="connect" className="bg-surface text-text px-6 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">I'm Always Available</h2>
        <p className="text-xl md:text-2xl mb-12 opacity-80">
          Have a concern? Want to talk? That's what I'm here for. Call me, email me, or reach out on Facebook. I'll get back to you.
        </p>

        <div className="flex flex-col items-center space-y-8 text-xl md:text-2xl">
          <a href="tel:7068516623" className="bg-primary text-surface px-8 py-4 w-full md:w-auto hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(706) 851-6623</span>
          </a>

          <a href="mailto:samanthatranthamd3commissioner@gmail.com" className="text-primary hover:text-accent font-medium break-all">
            samanthatranthamd3commissioner@gmail.com
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium underline underline-offset-4 decoration-accent">
            Samantha Trantham Third District County Commissioner
          </a>
        </div>
      </div>
    </section>
  )
}
