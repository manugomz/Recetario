import { useState } from 'react'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'

import PopularCategories from './containers/PopularCategories'
import PopularRecipes from './containers/PopularRecipes'
import InfoAbout from './containers/InfoAbout'

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
      </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
