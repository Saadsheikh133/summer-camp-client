import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const useCard = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { data: card = [], refetch } = useQuery({
        queryKey: ['card', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClass?email=${user?.email}`)
            // return res.json();
            return res.data;
        }
    })
    return [card, refetch]
};

export default useCard;