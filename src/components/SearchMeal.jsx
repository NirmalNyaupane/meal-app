import MealContextProvider from '../context/MealContext'
import {useState, useContext } from 'react';
const SearchMeal = () => {
    const{setSearchParm, fetchRandomMeal} = useContext(MealContextProvider)
    const[urlParam, setUrlParam] = useState("");

    const submitForm = (e)=>{
        e.preventDefault();

        if(!urlParam) return;
        setSearchParm(urlParam);
    }
  return (
    <div className="text-center my-8">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="search items"
          className="border py-1 px-2 bg-blue-50 rounded-md focus:outline-none mr-4 shadow-sm"
          value={urlParam}
          onChange={(e)=>{setUrlParam(e.target.value)}}
        />
        <button
          type="submit"
          className="bg-blue-900
         text-white px-3 py-1 mx-3 rounded-md shadow-md"
        >
          Search
        </button>
        <button
          type="button"
          className="bg-blue-600
         text-white px-3 py-1 rounded-md shadow-md"
         onClick={fetchRandomMeal}
        >
          Subrise Me
        </button>
      </form>
    </div>
  );
};

export default SearchMeal;
