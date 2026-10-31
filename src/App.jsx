import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Locations from './components/Locations'
import Booking from './components/Booking'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' })

    document.documentElement.classList.add('has-scroll-reveal')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-scroll-reveal')
      sections.forEach((section) => section.classList.remove('is-visible'))
    }
  }, [])

  return (
    <>
    <Navbar/>
     <Hero />
     <Features/>
     <About/>
     <Services/>
     <Locations/>
     <Booking/>
     <Footer/>
     <FloatingButton/>
    </>
  )
}

export default App
