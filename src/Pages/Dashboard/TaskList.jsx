

const TaskList = () => {
    return (
       <div>
         <h1 className="text-center font-bold text-3xl py-9">Your Task Here</h1>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="border-r-2 h-screen">
                <h1 className="text-center bg-[#F8B90C]">To-Do List</h1>
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