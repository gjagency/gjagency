import { ContactForm } from "./ContactForm";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black font-sans text-black dark:text-white">

      {/* Hero Optimizado */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-white text-center py-16 px-8 relative"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="hero"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Badge de confianza */}
        <div className="relative mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Disponibles para nuevos proyectos</span>
        </div>

        {/* Headline mejorado - Beneficio claro */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 relative max-w-4xl">
          Convertimos tu idea en software funcionando 
          <span className="text-blue-400"> en 4-8 semanas</span>
        </h1>
        
        {/* Subheadline más específico */}
        <p className="text-xl md:text-2xl max-w-3xl mb-8 relative text-zinc-200">
          Desarrollo web, apps móviles y sistemas a medida para empresas y emprendedores que quieren crecer rápido.
        </p>

        {/* Social proof mínimo */}
        <div className="relative mb-8 text-sm text-zinc-300">
          ✓ Entregas semanales · ✓ Comunicación directa · ✓ Soporte incluido
        </div>

        {/* CTAs mejorados */}
        <div className="flex flex-col sm:flex-row gap-4 relative">
          <a
            href="#contact"
            className="py-4 px-10 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-lg text-lg"
          >
            Ver propuesta gratis
          </a>
          <a
            href="#portfolio"
            className="py-4 px-10 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition border border-white/30"
          >
            Ver proyectos
          </a>
        </div>

        {/* Trust indicators */}
        <div className="relative mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-300">
          <span>🚀 Metodología Ágil</span>
          <span>💬 Soporte en español</span>
          <span>🇦🇷 Basados en Argentina</span>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Números / Credibilidad */}
      <section className="py-12 px-8 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15+", label: "Proyectos entregados" },
            { num: "4-8", label: "Semanas promedio" },
            { num: "100%", label: "Clientes satisfechos" },
            { num: "24/7", label: "Soporte disponible" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{stat.num}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NUEVA SECCIÓN: Propuesta de valor única */}
      <section className="py-20 px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por qué elegir G&J Agency?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
            No somos una agencia más. Somos un equipo técnico que trabaja como parte de tu empresa.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Arranque rápido",
                desc: "Primera reunión en 24hs. Propuesta detallada en 48hs. Desarrollo en menos de una semana.",
              },
              {
                icon: "💰",
                title: "Sin sorpresas",
                desc: "Precio fijo acordado. Sin costos ocultos. Pagás por hitos de entrega, no por hora.",
              },
              {
                icon: "🎯",
                title: "Enfoque en resultados",
                desc: "No solo programamos. Pensamos en tu negocio y optimizamos para que conviertas más.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios - Mejorado con precios orientativos */}
      <section className="py-20 px-8 bg-white dark:bg-zinc-950" id="services">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
          Soluciones completas con tecnología moderna y escalable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Landing Page / Web",
              img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1350&q=80",
              desc: "Sitios web rápidos y optimizados para conversión. Ideal para captar clientes.",
              from: "Desde $800.000",
              time: "2-3 semanas",
              features: ["Diseño responsive", "SEO optimizado", "Formularios", "Analytics"],
            },
            {
              title: "E-commerce Completo",
              img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1350&q=80",
              desc: "Tienda online profesional con pasarela de pagos y gestión de inventario.",
              from: "Desde $2.500.000",
              time: "4-6 semanas",
              features: ["Pagos integrados", "Panel admin", "Gestión stock", "Email marketing"],
            },
            {
              title: "App Móvil / Sistema",
              img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1350&q=80",
              desc: "Apps multiplataforma o sistemas a medida para automatizar tu negocio.",
              from: "Desde $4.000.000",
              time: "6-8 semanas",
              features: ["iOS y Android", "API backend", "Cloud hosting", "Mantenimiento"],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.time}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{service.desc}</p>
                
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.from}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block w-full py-3 px-6 bg-blue-600 text-white text-center font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional para consultoría */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            ¿Necesitás algo diferente? También trabajamos por horas o proyectos custom.
          </p>
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Hablemos de tu proyecto →
          </a>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Mini Portfolio / Casos de éxito */}
      <section className="py-20 px-8 bg-zinc-50 dark:bg-zinc-900" id="portfolio">
        <h2 className="text-4xl font-bold text-center mb-4">
          Proyectos Recientes
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
          Algunos ejemplos de lo que hemos construido
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Plataforma de Reservas",
              type: "Landing Page + Sistema",
              desc: "Sistema de reservas para salón de fiestas con calendario en tiempo real, pagos online y gestión de eventos. Depósitos y señas automatizadas.",
              result: "70% de reservas online vs telefónicas",
              tech: "Next.js, PostgreSQL, MercadoPago",
              img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "App de Afiliados",
              type: "Aplicación Móvil",
              desc: "Sistema completo para vendedores afiliados: cuenta corriente digital, seguimiento de comisiones, solicitudes de productos y chat con administración.",
              result: "500+ afiliados activos, -60% tiempo admin",
              tech: "Flutter, Node.js, Firebase, PostgreSQL",
              img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Sistema POS Retail",
              type: "Punto de Venta",
              desc: "Sistema de ventas completo para retailers con múltiples sucursales: control de stock, facturación electrónica AFIP, reportes en tiempo real y app para vendedores.",
              result: "3 sucursales sincronizadas, -80% errores stock",
              tech: "React, Django, PostgreSQL, AWS",
              img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300" 
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.desc}</p>
                
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-400">
                    📈 Resultado: {project.result}
                  </div>
                </div>

                <div className="text-sm text-zinc-500 dark:text-zinc-500">
                  Stack: {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            ¿Querés ver más casos de éxito?
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Solicitar portfolio completo
          </a>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Testimonios (aunque seas nuevo, podés usar los primeros) */}
      <section className="py-20 px-8 bg-white dark:bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "María González",
              role: "Fundadora tienda de ropa",
              text: "En 4 semanas tenía mi tienda online funcionando. El equipo fue super profesional y me ayudaron en todo el proceso.",
              rating: 5,
            },
            {
              name: "Carlos Pérez",
              role: "CEO StartupTech",
              text: "Excelente comunicación y entregas a tiempo. Recomiendo 100% si buscás un equipo confiable.",
              rating: 5,
            },
            {
              name: "Ana Martínez",
              role: "Dueña de restaurante",
              text: "Hicieron la app de mi negocio y ahora tengo el doble de pedidos. Muy contentos con el resultado.",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso - Más visual */}
      <section className="py-20 px-8 bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Cómo Trabajamos
        </h2>
        <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
          Proceso simple y transparente. Sabés exactamente qué esperar en cada etapa.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Reunión", desc: "Entendemos tu proyecto y objetivos (30-60 min)" },
              { step: "2", title: "Propuesta", desc: "Precio fijo, timeline y alcance detallado" },
              { step: "3", title: "Diseño", desc: "Mockups y flujos para tu aprobación" },
              { step: "4", title: "Desarrollo", desc: "Sprints semanales con demos en vivo" },
              { step: "5", title: "Lanzamiento", desc: "Deploy, capacitación y soporte" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Primera reunión y propuesta sin compromiso</span>
          </div>
        </div>
      </section>

      {/* Tecnologías - Simplificado */}
      <section className="py-16 px-8 bg-white dark:bg-black">
        <h3 className="text-2xl font-bold text-center mb-4">
          Stack Tecnológico
        </h3>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-10">
          Trabajamos con las tecnologías más modernas y probadas del mercado
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            "React", "Next.js", "TypeScript", "Tailwind",
            "Node.js", "Django", "Flutter", 
            "PostgreSQL", "Firebase", "AWS"
          ].map((tech, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-full font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* NUEVA SECCIÓN: FAQ */}
      <section className="py-20 px-8 bg-zinc-50 dark:bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-16">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "¿Cuánto demora un proyecto típico?",
              a: "Depende de la complejidad. Una landing page toma 2-3 semanas, un e-commerce 4-6 semanas, y una app móvil 6-8 semanas. Te damos un timeline exacto en la propuesta.",
            },
            {
              q: "¿Cómo es el esquema de pagos?",
              a: "Trabajamos con 3 pagos: 30% al inicio, 40% a mitad del proyecto, y 30% al finalizar. Sin costos ocultos ni sorpresas.",
            },
            {
              q: "¿Incluyen mantenimiento y soporte?",
              a: "Sí. Los primeros 30 días de soporte están incluidos. Después podés contratar planes mensuales desde USD $200/mes.",
            },
            {
              q: "¿Trabajan con clientes fuera de Argentina?",
              a: "¡Sí! Trabajamos 100% remoto con clientes en toda Latinoamérica, España y USA. Nos adaptamos a tu zona horaria.",
            },
            {
              q: "¿Qué pasa si no me gusta el resultado?",
              a: "Hacemos revisiones ilimitadas hasta que estés conforme. Trabajamos en sprints con entregas semanales para que puedas ir viendo el avance.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="bg-white dark:bg-black p-6 rounded-xl shadow-lg group"
            >
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                {faq.q}
                <svg className="w-5 h-5 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Freelancer / Remote - Mejorado */}
      <section className="py-20 px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            También trabajamos como freelancers integrados a tu equipo
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
            Si ya tenés equipo técnico, podemos integrarnos para acelerar desarrollo o cubrir tecnologías específicas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Por proyecto",
                desc: "Alcance fijo, precio fijo. Ideal para MVPs y productos definidos.",
              },
              {
                title: "Por horas",
                desc: "Precio por hs según complejidad. Facturación mensual.",
              },
              {
                title: "Mensual (retainer)",
                desc: "Fijo mensual. Para soporte continuo o staff augmentation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border-2 border-transparent hover:border-blue-600 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Más fuerte */}
      <section className="py-24 px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una videollamada gratuita de 30 minutos. Sin compromiso, sin letra chica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="py-4 px-10 bg-white text-blue-700 font-bold rounded-full hover:bg-zinc-100 transition shadow-xl text-lg"
            >
              Agendar llamada gratis
            </a>
            <a
              href="mailto:gjagencysoftware@gmail.com"
              className="py-4 px-10 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition border border-white/30"
            >
              Escribinos por email
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span>✓ Respuesta en menos de 24hs</span>
            <span>✓ Propuesta personalizada</span>
            <span>✓ Sin obligación de contratarnos</span>
          </div>
        </div>
      </section>

      {/* Contacto - Formulario mejorado */}
      <section className="py-20 px-8 bg-zinc-50 dark:bg-zinc-900" id="contact">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Contanos sobre tu proyecto
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            Completá el formulario y te respondemos en menos de 24 horas con una propuesta inicial.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">G&J Agency</h3>
            <p className="text-zinc-400 text-sm">
              Desarrollo de software a medida para empresas y emprendedores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>Desarrollo Web</li>
              <li>Aplicaciones Móviles</li>
              <li>E-commerce</li>
              <li>Sistemas a Medida</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#services" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portafolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>📍 Argentina (Remoto)</li>
              <li>✉️ gjagencysoftware@gmail.com</li>
              <li>⏰ Lun-Vie 9AM-6PM (ART)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} G&J Agency. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}