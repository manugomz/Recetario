import React from 'react';

function CategoriesBox(){
    return(
        <div className='py-4 px-5 w-60 m-5  aspect-square rounded-40 flex flex-col rounded-lg place-items-center shadow-xl shadow-gray-400 '>
            <button className='bg-green-100 bg-center hover:bg-green-500 rounded-full border-inherit p-4 '>
                <img className='h-16 justify-self-center' src='../../public/images/desayuno.png'/>
            </button>
                <h3 className='text-center font-semibold font-Inter'>Break Fast</h3>
                <p className='text-center text-xs font-thin font-Inter'>(12 Break Fast)</p>
        </div>
        
    );
}

export default CategoriesBox;