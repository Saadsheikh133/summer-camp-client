import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import authentication from '../../assets/images/authentication.gif'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Register = () => {
    const [error, setError] = useState('');
    const { registerUser, updateUserProfile, logOut } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        setError('');
        registerUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User has been created successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateUserProfile(data.name, data.image)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: 'student' }
                        fetch('http://localhost:5000/addUsers', {
                            method: 'POST',
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    logOut()
                                        .then()
                                        .catch(error => setError(error.message))
                                    navigate('/login')
                                }
                            })
                    })
            })
            .catch(error => setError(error.message))


    };
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="text-center lg:w-1/2">
                        <img className="lg:h-[850px] lg:ml-10 object-cover w-full rounded-xl" src={authentication} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold mb-4 text-center">Register!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered bg-slate-200" {...register("name", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-slate-200" {...register("email", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className="input input-bordered bg-slate-200" />
                                {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 characters or long</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600"> password must have one uppercase, one lowercase, one number and one special character </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered bg-slate-200" {...register("confirm_password", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="photo url" className="input input-bordered bg-slate-200" {...register("image", { required: true })} />
                            </div>
                            <p className="">All ready have an account? <Link className="hover:underline hover:text-orange-600" to="/login">Login Now</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className="text-red-600 my-4">{error}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;