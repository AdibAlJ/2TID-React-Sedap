import { useState } from "react";
import produkData from "/src/assets/Products.json";
import {
  FaTimesCircle,
  FaShoppingBasket,
  FaExclamationTriangle,
  FaSearch,
} from "react-icons/fa";

export default function CheckProduct() {
  const [kode, setKode] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);
    if (!kode.trim()) {
      setError("Kode produk tidak boleh kosong.");
      return;
    }
    if (kode.trim().length < 4) {
      setError("Kode produk minimal 4 karakter.");
      return;
    }
    const produk = produkData.find(
      (item) => item.kode_produk.toLowerCase() === kode.toLowerCase()
    );
    if (!produk) {
      setHasil({ status: "not_found" });
    } else if (produk.stok > 0) {
      setHasil({ status: "available", data: produk });
    } else {
      setHasil({ status: "empty", data: produk });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white pt-28 pb-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Judul */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Cek <span className="text-blue-600">Produk</span> Kami
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-xl mx-auto">
          Masukkan kode produk untuk melihat status dan detail ketersediaan.
        </p>
      </div>

      {/* Form Pencarian */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-100 rounded-2xl p-8 w-full max-w-xl animate-fade-in"
      >
        <div className="mb-5">
          <label htmlFor="kode" className="block text-gray-700 font-medium mb-2">
            Kode Produk
          </label>
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              id="kode"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              placeholder="Contoh: P001"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-800 bg-white/60 backdrop-blur-sm"
            />
          </div>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          Cek Ketersediaan
        </button>
      </form>

      {/* Hasil */}
      {hasil && (
        <div
          className={`mt-10 w-full max-w-xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border-t-4 animate-slide-up overflow-hidden ${
            hasil.status === "available"
              ? "border-green-500"
              : hasil.status === "empty"
              ? "border-yellow-500"
              : "border-red-500"
          }`}
        >
          <div className="p-8 text-center">
            {/* Icon */}
            {hasil.status === "available" && (
              <>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <FaShoppingBasket className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Produk Tersedia!
                </h3>
                <p className="text-gray-700">
                  <span className="font-medium">{hasil.data.nama_produk}</span>
                </p>
                <p className="text-green-600 font-bold text-xl mt-2">
                  Rp{hasil.data.harga.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Tersedia: <strong>{hasil.data.stok}</strong> porsi
                </p>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium transition">
                  Pesan Sekarang
                </button>
              </>
            )}

            {hasil.status === "empty" && (
              <>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <FaExclamationTriangle className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Stok Habis</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">{hasil.data.nama_produk}</span> saat ini tidak tersedia.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png"
                  alt="Out of Stock"
                  className="w-24 mx-auto mb-4"
                />
                <p className="text-sm text-gray-500">
                  Silakan cek kembali dalam beberapa waktu.
                </p>
              </>
            )}

            {hasil.status === "not_found" && (
              <>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <FaTimesCircle className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Produk Tidak Ditemukan
                </h3>
                <p className="text-gray-700 mb-4">
                  Kode <strong>{kode}</strong> tidak ada dalam database kami.
                </p>
                <button
                  onClick={() => {
                    setKode("");
                    setHasil(null);
                  }}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                >
                  Coba kode lainnya
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
