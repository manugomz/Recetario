import React from 'react';

function Header({titulo}) {

    return (
        <nav className='flex flex-row justify-around items-center'>
            <div className='flex items-center'>
                <img className='w-10 h-10'  src='../../src/assets/images/logoR.png'/>
                <a href='' className='font-semibold text-black text-sm sm:text-base md:text-lg lg:text-xl font-Inter'>{titulo}</a>
            </div>
            <ul className='flex justify-around text-black text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-Inter'>
                <a href="/"><li className='p-5 hover:text-green-300'>Home</li></a>
                <a href="/popular-categories"><li className='p-5 hover:text-green-300'>Popular Categories</li></a>
                <a href="/popular-recipes"><li className='p-5 hover:text-green-300'>Popular Recipes</li></a>
                <a href="/about-us"><li className='p-5 hover:text-green-300'>About Us</li></a> 
            </ul> 
            <img className='flex items-center w-6 h-6'  src='../../src/assets/images/icon_search.png'/>
            <button className='flex items-center bg-green-300 pl-4 pr-4 h-10 rounded-full'>
                <img className='w-5 h-5'  src='../../src/assets/images/fi-rr-phone-call.png'/>
                <div className='pl-2 pr-2 text-white font-semibold'>Contact</div>
            </button>    
        </nav>
    );    
}

export default Header;