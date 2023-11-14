import React from 'react';

import { useState } from 'react';
import RecipeBox from '../components/RecipeBox';


function RecipiesbyCategories () {
    const CategoryList = useState ();

    return(
        <div>
            <RecipeBox CategoryListList={CategoryList}/>
        </div>
    )
}

export default RecipiesbyCategories;