import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";

export const RegistrationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    equipo: "",
    telefono: "",
    email: "",
    participant1: "",
    participant2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors = {};
    if (!formData.equipo) newErrors.equipo = "El nombre del equipo es obligatorio.";
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "El correo electrónico es inválido.";
    if (!formData.participant1 || !formData.participant2)
      newErrors.participants = "Los nombres de los participantes son obligatorios.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(import.meta.env.VITE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          userAgent: navigator.userAgent,
          submissionDate: new Date().toLocaleString(),
        }),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-500">¡Regístrate ahora!</h2>
      <p className="mt-4 text-lg text-gray-300">
        Completa el formulario para procesar tu solicitud, en unos días se estarán comunicando con vos.
      </p>
      <AnimatedButton onClick={openPopup}>Registrarme</AnimatedButton>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Formulario de inscripción</h3>
            {isSubmitting ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : formSubmitted ? (
              <div className="text-center">
                <p className="text-green-500 font-semibold mb-4">¡Formulario enviado correctamente!</p>
                <button
                  onClick={closePopup}
                  className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-full hover:scale-105"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-gray-300 capitalize">
                      {key.replace("participant", "Participante ")}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg text-white"
                    />
                    {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-full hover:scale-105"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
