import React from 'react';1

function Contacus () {
    return (
        <div className=''>
            <h1 className='font-Inter font-bold text-red-500 text-center leading-10 text-sm h-6 pb-10'>CONTAC US</h1>
            <h2 className='font-Inter font-bold text-center h-6 pb-10'></h2>
                <div className='flex flex-row justify-evenly '>
                    <div className='w-1/4 h-1/4 static'>
                        <img className='h-80 absolute z-30' src="../src/assets/images/Chef.png" />
                        <img className='h-40 absolute z-20 bottom-px' src="../src/assets/images/Fondo.png" />
                    </div>
                    <div className='w-1/4 h-1/4 static'>
                        
                    </div>
                </div>  
        </div>
    )
}

export default Contactus;