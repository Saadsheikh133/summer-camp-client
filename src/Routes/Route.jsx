import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import SelectedClasses from "../Pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageUsers from "../Pages/Dashboard/Admin/MangeUsers/ManageUsers";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instructor',
                element: <InstructorPage></InstructorPage>
            },
            {
                path: '/classes',
                element: <ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectedClasses',
                element: <PrivateRoute>
                    <SelectedClasses></SelectedClasses>
                </PrivateRoute>
            },
            {
                path: 'enrolledClasses',
                element: <PrivateRoute>
                    <EnrolledClasses></EnrolledClasses>
                </PrivateRoute>
            },
            {
                path: 'payment/:item',
                element: <Payment></Payment>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
])
export default router;