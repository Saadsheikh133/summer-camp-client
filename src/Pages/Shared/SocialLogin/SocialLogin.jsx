import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, role: "student" }
                fetch('http://localhost:5000/addUsers', {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className='divider'>OR</div>
            <div className='flex justify-center btn btn-info items-center'>
                <button onClick={handleGoogleLogin}><FcGoogle className='inline mr-3' size={25}></FcGoogle> Login with Google </button>
            </div>
        </div>
    );
};

export default SocialLogin;