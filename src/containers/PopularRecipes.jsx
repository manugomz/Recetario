import React from 'react';
import RecipeBox from '../components/RecipeBox';
import Rating from '../components/Rating';
import Recipe from './Recipe';

function PopularRecipes() {
    return (
        <section>
            {/* <h1 className='font-extrabold text-4xl m-5 font-Inter'> Popular recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center p-auto w-screen'> */}
                {/* <RecipeBox/>
                <RecipeBox/>
                <RecipeBox/> */}
                <Recipe/>
            {/* </div> */}
        </section>
    );
}

export default PopularRecipes;