import { motion } from "framer-motion"
import { Slide } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
    return (
        <Slide>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl container mx-auto">
                    <figure><img src={instructor.image} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">See Classes</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Slide>
    );
};

export default InstructorCard;