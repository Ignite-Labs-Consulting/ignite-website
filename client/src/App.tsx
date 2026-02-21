import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
