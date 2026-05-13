function ShareButton() {
  const shareData = {
    title: 'Samantha Trantham — A Voice for the Copper Basin',
    text: 'She fought for two years to stop the biosolids dumping in the Copper Basin. She won. Now running for her third term as District 3 Commissioner.',
    url: typeof window !== 'undefined' ? window.location.href : 'https://votetrantham.com',
  }

  function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share(shareData).catch(() => { /* dismissed */ })
    } else {
      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
      window.open(fbUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors self-start mt-3"
    >
      Share Her Story
    </button>
  )
}

export function Hero() {
  return (
    <section className="bg-primary text-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[80vh]">

        <div data-animate className="flex flex-col justify-center px-8 py-16 md:py-24 md:w-1/2 order-2 md:order-1">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">
            District 3 County Commissioner · Polk County, TN
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-5 leading-tight">
            Samantha Trantham
          </h1>
          <p className="text-2xl md:text-3xl font-display italic text-accent mb-6 leading-snug">
            "A Voice for the Copper Basin"
          </p>
          <p className="text-lg md:text-xl max-w-md mb-10 opacity-90 leading-relaxed">
            She fought for two years to stop the biosolids dumping in her community. She won. Now she's running for her third term, because there's more to protect and more to build.
          </p>
          <a
            href="#story"
            className="inline-block bg-accent text-white px-8 py-4 text-base font-bold uppercase tracking-wider hover:opacity-90 transition-opacity self-start"
          >
            Read Her Story
          </a>
          <ShareButton />
        </div>

        <div className="md:w-1/2 order-1 md:order-2 relative min-h-[56vw] md:min-h-0">
          <img
            src="https://www.clevelandstatecc.edu/wp-content/uploads/2026/02/Samantha-Trantham-1080x675.jpg"
            alt="Samantha Trantham, Polk County District 3 Commissioner"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
        </div>

      </div>
    </section>
  )
}
