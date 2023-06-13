import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useManageClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: manageClass = [], refetch } = useQuery({
        queryKey: ['manageClass'],

        queryFn: async () => {
            const res = await axiosSecure.get('/getClasses')
            return res.data;
        }
    })
    return [manageClass, refetch]
}
export default useManageClass;