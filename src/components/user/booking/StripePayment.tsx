import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function StripePayment() {
    const stripe = useStripe();
    const elements = useElements();

    const handlePay = async () => {
        const card = elements?.getElement(CardElement);

        const res = await fetch("/create-payment-intent", {
            method: "POST",
        });

        const { clientSecret } = await res.json();

        await stripe?.confirmCardPayment(clientSecret, {
            payment_method: { card: card! }
        });
    };

    return (
        <div>
            <CardElement />
            <button onClick={handlePay}>Pay with Card</button>
        </div>
    );
}
