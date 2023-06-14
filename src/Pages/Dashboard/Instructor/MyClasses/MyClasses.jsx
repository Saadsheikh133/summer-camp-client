import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState();
    const { register, handleSubmit, reset } = useForm();
    const [id, setId] = useState("");
    const [axiosSecure] = useAxiosSecure();

    const handleClick = (data) => {
        axiosSecure.put(`/updateClasses/${id}`, data)
            .then(result => {
                if (result.data.modifiedCount) {
                    reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Class updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const onSubmit = (data) => {
        handleClick(data)

    }

    useEffect(() => {
        axiosSecure.get(`/getClasses/${user.email}`)
            .then(data => setClasses(data.data))
    }, [user, axiosSecure])

    return (
        <Slide>
            <Helmet>
                <title>Sports Today | My Classes</title>
            </Helmet>
            <h2 className="text-5xl text-center font-bold my-10">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            classes?.map((singleClass, index) => <tr key={singleClass._id}>
                                <td>{index + 1}</td>
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
                                <td>{singleClass.instructor} </td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.enroll_count}</td>
                                <td>{singleClass.status}</td>
                                <td>
                                    <label onClick={() => setId(singleClass._id)} htmlFor="my_modal_7" className="btn btn-primary btn-sm">Update</label>
                                </td>
                                <td>
                                    {/* The button to open modal */}
                                    <Link to={`/dashboard/feedback/${singleClass._id}`} state={singleClass.feedback}>
                                        <label htmlFor="my_modal_6" disabled={!singleClass.feedback} className="btn btn-ghost btn-xs">Feedback</label>
                                    </Link>
                                    {/* Put this part before </body> tag */}
                                    {/* <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-3xl text-center mb-2">{singleClass.name}</h3>
                                            <p className="py-4">{singleClass.feedback}</p>
                                            <div className="modal-action">
                                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                                            </div>
                                        </div>
                                    </div> */}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <div>


                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold text-center">Update Class!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Class Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true, maxLength: 80 })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Instructor Name</span>
                                        </label>
                                        <input type="text" value={user?.displayName} readOnly placeholder="instructor name" className="input input-bordered" {...register("instructor", { required: true, maxLength: 80 })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Instructor Email</span>
                                        </label>
                                        <input type="email" readOnly value={user?.email} placeholder="instructor email" className="input input-bordered" {...register("email", { required: true, maxLength: 80 })} />
                                    </div>
                                    <div className="flex justify-evenly">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Seat</span>
                                            </label>
                                            <input type="number" placeholder="seat" className="input input-bordered" {...register("available_set", { required: true, maxLength: 80 })} />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true, maxLength: 80 })} />
                                        </div>
                                    </div>

                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Add Class" />
                                    </div>
                                </div>
                            </form>
                            <div className="modal-action">
                                <label htmlFor="my_modal_7" className="btn">Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default MyClasses;