import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SingleCategory = ({ singleClass }) => {
    const { user } = useContext(AuthContext);
    const { available_sets, details, image, name, price , instructor } = singleClass;

    const handleViewDetail = () => {

        if (!user) {
            Swal.fire({
                title: 'warning!',
                text: 'You have to log in first to view details',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                confirmButtonText: 'Cool'
            })
        }

    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full mx-auto pb-10">
            <a href="#">
                <img className="rounded-t-lg h-[330px]" src={image} alt="" />
            </a>
            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Price: ${price}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">{details}</p>
                <div className='flex justify-center items-center gap-5 py-3'>
                    <p className=" font-normal text-gray-700 dark:text-gray-200">Instructor: {instructor}</p>
                </div>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-200">Available Sets: {available_sets}</p>



                <Link to={'/classes'}>
                    <button onClick={handleViewDetail} className='btn bg-gradient-to-r from-green-400 to-purple-500 hover:from-pink-500 hover:to-sky-500 text-white'>View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default SingleCategory;