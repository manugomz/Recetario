import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';

function SocialMediaIcons() {
    return (
        <div className='flex justify-around py-2 px-9'>
            <CiFacebook className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
            <CiInstagram className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
            <CiTwitter className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
            <CiYoutube className='w-4 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-green-300'/>
        </div>
    );
}

export default SocialMediaIcons;