

const SingleClass = ({ singleClass }) => {
    const { name, image, available_sets, category, details, instructor, price, students } = singleClass;
    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-xl relative">
                <figure><img className="h-[260px] object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-2xl">Name: {name} </h2>
                    <h4 className="lg:text-xl">Instructor: {instructor} </h4>
                    <p>Details: {details} </p>
                    <p>Category: {category} </p>
                    <p>Available Sets: {available_sets} </p>
                    <p>Students: {students} </p>
                    <p className="absolute top-0 left-0 text-2xl font-semibold bg-black text-white py-1 px-4 rounded-xl ml-2 mt-2">${price} </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;