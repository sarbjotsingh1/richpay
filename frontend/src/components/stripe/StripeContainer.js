import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "../payment-card/PaymentCard";

const PUBLIC_KEY =
  "pk_live_51NdFkZSES0OJaeHRKaJxk6rZxuUmvvQIYjuMEd2ontAopIeacYcjd7f5MEN59uiEQKDFIZAdfrgwgpj7NcZJE28y00q7DwAB2Z";
const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard />
    </Elements>
  );
}
