import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portafolio from './components/portafolio/Portafolio'
import Service from './components/service/Service'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Header  />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portafolio />
        <Testimonials />
        <Contact />
        <Footer />
        </>
    
  )
}

export default App