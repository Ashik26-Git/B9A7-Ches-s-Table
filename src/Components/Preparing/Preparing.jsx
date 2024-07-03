
import PropTypes from 'prop-types'
const Preparing = ({cookingItem}) => {
    const {recipe_name,preparing_time,calories}=cookingItem;
    return (
        <div className='mt-4 flex justify-evenly p-3 rounded-lg bg-[#28282808] text-base text-[#878787]'>
            <h1>{recipe_name}</h1>
            <h1>{preparing_time} min</h1>
            <h1>{calories} cal</h1>
        </div>
    );
};
Preparing.propTypes={
    cookingItem: PropTypes.object.isRequired,
}
export default Preparing;