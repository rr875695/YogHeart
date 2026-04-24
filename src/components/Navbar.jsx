import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Link to="/" className="text-2xl font-extrabold tracking-tight">YogHeart</Link>
      <div className="flex gap-8 text-gray-700 font-medium">
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}