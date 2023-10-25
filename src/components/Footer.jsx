import React from 'react';
import { useState } from 'react';
import{CiFacebook, CiInstagram, CiTwitter, CiYoutube} from 'react-icons/ci';

function Footer() {

    return (
        <div className='grid absolute bottom-0 justify-around grid-cols-5 grid-rows-auto'>
            <div className='grid font-Inter grid-cols-1 grid-rows-1 items-center content-around py-2 col-span-2'>
                <div className='flex justify-center py-2'>
                    <img className='w-10 h-10'  src='../../images/logoR.png'/>
                    <a href='#!' className='font-semibold text-black text-xl font-Inter'>ecetary.com</a> 
                </div>
                <div className='w-22'>
                    <p>
                    Savor the artistry where every dish is a culinary masterpiece
                    </p>
                </div>
                <div className='flex justify-around py-2 px-9'>
                    <CiFacebook className='w-6 h-6 hover:text-green-300'/>
                    <CiInstagram className='w-6 h-6 hover:text-green-300'/>
                    <CiTwitter className='w-6 h-6 hover:text-green-300'/>
                    <CiYoutube className='w-6 h-6 hover:text-green-300'/>
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
                <p className='py-2'>info@recetary.com</p>
                <p className='py-2'>+64 958 248 966</p>
            </div>
            <p className='font-Inter grid-rows-2 col-span-5 text-center py-2'>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </div>
    );    
}

export default Footer;