import React from 'react';
import { useState } from 'react';

function Header({titulo}) {

    return (
        <nav className='flex'>
            <img className=' object-fill object-left-top w-10 h-10'  src='../../public/images/logoR.png'/>
            <a href='#!' className='font-semibold text-main-green '>{titulo}</a>
            <ul className='flex justify-around text-black text-lg font-semibold'>
                <li className='p-5 hover:text-main-green'>Home</li>
                <li className='p-5 hover:text-main-green'>Recetas</li>
                <li className='p-5 hover:text-main-green'>Ingredientes</li>
                <li className='p-5 hover:text-main-green'>Conócenos</li>
            </ul> 

            <div className='bg-main-green rounded-md'>Contactanos </div>     
        </nav>

    );
    
}

export default Header;