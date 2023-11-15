import React, { useState } from 'react';
import RecipeBox from '../components/RecipeBox';

function RecipiesbyCategories () {
    const CategoryList = useState()
   
    return(
        <div>
            <RecipeBox CategoryList={CategoryList}/>
        </div>
    )
}

export default RecipiesbyCategories;