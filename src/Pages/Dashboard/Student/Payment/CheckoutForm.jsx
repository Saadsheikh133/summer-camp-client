import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useCard from "../../../../Hooks/useCard/useCard";


const CheckoutForm = ({ price, data }) => {
    const [, refetch] = useCard();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create_payment_intent', {price})
            .then(res => {
                setClientSecret(res.data.clientSecret)
        })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        setProcessing(true)
        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );

        if (confirmErr) {
            setError(confirmErr)
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id
            setTransactionId(transactionId)
            const email = user?.email
            // delete data._id;
            const payment = {
                ...data, transactionId, email, date: new Date(),enroll_count: 0 }
            axiosSecure.post('/enrolled', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        // alert()
                    }
            })
        }
    }

    return (
        <div className="lg:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500 mt-4">{error}</p>
            {transactionId && <p className="text-green-600"> Transaction complete with transaction Id: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;