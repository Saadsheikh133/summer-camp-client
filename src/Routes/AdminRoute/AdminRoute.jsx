import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import useUserRole from "../../Hooks/useUserRole/useUserRole";



const AdminRoute = ({ children }) => {
    const location = useLocation();
    const [users, isLoading] = useUserRole();
    console.log(users)

    if ( isLoading) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ margin: 'auto' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }

    if ( users?.role === 'admin') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;