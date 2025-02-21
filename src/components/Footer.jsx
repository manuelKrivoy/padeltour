import React from "react";

export const Footer = () => {
  const whatsappMessage = "¡Hola! Quiero más información sobre el torneo de pádel . ";

  return (
    <footer className="py-4 bg-gray-800 text-center text-gray-400">
      <p>¿Necesitas ayuda? Contáctanos por WhatsApp.</p>

      <a
        href={`https://wa.me/5493416923350?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full transition shadow-lg animate-pulse pt-2"
      >
        <img src="/whatsapp-black-logo-icon--24.png" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </footer>
  );
};
