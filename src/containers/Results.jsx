import React from "react";

function name() {
  return (
    <div>
      <div>
        {meals.map((meal) => (
          <div className="meal-item" key={meal.idMeal} data-id={meal.idMeal}>
            <div className="meal-img">
              <img src={meal.strMealThumb} alt="food" />
            </div>
            <div className="meal-name">
              <h3>{meal.strMeal}</h3>
              <a
                href="#"
                className="recipe-btn"
                onClick={() => getMealRecipe(meal.idMeal)}>
                Get Recipe
              </a>
            </div>
          </div>
        ))}
      </div>

      <div>
        {mealDetails && (
          <div>
            <h2 className="recipe-title">{mealDetails.strMeal}</h2>
            <p className="recipe-category">{mealDetails.strCategory}</p>
            <div className="recipe-instruct">
              <h3>Instructions:</h3>
              <p>{mealDetails.strInstructions}</p>
            </div>
            <div className="recipe-meal-img">
              <img src={mealDetails.strMealThumb} alt="" />
            </div>
            <div className="recipe-link">
              <a
                href={mealDetails.strYoutube}
                target="_blank"
                rel="noopener noreferrer">
                Watch Video
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
