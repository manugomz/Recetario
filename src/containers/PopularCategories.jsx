import React from 'react';
import CategoriesBox from '../components/CategoriesBox';

function PopularCategories(){
    return(
        <div>
            <h1>Categorias Populares</h1>
            <div className='flex flex-wrap justify-items-center'>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>

            </div>
        </div>
    );
}

export default PopularCategories;