import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import propTypes from 'prop-types';
const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('chefs.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
   
    return (
        <div className="w-2/3">
            <div className='grid grid-cols-2 gap-6'>
                {
                    recipes.map((myrecipe,idx) => <Recipe
                        myrecipe={myrecipe}
                        key={idx}
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }
            
            </div>
        </div>
    );
};
Recipes.propTypes = {
    handleWantToCook:propTypes.func
}
export default Recipes;