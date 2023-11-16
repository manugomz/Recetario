import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesProvider';

const useFavoriteContext = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavoriteContext;
