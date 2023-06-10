import { FaTrash } from "react-icons/fa";
import useCard from "../../../../Hooks/useCard/useCard";

const SelectedClasses = () => {
    const [card] = useCard();
    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-20">My Selected Classes: {card.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card?.map((singleClass, index) => <tr key={singleClass._id}>
                                <td>
                                   {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.name} </td>
                                <td>{singleClass.email}</td>
                                <td>${singleClass.price}</td>
                                <td>
                                    <td className='text-white bg-red-600 btn btn-md'><FaTrash></FaTrash> </td>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;