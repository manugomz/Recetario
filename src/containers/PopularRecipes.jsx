import React from 'react';
import RecipeBox from '../components/RecipeBox';
import Rating from '../components/Rating';

function PopularRecipes() {
    return (
        <div>
            <h1>Recetas populares</h1>
            <div className='flex flex-wrap justify-items-center'>
                <RecipeBox/>
                <RecipeBox/>
                <RecipeBox/>

            </div>
        </div>
    );
}

export default PopularRecipes;