import Cover from './Components/Cover/Cover'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Cook from './Components/Cook/Cook'
import { useState } from 'react'
import RecipesTD from './Components/Recipes/RecipesTD'
function App() {
  const [cook, setCook]=useState([]);
  const handleWantToCook=(myrecipe)=>{
    const newCook=[...cook,myrecipe];
    setCook(newCook);
  }
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Cover></Cover>
        <RecipesTD></RecipesTD>
        <div className='flex gap-6'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Cook cook={cook}></Cook>
        </div>
      </div>
    </>
  )
}

export default App
