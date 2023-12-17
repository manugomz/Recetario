import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <>
      <nav className="hidden md:flex">
        <ul
          className="flex justify-around 
        font-semibold font-Inter text-black 
        md:text-lg lg:text-xl
        "
        >
          <Link to="/recetario/">
            <li className="p-2 hover:text-green-300">Home</li>
          </Link>
          <Link to="/recetario/all-recipes">
            <li className="p-2 hover:text-green-300">All Recipes</li>
          </Link>
          <Link to="/recetario/categories">
            <li className="p-2 hover:text-green-300">Categories</li>
          </Link>
          <Link to="/recetario/about-us">
            <li className="p-2 hover:text-green-300">About us</li>
          </Link>
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          className="flex items-center w-full justify-between"
          onClick={handleMenu}
        >
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
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 sm:px-3">
            <ul
              className="flex flex-col justify-around 
        font-semibold font-Inter text-black 
        md:text-lg lg:text-xl
        "
            >
              <Link to="/recetario/">
                <li className="p-2 hover:text-green-300">Home</li>
              </Link>
              <Link to="/recetario/all-recipes">
                <li className="p-2 hover:text-green-300">All Recipes</li>
              </Link>
              <Link to="/recetario/categories">
                <li className="p-2 hover:text-green-300">Categories</li>
              </Link>
              <Link to="/recetario/about-us">
                <li className="p-2 hover:text-green-300">About us</li>
              </Link>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export default Navigation;
