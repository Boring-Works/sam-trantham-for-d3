import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { HerStory } from '../components/HerStory'
import { StandsFor } from '../components/StandsFor'
import { TheFight } from '../components/TheFight'
import { WhatElse } from '../components/WhatElse'
import { InTheNews } from '../components/InTheNews'
import { WhyRunning } from '../components/WhyRunning'
import { Connect } from '../components/Connect'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main>
      <Hero />
      <HerStory />
      <StandsFor />
      <TheFight />
      <WhatElse />
      <InTheNews />
      <WhyRunning />
      <Connect />
      <Footer />
    </main>
  )
}
