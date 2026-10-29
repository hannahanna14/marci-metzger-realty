import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Contact from './components/Contact'
import Affiliations from './components/Affiliations'
import Footer from './components/Footer'
import StickyCall from './components/StickyCall'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Affiliations />
      <Footer />
      <StickyCall />
    </>
  )
}
