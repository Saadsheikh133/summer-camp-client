import useSports from "../../../Hooks/useSports";
// import SingleCard from "./SingleCard";


const Classes = () => {
    const [classes] = useSports();
    console.log(classes)
    return (
        <div>
            <h2 className="text-center text-5xl my-10">Popular Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    classes?.map(singleClass => <div key={singleClass._id} className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={singleClass.image} alt="Shoes" /></figure>
                        <div className="card-body">
                        <figure><img className="h-[230px] rounded-xl" src={ singleClass.image } alt="Shoes" /></figure>
                            <h2 className="card-title">{singleClass.name}</h2>
                            <p>instructor: {singleClass.instructor}</p>
                            <p>available_sets: {singleClass.available_sets}</p>
                            <p>Students: {singleClass.students}</p>
                            <p>Details: {singleClass.details}</p>
                            <p>Category: {singleClass.category}</p>
                            <p>Price: ${singleClass.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>)
                }
          </div>
        </div>
    );
};

export default Classes;

