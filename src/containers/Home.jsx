import React from 'react';


function Home() {
    return (
        <div>
            <h1>All your recipes in one place</h1>
            <p>Make the most of the ingredients in your fridge with recipes that adapt to your needs.</p>
            <button className='flex items-center bg-green-300  rounded-full px-4 py-2
                                    h-1/6 w-[120%] min-w-[25%] 
                                    hover:bg-green-500 hover:shadow-light'>Starts now</button>
            <div className='relative w-80 h-80'>
                <img className='absolute pl-6 pt-14' src="../../src/assets/images/Circulo_verde.png" />
                <img className='absolute' src="../../src/assets/images/Mujer.png" />                       
            </div>

        </div>
    );
}

export default Home;