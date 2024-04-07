import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const FavoriteRecipes = () => {

  //TODO! Quitarle el texto al favourite button cuando sea movil
  return (
    <Link to={'/favorites'} className="self-end mr-4 mt-4">
      <button
        className="flex items-center gap-1  
                  font-Inter text-white
                  px-4 py-2 bg-green-300 
                  rounded-full
                hover:bg-green-500 hover:shadow-light hover:-translate-y-1 hover:duration-300
                  [&>svg]:hover:scale-125 [&>svg]:duration-300 
                  active:bg-green-700 active:shadow-none active:translate-y-0 active:duration-0"
      >
        Favorite Recipes <HiOutlineHeart className="fill-white stroke-none" />
      </button>
    </Link>
  );
};

export default FavoriteRecipes;
