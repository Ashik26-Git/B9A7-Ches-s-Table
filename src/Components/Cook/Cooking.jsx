import PropTypes from 'prop-types'
const Cooking = ({item}) => {
    console.log(item);
    const [recipe_name]=item;
    return (
        <div>
            <h1>{recipe_name}</h1>
        </div>
    );
};
Cooking.propTypes={
    item: PropTypes.array
}
export default Cooking;