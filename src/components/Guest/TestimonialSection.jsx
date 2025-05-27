import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import testimonials from "/src/assets/Testimonials.json";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      id="testimonial" 
      className="relative min-h-screen bg-gradient-to-br from-blue-50/50 to-white/90 pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Animated floating dots */}
      <div className={`absolute top-1/4 left-1/5 w-3 h-3 bg-blue-300 rounded-full transition-all duration-1000 ${loaded ? "opacity-70" : "opacity-0"}`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full transition-all duration-1000 delay-300 ${loaded ? "opacity-50" : "opacity-0"}`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with animation */}
        <div className="text-center mb-16">
          <div className={`inline-block mb-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full">
              Testimonial
            </span>
          </div>
          <h2 className={`text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Pelanggan Kami</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            Pengalaman nyata dari pelanggan yang telah merasakan kelezatan hidangan kami
          </p>
        </div>

        {/* Testimonial cards - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-3xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${100 + (idx * 100)}ms` }}
            >
              <div className="relative h-full flex flex-col">
                {/* Quote icon */}
                <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2" />
                
                {/* Rating stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-5 h-5 ${i < (testi.rating || 5) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testi.ulasan}"
                </p>
                
                {/* User info */}
                <div className="mt-auto flex items-center gap-4">
                  <img
                    src={testi.avatar}
                    alt={testi.nama}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-200 shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-800">{testi.nama}</h4>
                    <p className="text-sm text-gray-500">{testi.peran || "Pelanggan Setia"}</p>
                    {testi.tanggal && (
                      <p className="text-xs text-gray-400 mt-1">{testi.tanggal}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial carousel - Mobile */}
        <div className="lg:hidden relative h-[500px] overflow-hidden">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100/50 h-full mx-4">
                <div className="relative h-full flex flex-col">
                  <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2" />
                  
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`w-5 h-5 ${i < (testi.rating || 5) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testi.ulasan}"
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4">
                    <img
                      src={testi.avatar}
                      alt={testi.nama}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-200 shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-800">{testi.nama}</h4>
                      <p className="text-sm text-gray-500">{testi.peran || "Pelanggan Setia"}</p>
                      {testi.tanggal && (
                        <p className="text-xs text-gray-400 mt-1">{testi.tanggal}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className={`mt-20 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 flex items-center">
            <span className="text-sm font-medium text-gray-700">100% Kepuasan Pelanggan</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 flex items-center">
            <span className="text-sm font-medium text-gray-700">+5000 Pelanggan Bahagia</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 flex items-center">
            <span className="text-sm font-medium text-gray-700">Bahan Berkualitas Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
}