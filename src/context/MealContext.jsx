import axios from "axios";
import { useState, useEffect, createContext } from "react";
const MealContextProvider = createContext(null);

export const MealContext = ({ children }) => {
  const getFavouriteLocal = () => {
    let favou = localStorage.getItem("items");
    if (favou) {
      favou = JSON.parse(localStorage.getItem("items"));
    } else {
      favou = [];
    }

    return favou;
  };

  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchParm, setSearchParm] = useState("");
  const [isModel, setModel] = useState(false);
  const [modelItems, changeModel] = useState([]);
  const [favourite, setFavourite] = useState(getFavouriteLocal());

  const allMealApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.meals) {
        setMealItems(data.meals);
      } else {
        setMealItems([]);
      }
    } catch (err) {
      console.log(err.response);
    }

    setLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchData(randomMealApi);
  };

  useEffect(() => {
    fetchData(`${allMealApi}`);
  }, []);

  useEffect(() => {
    fetchData(`${allMealApi}${searchParm}`);
  }, [searchParm]);

  const showPopup = (id) => {
    setModel(true);
    const popObj = mealItems.find((element) => element.idMeal === id);
    changeModel(popObj);
  };

  const addToFavourite = (id) => {
    const meal = mealItems.find((element) => element.idMeal === id);
    const alreadyMeal = favourite.find((element) => element.idMeal == id);

    if (alreadyMeal) return;

    const updatedFavourite = [...favourite, meal];
    setFavourite(() => updatedFavourite);
    localStorage.setItem("items", JSON.stringify(updatedFavourite));
  };

  const removeToFavourite = (id) => {
    const updatedFavourite = favourite.filter(
      (element) => element.idMeal !== id
    );
    setFavourite(() => updatedFavourite);
    localStorage.setItem("items", JSON.stringify(updatedFavourite));
  };

  const contextData = {
    mealItems,
    isLoading,
    searchParm,
    setSearchParm,
    randomMealApi,
    fetchRandomMeal,
    isModel,
    showPopup,
    modelItems,
    setModel,
    addToFavourite,
    favourite,
    removeToFavourite,
  };

  return (
    <MealContextProvider.Provider value={contextData}>
      {children}
    </MealContextProvider.Provider>
  );
};

export default MealContextProvider;
