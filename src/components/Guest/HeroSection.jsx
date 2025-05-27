import { useEffect, useState } from "react";
import UtkHero from "/src/assets/Gambar/UtkHero.png";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen max-h-[900px] overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto h-full px-6 md:px-8 lg:px-12 flex items-center relative z-10">
        {/* Text content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3
            className={`text-sm font-bold tracking-widest text-blue-500 uppercase transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Menu Spesial Hari Ini
          </h3>
          
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <span className="text-blue-600">Rasakan</span> Kelezatan <br />Kuliner Nusantara
          </h1>
          
          <p
            className={`text-lg text-gray-700 max-w-lg transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Hidangan autentik dengan sentuhan modern, diracik dari bahan pilihan oleh chef berpengalaman.
          </p>
          
          <div
            className={`transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <a
              href="#menu"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 group"
            >
              Pesan Sekarang
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image content */}
        <div
          className={`hidden lg:block absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative">
            <img
              src={UtkHero}
              alt="Signature Dish"
              width={500}
              height={500}
              className="w-full max-w-xl object-contain drop-shadow-2xl"
            />
            <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-full top-4 left-4"></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className={`absolute bottom-20 left-1/4 z-0 transition-all duration-1000 delay-300 ${
        loaded ? "opacity-70" : "opacity-0"
      }`}>
        <div className="w-16 h-16 bg-yellow-300 rounded-full filter blur-xl"></div>
      </div>
      <div className={`absolute top-1/3 right-1/4 z-0 transition-all duration-1000 delay-500 ${
        loaded ? "opacity-50" : "opacity-0"
      }`}>
        <div className="w-24 h-24 bg-blue-200 rounded-full filter blur-xl"></div>
      </div>
    </section>
  );
}