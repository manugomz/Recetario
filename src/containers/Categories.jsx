import React from "react";
import CategoriesBox from "../components/CategoriesBox";
import useFetch from "../hooks/useFetch";
import FavoriteRecipes from "../components/FavoriteRecipes";

function Categories() {
  let { data, isLoading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  return (
    <section >
      <h2
        className="font-Inter font-bold 
                        text-red-500 text-center text-xs lg:text-base"
      >
        CUSTOMER FAVORITES
      </h2>
      <h1
        className="font-extrabold text-4xl font-Inter text-center mb-5 
                        lg:text-3xl
                        2xl:text-6xl"
      >
        Categories
      </h1>
      <div
        className="flex flex-wrap justify-around w-screen h-full
            lg:mx-5 p-8 lg:px-20"
      >
        {data.categories &&
          data.categories.map((data) => (
            <CategoriesBox data={data} key={data.idCategory} />
          ))}
      </div>
    </section>
  );
}

export default Categories;
