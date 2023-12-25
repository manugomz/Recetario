import React from "react";
import SearchBtn from "./SearchBtn";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex py-6 px-2 gap-2
                            flex-col sm:flex-row 
                            justify-around items-center"
    >
      <div className="flex items-center pr-4">
        <Link
          to="/"
          className=" flex items-center font-semibold text-black text-base md:text-lg lg:text-xl font-Inter"
        >
          <img
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            src="./images/logoR.png"
          />
          ecetary.com
        </Link>
      </div>
      <Navigation />
      <div className="flex flex-row justify-between px-5 lg:w-1/4">
        <SearchBtn />
        <Link to="/contact-us" className="w-1/2">
          <button
            className="flex flex-row justify-between items-center
                            bg-green-300  rounded-full w-[fit-content]
                            px-4 py-2 
                            hover:bg-green-500 hover:shadow-light"
          >
            <img
              className="w-5 h-5 
                        mr-2"
              src="./images/fi-rr-phone-call.png"
            />
            <div className="text-white text-base md:text-lg lg:text-xl font-semibold">
              Contact
            </div>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
