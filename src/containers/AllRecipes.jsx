import React from "react";
import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";

import HandleRecipeList from "../components/HandleRecipeList";
import LettersBar from "../components/LettersBar";

import FavoritesProvider from "../context/FavoritesProvider";
import useFetch from "../hooks/useFetch";

function AllRecipes() {
  const [currentLetter, setCurrentLetter] = useState("A");
  const handleSelectLetter = (letter) => {
    setCurrentLetter(letter);
  };

  const handleFavorite= ()=>{
    const favorites=localStorage.favorites;
    console.log(favorites, typeof(favorites))//!ARRAY??????
    // favorites.forEach((recipe)=>{
    //   console.log(useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`))
    // })

  }

  return (
    <section className="flex flex-col">
      <h2
        className="font-Inter font-bold 
                  text-red-500 text-center text-xs
                  lg:text-base"
      >
        SPECIAL DISHES
      </h2>
      <h1
        className="font-Inter font-extrabold text-4xl 
                  text-center 
                  mx-5 mb-5 
                  lg:text-3xl
                  2xl:text-6xl"
      >
        All recipes
      </h1>
      <LettersBar handleSelectLetter={handleSelectLetter} />
      <button 
        className="flex items-center gap-1 self-end 
                  font-Inter text-white
                  px-4 py-2 mt-4 mr-4 bg-green-300 
                  rounded-full
                  hover:bg-green-500 hover:shadow-light hover:-translate-y-1 hover:duration-300
                  [&>svg]:hover:scale-125 [&>svg]:duration-300 
                  active:bg-green-700 active:shadow-none active:translate-y-0 active:duration-0"
        
        onClick={handleFavorite}
      > {//TODO! Quitarle el texto cuando sea movil
      }
        Favorite Recipes <HiOutlineHeart className="fill-white stroke-none" />
      </button>
      <HandleRecipeList currentLetter={currentLetter} />
    </section>
  );
}

export default AllRecipes;
