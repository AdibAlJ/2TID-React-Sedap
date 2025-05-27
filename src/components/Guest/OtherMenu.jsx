import products from "/src/assets/Products.json";
import { FiShoppingCart } from "react-icons/fi";

export default function OtherMenu() {
  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          Semua Menu
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.kode_produk}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={product.gambar}
                  alt={product.nama_produk}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-60">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.nama_produk}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.deskripsi || "Rasa autentik dengan bahan pilihan terbaik."}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-blue-700 font-bold text-xl">
                    Rp{product.harga.toLocaleString()}
                  </span>
                  <button
                    className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition hover:scale-110 focus:outline-none"
                    title="Tambah ke keranjang"
                  >
                    <FiShoppingCart className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
