import { Link, Outlet } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { GrChapterAdd } from "react-icons/gr";

const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-5">
                <div className="bg-[#BBEDEA] h-screen px-3">
                <p className="text-center my-5 ml-9 btn hover:bg-transparent btn-ghost text-2xl text-[#F8B90C] order-1">TaskSwift</p>
                <hr className="my-5 h-[2px] bg-[#F8B90C]"></hr>
                    <ul className="">
                        <Link to='/dashboard'><li><button className="btn w-[220px] my-2"> <BiTask></BiTask>Task-List</button></li></Link>
                        <Link to='/dashboard/addTask'><li><button className="btn w-[220px] my-2"> <GrChapterAdd></GrChapterAdd>Add-Task</button></li></Link>
                        <Link to='/'><li><button className="btn w-[220px] my-2"> <IoMdHome></IoMdHome>Back Home</button></li></Link>
                        
                        
                    </ul>
                </div>
                <div className="col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;