import React from 'react';

function Contacts () {
    return (
        <section>
            <h1 className='font-Inter font-bold text-red-500 text-center leading-10 text-sm h-6 pb-10'>CONTAC US</h1>
            <div className='flex flex-row justify-evenly '>
                <div className='w-1/4 h-1/4 static'>
                    <img className='h-80 absolute z-30' src="../../src/assets/images/Chef.png" alt="Chef" />
                    <img className='h-80 absolute z-30 bottom-px' src="../../src/assets/images/Fondo.png" alt="Fondo" />
                </div>
                <div className='font-Inter w-1/4 h-1/4 static'>
                    <p className=''>+64 958 248 966</p>
                    <p className=''>info@recetary.com</p>                
                </div> 
            </div>
        </section>
        
    )
}

export default Contacts;