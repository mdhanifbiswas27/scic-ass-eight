
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;

    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const date = startDate;
        const email = userEmail;
        const priority = form.priority.value;
        const description = form.description.value;
        const newTask ={title, date, priority, description,email}

        fetch('https://scic-assig-eight-server-7n1icmo3o-md-hanif-biswas-projects.vercel.app/scic', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task added!",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((error)=>{
            console.log(error)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something wrong.Try again!",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
    return (
        <div className="px-10 ">
            <h1 className="text-3xl font-bold text-center my-9">Add your task here!</h1>
            <hr className="h-[2px]"></hr>
            <div>
                <form onSubmit={handleAddTask} >
                    <div className="flex gap-5 my-4">
                        <div>
                            <h2>Task Title</h2>
                            <input name="title" placeholder="write title" className="border-[#D2D2D2] w-[300px] px-2 py-1 border-2 border-[]" type="text" />
                        </div>
                        <div>
                            <h2>Task Date</h2>
                            <DatePicker
                        className="w-[300px] px-2 py-1 border-2 border-[#D2D2D2]"
                            showIcon
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        </div>
                        <div>
                            <h2>Task Priority</h2>
                            <select className="w-[300px] px-2 py-1 border-2 border-[#D2D2D2]" name="priority" id="">
                                <option selected>Select Your Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="Height">Height</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>Task Details</h2>
                        <textarea placeholder="Write Details" className="border-[#D2D2D2] p-2 border-2 w-full" name="description" id="" rows="6"></textarea>
                    </div>
                    <input className="px-4 py-2 border-opacity-10 bg-[#F8B90C] rounded-md mt-4 text-white font-medium" type="submit" value='Add Task' />
                </form>
            </div>
        </div>
    );
};

export default AddTask;