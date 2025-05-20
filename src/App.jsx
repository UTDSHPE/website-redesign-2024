import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Sponsor from './components/Sponsor'
import Contact from './components/Contact'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'



import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen max-w-full mx-auto '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
