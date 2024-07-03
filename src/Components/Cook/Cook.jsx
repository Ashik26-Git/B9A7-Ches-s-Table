Cook.jsx
import PropTypes from 'prop-types'
import Cooking from './Cooking'
import Preparing from '../Preparing/Preparing';
const Cook = ({ cookItem, curentlyCooking, handleCurentlyCooking }) => {

    return (
        <div className="w-1/3 p-6 bg-slate-50 shadow">
            <div>
                <h1 className='text-[#282828] text-2xl font-semibold mb-4'>Want to cook: {cookItem.length}</h1>
                <hr />
                <div className='mt-4 flex justify-evenly text-base text-[#878787]'>
                    <h1>Name</h1>
                    <h1>Time</h1>
                    <h1>Calories</h1>
                </div>

                {
                    cookItem.map((item) =>
                        <Cooking
                            key={item.recipe_id}
                            recipeItem={item}
                            handleCurentlyCooking={handleCurentlyCooking}
                        ></Cooking>
                    )
                }
                <div className='mt-5'>
                    <h1 className='text-[#282828] text-2xl font-semibold'>Currently cooking: {curentlyCooking.length}</h1>
                    <div className='mt-4 flex justify-evenly text-base text-[#878787]'>
                        <h1>Name</h1>
                        <h1>Time</h1>
                        <h1>Calories</h1>
                    </div>
                </div>
                {
                    curentlyCooking.map((res)=>
                        <Preparing
                        key={res.recipe_id}
                        cookingItem={res}
                        ></Preparing>
                    )
                }
            </div>
        </div>
    );
};
Cook.propTypes = {
    cookItem: PropTypes.array.isRequired,
    handleCurentlyCooking: PropTypes.func.isRequired,
    curentlyCooking: PropTypes.array.isRequired,
}
export default Cook;
