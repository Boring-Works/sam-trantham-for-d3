import { Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
