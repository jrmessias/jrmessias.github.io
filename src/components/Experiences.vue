<template>
  <div class="flex flex-col md:flex-row w-full rounded-lg overflow-hidden bg-slate-300/30 dark:bg-slate-700">
    <!-- Left column with buttons -->
    <div class="w-full md:w-1/3 p-4 flex flex-col gap-2">
      <button
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(index)"
          class="py-3 px-4 text-left rounded-md transition-colors text-white cursor-pointer"
          :class="selectedIndex === index ? 'bg-emerald-500 text-white' : 'bg-emerald-700 hover:bg-emerald-600'"
      >
        {{ item.title }}
      </button>
    </div>

    <!-- Right column with content -->
    <div class="w-full md:w-2/3 p-6 text-gray-700 dark:text-gray-200 ">
      <h2 class="text-xl font-bold mb-4">{{ items[selectedIndex].title }}</h2>
      <p>{{ items[selectedIndex].content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the items with title and content
const items = [
  {
    title: 'iopoint',
    content: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).'
  },
  {
    title: 'Senac',
    content: 'Banco de Dados. Elaboração de projetos web. Publicação de aplicações web. Desenvolvimento back-end de aplicações web, Google Workspace.'
  },
  {
    title: 'Agência PDOIS',
    content: 'Desenvolvimento e análise de dados para sites corporativos. Desenvolvimento front e back-end. Otimização para SEO em sites corporativos. Atendimento e suporte técnico ao cliente.'
  },
  {
    title: 'DB\'links Sistemas',
    content: 'Análise de requisitos. Desenvolvimento de sites/sistemas personalizados e internos. Desenvolvimento de aplicativo para Android e iOS utilizando linguagens web. Padronização de documentações e processos internos. Implantação e padronização de sistema de administração para sites/sistemas. Treinamentos internos. Desenvolvimento de comércio eletrônico para supermercados integrado com ERP. Desenvolvimento de template e personalização de Wordpress. Análise de dados. Atendimento ao cliente. Liderança de equipe.'
  },
];

// Track which item is selected
const selectedIndex = ref(0);

// Function to select an item
const selectItem = (index) => {
  selectedIndex.value = index;
};
</script>

<style scoped>

</style>
