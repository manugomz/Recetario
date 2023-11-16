import React from 'react';

import LettersBar from '../components/LettersBar';
import { useState } from 'react';
import HandleRecipeList from '../components/HandleRecipeList';

function AllRecipes() {
  
    const [currentLetter, setCurrentLetter] = useState('A');
    const handleSelectLetter = (letter) => {
        setCurrentLetter(letter)
    };

    return (
        <section>
            <h2 className="font-Inter font-bold 
                         text-red-500 text-center text-xs">SPECIAL DISHES</h2>
            <h1 className=' font-Inter font-extrabold text-4xl 
            text-center 
            mx-5 mb-5 '>All recipes</h1>
            <LettersBar handleSelectLetter={handleSelectLetter}/>
            <HandleRecipeList currentLetter={currentLetter}/> 
        </section>
    );
}

export default AllRecipes;