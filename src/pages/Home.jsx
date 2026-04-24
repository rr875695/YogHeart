import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      {/* HERO SECTION
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6">
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          Heal Your Gut.<br/>Feel Your Best.
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mb-8">
          Scientifically formulated probiotics that improve digestion, immunity, and overall wellness.
        </p>
        <div className="flex gap-4">
          <Link to="/products" className="bg-black text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition">
            Shop Now
          </Link>
          <button className="border border-black px-8 py-3 rounded-full text-lg hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </section> */}
      <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 bg-gradient-to-br from-green-50 via-white to-green-100">

  {/* LEFT CONTENT */}
  <div className="text-center md:text-left">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Heal Your Gut.<br/>
      <span className="text-green-600">Feel Your Best.</span>
    </h1>

    <p className="text-gray-600 text-lg max-w-xl mb-8">
      Scientifically formulated probiotics that improve digestion, immunity, and overall wellness.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Link
        to="/products"
        className="bg-black text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
      >
        Shop Now
      </Link>

      <button className="border border-black px-8 py-3 rounded-full text-lg hover:bg-black hover:text-white transition duration-300">
        Learn More
      </button>
    </div>

    {/* TRUST BADGE
    <p className="text-sm text-gray-500 mt-6">
      ⭐ 4.8/5 Rating • 10,000+ Happy Customers
    </p> */}
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex justify-center mt-10 md:mt-0">
    <img
      src="/src/components/1.png"
      alt="product"
      className="w-[300px] md:w-[400px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
    />
  </div>

</section>


      {/* FEATURES */}
      <section className="py-16 grid md:grid-cols-3 gap-10 px-10 text-center">
        <div className="p-6 rounded-2xl shadow hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2">🧬 Gut Science</h3>
          <p className="text-gray-500">Advanced microbiome-based formulation</p>
        </div>
        <div className="p-6 rounded-2xl shadow hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2">💪 Immunity Boost</h3>
          <p className="text-gray-500">Stronger defense against diseases</p>
        </div>
        <div className="p-6 rounded-2xl shadow hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2">🧠 Mind-Body Balance</h3>
          <p className="text-gray-500">Better mood through gut-brain link</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey</h2>
        <Link to="/products" className="bg-white text-black px-6 py-3 rounded-full">
          Shop Now
        </Link>
      </section>

    </div>
  );
}
