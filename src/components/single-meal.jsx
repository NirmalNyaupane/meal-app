import { BsHandThumbsUp } from "react-icons/bs";
import MealContextProvider from '../context/MealContext';
import { useContext } from "react";
const SingleMealItems = (props) => {
  const { idMeal: id, strMealThumb: url, strMeal: name } = props.data;
  const{showPopup, addToFavourite} = useContext(MealContextProvider);
  return (
    <>
      <div className="mealItems shadow-2xl rounded-lg">
        <div className="w-[80%]">
          <img
            src={url}
            className="min-w-[125%] h-52 object-cover rounded-lg cursor-pointer"
            draggable={false}
            alt={name}
            onClick={()=>showPopup(id)}
          />
        </div>

        <div className="bg-red-50 px-5 py-4 flex justify-between rounded-lg">
          <p className="pr-4 text-2xl">{name}</p>
          <button>
            <BsHandThumbsUp className="text-2xl"
            onClick={()=>addToFavourite(id)}
             />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleMealItems;
