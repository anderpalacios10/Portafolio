<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import SkillsCarousel from '@/components/SkillsCarousel.vue'
</script>

<template>
  <AppLayout>
    <Head title="Portafolio" />

    <section class="min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
         <div>
  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
    Anderson Raúl<br />
    Nolasco Palacios
  </h1>
  <p class="text-xl text-gray-400 mb-6">
    Full Stack Developer · Data Engineer
  </p>
  <p class="text-gray-500 leading-relaxed max-w-xl mb-8">
    Ingeniero de sistemas con experiencia en desarrollo full stack,
    análisis de datos, procesos ETL y administración de bases de datos.
  </p>

  <div class="flex flex-wrap gap-4">
    <a href="#contacto" class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all">
      Contáctame
    </a>
    <a 
      href="/docs/CV_Anderson_Nolasco.pdf" 
      download 
      class="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Descargar CV
    </a>
  </div>
</div>

          <div class="flex justify-end md:pr-16">
            <div class="w-56 h-56 md:w-64 md:h-64">
              <div class="glow-border">
                <div class="glow-border-inner">
                  <img
                    src="/images/profile.png"
                    alt="Anderson Raúl Nolasco Palacios"
                    class="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

 <section id="sobre-mi" class="py-12 bg-[#161b22] border-y border-gray-800/50 relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-8 relative z-10">
    
    <div class="max-w-3xl mx-auto mb-8"> <div class="bg-[#0d1117]/60 border border-gray-800 backdrop-blur-md rounded-[2rem] p-8 md:p-10 text-center shadow-2xl transition-all hover:border-blue-500/20">
        <h2 class="text-2xl font-bold text-white mb-6">Acerca de mi</h2> <div class="space-y-4 text-gray-300 text-base leading-relaxed"> <p>
            Ingeniero de Sistemas con experiencia en <span class="text-blue-400 font-medium">desarrollo full stack e ingeniería de datos</span>, 
            especializado en la construcción y mantenimiento de sistemas institucionales.
          </p>
          <p>
            He trabajado en entornos gubernamentales, participando en la administración de bases de datos, 
            análisis de información, procesos ETL y soporte a plataformas críticas.
          </p>
          <p>
            Me enfoco en crear soluciones <span class="text-white font-semibold">eficientes, seguras y escalables</span> para optimizar procesos y apoyar la toma de decisiones.
          </p>
        </div>

        <div class="mt-8">
          <a href="#contacto" class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-8 rounded-xl transition-all text-sm shadow-lg shadow-blue-600/20">
            Contactar
          </a>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-8">
        Tecnologías & Herramientas
      </h3>
      <SkillsCarousel />
    </div>
  </div>
</section>

 <section id="proyectos" class="py-24 bg-[#0d1117] relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-8 relative z-10">
    <div class="mb-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
      <div class="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <div class="group bg-[#161b22] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
        <div class="relative h-64 overflow-hidden">
          <div class="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src="/images/proyectos/respiraplus.svg" 
            alt="Respira Plus" 
           class="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
    />
    
          <div class="absolute bottom-4 left-4 z-20 flex gap-2">
            <span class="px-3 py-1 bg-[#0d1117]/80 backdrop-blur-md text-white text-xs rounded-lg border border-white/10">Tesis Profesional</span>
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-white mb-3">Respira Plus</h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Aplicativo web integral para la gestión de terapias de pacientes con TBC en el Policlínico Próceres. Optimiza el seguimiento clínico y la administración de tratamientos críticos.
          </p>
          <div class="flex flex-wrap gap-2 mb-8">
          <span class="text-xs font-medium text-blue-400">express.js</span>
            <span class="text-xs font-medium text-blue-400">Node.js</span>
            <span class="text-xs font-medium text-blue-400">React</span>
            <span class="text-xs font-medium text-blue-400">MongoDB</span>
            <div class="flex items-center justify-end gap-4 w-full">
        <span class="text-gray-600 text-xs italic">Repositorio compartido</span>
        <a href="https://github.com/DiegoB0709/respira-plus" target="_blank" class="text-gray-400 hover:text-white transition-colors" title="Ver Repositorio">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
          </div>
          
        </div>
        
      </div>

      <div class="group bg-[#161b22] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
        <div class="relative h-64 overflow-hidden">
          <div class="absolute inset-0 bg-cyan-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src="/images/proyectos/diamondsboys.webp" 
            alt="Diamonds Boys" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-white mb-3">Diamonds Boys</h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Landing page moderna para una academia de Artes Marciales Mixtas (MMA). Enfocada en la conversión de usuarios y el diseño visual de alto impacto.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <span class="text-xs font-medium text-cyan-400">JavaScript</span>
              <span class="text-xs font-medium text-cyan-400">Responsive Design</span>
            </div>
           <a href="https://anderpalacios10.github.io/Diamonds-boys/" target="_blank" class="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
          <span>Demo</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="experiencia" class="py-24 bg-[#161b22]">
  <div class="max-w-5xl mx-auto px-8">
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-white mb-4 text-center">Trayectoria Profesional</h2>
      <div class="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
    </div>

    <div class="space-y-12">
      
      <div class="relative pl-8 border-l-2 border-blue-600/30">
        <div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        <div class="bg-[#0d1117] border border-gray-800 p-8 rounded-[2rem] hover:border-blue-500/30 transition-colors">
          <span class="text-blue-400 font-mono text-sm mb-2 block font-bold">Sector Gubernamental  - Municipalidad de San Juan de Lurigancho</span>
          <h3 class="text-xl font-bold text-white mb-2">Administración de Sistemas Tributarios</h3>
          <p class="text-gray-400 leading-relaxed">
            Gestión y soporte técnico especializado para plataformas de administración tributaria. Asegurando la integridad de los datos y la disponibilidad de los servicios ciudadanos.
          </p>
        </div>
      </div>

      <div class="relative pl-8 border-l-2 border-cyan-600/30">
        <div class="absolute w-4 h-4 bg-cyan-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(8,145,178,0.5)]"></div>
        <div class="bg-[#0d1117] border border-gray-800 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-colors">
          <span class="text-cyan-400 font-mono text-sm mb-2 block font-bold">Data Engineering  - Municipalidad de San Juan de Lurigancho</span>
          <h3 class="text-xl font-bold text-white mb-2">Automatización de Procesos ETL</h3>
          <p class="text-gray-400 leading-relaxed">
            Diseño e implementación de flujos de datos automatizados para la extracción, transformación y carga (ETL). Optimización de bases de datos institucionales para el análisis de información.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="contacto" class="py-24 bg-[#0d1117] relative">
  <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <h2 class="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
        <p class="text-gray-400 text-lg mb-10 leading-relaxed">
          Estoy disponible para nuevas oportunidades como <span class="text-blue-400 font-semibold">Full Stack Developer</span> o <span class="text-cyan-400 font-semibold">Data Engineer</span>. Si buscas soluciones eficientes y escalables, ¡hablemos!
        </p>

        <div class="space-y-6">
          <a href="https://www.linkedin.com/in/anderson-raul-nolazco-palacios-0984b12a6/" class="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
            <div class="w-12 h-12 bg-[#161b22] border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-blue-500/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <span class="font-medium text-lg">LinkedIn</span>
          </a>

          <a href="https://github.com/anderpalacios10" target="_blank" class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
            <div class="w-12 h-12 bg-[#161b22] border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-gray-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <span class="font-medium text-lg">GitHub</span>
          </a>
          <a href="https://wa.me/51985819914" target="_blank" class="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
  <div class="w-12 h-12 bg-[#161b22] border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-green-500/50">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.415 4.75 1.416 5.482.002 9.944-4.461 9.947-9.945.001-2.657-1.034-5.155-2.913-7.034-1.878-1.878-4.375-2.913-7.032-2.915-5.483 0-9.944 4.463-9.947 9.947 0 1.777.472 3.411 1.366 4.843l-.901 3.286 3.361-.881zm11.238-7.39c-.3-.15-1.772-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.495-1.782-1.67-2.082-.175-.3-.018-.462.13-.611.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525-.675-1.625-.925-2.225c-.244-.582-.49-.503-.675-.512-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.112 3.224 5.118 4.524.715.31 1.273.495 1.708.633.718.228 1.37.195 1.886.118.574-.085 1.772-.725 2.022-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
    </svg>
  </div>
  <span class="font-medium text-lg">WhatsApp</span>
</a>
        </div>
      </div>

      <div class="bg-[#161b22] border border-gray-800 p-10 rounded-[2.5rem] shadow-2xl relative">
  <form 
    action="https://formspree.io/f/mqeabdle"
    method="POST" 
    class="space-y-6"
  >
    <div>
      <label class="block text-gray-400 text-sm mb-2 ml-1">Nombre</label>
      <input 
        type="text" 
        name="name" 
        required 
        placeholder="Escribe tu nombre" 
        class="w-full bg-[#0d1117] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
      >
    </div>
    <div>
      <label class="block text-gray-400 text-sm mb-2 ml-1">Email</label>
      <input 
        type="email" 
        name="email" 
        required 
        placeholder="tu@email.com" 
        class="w-full bg-[#0d1117] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
      >
    </div>
    <div>
      <label class="block text-gray-400 text-sm mb-2 ml-1">Mensaje</label>
      <textarea 
        name="message" 
        rows="4" 
        required 
        placeholder="¿En qué puedo ayudarte?" 
        class="w-full bg-[#0d1117] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
      ></textarea>
    </div>
    <button 
      type="submit" 
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
    >
      Enviar mensaje
    </button>
  </form>
  </div>

    </div>
  </div>

  <footer class="mt-24 pt-8 border-t border-gray-800 text-center">
    <p class="text-gray-500 text-sm pb-8">
      © 2026 Anderson Raul Nolasco Palacios - 985819914
    </p>
  </footer>
</section>
<a 
  href="https://wa.me/51985819914" 
  target="_blank" 
  class="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20"
  title="Chat en WhatsApp"
>
  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.415 4.75 1.416 5.482.002 9.944-4.461 9.947-9.945.001-2.657-1.034-5.155-2.913-7.034-1.878-1.878-4.375-2.913-7.032-2.915-5.483 0-9.944 4.463-9.947 9.947 0 1.777.472 3.411 1.366 4.843l-.901 3.286 3.361-.881zm11.238-7.39c-.3-.15-1.772-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.495-1.782-1.67-2.082-.175-.3-.018-.462.13-.611.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525-.675-1.625-.925-2.225c-.244-.582-.49-.503-.675-.512-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.112 3.224 5.118 4.524.715.31 1.273.495 1.708.633.718.228 1.37.195 1.886.118.574-.085 1.772-.725 2.022-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
  </svg>
</a>
  </AppLayout>
</template>
