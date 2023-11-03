import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';


function Footer() {
    return (
        <footer className=' justify-items-center'>
            <div className='items-start justify-items-center container mx-auto grid grid-cols-1 md:grid-cols-5 text-xs sm:text-sm md:text-base lg:text-lg'>
                <div className='col-span-3 md:col-span-2 font-Inter items-center content-around'>
                    <div className='flex justify-center py-2'>
                        <img className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' src='../../src/assets/images/logoR.png'/>
                        <a href='' className='font-semibold text-black text-sm sm:text-base md:text-lg lg:text-xl font-Inter'>ecetary.com</a> 
                    </div>
                    <div className='px-4 md:px-24 py-2 text-center justify-items-center'>
                        Savor the artistry where every dish is a culinary masterpiece
                    </div>
                    <div className='flex justify-around py-2 px-9'>
                        <SocialMediaIcons/>       
                    </div>                
                </div >
                <div className='font-Inter'>
                    <p className='font-semibold'>
                    Useful links
                    </p>
                    <ul className='content-around list-outside list-none' >
                        <a href="/categorias-populares"><li className='hover:text-green-300 py-2'>Popular Categories</li></a>
                        <a href="/recetas-populares"><li className='hover:text-green-300 py-2'>Popular Ingredients</li></a>
                        <a href="/"><li className='hover:text-green-300 py-2'>About Us</li></a> 
                    </ul> 
                </div> 
                <div className='font-Inter'>
                    <p className='font-semibold'>
                    Main Menu
                    </p>
                    <ul className='list-outside list-none' >
                        <a href="/"><li className='hover:text-green-300 py-2'>Home</li></a>
                        <a href="/"><li className='hover:text-green-300 py-2'>Offers</li></a>
                        <a href="/"><li className='hover:text-green-300 py-2'>Menus</li></a> 
                    </ul> 
                </div>        
                <div className='font-Inter'>
                    <p className='font-semibold'>
                    Contact Us
                    </p>
                    <p className='py-2'>+64 958 248 966</p>
                    <p className='py-2'>info@recetary.com</p>                
                </div>   
            </div>
            <p className='font-Inter text-center'>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </footer>
    );    
}


export default Footer;


