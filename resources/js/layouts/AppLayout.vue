<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <div class="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
    <Navbar />

    <main class="pt-24">
      <slot />
    </main>
  </div>
</template>
