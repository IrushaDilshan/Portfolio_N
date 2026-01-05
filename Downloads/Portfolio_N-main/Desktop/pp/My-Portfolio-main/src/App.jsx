import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Project'
import Certificates from './Certificates'
import Contact from './Contact'
import Footer from './Footer'


const App = () => {
  return (
    <div>

      <NavBar />

      <Home />

      <AboutMe />

      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />

    </div>
  )
}

export default App
