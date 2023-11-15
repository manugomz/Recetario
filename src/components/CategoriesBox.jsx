import React from 'react';

function CategoriesBox({data,CategoryList}){ 

    
    return(
        <div>
            <button className='flex flex-col justify-around items-center
                        rounded-2xl shadow-2xl shadow-gray-400 p-4 h-48
                        bg-center  aspect-square [&>div]:hover:bg-green-500'
                       >
            <div className='bg-green-100 rounded-full aspect-square items-center flex'>
                <img className='h-16 justify-self-center object-cover' src={data.strCategoryThumb} alt="food" />
            </div>
            <h2 className='text-center font-semibold font-Inter mt-2.5'>{data.strCategory}</h2>
        </button>
        </div>
        
    );
}

export default CategoriesBox;