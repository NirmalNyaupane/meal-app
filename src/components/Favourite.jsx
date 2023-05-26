import MealContextProvider from "../context/MealContext";
import { useContext } from "react";

const Favourite = () => {
  const { favourite,removeToFavourite,showPopup} = useContext(MealContextProvider);

  return (
    <div className="favourite-container bg-black">
      <h2 className="text-white text-center text-2xl">Favourites</h2>
      <div className="flex gap-5 py-4 w-[95%] max-w-[1200px] m-auto">
        {favourite.map((singleFavourite) => {
          const { idMeal: id, strMealThumb: url } = singleFavourite;
          return (
            <div key={id} className="individual-items">
              <div
                className="img-items w-[60px] h-[60px] rounded-full
                        border-white border-4 cursor-pointer"
              >
                <img src={url} className="w-full rounded-full p-1" 
                onClick={()=>showPopup(id)}
                />
              </div>
              <span className="text-white cursor-pointer hover:underline"
              onClick={()=>removeToFavourite(id)}>
                remove
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
