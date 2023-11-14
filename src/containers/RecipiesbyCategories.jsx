import React from 'react';
import RecipeBox from '../components/RecipeBox';
import useFetch from '../hooks/useFetch';


function RecipiesbyCategories ({CategoryList}) {
   
    return(
        <div>
            <RecipeBox CategoryList={CategoryList}/>
        </div>
    )
}

export default RecipiesbyCategories;