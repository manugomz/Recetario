import React from "react";
import SearchBtn from "./SearchBtn";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import ContactButton from "./ContactButton";

function Header() {
  return (
    <header
      className="flex flex-row
                py-6 px-8
                justify-between items-center"
    >
      <div className="flex items-center pr-4">
        <Link to="/" className=" flex items-center">
          <img
            className="w-8 h-8 
                      md:w-10 md:h-10 
                      lg:w-12 lg:h-12"
            src="./images/logoR.png"
          />
          <p
            className="font-semibold font-Inter text-black text-base hidden md:flex
                        md:text-lg 
                        lg:text-xl"
          >
            ecetary.com
          </p>
        </Link>
      </div>
      <Navigation />
      <SearchBtn />
      <Link to="/contact-us" className="hidden lg:flex">
        <ContactButton />
      </Link>
    </header>
  );
}

export default Header;
