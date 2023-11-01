import React, { useState } from 'react';
import {HiOutlineHeart} from 'react-icons/hi';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {setIsFavorite(!isFavorite)};

  return (
    <button className={`flex items-center
                        h-1/6 w-1/5 min-w-[25%]
                        absolute top-0 right-0
                        bg-green-300 
                        rounded-tr-[2.5rem] rounded-bl-[2.5rem] 
                        hover:bg-green-500 hover:shadow-light hover:-translate-y-1 hover:duration-300
                        [&>svg]:hover:scale-125 [&>svg]:duration-300
                        active:bg-green-700 active:shadow-none active:translate-y-0 active:duration-0
                        ${isFavorite ? '[&>svg]:fill-white':'[&>svg]:fill-none' }
                    `}
    onClick={handleFavoriteToggle}>
        <HiOutlineHeart 
            className='m-auto w-1/2 h-1/2 stroke-2'
            stroke='white'
            size={20}
        />
    </button>
  );
};

export default FavoriteButton;