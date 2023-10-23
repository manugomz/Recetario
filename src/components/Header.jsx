import React from 'react';
import { useState } from 'react';

function Header({titulo}) {

    return (
        <nav className='flex flex-row justify-around items-center'>
            <div className='flex items-center'>
                <img className='w-10 h-10'  src='../../public/images/logoR.png'/>
                <a href='#!' className='font-semibold text-black text-2xl'>{titulo}</a>
            </div>
            <ul className='flex justify-around text-black text-lg font-semibold'>
                <li className='p-5 hover:text-main-green'>Home</li>
                <li className='p-5 hover:text-main-green'>Recipes</li>
                <li className='p-5 hover:text-main-green'>Ingredients</li>
                <li className='p-5 hover:text-main-green'>About As</li>
            </ul> 
            <img className='flex items-center w-6 h-6'  src='../../public/images/icon_search.png'/>
            <div className='flex items-center bg-main-green pl-4 pr-4 h-10 rounded-full'>
                <img className='w-5 h-5'  src='../../public/images/fi-rr-phone-call.png'/>
                <div className='pl-2 pr-2 text-white font-semibold'>Contact</div>
            </div>     
        </nav>
    );    
}

export default Header;