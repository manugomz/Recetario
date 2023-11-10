import React from 'react';
import RecipeBox from '../components/RecipeBox';
import useFetch from '../hooks/useFetch';
import LettersBar from '../components/LettersBar';
import { useState } from 'react';


function AllRecipes() {
    const [currentLetter, setCurrentLetter] = useState('c');
    let lettersArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M', 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let {data,isLoading,error}= useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${currentLetter}`);
    let meals = data.meals;
    return (
        <section>
            <h2 className="font-Inter font-bold 
                         text-red-500 text-center text-xs
            ">SPECIAL DISHES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mx-5 mb-5 '>All recipes</h1>
            <LettersBar lettersArray={lettersArray}/>
            <div className='grid grid-cols-1 
                            w-screen
                            justify-items-center 
                            p-auto 
                            md:grid-cols-2 
                            lg:grid-cols-4 lg:px-4 
                            2xl:grid-cols-4'>
                {isLoading&&<h1>Loading...</h1>}
                {meals && meals.map((recipe) => {
                        return <RecipeBox key={recipe.idMeal} recipe={recipe}/>
                    })
                }
            </div> 
        </section>
    );
}

export default AllRecipes;