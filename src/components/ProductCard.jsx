import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition p-5 group">
      <img src={product.image} className="rounded-xl mb-4 group-hover:scale-105 transition" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500 mb-2">{product.benefit}</p>
      <p className="font-bold text-xl">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-3 inline-block bg-black text-white px-5 py-2 rounded-full">
        View
      </Link>
    </div>
  );
}