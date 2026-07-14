import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Realisations from './components/Realisations'
import FeatureCards from './components/FeatureCards'
import Process from './components/Process'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <StatsBar />
      <Realisations />
      <FeatureCards />
      <Process />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
