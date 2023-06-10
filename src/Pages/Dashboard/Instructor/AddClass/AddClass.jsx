

const AddClass = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl my-10 font-bold">Add a Class</h1>
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" placeholder="instructor name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" placeholder="instructor email" className="input input-bordered" />
                            </div>
                            <div className="flex justify-evenly">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Seat</span>
                                    </label>
                                    <input type="number" placeholder="seat" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="file" placeholder="class image" className="input input-bordered" />
                            </div>
                           
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;