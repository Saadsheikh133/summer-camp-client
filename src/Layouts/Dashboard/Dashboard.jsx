import {  NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole/useUserRole";


const Dashboard = () => {
    const [users] = useUserRole();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side nav">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-500">
                        {/* Sidebar content here */}
                        <h2 className="text-3xl text-white mb-4 text-center font-bold">Sports Today</h2>
                        {
                            users.role === "student" &&
                            <>
                                <li><NavLink to="/dashboard/selectedClasses">My Selected Classes</NavLink></li>
                                <li><NavLink to="enrolledClasses">My Enrolled Classes</NavLink></li>
                            </>
                        }
                        {
                            users.role === "admin" &&
                            <>
                                <li><NavLink to="/dashboard/manageClasses">Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                            </>
                        }

                        {
                            users.role === "instructor" &&
                            <>
                                <li><NavLink to="/dashboard/addClass">Add A Class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses">My Classes</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to ="/">Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;