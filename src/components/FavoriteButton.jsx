import { useState } from 'react';
import {HiOutlineHeart} from 'react-icons/hi';
import useFavoriteContext from '../hooks/useFavoriteContext';

const FavoriteButton = ({idMeal}) => {
  
  const {isFavorite, addFavorite, removeFavorite}= useFavoriteContext();
  
  const isFavoriteMeal =isFavorite(idMeal);
  const handleFavoriteToggle = () => {isFavoriteMeal? removeFavorite(idMeal):addFavorite(idMeal)};

  return (
    <button className={`flex items-center absolute top-0 right-0
                        h-[15%] w-[25%] p-1
                        bg-green-300 
                        rounded-tr-[2rem] rounded-bl-[2rem] 
                        hover:bg-green-500 hover:shadow-light hover:-translate-y-1 hover:duration-300
                        [&>svg]:hover:scale-125 [&>svg]:duration-300 
                        active:bg-green-700 active:shadow-none active:translate-y-0 active:duration-0
                        ${isFavoriteMeal ? '[&>svg]:fill-white':'[&>svg]:fill-none' }
                    `}
    onClick={handleFavoriteToggle}>
        <HiOutlineHeart 
            className='m-auto w-1/2 h-1/2 stroke-2'
            stroke='white'
        />
    </button>
  );
};

export default FavoriteButton;