import { useEffect } from 'react'
import ServiceHero from './ServiceHero'
import ServiceIntro from './ServiceIntro'
import ProcessTimeline from './ProcessTimeline'
import ServiceMaterials from './ServiceMaterials'
import ProjectGallery from './ProjectGallery'
import ServiceFinalCTA from './ServiceFinalCTA'
import Reveal from '../Reveal/Reveal'
import { processSteps } from '../../data/serviceDetails'

// One shared template for every service — only `service` (the data) changes
// between /kuchyne-na-mieru, /vstavane-skrine, /nabytok-do-interieru and
// /kupelnovy-nabytok. Never duplicate this page per service. The hero is
// intentionally untouched here; only the sections below it are composed.
function ServiceDetailPage({ service }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug])

  return (
    <main>
      <ServiceHero
        category={service.category}
        title={service.title}
        heroDescription={service.heroDescription}
        heroImage={service.heroImage}
      />

      <Reveal>
        <ServiceIntro statement={service.intro.statement} paragraphs={service.intro.paragraphs} />
      </Reveal>

      <Reveal>
        <ProjectGallery gallery={service.gallery} />
      </Reveal>

      <Reveal>
        <ProcessTimeline steps={processSteps} />
      </Reveal>

      <Reveal>
        <ServiceMaterials quality={service.quality} />
      </Reveal>

      <Reveal>
        <ServiceFinalCTA heading={service.finalCta.heading} text={service.finalCta.text} />
      </Reveal>
    </main>
  )
}

export default ServiceDetailPage
