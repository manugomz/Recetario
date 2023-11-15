import React from 'react';


function NotFound() {
    return (
        <main className='relative xl:mx-40 my-5'>
             <div className='flex flex-col absolute right-0 w-1/2 h-1/3 justify-center
                            md:pr-5 md:pt-4
                            xl:h-[40vh] xl:w-1/2
                            2xl:text-center'>
                <p className='font-Inter text-[0.6rem] font-light 
                                md:text-base '>Oops! It seems we ate the last plate</p>
                <h1 className='font-Inter font-bold text-2xl text-green-300 
                                drop-shadow-md
                                md:text-[3rem] md:py-2
                                2xl:text-[4rem] 2xl:py-4'               
                >Error 404</h1>
                <p className='font-Inter text-[0.5rem] text-gray-700 
                            md:text-lg
                            2xl:text-2xl'>The page you were looking for was not found</p>
            </div>
                <img className='bg-cover 
                xl:h-[40vh] xl:rounded-full' src="../src/assets/images/dishes.jpg" alt="Error 404" />
           
        </main>
    );
}

export default NotFound;