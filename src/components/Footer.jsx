import React from 'react';
import { Link } from 'react-router-dom';
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
    return (
        <footer className='md:place-content-center lg:place-content-center px-4 pb-4'>
            <div className='container flex flex-col md:flex-row w-full
                            md:gap-8 md:place-content-center 
                            lg:place-content-center pt-10 pb-5'>
                <div className='w-full md:w-1/4'>
                    <div className='flex justify-center'>
                        <img className='w-8 h-8 
                        md:w-10 md:h-10 
                        lg:w-12 lg:h-12' 
                        src='./images/logoR.png'/>
                        <a href='' className='font-semibold text-black self-center
                                            text-base md:text-lg lg:text-xl font-Inter'>ecetary.com</a> 
                    </div>
                    <div className='text-center justify-items-center font-Inter py-3 px-4
                                    text-black text-sm 
                                    md:text-base 
                                    lg:text-lg '>
                        Savor the artistry where every dish is a culinary masterpiece
                    </div>
                    <div className='flex justify-center gap-2 pb-4'>
                        <SlSocialFacebook className="text-xl hover:scale-125 hover:text-green-300 cursor-pointer"/> 
                        <SlSocialInstagram className="text-xl hover:scale-125 hover:text-green-300 cursor-pointer"/> 
                        <SlSocialTwitter className="text-xl hover:scale-125 hover:text-green-300 cursor-pointer ml-1"/> 
                    </div>                
                </div >
                <div className='flex place-content-between py-2 px-6 gap-2 font-Inter 
                                md:gap-8 lg:gap-16  
                                text-base md:text-lg lg:text-xl'>
                    <div className='w-1/3'>
                        <p className='font-semibold pb-4'>
                        Useful links
                        </p>
                        <ul className='' >
                            <Link to="/categories"><li className='hover:text-green-300'
                            >Categories</li></Link>
                            <Link to="/all-recipes"><li className='hover:text-green-300'
                            >Recipes</li></Link>
                            <Link to="/about-us"><li className='hover:text-green-300'>About Us</li></Link> 
                        </ul> 
                    </div> 
                    <div className='w-1/3'>
                        <p className='font-semibold pb-4'>
                        Main Menu
                        </p>
                        <ul className='' >
                            <Link href="/"><li className='hover:text-green-300'>Home</li></Link>
                            <Link to="/"><li className='hover:text-green-300'>Offers</li></Link>
                            <Link to="/"><li className='hover:text-green-300'>Menus</li></Link> 
                        </ul> 
                    </div>        
                    <div className='w-1/3'>
                        <p className='font-semibold pb-4'>
                        Contact Us
                        </p>
                        <p className=''>+64 958 248966</p>
                        <p className=''>info@recetary.com</p>                
                    </div> 
                </div>  
            </div>
            <p className='font-Inter text-center text-base 
                        md:text-lg 
                        lg:text-xl'>
                Copyright 2023 Be-Chotas | All rights reserved
            </p>  
        </footer>
    );    
}

export default Footer;


