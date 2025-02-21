import React from "react";

const AnimatedButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 cursor-pointer relative transition-all duration-500 ease-in-out shadow-lg transform hover:scale-110 hover:shadow-xl animate-bounce-ball"
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
