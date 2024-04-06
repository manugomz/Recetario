import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import ContactButton from "./ContactButton";

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="hidden lg:flex">
        <ul
          className=" flex justify-around 
        font-semibold font-Inter text-black 
        md:text-lg lg:text-xl
        "
        >
          <Link to="/">
            <li className="p-2 hover:text-green-300">Home</li>
          </Link>
          <Link to="/all-recipes">
            <li className="p-2 hover:text-green-300">All Recipes</li>
          </Link>
          <Link to="/categories">
            <li className="p-2 hover:text-green-300">Categories</li>
          </Link>
          <Link to="/about-us">
            <li className="p-2 hover:text-green-300">About us</li>
          </Link>
        </ul>
      </nav>
      <div className="lg:hidden order-last z-20">
        <button onClick={handleMenu}>
          <span className="sr-only">Open Main Menu</span>
          {open === false ? (
            <LuMenu className="w-8 h-7 text-black hover:text-green-300" />
          ) : (
            <IoClose className="w-8 h-6" />
          )}
        </button>
      </div>
      {/*Mobile menu 16:55 */}
      {open ? (
        <div
          className="absolute top-0 left-0
                      bg-white pb-2 z-10 w-full shadow-lg
                      md:hidden"
        >
          <nav className="px-2 pt-6 w-full pb-3 sm:px-3 ">
            <ul
              className="flex flex-col justify-around text-center items-center
                          font-semibold font-Inter text-black 
                          md:text-lg lg:text-xl"
            >
              <Link to="/" onClick={handleMenu}>
                <li className="p-2 hover:text-green-300">Home</li>
              </Link>
              <Link to="/all-recipes" onClick={handleMenu}>
                <li className="p-2 hover:text-green-300">All Recipes</li>
              </Link>
              <Link to="/categories" onClick={handleMenu}>
                <li className="p-2 hover:text-green-300">Categories</li>
              </Link>
              <Link to="/about-us" onClick={handleMenu}>
                <li className="p-2 hover:text-green-300">About us</li>
              </Link>
              <Link to="/contact-us">
                <ContactButton />
              </Link>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export default Navigation;
