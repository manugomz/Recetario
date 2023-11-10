import React, { useState } from 'react';

const SearchBtn = () => {
  const [showText, setShowText] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);

  const handleIconoClick = () => {
    setShowText(!showText);
  };

  const handleChangeTexto = (event) => {
    setTextInput(event.target.value);
  };

  const getMealList = () => {
    let searchInputTxt = textInput.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  const getMealRecipe = (idMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.json())
      .then(data => setMealDetails(data.meals[0]));
  };

  return (
    <div>
      <div>
        <span onClick={handleIconoClick} style={{ cursor: 'pointer' }}>
          <img
            className='flex items-center w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'
            src='../../src/assets/images/icon_search.png'
            alt='Icono de búsqueda'
          />
        </span>
      </div>

      {showText && (
        <div>
          <input
            type="text"
            value={textInput}
            onChange={handleChangeTexto}
            placeholder="Ingresa tu texto aquí"
          />
          <button onClick={getMealList}>Buscar</button>

          
        </div>
      )}
    </div>
  );
};

export default SearchBtn;

