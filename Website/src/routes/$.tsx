import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/$')({
  component: NotFound,
})

function NotFound() {
  return (
    <section className="bg-surface text-text min-h-screen flex items-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
          Page Not Found
        </p>
        <h1 className="text-5xl md:text-6xl font-display mb-6 text-primary leading-tight">
          This page doesn't exist.
        </h1>
        <p className="text-2xl font-display italic text-accent mb-4">
          But Samantha's record does.
        </p>
        <p className="text-lg text-muted mb-10 leading-relaxed">
          She's shown up to every commission meeting, fought the biosolids industry,
          and kept the Copper Basin's voice in the room. That record is real.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-surface px-8 py-4 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
