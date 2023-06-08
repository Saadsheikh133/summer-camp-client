import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
        .catch(error => console.log(error.message))
    }

    const itemInfo = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to ="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard </Link></li>
    </>
    return (
        <div className="navbar bg-black text-white fixed z-10 container mx-auto bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black bg-opacity-40 text-xl">
                        {itemInfo}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case lg:text-4xl text-bold">Academic Sports</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {itemInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img className='rounded-full h-14 mr-2' src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                        </>
                        :
                        <>

                            <button className='btn btn-primary'><Link to="/login">Login</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;