import useSports from "../../Hooks/useSports";
import SingleInstructor from "./SingleInstructor";


const InstructorPage = () => {
    const [, instructors] = useSports();
    return (
        <div>
            <h2 className="text-5xl font-bold text-center py-20 pt-28">All Instructors Are Here!</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:mx-6">
                {
                    instructors?.map(instructor => <SingleInstructor
                        key={instructor._id}
                        instructor={instructor}
                    ></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;