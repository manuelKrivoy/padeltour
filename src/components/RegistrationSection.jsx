import React, { useState } from "react";

export const RegistrationSection = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del popup
  const [formData, setFormData] = useState({
    teamName: "",
    phone: "",
    email: "",
    participant1: "",
    participant2: "",
  });
  const [errors, setErrors] = useState({
    teamName: "",
    phone: "",
    email: "",
    participant1: "",
    participant2: "",
  });

  // Estado para manejar el envío correcto
  const [showSuccess, setShowSuccess] = useState(false);

  // Función para abrir el popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setIsOpen(false);
  };

  // Función para manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const newErrors = {};
    if (!formData.teamName) newErrors.teamName = "El nombre del equipo es obligatorio.";
    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "El correo electrónico es inválido.";
    if (!formData.participant1 || !formData.participant2)
      newErrors.participants = "Los nombres de los participantes son obligatorios.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario enviado", formData);
      setShowSuccess(true); // Muestra el mensaje de éxito
      setTimeout(() => {
        setShowSuccess(false); // Oculta el mensaje después de 2 segundos
        closePopup(); // Cierra el popup
      }, 2000);
    }
  };

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-500">¡Regístrate ahora!</h2>
      <p className="mt-4 text-lg text-gray-300">
        Completa el formulario para procesar tu solicitud, en unos días se estarán comunicando con vos.
      </p>
      <button
        className="mt-6 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transform transition duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-ball"
        onClick={openPopup}
      >
        Registrarme
      </button>

      {/* Popup del formulario */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Formulario de inscripción</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300">Nombre del equipo</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black"
                />
                {errors.teamName && <p className="text-red-500 text-sm">{errors.teamName}</p>}
              </div>
              <div>
                <label className="block text-gray-300">Nombre del primer participante</label>
                <input
                  type="text"
                  name="participant1"
                  value={formData.participant1}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black"
                />
                {errors.participants && <p className="text-red-500 text-sm">{errors.participants}</p>}
              </div>
              <div>
                <label className="block text-gray-300">Nombre del segundo participante</label>
                <input
                  type="text"
                  name="participant2"
                  value={formData.participant2}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black"
                />
                {errors.participants && <p className="text-red-500 text-sm">{errors.participants}</p>}
              </div>

              <div>
                <label className="block text-gray-300">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-gray-300">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="flex justify-between items-center">
                <button type="button" onClick={closePopup} className="bg-gray-500 text-white px-6 py-3 rounded-full">
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transform transition duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar
                </button>
              </div>
            </form>
            {showSuccess && (
              <div className="mt-4 text-center text-green-500 font-semibold">¡Formulario enviado correctamente!</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
