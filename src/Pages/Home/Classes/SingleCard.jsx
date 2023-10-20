import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SingleCard = ({ singleClass }) => {
    return (
        <>
            <Slide>
                <div key={singleClass._id} className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={singleClass.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <figure><img className="h-[230px] rounded-xl" src={singleClass.image} alt="Shoes" /></figure>
                        <h2 className="card-title">{singleClass.name}</h2>
                        <p>instructor: {singleClass.instructor}</p>
                        <p>available_sets: {singleClass.available_sets}</p>
                        <p>Students: {singleClass.students}</p>
                        <p>Details: {singleClass.details}</p>
                        <p>Category: {singleClass.category}</p>
                        <p>Price: ${singleClass.price}</p>
                        <div className="card-actions justify-end">
                            <Link to={'/classes'}>
                                <button className="btn btn-primary">Select</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </Slide>
        </>
    );
};

export default SingleCard;