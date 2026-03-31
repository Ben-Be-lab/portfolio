import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Portofolio from './Pages/Portofolio'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          
          
          <Route index element={<Home />} />

          
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portofolio />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App