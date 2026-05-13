import { Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles.css'
import { Countdown } from '../components/Countdown'
import { Nav } from '../components/Nav'
import { MobileCTA } from '../components/MobileCTA'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Countdown />
      <Nav />
      <Outlet />
      <MobileCTA />
    </>
  )
}
