import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [show, setShow] = useState(false);
    const onSubmit = data => {
        setError('');
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
            })
        .catch(error => setError(error.message))
    }

    console.log(errors)
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold mb-4 text-center">Login!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-slate-200" {...register("email", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} placeholder="password" {...register("password", {
                                    required: true
                                })} className="input input-bordered bg-slate-200" />
                                {
                                    show ?
                                        <FaEye onClick={() => setShow(!show)} className="absolute top-12 mr-3 right-0" size={24}></FaEye> :
                                        <FaEyeSlash onClick={() => setShow(!show)} className="absolute top-12 mr-3 right-0" size={24}></FaEyeSlash>
                                }
                            </div>
                            <p className="">New to this site? <Link className="hover:underline hover:text-orange-600" to="/register">Create Account</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className="text-red-600 my-4">{ error }</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;