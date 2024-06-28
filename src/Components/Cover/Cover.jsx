import Cover_img from '../../assets/Images/Cover_img.png'
const Cover = () => {
    return (
        <div className='relative'>
            <img className='mt-12' src={Cover_img} alt="" />
            <div className='absolute top-1/3 space-y-6'>
                <h1 className='text-white text-5xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='text-white text-lg font-normal'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex gap-7 justify-center'>
                    <button className="btn btn-xs bg-[#0BE58A] text-xl font-semibold outline-none border-none rounded-[50px] sm:btn-sm md:btn-md lg:btn-lg">Explore Now</button>
                    <button className="btn btn-outline text-xl font-semibold text-white rounded-[50px] sm:btn-sm md:btn-md lg:btn-lg">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;