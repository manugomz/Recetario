import React from 'react';

function CategoriesBox(){
    return(
        <div>
            <button>
            <img className='rounded-full bg-center self-center bg-main-green' src='../../public/images/desayuno.png'/>
            </button>
            <h2 className='text-center font-Inter'>Desayuno</h2>
            <p className='text-center font-mono font-light'>(12 desayunos)</p>
        </div>
    );
}

export default CategoriesBox;