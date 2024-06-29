import PropTypes from 'prop-types'
import Cooking from './Cooking'
const Cook = ({cookItem}) => {
    
    return (
        <div className="w-1/3 p-6 bg-slate-50 shadow">
            <div>
                <h1 className='text-[#282828] text-2xl font-semibold mb-4'>Want to cook: {cookItem.length}</h1>
                <hr />
                <table className="table text-black mt-3 border border-black">
                    <thead>
                        <tr className='text-black'>
                            <th className='border border-black'>Recipe Name</th>
                            <th className='border border-black'>Time</th>
                            <th className='border border-black'>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookItem.map((item)=>
                               <Cooking
                               key={item.recipe_id}
                               recipeItem={item}
                               ></Cooking>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
Cook.propTypes={
    cookItem:PropTypes.array.isRequired
}
export default Cook;