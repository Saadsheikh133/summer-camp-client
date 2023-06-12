import Swal from "sweetalert2";
import useManageClass from "../../../../Hooks/useManageClass/useManageClass";
import ManageSingleCard from "./ManageSingleCard/ManageSingleCard";
import { useState } from "react";


const ManageClasses = () => {
    const [classes, refetch] = useManageClass();
    const [id, setId] = useState('');


    const handleClick = (data) => {
        fetch(`http://localhost:5000/sendFeedback/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data.modifiedCount) {
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
    }
    return (
        <div>
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
                                // handleMakeApprovedOrDeny={handleMakeApprovedOrDeny}
                                handleMakeFeedback={handleMakeFeedback}
                                setId={setId}
                                singleClass={singleClass}
                                index={index}
                            ></ManageSingleCard>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;