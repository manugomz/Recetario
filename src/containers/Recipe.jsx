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
      <article className=" self-center my-10 w-5/6 h-2/3">
        <div className="flex flex-col md:flex-row w-full">
        <section className="bg-green-100 mx-5 h-full p-6 rounded-b-lg 
              md:w-2/6 md:mx-0 md:my-2 md:rounded-none
              lg:w-1/2">
          <h2 className="mb-5 font-bold">INGREDIENTS</h2>
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
          className="h-auto rounded-xl order-first md:order-none md:w-4/6 md:object-cover"
          src="../../public/images/donut.jpg"
        />
        </div>
          <h2 className=" mx-2 h-full pt-6 mb-5 font-bold">INSTRUCTIONS</h2>
        <section className=" mx-2 h-full p-2">
          <p>Dissolve yeast in warm water in 2 1/2-quart bowl.Add milk, sugar, salt, eggs, shortening and 2 cups flour.
            Beat on low for 30 seconds, scraping bowl constantly.Beat on medium speed for 2 minutes, scraping bowl occasionally.Stir in remaining flour until smooth.
            Cover and let rise until double, 50-60 minutes.(Dough is ready when indentation remains when touched)
            Turn dough onto floured surface; roll around lightly to coat with flour.
            Gently roll dough 1/2-inch thick with floured rolling pin.Cut with floured doughnut cutter.Cover and let rise until double, 30-40 minutes.<br/>
          Heat vegetable oil in deep fryer to 350°.Slide doughnuts into hot oil with wide spatula.Turn doughnuts as they rise to the surface.
          Fry until golden brown, about 1 minute on each side.Remove carefully from oil (do not prick surface); drain.Dip the doughnuts into creamy glaze set on rack.
          <br/><br/><br/>Glaze: <br/>Heat butter until melted.Remove from heat.Stir in powdered sugar and vanilla until smooth.Stir in water, 1 tablespoon at a time, until desired consistency.</p>
        </section>
      </article>
    </div>
  );
};

export default Recipe;
