import { useState } from 'react'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


import PopularCategories from './containers/PopularCategories'
import PopularRecipes from './containers/PopularRecipes'
import InfoAbout from './containers/InfoAbout'
import Contacts from './containers/Contacts'

function App() {

  return (
    <>
      <Header titulo='ecetary.com'/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/popular-categories" element={<PopularCategories/>} />
        <Route path="/popular-recipes" element={<PopularRecipes/>} />
        <Route path="/about-us" element={<InfoAbout/>} />
        <Route path="/contact-us" element={<Contacts/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
 
export default App
