import useManageClass from "../../../../Hooks/useManageClass/useManageClass";
import ManageSingleCard from "./ManageSingleCard/ManageSingleCard";


const ManageClasses = () => {
    const [classes] = useManageClass();

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