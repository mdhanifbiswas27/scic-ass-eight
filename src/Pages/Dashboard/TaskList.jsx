import { useContext, useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import { AuthContext } from "../../Provider/AuthProvider";


const TaskList = () => {
   const [task, setTask] = useState([]);
   const {user} =useContext(AuthContext);
   const userEmail = user?.email;
    
   useEffect(()=>{
      fetch('https://scic-assig-eight-server-7n1icmo3o-md-hanif-biswas-projects.vercel.app/scic')
      .then(res => res.json())
      .then(data=> {
          const filterData = data.filter(item => item.email === userEmail)
        setTask(filterData)})
   },[userEmail]);

    return (
       <div>
         <h1 className="text-center font-bold text-3xl py-9">Your Task Here</h1>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="border-r-2 h-screen">
                <h1 className="text-center bg-[#F8B90C]">To-Do List</h1>
                {
                  task.map(item => <SingleTask key={item.Id} item={item}></SingleTask>)
                }
            </div>
            <div className="border-r-2">
                <h1 className="text-center bg-[#F8B90C]">On Goning List</h1>
            </div>
            <div className="border-r-2">
                <h1 className="text-center bg-[#F8B90C]">Complete List</h1>
            </div>
        </div>
       </div>
    );
};

export default TaskList;