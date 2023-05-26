import MealContextProvider from "../context/MealContext";
import { useContext } from "react";
import SingleMealItems from "../components/single-meal";
import SearchMeal from "../components/SearchMeal";
import Model from "../components/Model";
import Favourite from "../components/Favourite";
import "./loading.css";

const Meal = () => {
  const { mealItems, isLoading, modelItems, isModel,favourite } =
    useContext(MealContextProvider);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spiner"></div>
      </div>
    );
  }

  if (mealItems.length < 1) {
    return (
      <>
        <SearchMeal />
        <div className="text-gray-700 text-center text-2xl">
          There is nothing matching to your search
        </div>
      </>
    );
  }

  return (
    <>
      <SearchMeal />

      {favourite.length > 0 && <Favourite />}
      {isModel && <Model data={modelItems} />}
      <section className="grid grid-cols-3 gap-8 w-[95%] max-w-[1200px] m-auto my-8">
        {mealItems.map((singleItems) => {
          return (
            <SingleMealItems key={singleItems.idMeal} data={singleItems} />
          );
        })}
      </section>
    </>
  );
};
export default Meal;
