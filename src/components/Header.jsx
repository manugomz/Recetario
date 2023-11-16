import React from "react";
import SearchBtn from "./SearchBtn";

function Header({ titulo }) {
  return (
    <header
      className="flex py-6 px-2 gap-2
                            flex-col sm:flex-row 
                            justify-around items-center"
    >
      <div className="flex items-center pr-4">
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          src="../../src/assets/images/logoR.png"
        />
        <a
          href="/"
          className="font-semibold text-black text-base md:text-lg lg:text-xl font-Inter"
        >
          {titulo}
        </a>
      </div>
      <nav>
        <ul
          className="flex justify-around
                            mx-auto px-2
                            text-black text-base md:text-lg lg:text-xl font-semibold font-Inter"
        >
          <a href="/">
            <li className="p-2 hover:text-green-300">Home</li>
          </a>
          <a href="/all-recipes">
            <li className="p-2 hover:text-green-300">All Recipes</li>
          </a>
          <a href="/popular-categories">
            <li className="p-2 hover:text-green-300">Popular Categories</li>
          </a>
          <a href="/about-us">
            <li className="p-2 hover:text-green-300">About Us</li>
          </a>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-4 w-1/4">
        <SearchBtn />

        <button
          className="flex items-center bg-green-300  rounded-full px-4 py-2
                                    h-1/6 min-w-[40%] 
                                    hover:bg-green-500 hover:shadow-light"
        >
          <img
            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 "
            src="../../src/assets/images/fi-rr-phone-call.png"
          />
          <div className="pl-2 pr-1 text-white text-base md:text-lg lg:text-xl font-semibold">
            Contact
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
