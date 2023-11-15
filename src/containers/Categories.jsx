import React from 'react';
import CategoriesBox from '../components/CategoriesBox';
import useFetch from '../hooks/useFetch';

function Categories(){
    let {data,isLoading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    

    return(
        <section>
            <h2 className='font-Inter font-bold 
                        text-red-500 text-center text-xs'>CUSTOMER FAVORITES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mb-5'>Categories</h1>
            <div className='flex flex-wrap justify-around lg:mx-5 p-5 lg:px-20 w-screen'>
                {
                    data.categories && (data.categories.map((data) => <CategoriesBox data={data} key={data.idCategory}/> ))
                }
                
            </div>
        </section>
    );
}

export default Categories;