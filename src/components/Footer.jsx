import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';


function Footer() {
    return (
        <footer className='md:place-content-center lg:place-content-center border-x-4'>
            <div className='container flex flex-col md:flex-row width-[100%] md:width-[100%] lg:width-[100%] 
                            md:gap-8 md:place-content-center lg:place-content-center py-10'>
                <div className='width-[25%] md:width-[25%] lg:width-[25%]'>
                    <div className='flex justify-center'>
                        <img className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' 
                        src='/images/logoR.png'/>
                        <a href='' className='font-semibold text-black self-center
                                            text-base md:text-lg lg:text-xl font-Inter'>ecetary.com</a> 
                    </div>
                    <div className='text-center justify-items-center py-3 px-4
                                    text-black text-sm md:text-base lg:text-lg font-Inter'>
                        Savor the artistry where every dish is a culinary masterpiece
                    </div>
                    <div className='pb-4'>
                        <SocialMediaIcons/>       
                    </div>                
                </div >
                <div className='flex place-content-between py-2 px-6 gap-2 font-Inter 
                                md:gap-8 lg:gap-16  
                                text-base md:text-lg lg:text-xl'>
                    <div className='width-[30%] md:width-[30%] lg:width-[30%]'>
                        <p className='font-semibold pb-4'>
                        Useful links
                        </p>
                        <ul className='' >
                            <a href="/categorias-populares"><li className='hover:text-green-300'
                            >Popular Categories</li></a>
                            <a href="/recetas-populares"><li className='hover:text-green-300'
                            >Popular Ingredients</li></a>
                            <a href="/"><li className='hover:text-green-300'>About Us</li></a> 
                        </ul> 
                    </div> 
                    <div className='width-[30%] md:width-[30%] lg:width-[30%]'>
                        <p className='font-semibold pb-4'>
                        Main Menu
                        </p>
                        <ul className='' >
                            <a href="/"><li className='hover:text-green-300'>Home</li></a>
                            <a href="/"><li className='hover:text-green-300'>Offers</li></a>
                            <a href="/"><li className='hover:text-green-300'>Menus</li></a> 
                        </ul> 
                    </div>        
                    <div className='width-[30%] md:width-[30%] lg:width-[30%]'>
                        <p className='font-semibold pb-4'>
                        Contact Us
                        </p>
                        <p className=''>+64 958 248966</p>
                        <p className=''>info@recetary.com</p>                
                    </div> 
                </div>  
            </div>
            <p className='font-Inter text-center text-base md:text-lg lg:text-xl '>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </footer>
    );    
}

export default Footer;


