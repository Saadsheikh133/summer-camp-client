import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useManageClass = () => {
    // const [axiosSecure] = useAxiosSecure();

    const { data: manageClass = [], refetch } = useQuery({
        queryKey: ['manageClass'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/getClasses')
            return res.json();
        }
    })
    return [manageClass, refetch]
}
export default useManageClass;