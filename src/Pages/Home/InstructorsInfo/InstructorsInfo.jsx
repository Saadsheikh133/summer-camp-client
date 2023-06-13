import useSports from "../../../Hooks/useSports";
import InstructorCard from "./InstructorCard/InstructorCard";



const InstructorsInfo = () => {
    const [, instructors] = useSports();

    return (
        <>
            <h2 className="text-5xl font-bold my-20 text-center">Popular Instructors Here!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    instructors?.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </>
    );
};

export default InstructorsInfo;