import { useEffect, useState } from "react";
import { FiShoppingCart, FiHeart, FiEye, FiClock, FiStar } from "react-icons/fi";
import products from "/src/assets/Products.json";

export default function ProductGrid() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-8xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-block mb-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full">
              Kuliner Nusantara
            </span>
          </div>
          <h2 className={`text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            Jelajahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Rasa Autentik</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            Setiap hidangan adalah cerita, setiap suapan adalah kenangan yang dibuat dengan passion dan bahan premium
          </p>
        </div>

        {/* Advanced Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.kode_produk}
              className={`relative group overflow-hidden transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${100 + (index * 100)}ms` }}
              onMouseEnter={() => setHoveredProduct(product.kode_produk)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Premium Product Card */}
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Image with floating actions */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={product.gambar} 
                    alt={product.nama_produk}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredProduct === product.kode_produk ? "scale-110" : "scale-100"}`}
                  />
                  
                  {/* Premium Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.best_seller && (
                      <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
                        <FiStar className="mr-1" /> BESTSELLER
                      </span>
                    )}
                    {product.new_arrival && (
                      <span className="bg-emerald-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        NEW!
                      </span>
                    )}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${hoveredProduct === product.kode_produk ? "opacity-100" : "opacity-0"}`}>
                    <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110">
                      <FiHeart className="w-4 h-4" />
                    </button>
                    <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110">
                      <FiEye className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Preparation Time */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center">
                    <FiClock className="mr-1" /> {product.preparation_time || '15-20'} min
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{product.nama_produk}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                      {product.kategori}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`w-4 h-4 ${i < (product.rating || 4) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs ml-1">({product.reviews || 24})</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.deskripsi || "Rasa autentik dengan bahan pilihan terbaik dari petani lokal"}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">Rp{product.harga.toLocaleString()}</span>
                      {product.original_price && (
                        <span className="text-xs text-gray-400 line-through ml-2">Rp{product.original_price.toLocaleString()}</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white p-2 rounded-full shadow-md transition-all hover:shadow-lg hover:scale-110 flex items-center justify-center">
                      <FiShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 3D Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/30 to-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${hoveredProduct === product.kode_produk ? 'scale-105' : 'scale-100'}`}></div>
            </div>
          ))}
        </div>

        {/* Premium View More */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button className="relative inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            <span className="relative z-10 flex items-center">
              Jelajahi Menu Lainnya
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}