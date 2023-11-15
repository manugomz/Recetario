import { useState } from 'react'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'

import PopularCategories from './containers/PopularCategories'
import AllRecipes from './containers/AllRecipes'
import InfoAbout from './containers/InfoAbout'
import NotFound from './containers/NotFound'
import Contacts from './containers/Contacts'
import Results from './containers/Results'

function App() {

  return (
    <>
      <Header titulo='ecetary.com'/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/popular-categories" element={<PopularCategories/>} />
        <Route path="/all-recipes" element={<AllRecipes/>} />
        <Route path="/about-us" element={<InfoAbout/>} />
        <Route path="/contact-us" element={<Contacts/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
      <Footer/>
    </>
  )
}
 
export default App