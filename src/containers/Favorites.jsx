import React from "react";
import RecipeBox from "../components/RecipeBox";

export default function Favorites() {
  const favorites = JSON.parse(localStorage.favorites);

  return (
    <section className="shadow-xl">
      <h2
        className="font-Inter font-bold 
                    text-red-500 text-center text-xs"
      >
        YOUR FAVORITE RECIPIES
      </h2>
      <h1
        className="font-Inter font-bold 
                      text-center text-xl"
      >
        Favorites
      </h1>
      <div className="flex flex-wrap justify-center">
        {Object.keys(favorites).map((key) => {
          return <RecipeBox key={favorites[key].idMeal} recipe={favorites[key]} />;
        })}
      </div>
    </section>
  );
}
