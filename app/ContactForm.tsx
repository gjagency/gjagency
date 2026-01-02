"use client";

import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const budget = data.get("budget");
    const message = data.get("message");

    const text = `Hola, soy ${name}.
Empresa: ${company}
Email: ${email}
Presupuesto estimado: ${budget}

Proyecto:
${message}`;

    const phone = "+542920601338"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      text as string
    )}`;

    window.open(url, "_blank");
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-white p-8 rounded-xl shadow space-y-6"
    >
      <div>
        <label className="block font-semibold mb-1">
          Nombre y apellido *
        </label>
        <input
          name="name"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
       
      </div>


      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        ⚠️ Solo trabajamos con empresas y proyectos con presupuesto definido.
      </p>
    </form>
  );
}
