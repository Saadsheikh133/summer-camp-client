import useSports from "../../../Hooks/useSports";
import SingleCard from "./SingleCard";


const Classes = () => {
    const [classes] = useSports();
    return (
       
            <div>
                <h2 className="text-center text-5xl my-10">Popular Classes</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                    {
                    classes?.map(singleClass => <SingleCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleCard>)
                    }
                </div>
            </div>
    );
};

export default Classes;

