import React from "react";
import { GiCook } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

const Recipe = () => {
    
  const boldNumber = "font-bold text-xl";
  const listText = "py-2 border-b-2 border-gray-500 border-dotted";

  return (
    <div className="flex flex-col items-center p-auto w-screen">
      <h1 className="font-extrabold text-3xl m-5 font-Inter text-center">
        Krispy Kream Donuts
      </h1>
      <div className="flex w-1/2 justify-around">
        <div className="flex items-center gap-2">
          <PiCookingPotFill />
          Category
        </div>
        <div className="flex items-center gap-2 mx-2 px-2 border-x-2">
          <GiCook />
          Difficulty
        </div>
        <div className="flex items-center gap-2">
          <FaStar />
          Rating
        </div>
      </div>
      <article className="flex flex-col self-center my-10 w-5/6 h-2/3">
        <section className="bg-green-100 mx-5 h-full p-6 rounded-b-lg">
          <h2 className="mb-5">INGREDIENTS</h2>
          <ul className="flex-col ml-2">
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/4 </span> Ounce yeast
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/4 </span> Cup water
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1 1/2 </span> Cup water
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/2 </span> Cup sugar
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1 </span> Tsp salt
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/4 </span> Ounce yeast
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>2 </span> Eggs
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/3 </span> Cups shortening
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>5 </span> Drops of flour
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}> </span> Canola oil
              </p>
            </li>
            <li className={listText}>
              <p>
                <span className={boldNumber}>1/2 </span> Cup of milk
              </p>
            </li>
            <li className='pt-2'>
              <p>
                <span className={boldNumber}>2 </span> Cups of sugar
              </p>
            </li>
          </ul>
        </section>
        <img
          className="h-auto rounded-xl order-first"
          src="../../public/images/donut.jpg"
        />
        <section className=" mx-5 h-full p-6">
          <h2 className="mb-5">INSTRUCTIONS</h2>
          <p>Dissolve yeast in warm water in 2 1/2-quart bowl.</p>
          <p>Add milk, sugar, salt, eggs, shortening and 2 cups flour.</p>
          <p>Beat on low for 30 seconds, scraping bowl constantly.</p>
          <p>Beat on medium speed for 2 minutes, scraping bowl occasionally.</p>
          <p>Stir in remaining flour until smooth.</p>
          <p>Cover and let rise until double, 50-60 minutes.</p>
          <p>(Dough is ready when indentation remains when touched)</p>
          <p>Turn dough onto floured surface; roll around lightly to coat with flour.</p>
          <p>Gently roll dough 1/2-inch thick with floured rolling pin.</p>
          <p>Cut with floured doughnut cutter.</p>
          <p>Cover and let rise until double, 30-40 minutes.</p>
          <p>Heat vegetable oil in deep fryer to 350°.</p>
          <p>Slide doughnuts into hot oil with wide spatula.</p>
          <p>Turn doughnuts as they rise to the surface.</p>
          <p>Fry until golden brown, about 1 minute on each side.</p>
          <p>Remove carefully from oil (do not prick surface); drain.</p>
          <p>Dip the doughnuts into creamy glaze set on rack.</p>
          <p>Glaze: Heat butter until melted.</p>
          <p>Remove from heat.</p>
          <p>Stir in powdered sugar and vanilla until smooth.</p>
          <p>Stir in water, 1 tablespoon at a time, until desired consistency.</p>
        </section>
      </article>
    </div>
  );
};

export default Recipe;
