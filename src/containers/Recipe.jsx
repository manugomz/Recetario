import { GiCook } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const Recipe = () => {

  const boldNumber = "fot-bold text-xl";
  const listText = "py-2 border-b-2 border-gray-500 border-dotted";

  const {idMeal} = useParams();

  const {data, isLoading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  

  if (isLoading){
        return <div className='text-xl font-Inter pt-2 text-center'>Loading...</div>

    } else if (error){
        return (<div className='flex flex-col'>
            <div className='text-3xl font-Inter pt-2 text-center'>Oops! there was an error</div>
            <div className='text-xs font-Inter pt-2 text-center w-2/3 self-center text-gray-800'>{error}</div>
        </div>)
            
    } else if (data){
      const meal=data.meals[0];
      const strIngredients = [];
    

      for(let i=1;i<=20;i++){
        if (meal[`strIngredient${i}`]!==''&& meal[`strIngredient${i}`]!==null){
          strIngredients.push({name:meal[`strIngredient${i}`], quantity: meal[`strMeasure${i}`]});
        }
      }
      
      console.log(meal);

      return (
        <div className="flex flex-col items-center p-auto w-screen">
          <h1 className="font-extrabold text-3xl m-5 font-Inter text-center">
            {meal.strMeal}
          </h1>
          <div className="flex w-1/2 justify-center">
            <div className="flex items-center gap-2">
              <PiCookingPotFill />
              {meal.strCategory}
            </div>
            <div className="flex items-center gap-2 mx-2 px-2 border-l-2">
              <GiCook />
              {meal.strArea}
            </div>
          </div>
          <article className=" self-center my-10 w-5/6 h-2/3">
            <div className="flex flex-col md:flex-row w-full">
            <section className="bg-green-100 mx-5 h-full p-6 rounded-b-lg 
                  md:w-2/6 md:mx-0 md:my-2 md:rounded-none
                  lg:w-1/2">
              <h2 className="mb-5 font-bold">INGREDIENTS</h2>
              <ul className="flex-col ml-2">
                {strIngredients.map((ingredient) => 
                (<li className={listText}>
                  <p>
                    <span className={boldNumber}>{ingredient.quantity} </span> {ingredient.name}
                  </p>
                </li>)) }
                
                
                <li className={listText}>
                  <p>
                    <span className={boldNumber}>1/4 </span> Cup water
                  </p>
                </li>
              </ul>
            </section>
            <img
              className="h-auto rounded-xl order-first md:order-none md:w-4/6 md:object-cover"
              src={meal.strMealThumb}
            />
            </div>
              <h2 className=" mx-2 h-full pt-6 mb-5 font-bold">INSTRUCTIONS</h2>
            <section className=" mx-2 h-full p-2">
              <p>{meal.strInstructions}</p>
            </section>
          </article>
        </div>
      );

    } else if (meal===null && !isLoading && !error){
      return (<div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
        <a className='text-gray-200' href="https://www.freepik.com/free-photo/cutlery-overhead-wooden-dining-food_1090334.htm#query=empty%20plate&position=4&from_view=keyword&track=ais">
            <img className='md:max-h-28 mr-2' src='./images/empty-plate.png'></img>
        </a>
            <div className='text-2xl font-Inter pt-2 text-center'>No meal found here</div>
        </div>
            
      </div>
      )
    }

};

export default Recipe;
