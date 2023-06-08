import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import useSports from "../../../Hooks/useSports";


const SingleClass = ({ singleClass }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { name, image, available_sets, category, details, instructor, price, students, _id } = singleClass;
    const [, , , refetch] = useSports();

    const handleAddToCard = _id => {
        if (user && user?.email) {
            const cartItem = { itemId: _id, name, image, price, students, email: user?.email }
            fetch('http://localhost:5000/addToCarts', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();  //refetch cart to update the number of items in the cart.
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Item added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login first to add food card',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-xl relative">
                <figure><img className="h-[260px] w-full object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-2xl">Name: {name} </h2>
                    <h4 className="lg:text-xl">Instructor: {instructor} </h4>
                    <p>Details: {details} </p>
                    <p>Category: {category} </p>
                    <p>Available Sets: {available_sets} </p>
                    <p>Students: {students} </p>
                    <p className="absolute top-0 left-0 text-2xl font-semibold bg-black text-white py-1 px-4 rounded-xl ml-2 mt-2">${price} </p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCard(_id)} className="btn btn-primary">select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;