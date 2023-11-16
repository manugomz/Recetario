import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RecipeBox from "../components/RecipeBox";

const Results = () => {
  const [mealsData, setMealsData] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);

  const location = useLocation();
  const { state } = location;
  const { meals: searchResults } = state || {};

  const getMealRecipe = (mealId) => {
    // Realiza una solicitud para obtener los detalles de la comida con el ID proporcionado
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMealDetails(data.meals[0]);
        } else {
          setMealDetails(null);
        }
      });
  };
  const closeMealDetails = () => {
    setMealDetails(null);
  };

  useEffect(() => {
    // Realizar la búsqueda cuando searchResults cambie
    if (searchResults) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchResults}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setMealsData(data.meals);
          } else {
            setMealsData([]);
          }
        });
    }
  }, [searchResults]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {mealsData.map((meal) => (
        <RecipeBox key={meal.idMeal} recipe={meal} />
      ))}
    </div>
  );
};

export default Results;
