import React from 'react';
import { useState } from 'react';

function Header({titulo}) {

    return (
        <nav className='flex flex-row justify-around items-center'>
            <div className='flex items-center'>
                <img className='w-10 h-10'  src='../../images/logoR.png'/>
                <a href='#!' className='font-semibold text-black text-xl font-Inter'>{titulo}</a>
            </div>
            <ul className='flex justify-around text-black text-lg font-semibold font-Inter'>
                <a href="/"><li className='p-5 hover:text-main-green'>Home</li></a>
                <a href="/categorias-populares"><li className='p-5 hover:text-main-green'>Popular Categories</li></a>
                <a href="/recetas-populares"><li className='p-5 hover:text-main-green'>Popular Ingredients</li></a>
                <a href="/about-us"><li className='p-5 hover:text-main-green'>About Us</li></a> 
            </ul> 
            <img className='flex items-center w-6 h-6'  src='../../images/icon_search.png'/>
            <button className='flex items-center bg-main-green pl-4 pr-4 h-10 rounded-full'>
                <img className='w-5 h-5'  src='../../images/fi-rr-phone-call.png'/>
                <div className='pl-2 pr-2 text-white font-semibold'>Contact</div>
            </button>    
        </nav>
    );    
}

export default Header;