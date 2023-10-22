import { useState } from 'react'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import PopularCategories from './containers/PopularCategories'
import PopularRecipes from './containers/PopularRecipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/categorias-populares" element={<PopularCategories/>} />
        <Route path="/recetas-populares" element={<PopularRecipes/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
