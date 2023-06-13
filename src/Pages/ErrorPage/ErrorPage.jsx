import { Link, useRouteError } from "react-router-dom";
import "@lottiefiles/lottie-player";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="lg:flex gap-4">
            <div className="flex justify-center items-center">
                <div id="error-page" className="text-red-600 text-center space-y-4">
                    <h1 className=" text-7xl font-bold">Oops!</h1>
                    <p className="text-3xl font-semibold">Sorry, an unexpected error has occurred.</p>
                    <p className="text-2xl">
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <Link to = "/">
                        <button className="btn btn-primary mt-4">Back To Home</button>
                    </Link>
                </div>
            </div>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src='https://assets8.lottiefiles.com/packages/lf20_bhw1ul4g.json'
                style={{ width: "500px" }}
            >
            </lottie-player>
        </div>
    );
};

export default ErrorPage;