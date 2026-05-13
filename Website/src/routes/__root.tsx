import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import '../styles.css'
import { Countdown } from '../components/Countdown'
import { Nav } from '../components/Nav'
import { MobileCTA } from '../components/MobileCTA'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Countdown />
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <MobileCTA />
    </>
  )
}
