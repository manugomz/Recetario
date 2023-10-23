import React from 'react';

function CategoriesBox(){
    return(
        <div className='py-4 px-5 m-5 min-w-326 max-w-md rounded-40 flex flex-col rounded-lg content-center shadow-xl shadow-gray-400 '>
            <button className='bg-main-green bg-center hover:bg-dark-green rounded-full border-inherit p-4 '>
                <img className='h-20 justify-self-center' src='../../public/images/Desayuno.png'/>
            </button>
                <h2 className='text-center font-semibold font-Inter'>Desayuno</h2>
                <p className='text-center font-thin font-Inter'>(12 desayunos)</p>
        </div>
        
    );
}

export default CategoriesBox;