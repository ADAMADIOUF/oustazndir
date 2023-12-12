import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import TopHeader from './components/TopHeader'
import About from './components/About'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />

        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
