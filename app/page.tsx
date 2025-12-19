export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black font-sans text-black dark:text-zinc-50">

      {/* Hero */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-white text-center py-16 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="hero"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <h1 className="text-5xl font-bold mb-4 relative">G&J Agency</h1>
        <p className="text-lg max-w-2xl mb-6 relative">
          Desarrollo de software, soluciones móviles y estrategias digitales para
          hacer crecer tu negocio.
        </p>

        <div className="space-x-4 relative">
          <a
            href="#contact"
            className="py-3 px-8 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-800 hover:text-white transition"
          >
            ¡Hablemos!
          </a>
          <a
            href="#services"
            className="py-3 px-8 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-800 hover:text-white transition"
          >
            Servicios
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 px-8" id="services">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Desarrollo Web",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              desc: "Sitios web rápidos, modernos y enfocados en conversión.",
            },
            {
              title: "Consultoría Digital",
              img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
              desc: "Estrategias digitales para optimizar procesos y escalar.",
            },
            {
              title: "Desarrollo Móvil",
              img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
              desc: "Apps móviles a medida para Android y iOS.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img src={service.img} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20 px-8 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Cómo Trabajamos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {[
            "Análisis",
            "Diseño",
            "Desarrollo",
            "Testing",
            "Lanzamiento",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-zinc-900 rounded-lg">
              <span className="text-3xl font-bold block mb-2">
                {i + 1}
              </span>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
        {[
            "Soluciones a medida",
            "Comunicación directa",
            "Enfoque en resultados",
            "Soporte continuo",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 px-8 bg-zinc-100 text-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tecnologías
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Django",
            "Flutter",
            "Firebase",
            "PostgreSQL",
            "SqlServer",
            "AWS",
            "Y mucho mas!",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          ¿Tenés una idea en mente?
        </h2>
        <p className="mb-8 text-lg">
          Nosotros la convertimos en un producto digital real.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
        >
          Contactanos
        </a>
      </section>

      {/* Contacto */}
      <section className="py-16 px-8 bg-zinc-100 text-black" id="contact">
        <h2 className="text-4xl font-black text-center mb-12">
          Contacto
        </h2>

        <div className="flex justify-center">
          <a
            href="https://wa.me/542920601338"
            target="_blank"
            className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition hover:scale-105"
          >
            💬 Contactar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Marca */}
    <div>
      <h3 className="text-2xl font-bold mb-4">G&J Agency</h3>
      <p className="text-zinc-400 text-sm">
        Desarrollamos soluciones digitales a medida para ayudar a empresas
        y emprendedores a crecer en el mundo digital.
      </p>
    </div>

    {/* Servicios */}
    <div>
      <h4 className="font-semibold mb-4">Servicios</h4>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li>Desarrollo Web</li>
        <li>Aplicaciones Móviles</li>
        <li>Sistemas a Medida</li>
        <li>Consultoría Digital</li>
      </ul>
    </div>

    {/* Enlaces */}
    <div>
      <h4 className="font-semibold mb-4">Enlaces</h4>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li><a href="#services" className="hover:text-white">Servicios</a></li>
        <li><a href="#portfolio" className="hover:text-white">Portafolio</a></li>
        <li><a href="#contact" className="hover:text-white">Contacto</a></li>
      </ul>
    </div>

    {/* Contacto */}
    <div>
      <h4 className="font-semibold mb-4">Contacto</h4>
      <ul className="space-y-2 text-zinc-400 text-sm">
        <li>📍 Argentina</li>
        <li>💬 WhatsApp: +54 2920 601338</li>
        <li>✉️ gjagencysoftware@gmail.com</li>
      </ul>

      <div className="flex gap-4 mt-4">
        <a
          href="https://wa.me/542920601338"
          target="_blank"
          className="hover:text-green-400"
        >
          WhatsApp
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="hover:text-sky-400"
        >
          Twitter
        </a>
      </div>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
    © {new Date().getFullYear()} G&J Agency. Todos los derechos reservados.
  </div>
</footer>

    </div>
  );
}
