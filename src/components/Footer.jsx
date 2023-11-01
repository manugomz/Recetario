import React from 'react';
import { useState } from 'react';
import{CiFacebook, CiInstagram, CiTwitter, CiYoutube} from 'react-icons/ci';

function Footer() {

    return (
        <div className='grid absolute bottom-0 justify-around grid-cols-5 grid-rows-auto max-w-screen-lg text-base sm:text-lg md:text-xl lg:text-2xl my-4 mx-2'>
            <div className='grid font-Inter grid-cols-1 grid-rows-1 items-center content-around py-2 col-span-2'>
                {/* Ejemplo para hacer el logo más grande en pantallas más grandes */}
                <div className='flex justify-center py-2'>
                    <img className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' src='../src/assets/images/logoR.png'/>
                    <a href='#!' className='font-semibold text-black text-xl sm:text-2xl md:text-3xl font-Inter'>ecetary.com</a> 
                </div>
                <div className='w-22'>
                    <p className='px-10 text-center'>
                        Savor the artistry where every dish is a culinary masterpiece
                    </p>
                </div>
                <div className='flex justify-around py-2 px-9'>
                    <CiFacebook className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
                    <CiInstagram className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
                    <CiTwitter className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
                    <CiYoutube className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
                </div>                
            </div >
            <div className='font-Inter grid-cols-2 grid-rows-1 content-around py-2'>
                <p className='font-semibold'>
                Useful links
                </p>
                <ul className='flex-col content-around list-outside list-none py-2' >
                    <a href="/categorias-populares"><li className='hover:text-green-300 py-2'>Popular Categories</li></a>
                    <a href="/recetas-populares"><li className='hover:text-green-300 py-2'>Popular Ingredients</li></a>
                    <a href="/"><li className='hover:text-green-300 py-2'>About Us</li></a> 
                </ul> 
            </div> 
            <div className='font-Inter grid-cols-3 grid-rows-1 py-2'>
                <p className='font-semibold'>
                Main Menu
                </p>
                <ul className='flex-col content-around list-outside list-none py-2' >
                    <a href="/"><li className='hover:text-green-300 py-2'>Home</li></a>
                    <a href="/"><li className='hover:text-green-300 py-2'>Offers</li></a>
                    <a href="/"><li className='hover:text-green-300 py-2'>Menus</li></a> 
                </ul> 
            </div>        
            <div className='font-Inter grid-cols-4 grid-rows-1 flex-col content-around py-2'>
                <p className='font-semibold py-2'>
                Contact Us
                </p>
                <p className='py-2'>+64 958 248 966</p>
                <p className='py-2'>info@recetary.com</p>                
            </div>
            <p className='font-Inter grid-rows-2 col-span-5 text-center py-2'>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </div>
    );    
}

export default Footer;