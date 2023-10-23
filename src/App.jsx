import { useState } from 'react'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'

import PopularRecipes from './containers/PopularRecipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header titulo='ecetary.com'/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/categorias-populares" element={<h1>Categorias populares</h1>} />
        <Route path="/recetas-populares" element={<PopularRecipes/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
