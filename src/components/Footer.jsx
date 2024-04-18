import React from "react";
import { Link } from "react-router-dom";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  const styles = {
    title: `font-semibold md:pb-4 text-center text-white`,
    list: `flex md:flex-col flex-row gap-5 mb-3`,
    links:`hover:text-black hover:underline`
  };
  return (
    <footer className="px-5 pb-4 pt-8 text-white bg-green-500">
      <div
        className="flex flex-col md:flex-row
                  pt-5 pb-2"
      >
        <div className="md:w-5/12">
          <div className="flex justify-center">
            <img
              className="w-8 h-8 
                        md:w-10 md:h-10 
                        lg:w-12 lg:h-12"
              src="./images/logoR.png"
            />
            <Link
              to=""
              className="font-semibold  self-center
                                            text-base md:text-lg lg:text-xl font-Inter"
            >
              ecetary.com
            </Link>
          </div>
          <div
            className="text-center justify-items-center font-Inter py-3 px-4
                                  text-sm 
                                    md:text-base 
                                    lg:text-lg "
          >
            Savor the artistry where every dish is a culinary masterpiece
          </div>
          <div className="flex justify-center gap-2 pb-4">
            <SlSocialFacebook className="text-xl hover:scale-125 hover:text-black cursor-pointer" />
            <SlSocialInstagram className="text-xl hover:scale-125 hover:text-black cursor-pointer" />
            <SlSocialTwitter className="text-xl hover:scale-125 hover:text-black cursor-pointer ml-1" />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row py-2 font-Inter 
                    md:justify-around items-start text-center md:w-7/12
                                md:text-lg lg:text-xl"
        >
          <div className="self-center">
            <p className={styles.title}>Useful links</p>
            <ul className={styles.list}>
              <Link to="/categories">
                <li className={styles.links}>Categories</li>
              </Link>
              <Link to="/all-recipes">
                <li className={styles.links}>Recipes</li>
              </Link>
              <Link to="/about-us">
                <li className={styles.links}>About Us</li>
              </Link>
            </ul>
          </div>
          <div className="self-center">
            <p className={styles.title}>Main Menu</p>
            <ul className={styles.list}>
              <Link href="/">
                <li className={styles.links}>Home</li>
              </Link>
              <Link to="/">
                <li className={styles.links}>Offers</li>
              </Link>
              <Link to="/">
                <li className={styles.links}>Menus</li>
              </Link>
            </ul>
          </div>
          <div className="self-center">
            <p className={styles.title}>Contact Us</p>
            <div className={styles.list}>
              <p className="">+64 958 248966</p>
              <p className="">info@recetary.com</p>
            </div>
          </div>
        </div>
      </div>
      <p
        className="font-Inter text-center 
                  mb-1 text-xs
                  md:text-sm 
                  lg:text-base"
      >
        Copyright 2023 Be-Chotas© | All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
