import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'

import Categories from './containers/Categories'
import AllRecipes from './containers/AllRecipes'
import InfoAbout from './containers/InfoAbout'
import NotFound from './containers/NotFound'
import Contacts from './containers/Contacts'
import Recipe from './containers/Recipe'
import FavoritesProvider from './context/FavoritesProvider'
import Results from './containers/Results'
import RecipiesbyCategories from './containers/RecipiesbyCategories'

function App() {

  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/recetario/" element={<Home/>} />
        <Route path="/recetario/categories" element={<Categories/>} />
        <Route path="/recetario/all-recipes" element={<AllRecipes/>} />
        <Route path="/recetario/about-us" element={<InfoAbout/>} />
        <Route path="/recetario/contact-us" element={<Contacts/>} />
        <Route path="/recetario/recipe/:idMeal" element={<Recipe/>} />
        <Route path="/recetario/results" element={<Results/>} />
        <Route path='/recetario/:strCategory' element={<RecipiesbyCategories/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </FavoritesProvider>
  )
}
 
export default App