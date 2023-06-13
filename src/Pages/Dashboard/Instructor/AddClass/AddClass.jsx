import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, email, instructor, available_set } = data;
                    const newItem = { name, price: parseFloat(price), available_set: parseFloat(available_set), enroll_count: parseFloat(0), email, instructor, image: imgURL, status: "pending" }
                    axiosSecure.post('/createClasses', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Sports Today | Add A Class</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl my-10 font-bold">Add a Class</h1>
                    </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="file" placeholder="class image" className="input input-bordered" {...register("image", { required: true, maxLength: 80 })} />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add Class" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;