
import PropTypes from 'prop-types';
const Recipe = ({ myrecipe, handleWantToCook }) => {
    const { recipe_img, recipe_name, short_description, ingredients, preparing_time, calories } = myrecipe;
    return (
        <div>
            <div className='p-6 bg-slate-50 shadow space-y-4'>
                <img className='w-full h-[200px] rounded-2xl' src={recipe_img} alt="" />
                <h1 className='text-xl text-left text-[#282828] font-semibold'>{recipe_name}</h1>
                <p className='text-base text-left text-[#878787] font-normal pb-3'>{short_description}</p>
                <hr />
                <div className='space-y-3 pt-3 pb-3'>
                    <p className='text-[#282828] text-lg text-left font-medium'>
                        Ingredients: {ingredients.length}
                    </p>
                    {
                        ingredients.map((c, idx) => (
                            <ul key={idx}>
                                <li className='text-base text-left pl-4 text-[#878787] font-normal'>{c}</li>
                            </ul>
                        ))
                    }
                </div>
                <hr/>
                <div className='flex gap-6 text-[#878787] text-base font-normal pt-4'>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>{preparing_time} minute</p>
                    </div>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        <p>{calories} calories</p>
                    </div>
                </div>
                <div className='text-left pt-6'>
                    <button onClick={()=>{handleWantToCook(myrecipe)}} className="btn btn-xs  bg-[#0BE58A] text-xl font-semibold outline-none border-none rounded-[50px] sm:btn-sm md:btn-md lg:btn-lg">Want to coke</button>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    myrecipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func

}
export default Recipe;