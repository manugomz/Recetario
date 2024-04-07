import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  useEffect(() => {

  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    setFavorites({
      ...favorites,
      [recipe.idMeal]: recipe 
  });
  };

  const isFavorite = (recipe) => {
    return favorites.hasOwnProperty(recipe.idMeal)
    
  };

  const removeFavorite = (recipe) => {
    const newFavorites= delete favorites[recipe.idMeal];
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
