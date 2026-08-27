import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader/Preloader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageTransition from './components/PageTransition/PageTransition'
import Home from './pages/Home'
import ServiceDetailPage from './components/ServiceDetailPage/ServiceDetailPage'
import { serviceDetails } from './data/serviceDetails'

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/kuchyne-na-mieru"
            element={<ServiceDetailPage service={serviceDetails['kuchyne-na-mieru']} />}
          />
          <Route
            path="/vstavane-skrine"
            element={<ServiceDetailPage service={serviceDetails['vstavane-skrine']} />}
          />
          <Route
            path="/nabytok-do-interieru"
            element={<ServiceDetailPage service={serviceDetails['nabytok-do-interieru']} />}
          />
          <Route
            path="/kupelnovy-nabytok"
            element={<ServiceDetailPage service={serviceDetails['kupelnovy-nabytok']} />}
          />
        </Routes>
      </PageTransition>
      <Footer />
    </BrowserRouter>
  )
}

export default App
