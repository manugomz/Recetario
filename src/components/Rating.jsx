import React from 'react';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa6';

function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className='flex items-center'>
            {[...Array(5)].map((star,index) =>{
                const ratingValue = index + 1;
                return(
                    <label key={ratingValue}>
                        <input 
                            className='hidden' 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            key={ratingValue}
                            onClick={()=>setRating(ratingValue)}
                        />
                        <FaStar 
                            size={40}
                            className='cursor-pointer' 
                            color={ratingValue <=(hover||rating)?'#FFE605':'#E4E5E9'} 
                            onMouseEnter={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
            )})}
            <p>    Plate rating {rating}</p>
        </div>
    );
}

export default Rating;