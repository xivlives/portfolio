import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experince/Ex'
import Services from './components/nav/Nav'
import Portfolio from './components/nav/Nav'
import Testimonials from './components/nav/Nav'
import Contact from './components/nav/Nav'
import Footer from './components/nav/Nav'
const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App