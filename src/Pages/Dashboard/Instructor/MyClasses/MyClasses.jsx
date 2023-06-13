import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState();
    const { register, handleSubmit } = useForm();
    const [id, setId] = useState("");

    const handleClick = (data) => {
         fetch(`http://localhost:5000/updateClasses/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
             .then(result => console.log(result))
    }
        const onSubmit = (data) => {
           handleClick(data)

        }
   

   
   

    useEffect(() => {
        fetch(`http://localhost:5000/getClasses/${user.email}`)
            .then(res => res.json())
        .then(data => setClasses(data))
    }, [user])

    return (
        <div>
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
                                <td>{ index + 1 }</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{ singleClass.name } </td>
                                <td>{ singleClass.instructor } </td>
                                <td>{ singleClass.price }</td>
                                <td>{singleClass.enroll_count }</td>
                                <td>{singleClass.status}</td>
                                <td>
                                    <label onClick={() => setId(singleClass._id)} htmlFor="my_modal_7" className="btn btn-primary btn-sm">Update</label>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </td>
                            </tr>)
                       }
                        
                    </tbody>
                </table>
                <div>
                    {/* The button to open modal */}


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
        </div>
    );
};

export default MyClasses;