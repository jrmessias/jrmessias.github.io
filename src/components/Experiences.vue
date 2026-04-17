<template>
  <div class="flex flex-col md:flex-row w-full rounded-lg overflow-hidden bg-slate-300/30 dark:bg-slate-700">
    <div class="w-full md:w-1/3 p-4 flex flex-col gap-2">
      <button
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(index)"
          class="py-3 px-4 text-left rounded-md transition-colors text-white cursor-pointer"
          :class="selectedIndex === index ? 'bg-imj-500 text-white' : 'bg-imj-700 hover:bg-imj-600'"
      >
        <span class="block font-semibold font-display">{{ item.title }}</span>
        <span class="block text-xs opacity-75 mt-0.5">{{ item.period }}</span>
      </button>
    </div>

    <div class="w-full md:w-2/3 p-6 text-gray-700 dark:text-gray-200">
      <div class="flex flex-col gap-1 mb-3">
        <h2 class="text-xl font-bold font-display">{{ items[selectedIndex].title }}</h2>
        <p class="text-sm text-imj-500 font-semibold">{{ items[selectedIndex].role }}</p>
        <p class="text-xs text-slate-500 dark:text-slate-400">{{ items[selectedIndex].period }}</p>
      </div>

      <p class="mb-4 text-sm leading-relaxed">{{ items[selectedIndex].content }}</p>

      <div class="flex flex-wrap gap-2">
        <span
            v-for="(tech, i) in items[selectedIndex].technologies"
            :key="i"
            class="px-2 py-0.5 rounded text-xs font-medium bg-imj-500/15 text-imj-500 dark:bg-imj-500/20 dark:text-imj-400 border border-imj-500/30"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  {
    title: 'iopoint',
    role: 'Analista de Sistemas',
    period: '2019 — presente',
    content: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS.',
    technologies: ['PHP', 'Laravel', 'Angular', 'TypeScript', 'Flutter', 'Dart', 'MySQL', 'REST API'],
  },
  {
    title: 'Senac',
    role: 'Professor de Tecnologia',
    period: '2019 — presente',
    content: 'Banco de Dados. Elaboração de projetos web. Publicação de aplicações web. Desenvolvimento back-end de aplicações web e Google Workspace.',
    technologies: ['SQL', 'MySQL', 'PHP', 'HTML', 'CSS', 'Google Workspace'],
  },
  {
    title: 'Agência PDOIS',
    role: 'Desenvolvedor Full Stack',
    period: '2017 — 2019',
    content: 'Desenvolvimento e análise de dados para sites corporativos. Desenvolvimento front e back-end. Otimização para SEO em sites corporativos. Atendimento e suporte técnico ao cliente.',
    technologies: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'SEO', 'MySQL'],
  },
  {
    title: "DB'links Sistemas",
    role: 'Desenvolvedor & Líder de Equipe',
    period: '2014 — 2017',
    content: 'Análise de requisitos, desenvolvimento de sites e sistemas personalizados, aplicativo mobile com linguagens web, padronização de documentações, implantação de CMS, treinamentos internos, e-commerce para supermercados integrado com ERP e atendimento ao cliente.',
    technologies: ['PHP', 'WordPress', 'JavaScript', 'HTML', 'CSS', 'Android', 'ERP', 'MySQL'],
  },
];

const selectedIndex = ref(0);

const selectItem = (index) => {
  selectedIndex.value = index;
};
</script>

<style scoped>
</style>
