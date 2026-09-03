import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader/Preloader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageTransition from './components/PageTransition/PageTransition'
import Home from './pages/Home'

// Code-split the service-detail template (and its data, which pulls in
// every gallery image path for all 4 services) out of the main bundle —
// a homepage visitor never needs it, and it only loads once someone
// actually navigates to one of these routes.
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage/ServiceDetailPage'))

// Both dynamic imports below are only invoked once React actually renders
// a given route for the first time — neither fires on initial page load
// for "/", and the (single, shared) serviceDetails chunk is fetched at
// most once no matter how many of these routes get visited.
const withService = (slug) =>
  lazy(() =>
    import('./data/serviceDetails').then(({ serviceDetails }) => ({
      default: () => <ServiceDetailPage service={serviceDetails[slug]} />,
    }))
  )

const KuchyneNaMieru = withService('kuchyne-na-mieru')
const VstavaneSkrine = withService('vstavane-skrine')
const NabytokDoInterieru = withService('nabytok-do-interieru')
const KupelnovyNabytok = withService('kupelnovy-nabytok')

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kuchyne-na-mieru" element={<KuchyneNaMieru />} />
            <Route path="/vstavane-skrine" element={<VstavaneSkrine />} />
            <Route path="/nabytok-do-interieru" element={<NabytokDoInterieru />} />
            <Route path="/kupelnovy-nabytok" element={<KupelnovyNabytok />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </BrowserRouter>
  )
}

export default App
