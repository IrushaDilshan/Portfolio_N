import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">

      <NavBar />

      <Home />

      <AboutMe />

      <Timeline />

      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />

    </div>
  )
}

export default App
