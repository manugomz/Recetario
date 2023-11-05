import React from 'react';
import RecipeBox from '../components/RecipeBox';
import Recipe from './Recipe';

function PopularRecipes() {
    return (
        <section>
            <h2 className="font-Inter font-bold 
                         text-red-500 text-center text-xs
            ">SPECIAL DISHES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mx-5 mb-5 '> Popular recipes</h1>
            <div className='grid grid-cols-1 
                            w-screen
                            justify-items-center 
                            p-auto 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            2xl:grid-cols-4'>
                <RecipeBox/>
                <RecipeBox/>
                <RecipeBox/> 
            </div> 
        </section>
    );
}

export default PopularRecipes;