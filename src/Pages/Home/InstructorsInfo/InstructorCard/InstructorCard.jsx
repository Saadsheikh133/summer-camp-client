// import { motion } from "framer-motion"
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
    return (
        <Slide>
            <div key={instructor._id} className="card w-full bg-base-100 shadow-xl container mx-auto">
                <figure><img src={instructor.image} alt="Instructor" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">{instructor.name}</h2>
                    <p>{instructor.email}</p>
                    <div className="card-actions justify-center">
                        <Link to={'/classes'} className="btn btn-primary">See Classes</Link>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default InstructorCard;