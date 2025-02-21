import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    message: "Nunca olvidaré la experiencia de haber participado en esta maravillosa liga.",
    author: "Máximo Alva",
    photo: "https://api.dicebear.com/6.x/adventurer/svg?seed=maximoalva",
  },
  {
    message: "Una experiencia increíble, definitivamente volveré el próximo año.",
    author: "Marcos Menendez",
    photo: "https://api.dicebear.com/6.x/adventurer/svg?seed=marcosmenendez",
  },
  {
    message: "Disfruté como nunca el torneo!",
    author: "Manuel Krivoy",
    photo: "https://api.dicebear.com/6.x/adventurer/svg?seed=manuelkrivoy",
  },
  {
    message: "El mejor torneo de pádel al que he asistido. ¡Muy bien organizado!",
    author: "Ciro Fernandez",
    photo: "https://api.dicebear.com/6.x/adventurer/svg?seed=cirofernandez",
  },
  {
    message: "¡Una experiencia única! ¡Gracias por todo!",
    author: "Julian Grimblat",
    photo: "https://api.dicebear.com/6.x/adventurer/svg?seed=juliangrimblat",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">Testimonios</h2>
        <div className="flex justify-center">
          <div className="relative w-full md:w-1/2 px-4 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg mb-4">"{testimonials[currentIndex].message}"</p>
                <p className="font-bold">- {testimonials[currentIndex].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
