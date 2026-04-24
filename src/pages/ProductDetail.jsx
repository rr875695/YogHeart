import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  return (
    <div className="p-10 grid md:grid-cols-2 gap-12">
      <img src={product.image} className="rounded-2xl shadow-lg" />
      <div>
        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-500 mb-4">{product.benefit}</p>
        <p className="text-2xl font-semibold mb-6">₹{product.price}</p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}