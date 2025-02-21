import React from "react";

export const ScheduleSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">💰 Precios de inscripción 🎾</h2>
        <ul className="mt-6 space-y-6 text-lg md:text-xl text-gray-300">
          <li className="flex items-center justify-center space-x-3">
            <span className="text-2xl md:text-3xl">🏆</span>
            <span>
              Se paga <strong>$9000</strong> por pareja.
            </span>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <span className="text-2xl md:text-3xl">🥇</span>
            <span>
              1er puesto: <strong>$6000</strong> * nro participantes
            </span>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <span className="text-2xl md:text-3xl">🥈</span>
            <span>
              2do puesto: <strong>$3000</strong> * nro participantes
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
