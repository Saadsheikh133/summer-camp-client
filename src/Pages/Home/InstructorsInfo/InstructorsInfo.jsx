// import { useEffect } from "react";

import useSports from "../../../Hooks/useSports";



const InstructorsInfo = () => {
    const [, instructors] = useSports();
    console.log(instructors)

    return (
        <>
            <h2 className="text-5xl font-bold my-20 text-center">Popular Instructors Here!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    instructors?.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl container mx-auto">
                        <figure><img src={instructor.Image} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title justify-center">{instructor.Name}</h2>
                            <p>{instructor.Email}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default InstructorsInfo;