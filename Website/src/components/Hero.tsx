const PRIMARY_DATE = new Date('2026-08-06T00:00:00')

function daysUntilPrimary(): number {
  const diff = PRIMARY_DATE.getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

export function Hero() {
  const days = daysUntilPrimary()

  return (
    <section className="bg-primary text-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 min-h-[85vh]">

        <div data-animate className="flex flex-col justify-center px-6 md:px-10 py-14 md:py-20 order-2 md:order-1">
          <p className="text-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Polk County District 3 · Two-Term Commissioner
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 leading-[1.05]">
            Samantha Trantham
          </h1>

          <p className="text-2xl md:text-3xl font-display italic text-accent mb-8 leading-snug">
            "A Voice for the Copper Basin."
          </p>

          <p className="text-lg md:text-xl max-w-md mb-8 opacity-90 leading-relaxed">
            She fought for two years to stop the biosolids dumping in her community. She won. Now she's running for her third term, because there's more to protect and more to build.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#story"
              className="inline-block bg-accent text-white px-7 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
            >
              Read Her Story
            </a>
            <a
              href="#yard-sign"
              className="inline-block border-2 border-accent text-accent px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors text-center"
            >
              Request a Yard Sign
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-surface/15">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-accent leading-none">
                {days}
              </p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 mt-1">
                Days
              </p>
            </div>
            <div className="text-xs md:text-sm leading-snug opacity-85">
              <p className="font-bold uppercase tracking-wider text-accent">
                Until the Republican Primary
              </p>
              <p>Thursday, August 6, 2026 · Polk County</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative min-h-[56vw] md:min-h-0">
          <picture>
            <source srcSet="/samantha-trantham.webp" type="image/webp" />
            <img
              src="/samantha-trantham.jpg"
              alt="Samantha Trantham, Polk County District 3 Commissioner"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
              width={1080}
              height={675}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent md:from-primary/30" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
