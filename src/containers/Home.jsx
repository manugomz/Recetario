import React from 'react';


function Home() {
    return (
        <div className='container mx-4 mt-5 mb-8 font-Inter grid grid-cols-4 grid-rows-4 gap-4'>
            <h1 className='grid font-extrabold text-3xl text-center col-span-2 place-self-center'>All your recipes <br /> in one place</h1>
            <p className='col-span-2 p-6 place-self-center'>Make the most of the ingredients in your fridge with recipes that adapt to your needs.</p>
            <button className='flex items-center justify-between p-4 border-b bg-green-300  rounded-full h-1/6
                             hover:bg-green-500 text-white text-base md:text-lg lg:text-xl font-semibold 
                             place-content-center place-self-start col-start-4 row-start-3 border-r-2'>Starts now</button>
            <div className='relative w-80 h-80 col-span-3 row-span-3 place-self-center'>
                <img className='absolute pl-6 pt-14' src="../../src/assets/images/Circulo_verde.png" />
                <img className='absolute pb-12' src="../../src/assets/images/Mujer.png" />                       
            </div>

        </div>
    );
}

export default Home;