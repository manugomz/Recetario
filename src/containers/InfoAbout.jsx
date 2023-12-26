import React from 'react';

function InfoAbout () {
    return (
        <section>
            <h1 className='font-Inter font-bold 
                        text-red-500 text-center text-xs
                        lg:text-base
                        '>ABOUT US</h1>
            <h2 className='font-Inter font-extrabold 
                        text-center text-xl pt-2 pb-5 px-4
                        xl:text-6xl
                        '>The only thing we are serious about is food.</h2>
            <div className=''>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pt-2 px-6
                                    md:px-10'>
                        <p className='font-Inter  text-justify text-base lg:text-xl'>Beyond a mere passion for cuisine, we constitute a trio of dedicated students who have united with a singular purpose: to establish a culinary sanctuary where flavors and dreams harmoniously converge. Our mission is straight forward yet profound: to foster human connection through the delight of gastronomy. We strive to be a wellspring of inspiration, a dependable resource, and a culinary refuge for all those who yearn to explore and relish their cherished dishes.
                        Our vision encompasses a world in which cooking becomes a communal adventure, wherein each recipe evolves into a journey filled with revelations. We aspire to serve as an unwavering companion in your quest for flavors, a place where you can encounter all your preferred meals, while simultaneously providing a platform to experiment and explore novel culinary pleasures. Our aim is to make cooking accessible and enjoyable for all, irrespective of one's culinary expertise.
                        Join us on this gastronomic odyssey and uncover the enchantment embedded within each recipe. Welcome to our culinary haven, where dreams simmer slowly, and flavors transform into indelible memories.</p>
                    </div>
                    <div className='flex flex-row w-full justify-between px-5 pt-3
                        md:pt-5
                        lg:w-5/6'>
                        <div className='flex flex-col items-center w-1/3'>
                        <img className='rounded-full object-cover aspect-square border-8 border-green-300
                                        w-11/12 
                                        md:w-60' 
                            src="./images/Manuela.jpeg" 
                            alt="Manuela" />
                        <p className="text-center">Manuela</p>
                        </div>
                       <div className='flex flex-col items-center w-1/3'>
                       <img className='rounded-full object-cover aspect-square border-8 border-green-300 
                                        w-11/12 
                                        md:w-60' 
                            src="./images/Adriana.jpeg" 
                            alt="Adriana" />
                        <p className="text-center">Adriana</p>
                       </div>
                       <div className='flex flex-col items-center w-1/3'>
                        <img className='rounded-full object-cover aspect-square border-8 border-green-300 
                                        w-11/12
                                        md:w-60' 
                                src="./images/Natalia.jpg" 
                                alt="Natalia" />
                            <p className="text-center">Natalia</p>
                       </div>
                       
                    </div>
                </div>  
        </div>

        </section>
    )
}

export default InfoAbout;