import React from 'react';
import { Link } from "react-router-dom";

function CategoriesBox({data}){ 

    return(
        <div>
                <Link to={`/${data.strCategory}`} className='flex flex-col justify-around items-center
                                                            rounded-2xl shadow-2xl shadow-green-200 p-4 h-48 aspect-square
                                                            [&>div]:hover:bg-green-500'>
                    <div className='flex aspect-square rounded-full
                                    bg-green-100 items-center'>
                        <img className='h-16 justify-self-center object-cover' src={data.strCategoryThumb} alt="food" />
                    </div>
                    <h2 className='text-center font-semibold font-Inter mt-2.5'>{data.strCategory}</h2>
                </Link>
        </div>
        
    );
}

export default CategoriesBox;