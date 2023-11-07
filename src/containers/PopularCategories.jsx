import React from 'react';
import CategoriesBox from '../components/CategoriesBox';

function PopularCategories(){
    return(
        <section>
            <h2 className='font-Inter font-bold 
                        text-red-500 text-center text-xs'>CUSTOMER FAVORITES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mb-5'>Popular Categories</h1>
            <div className='flex flex-wrap justify-around lg:mx-5 p-5 lg:px-20 w-screen'>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
            </div>
        </section>
    );
}

export default PopularCategories;