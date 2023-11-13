import React from 'react';
import RecipeBox from '../components/RecipeBox';
import useFetch from '../hooks/useFetch';

function RecipiesbyCategories ({category}) {

    let {data,isLoading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood`)

    return(
        <div>
            <RecipeBox/>
        </div>
    )
}

export default RecipiesbyCategories;