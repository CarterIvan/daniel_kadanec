import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import FeatureBar from '../components/FeatureBar/FeatureBar'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Materials from '../components/Materials/Materials'
import CTA from '../components/CTA/CTA'
import Reveal from '../components/Reveal/Reveal'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <main>
      <Hero />
      <FeatureBar />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Materials />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
    </main>
  )
}

export default Home
