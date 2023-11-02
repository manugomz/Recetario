import React from 'react';
import CategoriesBox from '../components/CategoriesBox';

function PopularCategories(){
    return(
        <section>
            <h2 className='font-Inter font-bold 
                        text-red-500 text-center text-xs'>CUSTOMER FAVORITES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mx-5 mb-5l'>Popular Categories</h1>
            <div className='flex flex-wrap md:flex-col lg:flex-row justify-around p-auto w-screen'>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
                <CategoriesBox/>
            </div>
        </section>
    );
}

export default PopularCategories;