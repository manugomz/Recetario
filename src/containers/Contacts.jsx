import React from 'react';
import ImagenContact from '../components/ImagenContact';
import Forms from '../components/Forms';

function Contacts () {
    return (
        <section className='anantialiased'>
            <div className='flex flex-col w-full  items-center justify-center'>
                <h1 className='font-Inter font-bold 
                             text-red-500 text-center text-sm 
                            h-6 p-6'>CONTACT US</h1>
            </div>
            
            <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 
                            rounded-xl shadow-lg justify-around
                            p-8 w-full'>
                                
                <div className='flex flex-col justify-between space-y-8 p-8'>
                    <ImagenContact/>
                </div>
                <div className='flex flex-col p-8'>
                    <Forms/>
                </div>
            </div>
        </section>
        
    )
}

export default Contacts;