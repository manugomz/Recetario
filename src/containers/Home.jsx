import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="w-full px-5 py-8 font-Inter flex flex-col
                    shadow-xl
                    md:flex-row md:justify-around md:justify-items-center">
      <div className="pb-5 flex flex-col md:justify-center
                    md:w-1/2">
        <h1
          className="grid font-extrabold text-2xl text-center w-full
                    md:place-self-start md:text-5xl ">
          All your recipes in one place
        </h1>
        <p
          className="p-3 pb-8 place-self-center text-center
                    xl:text-2xl">
          Make the most of the ingredients in your fridge with recipes that adapt
          to your needs.
        </p>
        <Link to="./all-recipes"
          className="px-4 py-3 mb-10 bg-green-300 rounded-full
                    hover:bg-green-500 text-white font-semibold 
                    place-self-center 
                    md:text-lg md:self-center
                    lg:text-2xl" >
          Start now
        </Link>
      </div>
      
      <div
        className=" relative aspect-square md:w-[46%]
                    lg:w-1/2
                    xl:w-1/3 ">
        <img
          className="absolute bottom-0 pl-5"
          src="./images/Circulo_verde.png"/>
        <img
          className="absolute bottom-0 pr-2 "
          src="./images/Mujer.png"
        />
      </div>
    </main>
  );
}

export default Home;
