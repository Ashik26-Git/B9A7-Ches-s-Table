
const Navbar = () => {
    return (
        <div>

            <div className="flex justify-between bg-base-100">
                <div>
                    <a className="btn btn-ghost text-[#150B2B] font-bold text-3xl">Recipe Calories</a>
                </div>
                <div>
                    <ul className="flex gap-12 text-[#150B2BB3] text-base font-normal pt-3">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search"  className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="">
                        <div className="w-10 bg-[#0BE58A] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;