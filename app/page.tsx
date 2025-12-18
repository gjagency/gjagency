export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black font-sans text-black dark:text-zinc-50">
      {/* Hero Section con imagen de fondo */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-white text-center py-16 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDh8fGJ1c2luZXNzfGVufDB8fHx8fDE2Njg1NjYxOTc&ixlib=rb-1.2.1&q=80&w=1080')",  // URL de imagen pública
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        id="hero"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa negra con opacidad */}
        <h1 className="text-5xl font-bold mb-4 relative">G&J Agency</h1>
        <p className="text-lg max-w-2xl mb-6 relative">En G&J Agency, ofrecemos desarrollo de software personalizado, soluciones móviles y estrategias digitales diseñadas para el éxito de tu empresa.</p>
        <a
          href="#contact"
          className="py-3 px-8 bg-white text-blue-700 font-semibold rounded-full transition-colors hover:bg-blue-800 hover:text-white relative"
        >
          ¡Hablemos de tu proyecto!
        </a>
      </section>

      {/* Resto del contenido */}
      <section className="py-16 px-8" id="services">
        <h2 className="text-4xl font-bold text-center mb-15">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Servicio 1 */}
          <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>
            <p>Diseñamos y desarrollamos sitios web modernos, rápidos y fáciles de usar para que tu empresa destaque en la web.</p>
          </div>
          {/* Servicio 2 */}
          <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Consultoría Digital</h3>
            <p>Te ayudamos a mejorar tu presencia digital y a optimizar procesos para llevar tu negocio al siguiente nivel.</p>
          </div>
          {/* Servicio 3 */}
          <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Desarrollo Móvil</h3>
            <p>Desarrollamos aplicaciones móviles personalizadas para que tu negocio llegue directamente a la palma de tus clientes.</p>
          </div>
        </div>
      </section>


      {/* Contacto */}
      <section className="py-16 px-8 bg-zinc-100 text-black" id="contact">
      <h2 className="text-4xl font-black text-center mb-12">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Proyecto 1 */}
          <div className="text-center p-6 bg- shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Aplicación de E-commerce</h3>
            <p>Creación de una plataforma de comercio electrónico para una tienda online que ofrece productos físicos y digitales.</p>
          </div>
          {/* Proyecto 2 */}
          <div className="text-center p-6 bg-bold shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Sistema de Gestión Interno</h3>
            <p>Desarrollamos un sistema de gestión para optimizar la administración interna y los flujos de trabajo de una empresa.</p>
          </div>
          {/* Proyecto 3 */}
          <div className="text-center p-6 bg-bold shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Aplicación Móvil de Fitness</h3>
            <p>Desarrollo de una app móvil para monitorear rutinas y seguimiento de entrenamientos personalizados.</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white py-6 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} G&J Agency. Todos los derechos reservados.</p>
        <p className="mt-2">Síguenos en nuestras redes sociales: <a href="https://twitter.com" target="_blank" className="text-blue-400">Facebook
        </a> | <a href="https://linkedin.com" target="_blank" className="text-blue-400">Instagram</a></p>
      </footer>
    </div>
  );
}
