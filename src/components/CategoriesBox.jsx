import React from 'react';

function CategoriesBox(){
    return(
        <div className='flex flex-col justify-around 
                        rounded-2xl shadow-2xl shadow-gray-400 p-4'>
            <div className=''>
                <button className='bg-green-100 bg-center hover:bg-green-500 rounded-full p-4 '>
                    <img className='h-16 justify-self-center object-cove rounded-full' src="../src/assets/images/desayuno.png" alt="Breakfast" />
                </button>
            </div>
            <h2 className='text-center font-semibold font-Inter mt-2.5'>Break Fast</h2>
                <p className='text-center text-xs  text-gray-700 font-medium font-Inter '>(12 Break Fast)</p>
        </div>
    );
}

export default CategoriesBox;