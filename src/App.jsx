import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'

import Categories from './containers/Categories'
import AllRecipes from './containers/AllRecipes'
import InfoAbout from './containers/InfoAbout'
import NotFound from './containers/NotFound'
import ContactUs from './containers/ContactUs'
import Recipe from './containers/Recipe'
import FavoritesProvider from './context/FavoritesProvider'
import Results from './containers/Results'
import RecipiesbyCategories from './containers/RecipiesbyCategories'
import Favorites from './containers/Favorites'

function App() {

  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/all-recipes" element={<AllRecipes/>} />
        <Route path="/about-us" element={<InfoAbout/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/recipe/:idMeal" element={<Recipe/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path='/:strCategory' element={<RecipiesbyCategories/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </FavoritesProvider>
  )
}
 
export default App