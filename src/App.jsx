import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import MissionVision from './components/MissionVision'
import Services from './components/Services'
import About from './components/About'
import Compliance from './components/Compliance'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <MissionVision />
      <Services />
      <About />
      <Compliance />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
