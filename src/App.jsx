import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Service'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Marquee/>
      <About/>
      <Services/>
      <Skills/>
      <Contact/>
      <Projects/>
      <Testimonials/>
      <GetInTouch />
      <Footer/>
    </div>
  )
}

export default App
