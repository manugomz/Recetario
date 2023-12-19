import { FaStar } from "react-icons/fa6";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

function RecipeBox({ recipe }) {
  
  let link=`recetario/recipe/${recipe.idMeal}`

  return (
    <div
      className="relative flex flex-col justify-around 
        min-w-[250px] max-w-[18rem] aspect-square 
        shadow-xl rounded-[2.5rem] 
        m-5 pb-5
        2xl:max-w-sm"
    >
      <div className="w-full">
        <FavoriteButton idMeal={recipe.idMeal}/>
        <Link to={link}>
          <img
            className="self-center object-cover rounded-t-[2rem]"
            src={"recetario/"+recipe.strMealThumb}
          />
        </Link>
      </div>
      <div className="pl-6 pt-2">
        <h2 className="font-Inter font-semibold mt-1">{recipe.strMeal}</h2>
        <a
          className="font-Inter text-gray-700 font-medium"
          href={recipe.strYoutube}>
          Video
        </a>
        <div className="flex justify-around pb-2">
            <p className="font-Inter">90 min</p>
            <div className="flex items-center">
                <p className="font-Inter pr-1">4.5 </p>
                <FaStar className="w-5 h-5" color="#FFE605" size={20} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
