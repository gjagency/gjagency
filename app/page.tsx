  export default function Home() {
    return (
      <div className="bg-zinc-50 dark:bg-black font-sans text-black dark:text-zinc-50">

        {/* Hero */}
        <section
          className="min-h-screen flex flex-col items-center justify-center text-white text-center py-16 relative"
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="hero"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <h1 className="text-5xl font-bold mb-4 relative">G&J Agency</h1>
          <p className="text-lg max-w-2xl mb-6 relative">
  En <strong>G&J Agency</strong> diseñamos soluciones digitales innovadoras para empresas y emprendedores. Nuestro equipo se especializa en desarrollo web, apps móviles y estrategias digitales.
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
            `  {
                title: "Desarrollo Web",
                img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1350&q=80",
                desc: "Diseñamos sitios web rápidos, modernos y optimizados para convertir visitas en clientes.",
              },
              {
                title: "E-commerce",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1350&q=80",
                desc: "Creamos tiendas online seguras y escalables para que vendas tus productos las 24 horas.",
              },
              {
                title: "Desarrollo Móvil",
                img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1350&q=80",
                desc: "Desarrollamos aplicaciones móviles intuitivas y eficientes para Android y iOS.",
              },`

              
            ].map((service, i) => (
              <div
                key={i}
                className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
<img src={service.img} alt={`Servicio de ${service.title} de G&J Agency`} className="w-full h-48 object-cover" />
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
  <section className="py-20 px-8 bg-zinc-900 text-white">
    <h2 className="text-4xl font-bold text-center mb-6">
      Algunas tecnologías que utilizamos
    </h2>

    <p className="text-center text-zinc-400 mb-14 max-w-2xl mx-auto">
      Tecnologías modernas, seguras y escalables para construir
      productos digitales de alto rendimiento.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Frontend",
          techs: "React · Next.js · Tailwind · TypeScript · SEO · Performance",
          desc: "Interfaces rápidas, modernas y optimizadas para conversión.",
        },
        {
          title: "Backend",
          techs: "Node.js · Django",
          desc: "APIs seguras y sistemas escalables.",
        },
        {
          title: "Mobile",
          techs: "Flutter · Dart · Firebase · APIs",
          desc: "Apps móviles multiplataforma para Android e iOS.",
        },
        {
          title: "Bases de Datos",
          techs: "PostgreSQL · SQL Server · Firebase",
          desc: "Gestión eficiente y segura de datos.",
        },
        {
          title: "Cloud",
          techs: "AWS · Deploys escalables",
          desc: "Infraestructura confiable y de alto rendimiento.",
        },
        {
          title: "Seguridad",
          techs: "Autenticación · Roles · Backups",
          desc: "Protección de datos y accesos.",
        },
        {
          title: "Performance",
          techs: "SEO · Optimización",
          desc: "Velocidad y posicionamiento en buscadores.",
        },
        {
          title: "Más",
          techs: "Y mucho más…",
          desc: "Nos adaptamos a las necesidades del proyecto.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-blue-400 font-medium mb-2">
            {item.techs}
          </p>
          <p className="text-sm text-zinc-400">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
  {/* Freelancer / Remote */}
  <section className="py-20 px-8 bg-white text-black">
    <h2 className="text-4xl font-bold text-center mb-6">
    Adémas trabajamos como freelancers remotos
    </h2>

    <p className="text-center text-zinc-600 max-w-3xl mx-auto mb-14">
      Colaboramos con empresas, startups y emprendedores de todo el mundo.
      Nos integramos a tu equipo o desarrollamos tu proyecto de punta a punta,
      con comunicación directa y resultados reales.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {[
        {
          title: "Contratación flexible",
          desc: "Por proyecto, por horas o modalidad mensual. Nos adaptamos a tu necesidad.",
        },
        {
          title: "Comunicación directa",
          desc: "Hablás directamente con los desarrolladores, sin intermediarios.",
        },
        {
          title: "Entrega rápida",
          desc: "Metodologías ágiles, entregas semanales y feedback constante.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-zinc-50 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
          <p className="text-zinc-600">{item.desc}</p>
        </div>
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
          <li>✉️ gjagencysoftware@gmail.com</li>
        </ul>

        <div className="flex gap-4 mt-4">
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
