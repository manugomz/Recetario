import React from 'react';

import LettersBar from '../components/LettersBar';
import { useState } from 'react';
import HandleRecipeList from '../components/HandleRecipeList';


function AllRecipes() {
  
    //* letter select logic

    const [currentLetter, setCurrentLetter] = useState('c');
    const handleSelectLetter = (letter) => {
        setCurrentLetter(letter)
    };

    //* Fetch logic

    return (
        <section>
            <h2 className="font-Inter font-bold 
                         text-red-500 text-center text-xs
            ">SPECIAL DISHES</h2>
            <h1 className='font-extrabold text-4xl font-Inter text-center mx-5 mb-5 '>All recipes</h1>
            <LettersBar handleSelectLetter={handleSelectLetter}/>
            <HandleRecipeList currentLetter={currentLetter}/> 
        </section>
    );
}

export default AllRecipes;