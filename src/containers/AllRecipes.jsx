import React from "react";
import { useState } from "react";

import FavoriteRecipes from "../components/FavoriteRecipes";
import HandleRecipeList from "../components/HandleRecipeList";
import LettersBar from "../components/LettersBar";


function AllRecipes() {
  const [currentLetter, setCurrentLetter] = useState("A");
  const handleSelectLetter = (letter) => {
    setCurrentLetter(letter);
  };


  return (
    <section className="flex flex-col pb-4">
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
      <FavoriteRecipes/>
      <HandleRecipeList currentLetter={currentLetter} />
    </section>
  );
}

export default AllRecipes;
