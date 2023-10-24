import React from 'react';
import { useState } from 'react';

function Footer() {

    return (
        <div className='grid absolute bottom-0 justify-around items-center grid-cols-4 grid-rows-auto'>
            <div className='font-Inter grid-cols-1 grid-rows-1'>
                <div className='flex items-center'>
                    <img className='w-10 h-10'  src='../../images/logoR.png'/>
                    <a href='#!' className='font-semibold text-black text-xl font-Inter'>ecetary.com</a> 
                </div>
                <p>
                Savor the artistry where every dish is a culinary masterpiece
                </p>
            </div >
            <div className='font-Inter grid-cols-2 grid-rows-1'>
                <p>
                Useful links
                </p>
                <ul>
                    <a href="/categorias-populares"><li className='p-5 hover:text-green-300'>Popular Categories</li></a>
                    <a href="/recetas-populares"><li className='p-5 hover:text-green-300'>Popular Ingredients</li></a>
                    <a href="/"><li className='p-5 hover:text-green-300'>About Us</li></a> 
                </ul> 
            </div> 
            <div className='font-Inter grid-cols-3 grid-rows-1'>
                <p>
                Main Menu
                </p>
                <ul>
                    <a href="/"><li className='p-5 hover:text-green-300'>Home</li></a>
                    <a href="/"><li className='p-5 hover:text-green-300'>Offers</li></a>
                    <a href="/"><li className='p-5 hover:text-green-300'>Menus</li></a> 
                </ul> 
            </div>        
            <div className='font-Inter grid-cols-4 grid-rows-1'>
                <p >
                Contact Us
                </p>
                <p>info@recetary.com</p>
                <p>+64 958 248 966</p>
            </div>
            <p className='font-Inter grid-rows-2 col-span-4 text-center h-6'>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </div>
    );    
}

export default Footer;