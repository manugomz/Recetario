import React, { useState } from "react";
import RecipeBox from "../components/RecipeBox";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function RecipiesbyCategories() {
  const { strCategory } = useParams();

  let { data, isLoading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  );

  if (isLoading) {
    return (
      <div className="text-xl font-Inter pt-2 text-center">Loading...</div>
    );
  } else if (error) {
    return (
      <div className="flex flex-col">
        <div className="text-3xl font-Inter pt-2 text-center">
          Oops! there was an error
        </div>
        <div className="text-xs font-Inter pt-2 text-center w-2/3 self-center text-gray-800">
          {error}
        </div>
      </div>
    );
  } else if (data) {
    let categoryRecipeList = data.meals;

    return (
      <div>
        <h1
          className="font-Inter font-bold 
                    text-red-500 text-center text-xs"
        >
          RECIPIES BY CATEGORIES
        </h1>
        <div className="flex flex-wrap">
          {categoryRecipeList &&
            categoryRecipeList.map((recipe) => (
              <RecipeBox recipe={recipe} key={recipe.strMeal} />
            ))}
        </div>
      </div>
    );
  }
}

export default RecipiesbyCategories;
