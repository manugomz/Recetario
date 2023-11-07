import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';

function SocialMediaIcons() {
    return (
        <div className='flex place-content-center gap-8'>
            <CiFacebook className='w-4 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-green-300'/>
            <CiInstagram className='w-4 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-green-300'/>
            <CiTwitter className='w-4 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-green-300'/>
            <CiYoutube className='w-4 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-green-300'/>
        </div>
    );
}

export default SocialMediaIcons;