import { useContext } from "react";
import MealContextProvider from '../context/MealContext';


const Model = (props)=>{
    const{setModel} = useContext(MealContextProvider)
    const {strMealThumb:url, strInstructions:instruction, strMeal: name} = props.data;
    // console.log(singlePart);

    return(
        <div className="overlay min-h-[100vh] min-w-[100vw] fixed top-0
         left-0 bg-black-2 flex justify-center items-center overflow-y-scroll">
            <div className="content bg-white w-[40%] h-[80vh] overflow-y-auto rounded-sm">
                <div className="image-part h-[15rem]">
                    <img src={url} className="object-cover w-full h-full"/>
                </div>
                <h2 className="font-bold text-xl p-5">{name}</h2>
                <div className="content-part">
                    <p className="px-5 text-x text-gray-700">Cooking Instruction</p>
                    <p className="p-5 text-x text-justify text-gray-700 leading-7">{instruction}</p>
                    <button type="buton" className="border mx-5 my-3 bg-red-900 text-white px-5 py-1
                    rounded shadow-md"
                    onClick={()=>setModel(false)}
                    >Close</button>
                </div>
            </div>
        </div>
    )
}

export default Model;