import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import SelectedClasses from "../Pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PricateRoute/PrivateRoute";

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
                element:<Register></Register>
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
            }
        ]
    }
])
export default router;