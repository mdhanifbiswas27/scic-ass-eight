import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-[#BBEDEA]">

           <div className="gap-6 max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-1 px-36 py-10">
              <div className="lg:col-span-2">
                 <h1 className=" text-[50px] font-semibold">Boost Productivity! <br /> Manage Tasks Seamlessly</h1>
                 <p className="align-middle pr-6 text-justify pt-4">Embark on a journey of enhanced productivity with our task management platform. Streamline your workflow effortlessly, converting ideas into accomplishments. From efficient collaboration to individual task mastery, our platform is designed to simplify, organize, and propel you towards success. Discover the ease of managing tasks with us, where every click propels you closer to your goals</p>
                 <Link><button className="rounded-md bg-[#F8B90C] my-8 py-3 px-5 text-xl font-medium text-white">Let's Explore</button></Link>
              </div>

              <div> 
                <img className="max-h-[400px] border-[#7AC9B7] border-l-2 border-b-2 mx-auto" src="https://www.manageengine.com/products/service-desk/images/unified-enterprise-service-management-platform.png" alt="" />
              </div>
           </div>
        </div>
    );
};

export default Banner;