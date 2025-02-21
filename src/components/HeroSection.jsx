import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/info");
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Imagen de fondo con blur más sutil y parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-md transition-all duration-700 ease-in-out transform-gpu"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay con degradado para efecto más elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-gray-900/70"></div>

      {/* Contenido animado */}
      <div className="relative z-10 p-8 rounded-xl opacity-0 translate-y-6 animate-fade-in">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-color-shift">
          Bienvenido a Padel Tour
        </h1>

        {/* Botón con animación inspirada en una pelota de pádel */}
        <button
          className="mt-6 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 cursor-pointer relative transition-all duration-500 ease-in-out shadow-lg transform hover:scale-110 hover:shadow-xl animate-bounce-ball"
          onClick={handleButtonClick}
        >
          Conoce más
        </button>
      </div>

      {/* Animaciones avanzadas */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes color-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes bounce-ball {
            0%, 100% { transform: translateY(0) scale(1); box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); }
            50% { transform: translateY(-10px) scale(1.05); box-shadow: 0px 10px 25px rgba(255, 215, 0, 0.5); }
          }

          @keyframes smash-hover {
            0% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(-3deg); }
            50% { transform: scale(1.15) rotate(3deg); }
            75% { transform: scale(1.1) rotate(-2deg); }
            100% { transform: scale(1.05) rotate(0deg); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-color-shift {
            background-size: 200% 200%;
            animation: color-shift 5s ease-in-out infinite;
          }

          .animate-bounce-ball {
            animation: bounce-ball 1.5s infinite ease-in-out;
          }

          .hover\\:animate-smash:hover {
            animation: smash-hover 0.4s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};
