import React from 'react';
import CategoriesBox from '../components/CategoriesBox';

function PopularCategories(){
    return(
        <div>
            <h1 className='font-Inter font-bold text-red-500 text-center leading-10 text-sm h-6 pb-10'>Customer Favorites</h1>
            <h2 className='font-Inter font-bold text-center leading-snug text-4xl'>Popular Categories</h2>
            <div className='flex items-center justify-around'>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>

            </div>
        </div>
    );
}

export default PopularCategories;