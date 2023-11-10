import React from 'react';


function Home() {
    return (
        <div className='container mx-auto mt-5 font-Inter grid grid-cols-2 gap-4'>
            <h1 className='grid font-extrabold text-3xl text-center'>All your recipes <br /> in one place</h1>
            <p className=''>Make the most of the ingredients in your fridge <br /> with recipes that adapt to your needs.</p>
            <button className='flex items-center bg-green-300  rounded-full px-4 py-2
                                    h-1/6 w-[120%] min-w-[25%] text-slate-200
                                    hover:bg-green-500 hover:shadow-light'>Starts now</button>
            <div className='relative w-80 h-80 col-span-2'>
                <img className='absolute pl-6 pt-14' src="../../src/assets/images/Circulo_verde.png" />
                <img className='absolute' src="../../src/assets/images/Mujer.png" />                       
            </div>

        </div>
    );
}

export default Home;