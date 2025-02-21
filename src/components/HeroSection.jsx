import React, { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-01T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Carga inicial

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-md transition-all duration-700 ease-in-out transform-gpu"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-gray-900/70"></div>

      {/* Contenido */}
      <div className="relative z-10 p-8 rounded-xl opacity-0 translate-y-6 animate-fade-in">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-color-shift">
          Bienvenido a Padel Tour
        </h1>

        {/* Cuenta regresiva o spinner */}
        <div className="mt-6 text-2xl">
          {timeLeft === null ? (
            // Spinner mientras carga el tiempo
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin"></div>
            </div>
          ) : (
            // Muestra la cuenta regresiva cuando está lista
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="p-4  rounded-lg shadow-lg">
                  <span className="block text-4xl font-bold text-yellow-400">{value}</span>
                  <span className="block text-sm text-gray-300 capitalize">{key}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón animado */}
        <AnimatedButton onClick={handleScroll}>Conoce más</AnimatedButton>
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

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-color-shift {
            background-size: 200% 200%;
            animation: color-shift 5s ease-in-out infinite;
          }

          .animate-spin {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};
