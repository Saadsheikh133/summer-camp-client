

const SingleInstructor = ({ instructor }) => {
    console.log(instructor)
    const { name, image, email, Number_of_Courses,  } = instructor;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-full object-cover" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: { name }</h2>
                    <p>Email: { email }</p>
                    <p>Number of courses: { Number_of_Courses }</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">See classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;