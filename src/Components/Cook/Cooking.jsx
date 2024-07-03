Cooking.jsx
import PropTypes from 'prop-types'
const Cooking = ({recipeItem,handleCurentlyCooking}) => {
const {recipe_name,preparing_time,calories}=recipeItem;
    return (
        <div className='mt-4 flex justify-evenly p-3 rounded-lg bg-[#28282808] text-base text-[#878787]'>
            <h1>{recipe_name}</h1>
            <h1>{preparing_time} min</h1>
            <h1>{calories} cal</h1>
            <button onClick={()=>handleCurentlyCooking(recipeItem)} className="btn btn-active bg-[#0BE58A]  btn-primary">Preparing</button>
        </div>
        
    );
};
Cooking.propTypes={
    recipeItem: PropTypes.object.isRequired,
    handleCurentlyCooking: PropTypes.func.isRequired,
}
export default Cooking;