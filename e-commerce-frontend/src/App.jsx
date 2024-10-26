import React, { useEffect } from 'react'
import Navbar from './components/ui/Navbar/Navbar'
import Footer from './components/ui/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { useLanguage } from './store/useSelector'
import Languages from "./components/utils/language.json"

const App = () => {
  const language = useLanguage()
  const GlobalLanguage = Languages[language]
  return (
    <>
      <Navbar header={GlobalLanguage.header} language={language} />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
