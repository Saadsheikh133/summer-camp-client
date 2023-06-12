import useSports from "../../Hooks/useSports";
import SingleClass from "./SingleClass/SingleClass";


const ClassesPage = () => {
    const [, , classes] = useSports();
    
    return (
        <>
            <h2 className="text-5xl font-bold text-center py-20 pt-28">All Classes Are Here!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-6">
                {
                    classes?.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>
        </>
    );
};

export default ClassesPage;