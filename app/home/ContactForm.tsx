"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor intentá de nuevo o escribinos a gjagencysoftware@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-black p-10 rounded-2xl shadow-xl text-center max-w-md mx-auto">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold mb-4">¡Mensaje recibido!</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Gracias por contactarnos. Te responderemos en menos de 24 horas con
          una propuesta inicial para tu proyecto.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            📧 Te enviamos un email de confirmación a{" "}
            <strong>{formData.email}</strong>
          </p>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 hover:underline text-sm font-semibold"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-black p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
    >
      {/* Header del form */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm mb-4">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Te respondemos en menos de 24 horas
        </div>
      </div>

      <div className="space-y-6">
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-2"
          >
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Email y Teléfono en grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
              placeholder="juan@empresa.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold mb-2"
            >
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
              placeholder="+54 9 11 1234-5678"
            />
          </div>
        </div>

        {/* Tipo de servicio */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold mb-2"
          >
            ¿Qué necesitás? *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
          >
            <option value="">Seleccioná una opción</option>
            <option value="landing">Landing Page / Sitio Web</option>
            <option value="ecommerce">E-commerce / Tienda Online</option>
            <option value="app">App Móvil (iOS/Android)</option>
            <option value="sistema">Sistema a Medida / MVP</option>
            <option value="mantenimiento">Mantenimiento / Soporte</option>
            <option value="otro">Otro (especificar en mensaje)</option>
          </select>
        </div>

        {/* Presupuesto y Timeline */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold mb-2"
            >
              Presupuesto estimado *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
            >
              <option value="">Seleccioná rango</option>
              <option value="500-1500">$500.000 - $1.500.000</option>
              <option value="1500-3000">$1.500.000 - $3.000.000</option>
              <option value="3000-6000">$3.000.000 - $6.000.000</option>
              <option value="6000+">$6.000.000+</option>
              <option value="flexible">A conversar</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-semibold mb-2"
            >
              ¿Cuándo necesitás lanzar? *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition"
            >
              <option value="">Seleccioná tiempo</option>
              <option value="urgente">Lo antes posible (1-2 semanas)</option>
              <option value="1-mes">En 1 mes</option>
              <option value="2-3-meses">En 2-3 meses</option>
              <option value="flexible">No tengo apuro</option>
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-2"
          >
            Contanos sobre tu proyecto *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 transition resize-none"
            placeholder="Ej: Necesito una tienda online para vender ropa. Tengo el diseño pero necesito desarrollo..."
          />
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Incluí detalles como: qué problema querés resolver, quién es tu
            público, si ya tenés diseño, etc.
          </p>
        </div>

        {/* Trust indicators antes del botón */}
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Te respondemos en menos de 24 horas
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Propuesta detallada sin compromiso
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Primera reunión por videollamada gratis
          </div>
        </div>

        {/* Botón de submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-8 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            "Recibir propuesta gratis"
          )}
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
          Al enviar este formulario aceptás que te contactemos por email o
          WhatsApp. No compartimos tu información.
        </p>
      </div>
    </form>
  );
}