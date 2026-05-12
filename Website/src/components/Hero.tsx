import * as React from 'react'

export function Hero() {
  return (
    <section className="bg-primary text-surface px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-display mb-4">Samantha Trantham</h1>
        <p className="text-xl md:text-2xl mb-2 font-medium">District 3 County Commissioner</p>
        <p className="text-lg md:text-xl mb-8 opacity-90">Copper Basin, Polk County, Tennessee</p>
        <p className="text-2xl md:text-4xl font-display mb-8 text-accent">"A Voice for the Copper Basin"</p>
        <p className="text-lg md:text-xl max-w-2xl mb-12 opacity-90 leading-relaxed">
          She fought for two years to stop the biosolids dumping in her community. She won. Now she's running for her third term, because there's more to protect and more to build.
        </p>
        <a
          href="#story"
          className="bg-accent text-surface px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-opacity-90 transition-colors"
        >
          Read Her Story
        </a>
      </div>
    </section>
  )
}
