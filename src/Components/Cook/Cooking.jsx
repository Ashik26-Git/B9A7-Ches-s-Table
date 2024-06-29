import PropTypes from 'prop-types'
const Cooking = ({recipeItem}) => {
    console.log(recipeItem);
    const {recipe_name,calories,preparing_time}= recipeItem;
    return (
        <tr>
            <td className='border border-black'>{recipe_name}</td>
            <td className='border border-black'>{preparing_time}</td>
            <td className='border border-black'>{calories}</td>
        </tr>
    );
};
Cooking.propTypes={
    recipeItem: PropTypes.object.isRequired
}
export default Cooking;