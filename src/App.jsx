import Cover from './Components/Cover/Cover'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Cook from './Components/Cook/Cook'
import { useState } from 'react'
import RecipesTD from './Components/Recipes/RecipesTD'
import {toast, Toaster} from 'react-hot-toast'
function App() {
 // cooking state and click handler
 const [cook, setCook] = useState([]);
 const handleWantToCook = (newItem) => {
     // check this element already exist or not is my array
     const isAlreadyInCart = cook.some(
         (item) => item.recipe_id === newItem.recipe_id,
     );
     if (isAlreadyInCart) {
         toast.error("Item Already Exist");
         return;
     } else {
         toast.success("Item Added Successfully");
     }
     setCook([...cook, newItem]);
 };
  
  const [curentlyCooking, setCurentlyCooking]=useState([]);
  const handleCurentlyCooking=(item)=>{
    console.log("preapring button working");
    const remaining=cook.filter(idx=>idx!==item.recipe_id);
    setCook(remaining);
    const isAlreadyCooking=curentlyCooking.some(
      (newRecipe)=>newRecipe.recipe_id===item.recipe_id,
    );
    if(isAlreadyCooking){
      toast.warning("Opps! Item currently Cooking");
      return;
    }
    setCurentlyCooking([...curentlyCooking]);
  }
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Cover></Cover>
        <RecipesTD></RecipesTD>
        <div className='flex gap-6'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Toaster position="top-right"/>
          <Cook 
          cookItem={cook}
          curentlyCooking={curentlyCooking}
          handleCurentlyCooking={handleCurentlyCooking}
          ></Cook>
        </div>
      </div>
    </>
  )
}

export default App
