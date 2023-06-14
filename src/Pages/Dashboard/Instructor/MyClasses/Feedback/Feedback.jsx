import { Slide } from "react-awesome-reveal";
import { useLocation, useParams } from "react-router-dom";


const Feedback = () => {
    const { id } = useParams();
    console.log(id)
    const Feedback = useLocation().state;
    return (
        <Slide>
            <h2 className="text-3xl text-center font-bold my-4">Feedback Here!!</h2>
            <p className="text-center text-2xl">{ Feedback }</p>
        </Slide>
    );
};

export default Feedback;