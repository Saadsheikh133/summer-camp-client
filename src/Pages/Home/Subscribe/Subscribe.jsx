import Swal from "sweetalert2";


const Subscribe = () => {

    const subscribed = (e) => {
        e.preventDefault();
        const form = e.target;
        // const email = form.email.value;
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Item added to cart',
            showConfirmButton: false,
            timer: 1500
        })
        form.reset();
    }


    return (
        <div className="container mx-auto py-10 mt-20 rounded-xl bg-stone-300">
            <h5 className=" text-center "><span className="text-purple-600 bg-purple-300 text-xl font-semibold px-6 py-3 rounded-lg border-purple-800 border-l-4">Newsletter</span></h5>
            <h2 className="text-6xl text-center font-bold my-10">Subscribe to Our Newsletter</h2>
            <p className="text-2xl font-bold text-center">Get updates about our latest products and offers</p>
            <form onSubmit={subscribed} className="text-center my-10 relative" required>
                <input required className="border w-full lg:w-2/4 py-5 rounded-full font-bold px-6 lg:text-xl" type="email" name="email" id="" placeholder="Enter your email" />
                <input className="font-semibold px-4 py-3 mt-2 text-2xl rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform absolute top-0 right-2 lg:right-[415px]" type="submit" value="Subscribe" />
            </form>
        </div>
    );
};

export default Subscribe;