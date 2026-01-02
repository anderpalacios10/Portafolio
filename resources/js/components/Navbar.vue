<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')
let observer: IntersectionObserver

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.6 }
  )

  sections.forEach(section => observer.observe(section))
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-[#161b22]/80 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <div class="text-gray-200 font-bold text-xl tracking-tight">
        Anderson<span class="text-blue-500">.dev</span>
      </div>

      <div class="flex items-center gap-8">
        <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#sobre-mi" :class="[activeSection === 'sobre-mi' ? 'text-cyan-400 shadow-led' : 'text-gray-400 hover:text-white transition-colors']">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" :class="[activeSection === 'proyectos' ? 'text-cyan-400 shadow-led' : 'text-gray-400 hover:text-white transition-colors']">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" :class="[activeSection === 'experiencia' ? 'text-cyan-400 shadow-led' : 'text-gray-400 hover:text-white transition-colors']">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#contacto" :class="[activeSection === 'contacto' ? 'text-cyan-400 shadow-led' : 'text-gray-400 hover:text-white transition-colors']">
              Contacto
            </a>
          </li>
        </ul>

        <a 
          href="/docs/CV_Anderson_Nolasco.pdf" 
          download="CV_Anderson_Nolasco.pdf"
          class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar CV
        </a>
      </div>

    </div>
  </nav>
</template>