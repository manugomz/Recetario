import React from 'react'

const FavoriteRecipes = () => {

  const handleFavorite= ()=>{
    const favorites=localStorage.favorites;
    console.log(favorites, typeof(favorites))//!ARRAY??????
    // favorites.forEach((recipe)=>{
    //   console.log(useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`))
    // })

  }

  //TODO! Quitarle el texto al favourite button cuando sea movil
  return (
    <button
        className="flex items-center gap-1 self-end 
                  font-Inter text-white
                  px-4 py-2 mt-4 mr-4 bg-green-300 
                  rounded-full
                hover:bg-green-500 hover:shadow-light hover:-translate-y-1 hover:duration-300
                  [&>svg]:hover:scale-125 [&>svg]:duration-300 
                  active:bg-green-700 active:shadow-none active:translate-y-0 active:duration-0"
        
        onClick={handleFavorite}
      > 
        Favorite Recipes <HiOutlineHeart className="fill-white stroke-none" />
      </button>
  )
}

export default FavoriteRecipes
