import { createBrowserRouter } from "react-router-dom";
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
import AdminRoute from "./AdminRoute/AdminRoute";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Feedback from "../Pages/Dashboard/Instructor/MyClasses/Feedback/Feedback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // instructor route
            {
                path: 'addClass',
                element: <InstructorRoute>
                    <AddClass></AddClass>
                </InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute>
                    <MyClasses></MyClasses>
                </InstructorRoute>
            },
            {
                path: 'feedback/:id',
                element: <Feedback></Feedback>
            },
            // admin route
            {
                path: 'manageUsers',
                element: <AdminRoute>
                    <ManageUsers></ManageUsers>
                </AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute>
                    <ManageClasses></ManageClasses>
                </AdminRoute>
            }
        ]
    }
])
export default router;