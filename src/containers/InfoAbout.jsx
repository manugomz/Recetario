import React from 'react';

function InfoAbout () {
    return (
        <section>
            <h1 className='font-Inter font-bold 
                        text-red-500 text-center text-xs
                        md:text-sm lg:text-base xl:text-lg'>ABOUT US</h1>
            <h2 className='font-Inter font-extrabold 
                        text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                        '>The only thing we are serious about is food.</h2>
            <div className='p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row mb-4 sm:mb-0 sm:mr-8'>
                       <img className='rounded-e-full border-8 border-green-100 mx-10
                                        w-20 sm:w-30 md:w-40 lg:w-50 
                                        h-20 sm:h-30 md:h-40 lg:h-50' 
                            src="../../src/assets/images/Manuela.jpeg" 
                            alt="Manuela" />
                       <img className='rounded-e-full border-8 border-green-100 mx-10
                                        w-20 sm:w-30 md:w-40 lg:w-50
                                        h-20 sm:h-30 md:h-40 lg:h-50' 
                            src="../../src/assets/images/Adriana.jpeg" 
                            alt="Adriana" />
                       <img className='rounded-e-full border-8 border-green-100 mx-10
                                        w-20 sm:w-30 md:w-40 lg:w-50
                                        h-20 sm:h-30 md:h-40 lg:h-50' 
                            src="../../src/assets/images/Natalia.jpg" 
                            alt="Natalia" />
                    </div>
                    <div className='pt-8 mx-6'>
                        <p className='font-Inter font-extralight text-justify text-gray-700 
                                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>"Beyond a mere passion for cuisine, we constitute a trio of dedicated students who have united with a singular purpose: to establish a culinary sanctuary where flavors and dreams harmoniously converge. Our mission is straightforward yet profound: to foster human connection through the delight of gastronomy. We strive to be a wellspring of inspiration, a dependable resource, and a culinary refuge for all those who yearn to explore and relish their cherished dishes.
                        Our vision encompasses a world in which cooking becomes a communal adventure, wherein each recipe evolves into a journey filled with revelations. We aspire to serve as an unwavering companion in your quest for flavors, a place where you can encounter all your preferred meals, while simultaneously providing a platform to experiment and explore novel culinary pleasures. Our aim is to make cooking accessible and enjoyable for all, irrespective of one's culinary expertise.
                        Join us on this gastronomic odyssey and uncover the enchantment embedded within each recipe. Welcome to our culinary haven, where dreams simmer slowly, and flavors transform into indelible memories."</p>
                    </div>
                </div>  
        </div>

        </section>
    )
}

export default InfoAbout;