import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";
import HistoryCard from "./HistoryCard/HistoryCard";
import { Slide } from "react-awesome-reveal";


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/getEnrolledClasses?email=${user?.email}`)
            .then(res => {
                setHistories(res.data)
        })
    }, [user, axiosSecure])

    return (
        <Slide>
            <h2 className="text-5xl text-center font-bold my-10">My Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name & Email</th>
                            <th>Instructor</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            histories?.map((history, index) => <HistoryCard
                                key={history._id}
                                history={history}
                                index={index}
                            ></HistoryCard>)
                        }

                    </tbody>
                </table>
            </div>
        </Slide>
    );
};

export default PaymentHistory;