import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';
import {FaStar} from 'react-icons/fa6';

function RecipeBox() {
    return (
        //TODO: Hacer responsive a partir de 800px 
        //! Buscar como organizar bien la caja (botón fijado arriba a la izquierda, ignorado por el resto)
        <div className='flex flex-col static justify-around min-w-[300px] max-w-sm aspect-square shadow-xl rounded-3xl m-5 pl-6 pb-5'>
            <button className='flex items-center relative top-0 right-0  h-1/6 w-1/5 min-w-[25%] bg-main-green rounded-tr-3xl rounded-bl-3xl self-end hover:bg-black'>
                <HiOutlineHeart 
                    className='m-auto w-1/2 h-1/2 stroke-2'
                    stroke='white'
                    size={20}
                />
            </button>
            <img className='h-1/2 self-center' src='../../public/images/pad-thai.png'/>
                <h2 className='font-semibold mt-1'>Pad Thai</h2>
                <p className='text-gray-700 font-medium'>Descripción de la receta</p>
            <div className='flex justify-around pb-2'>
                <p>90 min</p>
                <div className='flex items-center'>
                    <p className='pr-1'>4.5 </p>
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
