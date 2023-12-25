
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="px-10 ">
            <h1 className="text-3xl font-bold text-center my-9">Add your task here!</h1>
            <hr className="h-[2px]"></hr>
            <div>
                <form >
                    <div className="flex gap-5">
                        <div>
                        <h2>Task Title</h2>
                        <input className="w-[300px] px-2 py-1 border-2 border-[]" type="text" />|
                        </div>
                        <div>
                        <h2>Task Date</h2>
                        <DatePicker
                        className="w-[300px] px-2 py-1 border-2 border-[]"
                            showIcon
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        </div>
                        <div>
                            <h2>Task Priority</h2>
                        <select className="w-[300px] px-2 py-1 border-2 border-[]" name="" id="">
                            <option selected>Select Your Priority</option>
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">Height</option>
                        </select>
                        </div>
                    </div>
                    <textarea className="border-2 w-full" name="description" id=""  rows="10"></textarea>
                   <input type="submit" value='Add Task' />
                </form>
            </div>
        </div>
    );
};

export default AddTask;