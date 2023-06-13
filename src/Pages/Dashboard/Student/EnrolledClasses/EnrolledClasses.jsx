import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";


const EnrolledClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [enrolledClasses, setEnrolledClasses] = useState([]);


    useEffect(() => {
        axiosSecure.get(`/getEnrolledClasses?email=${user?.email}`)
            .then(res => {
                setEnrolledClasses(res.data)
        })
    }, [axiosSecure, user])

    return (
        <div>
            <Helmet>
                <title>Sports Today | Enrolled Classes</title>
            </Helmet>
            <h2 className="text-5xl text-center font-bold mb-10">Enrolled Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name & Email</th>
                            <th>Instructor</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses?.map((enrolledClass, index) => <tr key={enrolledClass._id}>
                                <td>{ index + 1 }</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrolledClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {enrolledClass.name} <br />
                                    {enrolledClass.email}
                                </td>
                                <td>{enrolledClass.instructor}</td>
                                <td>{enrolledClass.transactionId }</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;