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
            href="#portfolio"
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
          {/* Servicio 1 */}
          <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Desarrollo Web"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>
              <p>
                Sitios web modernos, rápidos y optimizados para convertir
                visitantes en clientes.
              </p>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Consultoría Digital"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Consultoría Digital</h3>
              <p>
                Estrategias digitales para mejorar procesos y escalar tu
                negocio.
              </p>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Desarrollo Móvil"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Desarrollo Móvil</h3>
              <p>
                Apps móviles personalizadas para Android y iOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="py-16 px-8 bg-zinc-100" id="portfolio">
        <h2 className="text-4xl font-bold text-center mb-12">
          Portafolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "E-commerce",
              img: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
              desc: "Plataforma de ventas online moderna y escalable.",
            },
            {
              title: "Sistema de Gestión",
              img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
              desc: "Optimización de procesos internos empresariales.",
            },
            {
              title: "App Fitness",
              img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
              desc: "Aplicación móvil para entrenamientos personalizados.",
            },
            {
              title: "Marketplace",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              desc: "Marketplace con múltiples vendedores.",
            },
            {
              title: "Dashboard Admin",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              desc: "Panel de control con métricas en tiempo real.",
            },
            {
              title: "App Salud",
              img: "https://images.unsplash.com/photo-1580281657527-47c5a5d7a7c5",
              desc: "Seguimiento de hábitos y bienestar.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
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

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} G&J Agency. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
