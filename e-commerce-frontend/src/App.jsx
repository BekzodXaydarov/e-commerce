import React from 'react'
import Navbar from './components/ui/Navbar/Navbar'
import Footer from './components/ui/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' />
    </Routes>
    <Footer />
    </>
  )
}

export default App
