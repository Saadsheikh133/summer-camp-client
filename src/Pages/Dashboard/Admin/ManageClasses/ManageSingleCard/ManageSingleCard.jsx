import { FcApproval, FcDisapprove, FcFeedback } from "react-icons/fc";
import Swal from "sweetalert2";
import useManageClass from "../../../../../Hooks/useManageClass/useManageClass";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure/useAxiosSecure";


const ManageSingleCard = ({ singleClass, index, handleMakeFeedback, setId }) => {
    const { name, status, image, price, available_set, instructor, email, _id } = singleClass;
    const [, refetch] = useManageClass();
    const [axiosSecure] = useAxiosSecure();

    const handleMakeApprovedOrDeny = (id, status) => {
        axiosSecure.patch(`https://b7a12-summer-camp-server.vercel.app/approveClass/${id}`, {status })
            .then(data => {
                if (data.data.modifiedCount) {
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
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{instructor} <br />
                {email}
            </td>
            <td>{available_set}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>
                <button disabled={status === 'approved' || status === 'denied'} onClick={() => handleMakeApprovedOrDeny(_id, "approved")} className="btn btn-primary btn-sm"><FcApproval size={30}></FcApproval></button> <br />
                <button onClick={() => handleMakeApprovedOrDeny(_id, "denied")} disabled={status === 'approved' || status === 'deny'} className="btn btn-ghost btn-sm my-2"><FcDisapprove size={30}></FcDisapprove></button> <br />
                {/* The button to open modal */}
                <a href="#my_modal_8" onClick={() => setId(_id)} className="btn btn-ghost btn-sm"><FcFeedback size={30}></FcFeedback></a>
                {/* Put this part before </body> tag */}
                <div className="modal h-screen" id="my_modal_8">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center my-4 text-red-600">Feedback!</h3>
                        <form onSubmit={handleMakeFeedback}>
                            <textarea name="feedback" placeholder="feedback" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            <input className="btn btn-info block my-3" type="submit" value="Send Feedback" />
                        </form>

                        <div className="modal-action">
                            <a href="#" className="btn">X</a>
                        </div>
                    </div>
                </div>
               

            </td>
        </tr>
    );
};

export default ManageSingleCard;