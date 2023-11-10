import React from 'react';

function Contacts () {
    return (
        <section>
            <div className='flex flex-col justify-around'>
                <h1 className='font-Inter font-bold 
                             text-red-500 text-center text-sm 
                            h-6 pb-10'>CONTACT US</h1>
                <div className='flex flex-row justify-evenly relative place-items-center'>
                    <div className='relative w-60 h-96'>
                        <img className='absolute z-20 h-90 bottom-px' 
                             src="../../src/assets/images/Chef.png" 
                             alt="Chef" />
                        <img className='absolute bottom-px' 
                             src="../../src/assets/images/Fondo.png" 
                             alt="Fondo" />
                    </div>
                    <div className='font-Inter text-center text-xl'>
                        <p>Tel: +64 958 248 966</p>
                        <p>Email: info@recetary.com</p>                
                    </div> 
                </div>
            </div>
        </section>
        
    )
}

export default Contacts;