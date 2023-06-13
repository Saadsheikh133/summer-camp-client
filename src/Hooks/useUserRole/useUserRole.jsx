import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUserRole = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext);


    const { data: users= {}, isLoading } = useQuery({
        queryKey: ['usersRole'],
        enabled: !loading,
        queryFn: async () => {
         const res = await axiosSecure(`/userRole/${user?.email}`)
            return res.data;
        }
    })
    return [users, isLoading];
};

export default useUserRole;