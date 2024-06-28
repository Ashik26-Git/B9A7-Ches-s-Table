import PropTypes from 'prop-types'
import Cooking from './Cooking'
const Cook = ({cook}) => {
    
    return (
        <div className="w-1/3 p-6 bg-slate-50 shadow">
            <div>
                <h1 className='text-[#282828] text-2xl font-semibold mb-4'>Want to cook: {cook.length}</h1>
                <hr />
                <div className='mt-4 flex justify-evenly text-base text-[#878787]'>
                    <h1>name</h1>
                    <h1>time</h1>
                    <h1>calories</h1>
                </div>
                {
                    cook.map((item)=>
                       <Cooking
                       key={item.recipe_id}
                       item={item}
                       ></Cooking>
                        )
                }
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};
Cook.propTypes={
    cook:PropTypes.array.isRequired
}
export default Cook;