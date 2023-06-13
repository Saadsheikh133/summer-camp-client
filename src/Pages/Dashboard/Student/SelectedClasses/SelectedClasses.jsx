import { FaTrash } from "react-icons/fa";
import useCard from "../../../../Hooks/useCard/useCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const SelectedClasses = () => {
    const [card, refetch] = useCard();
    const [axiosSecure] = useAxiosSecure();


    const handleDelete = (_id) => {
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
                axiosSecure.delete(`http://localhost:5000/removeClasses/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Sports Today | Selected Classes</title>
            </Helmet>
            <h2 className="text-5xl text-center font-bold my-20">My Selected Classes: {card.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Available Set</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card?.map((singleClass, index) => <tr key={singleClass._id}>
                                <td>
                                   {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.name} </td>
                                <td>{singleClass.email}</td>
                                <td>${singleClass.price}</td>
                                <td>{singleClass.available_set}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${singleClass}`} state={singleClass}>
                                        <button className="btn btn-info">Pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(singleClass._id)} className='text-white bg-red-600 btn btn-md'><FaTrash></FaTrash> </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;