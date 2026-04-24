import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [price, setPrice] = useState(1000);

  const filtered = products.filter(p => p.price <= price);

  return (
    <div className="p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Products</h2>
        <input type="range" min="0" max="1000" className="w-64"
          onChange={(e)=>setPrice(e.target.value)} />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
