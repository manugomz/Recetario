import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-4 mt-5 mb-8 font-Inter grid grid-cols-4 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-4">
      <h1
        className="grid font-extrabold text-3xl text-center col-span-2 place-self-center md:col-start-1 md:row-start-2
                            md:place-self-start md:text-6xl md:w-1/2">
        All your recipes in one place
      </h1>
      <p
        className="col-span-2 p-6 place-self-center md:col-start-1 md:row-start-3 md:place-self-start md:w-1/2">
        Make the most of the ingredients in your fridge with recipes that adapt
        to your needs.
      </p>
          
        <Link to="/all-recipes"
        className="flex flex-col items-center px-4 py-5 bg-green-300  rounded-full h-1/6
                             hover:bg-green-500 text-white md:text-lg lg:text-xl font-semibold 
                             place-content-center place-self-start col-start-4 row-start-3 text-center
                             md:col-start-1 md:row-start-4 md:w-1/2 md:place-self-center " >
        Starts now
      </Link>
    
      
      <div
        className="relative w-80 h-80 col-span-3 row-span-3 place-self-center md:col-start-2 md:row-start-1 md:row-span-3
                            md:w-11/12 md:h-11/12 xl:w-9/12 xl:h-9/12 ">
        <img
          className="absolute pl-6 pt-14 "
          src="./images/Circulo_verde.png"/>
        <img
          className="absolute pb-12 md:border-b-12 xl:pb-32"
          src="./images/Mujer.png"
        />
      </div>
    </div>
  );
}

export default Home;
