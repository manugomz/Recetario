import React, { useState } from 'react';
import RecipeBox from '../components/RecipeBox';
import useFetch from '../hooks/useFetch';

function RecipiesbyCategories () {
    const CategoryList = useState('')

    let {data,isLoading,error}= useFetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list=${CategoryList}`);
    
    return(
        <div>
            {data.CategoryList && (data.CategoryList.map((data) => <RecipeBox CategoryList={CategoryList} key={data.strCategory}/>))}
        </div>
    )
}


export default RecipiesbyCategories;