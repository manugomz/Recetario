import React from 'react';

function RecipeBox() {
    return (
        <div className='flex flex-col justify-around w-1/5 aspect-square shadow-xl bg-gray-200 rounded-3xl m-2 pl-3'>
            <button className='flex items-center h-1/6 w-1/5 bg-main-green rounded-tr-3xl rounded-bl-3xl self-end hover:bg-black'>
                <img className='h-5 self-center' src='../../public/images/fav.svg'/>
            </button>
            <img className='h-1/2 w-1/2 self-center' src='../../public/images/pad-thai.png'/>
                <h2 className='font-semibold mt-1'>Pad Thai</h2>
                <p className='font-semithin mt-1 text-gray-600'>Descripción de la receta</p>
            <div className='flex justify-around pb-2'>
                <p>90 min</p>
                <p>calificación</p>
            </div>
        </div>
    );
}

export default RecipeBox;
