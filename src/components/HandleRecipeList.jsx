import React from 'react';
import useFetch from '../hooks/useFetch';
import RecipeBox from './RecipeBox';

const HandleRecipeList = ({currentLetter}) => {

    let {data,isLoading,error}= useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${currentLetter}`);
    let meals = data.meals;
    
    if (isLoading){
        return <div className='text-xl font-Inter pt-2 text-center'>Loading...</div>

    } else if (error){
        return (<div className='flex flex-col'>
            <div className='text-3xl font-Inter pt-2 text-center'>Oops! there was an error</div>
            <div className='text-xs font-Inter pt-2 text-center w-2/3 self-center text-gray-800'>{error}</div>
        </div>)
            
    } else if (meals){
       return (
        <div className='grid grid-cols-1 
                            w-screen p-auto 
                            justify-items-center 
                            md:grid-cols-2 
                            lg:grid-cols-4 lg:px-4 
                            2xl:grid-cols-4'>
        {meals.map((recipe) => <RecipeBox key={recipe.idMeal} recipe={recipe}/>)}
        </div>)

    } else if (meals===null && !isLoading && !error){
        return (<div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
            <a className='text-gray-200' href="https://www.freepik.com/free-photo/cutlery-overhead-wooden-dining-food_1090334.htm#query=empty%20plate&position=4&from_view=keyword&track=ais">
                <img className='md:max-h-28 mr-2' src='./images/empty-plate.png'></img>
            </a>
                <div className='text-2xl font-Inter pt-2 text-center'>No meals found here</div>
            </div>
                
        </div>
        )
    } 

};

export default HandleRecipeList;
