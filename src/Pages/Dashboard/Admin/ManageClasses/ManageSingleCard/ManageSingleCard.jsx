import { FcApproval, FcDisapprove, FcFeedback } from "react-icons/fc";
import useSports from "../../../../../Hooks/useSports";
import Swal from "sweetalert2";

const ManageSingleCard = ({ singleClass, index }) => {
    const [, , ,refetch] = useSports();
    const { name, status, image, price, available_set, instructor, email, _id } = singleClass;



    const handleMakeApprovedOrDeny = (id, status) => {
        console.log(id, status)
        fetch(`http://localhost:5000/approveClass/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `Class has been ${status} successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{ name }</td>
            <td>{instructor} <br />
                { email }
            </td>
            <td>{ available_set }</td>
            <td>{ price }</td>
            <td>{ status }</td>
            <th>
                <button disabled={status === 'approved' || status === 'deny'} onClick={() => handleMakeApprovedOrDeny(_id, "approved")} className="btn btn-primary btn-sm"><FcApproval size={30}></FcApproval></button> <br />
                <button onClick={() => handleMakeApprovedOrDeny(_id, "denied")} disabled={status === 'approved' || status === 'deny'} className="btn btn-ghost btn-sm my-2"><FcDisapprove size={30}></FcDisapprove></button> <br />
                <button className="btn btn-ghost btn-sm"><FcFeedback size={30}></FcFeedback></button>

            </th>
        </tr>
    );
};

export default ManageSingleCard;