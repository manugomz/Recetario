import React from 'react';

function LettersBar({lettersArray}) {

  return (
        <ul className='flex justify-around items-center bg-green-300 h-10 w-full mb-2'>
            {lettersArray.map((letter) => {
                return  <li className='text-white 
                            font-Inter text-xl' 
                            key={letter}>
                                <button className=' p-2
                                        hover:bg-green-500 hover:shadow-light hover:rounded-t-md
                                        hover:-translate-y-1 hover:duration-300
                                        active:bg-green-700 active:shadow-none active:duration-0
                                '>{letter}
                                </button>
                        </li>
            })}
        </ul>
  );
}

export default LettersBar;
