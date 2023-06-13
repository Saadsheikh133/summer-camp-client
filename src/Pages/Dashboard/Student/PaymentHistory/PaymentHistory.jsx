import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);
    console.log(history)

    useEffect(() => {
        axiosSecure.get(`/getEnrolledClasses?email=${user?.email}`)
            .then(res => {
                setHistory(res.data)
        })
    }, [user, axiosSecure])

    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-10">My Payment History</h2>
            
        </div>
    );
};

export default PaymentHistory;