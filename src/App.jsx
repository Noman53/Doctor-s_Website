import { useState } from 'react'
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
