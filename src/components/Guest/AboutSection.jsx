import { useEffect, useState } from "react";

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative scroll-mt-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Glow Dekoratif */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-100/30 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/20 blur-[90px] rounded-full animate-pulse" />

      {/* Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Judul */}
        <h2
          className={`text-4xl sm:text-5xl font-bold tracking-tight text-blue-700 drop-shadow-md mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Kenali Lebih Jauh <br />
          <span className="text-gray-900">Tentang Kami</span>
        </h2>

        {/* Deskripsi */}
        <p
          className={`text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-semibold text-blue-600">Sedap</span> adalah pengalaman kuliner modern
          yang memadukan <strong>cita rasa otentik</strong> Indonesia dengan <strong>kemudahan teknologi</strong>,
          menyajikan pengalaman bersantap yang tak hanya lezat, tapi juga memuaskan secara digital.
        </p>

        {/* Fitur-fitur */}
        <div
          className={`grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              icon: "🌾",
              title: "Bahan Lokal",
              desc: "100% bahan lokal premium dari petani dan produsen terpercaya.",
            },
            {
              icon: "👨‍🍳",
              title: "Chef Berpengalaman",
              desc: "Dimasak oleh chef profesional dengan >10 tahun pengalaman.",
            },
            {
              icon: "⚡",
              title: "Cepat & Aman",
              desc: "Pengiriman cepat dengan sistem pemesanan yang modern & aman.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-700 text-white font-semibold text-lg 
            py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300"
          >
            🍽️ Lihat Menu Kami
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
