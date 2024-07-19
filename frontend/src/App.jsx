import { useState } from 'react'
import './App.css'

// Routers
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop'
import { ProductDetail } from './Pages/ProductDetail'
import { AboutUs } from './Pages/AboutUs'

// Componentes
import { Navbar } from './Components/Navbar'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ProductDetail' element={<ProductDetail />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

    </>
  )
}

export default App
