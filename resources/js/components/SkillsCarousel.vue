<script setup lang="ts">
const skills = [
  { name: 'SQL', logo: '/images/skills/sql.webp' },
  { name: 'PHP', logo: '/images/skills/php.png' },
  { name: 'HTML', logo: '/images/skills/html.webp' },
  { name: 'CSS', logo: '/images/skills/css.webp' },
  { name: 'JavaScript', logo: '/images/skills/javascript.png' },
  { name: 'MySQL', logo: '/images/skills/mysql.png' },
  { name: 'PostgreSQL', logo: '/images/skills/postgresql.png' },
  { name: 'Python', logo: '/images/skills/python.png' },
  { name: 'BI / Data', logo: '/images/skills/bi.png' },
  { name: 'Git', logo: '/images/skills/git.png' },
]
</script>

<template>
  <div class="overflow-hidden py-10">
    <div class="flex gap-12 animate-scroll">

      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-card"
      >
        <img
          :src="skill.logo"
          :alt="skill.name"
          class="skill-img"
        />
      </div>

      <!-- duplicado para loop infinito -->
      <div
        v-for="skill in skills"
        :key="skill.name + '-clone'"
        class="skill-card"
      >
        <img
          :src="skill.logo"
          :alt="skill.name"
          class="skill-img"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 35s linear infinite;
}

/* contenedor */
.skill-card {
  min-width: 130px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* imagen */
.skill-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* NO recorta */
  transition: transform 0.4s ease, filter 0.4s ease;
  position: relative;
}

/* degradado plomo inferior */
.skill-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 70%,
    rgba(148, 163, 184, 0.35)
  );
  pointer-events: none;
}

/* hover elegante */
.skill-card:hover .skill-img {
  transform: scale(1.18);
  filter: brightness(1.15);
}
</style>
