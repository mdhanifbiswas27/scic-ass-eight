import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const SingleTask = ({ item }) => {
    const { title, date, priority, description,_id } = item;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )

                fetch(`http://localhost:5000/scic/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()
                    )
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted from cart.',
                                'success',
                            )
                            window.location.reload();
                        }

                    })

            }
        })
    };


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mt-3 px-4">
                <div className="card-body">
                    <div>
                    <h2 className="card-title">{title}</h2>
                    <p>Priority:{priority}</p>
                    </div>
                    <p>Date:{date}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-sm bg-red-500 text-white"><MdDeleteForever></MdDeleteForever></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;