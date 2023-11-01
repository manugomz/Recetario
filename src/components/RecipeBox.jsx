import React from 'react';
import {FaStar} from 'react-icons/fa6';
import FavoriteButton from './FavoriteButton';

function RecipeBox() {
    return (
        //! Buscar como organizar bien la caja (botón fijado arriba a la izquierda, ignorado por el resto)
        <div className='flex flex-col justify-around min-w-[300px] max-w-sm aspect-square shadow-xl rounded-[2.5rem] m-5 pl-6 pb-5'>
            <FavoriteButton/>
            <img className='h-1/2 self-center' src='../../public/images/pad-thai.png'/>
                <h2 className='font-Inter font-semibold mt-1'>Arroz con huevo</h2>
                <p className='font-Inter text-gray-700 font-medium'>Descripción de la receta</p>
            <div className='flex justify-around pb-2'>
                <p className='font-Inter'>90 min</p>
                <div className='flex items-center'>
                    <p className='font-Inter pr-1'>4.5 </p>
                    <FaStar 
                        className='w-5 h-5'
                        color='#FFE605'
                        size={20}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default RecipeBox;
