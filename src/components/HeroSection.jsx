import React, { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-01T00:00:00"); // Fecha objetivo
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
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

        {/* Cuenta regresiva */}
        <div className="mt-6 text-2xl">
          {timeLeft.days !== undefined ? (
            <div className="flex justify-center space-x-4">
              <div className=" p-4 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold text-gray-800">{timeLeft.days}</span>
                <span className="block text-sm text-gray-800">Días</span>
              </div>
              <div className=" p-4 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold text-gray-800">{timeLeft.hours}</span>
                <span className=" text block text-sm text-gray-800">Horas</span>
              </div>
              <div className=" p-4 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold text-gray-800">{timeLeft.minutes}</span>
                <span className="block text-sm text-gray-800">Minutos</span>
              </div>
              <div className=" p-4 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold text-gray-800">{timeLeft.seconds}</span>
                <span className="block text-sm text-gray-800 ">Segundos</span>
              </div>
            </div>
          ) : (
            <span>¡El evento ha comenzado!</span>
          )}
        </div>

        {/* Botón con animación inspirada en una pelota de pádel */}
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
