import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {  useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_PK);
const Payment = ( ) => {
    const location = useLocation();
    const data = location.state;
    console.log(data.price)
    console.log(data._id)
    const price = parseFloat(data.price)
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-20">Please Payment Here!</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} data={data} />
            </Elements>
        </div>
    );
};

export default Payment;