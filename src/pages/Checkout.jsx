export default function Checkout() {
  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Secure Checkout</h2>
      <button className="w-full bg-purple-600 text-white py-4 rounded-full mb-4 text-lg">
        Pay with Razorpay
      </button>
      <button className="w-full bg-blue-600 text-white py-4 rounded-full text-lg">
        Pay with Stripe
      </button>
    </div>
  );
}