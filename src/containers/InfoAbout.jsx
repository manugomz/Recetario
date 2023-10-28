import React from 'react';1

function InfoAbout () {
    return (
        <div className=''>
            <h1 className='font-Inter font-bold text-red-500 text-center leading-10 text-sm h-6 pb-10'>ABOUT US</h1>
            <h2 className='font-Inter font-bold text-center h-6 pb-10'>The only thing we are serious about is food.</h2>
                <div className='flex flex-row justify-evenly'>
                    <div className='w-50 h-80 p-5 static'>
                        <img className='h-40 absolute z-30' src="../../images/Chef.png" />
                        <img className='h-40 absolute z-20' src="../../images/Fondo.png" />
                    </div>
                    <div className='w-1/4 h 1/4 p-5 static'>
                        <p className='font-Inter text-justify tracking-tighter font-thin text-sm'>"Más allá de la simple pasión por la cocina, somos un trío de entusiastas estudiantes que se unieron con un propósito único: crear un rincón culinario donde los sabores y los sueños se fusionan. Nuestra misión es sencilla pero poderosa: unir a las personas a través del placer de la comida. Buscamos ser un faro de inspiración, un recurso confiable y un refugio gastronómico para todos aquellos que anhelan descubrir y disfrutar de sus platos favoritos.<br></br>
                    Nuestra visión es la de un mundo donde la cocina sea una aventura compartida, donde cada receta se convierta en un viaje lleno de descubrimientos. Deseamos ser el compañero constante en tu búsqueda de sabores, un lugar donde puedas encontrar todas tus comidas favoritas, y a la vez, un espacio para experimentar y explorar nuevas delicias culinarias. Queremos hacer que cocinar sea fácil y divertido para todos, sin importar su nivel de experiencia en la cocina.<br></br>
                    Únete a nosotros en este viaje gastronómico y descubre la magia que se encuentra en cada receta. ¡Bienvenidos a nuestro rincón culinario, donde los sueños se cocinan a fuego lento y los sabores se convierten en memorias inolvidables!"</p>
                    </div>
                </div>  
        </div>
    )
}

export default InfoAbout;