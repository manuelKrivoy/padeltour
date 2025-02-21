import React from "react";

export const ScheduleSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6">💰 Precios de inscripción 🎾</h2>
      <ul className="mt-6 space-y-6 text-xl text-gray-300">
        <li className="flex items-center justify-center space-x-3">
          <span className="text-3xl">🏆</span>
          <span>Se paga $9000 por pareja.</span>
        </li>
        <li className="flex items-center justify-center space-x-3">
          <span className="text-3xl">🥇</span>
          <span>1er puesto: $6000 * nro participantes</span>
        </li>
        <li className="flex items-center justify-center space-x-3">
          <span className="text-3xl">🥈</span>
          <span>2do puesto: $3000 * nro participantes</span>
        </li>
      </ul>
    </section>
  );
};
