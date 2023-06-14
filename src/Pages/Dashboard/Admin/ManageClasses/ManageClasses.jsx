import Swal from "sweetalert2";
import useManageClass from "../../../../Hooks/useManageClass/useManageClass";
import ManageSingleCard from "./ManageSingleCard/ManageSingleCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Slide } from "react-awesome-reveal";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";


const ManageClasses = () => {
    const [classes, refetch] = useManageClass();
    const [id, setId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    console.log(id)


    const handleClick = (data) => {
        console.log(data)
        axiosSecure.put(`https://b7a12-summer-camp-server.vercel.app/sendFeedback/${id}`, { feedback:data })
            .then(result => {
                console.log(result.data)
                if (result.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `Feedback successfully send`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeFeedback = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        handleClick(feedback)
        form.reset();
    }
    return (
        <Slide>
            <Helmet>
                <title>Sports Today | Manage Classes</title>
            </Helmet>
            <h2 className="text-5xl text-center font-bold mb-10">Manage Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name & Email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((singleClass, index) => <ManageSingleCard
                                key={singleClass._id}
                                handleMakeFeedback={handleMakeFeedback}
                                setId={setId}
                                singleClass={singleClass}
                                index={index}
                            ></ManageSingleCard>)
                        }
                    </tbody>
                </table>
            </div>
        </Slide>
    );
};

export default ManageClasses;