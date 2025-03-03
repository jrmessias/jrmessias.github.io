<template>
  <section v-for="(project, index) in projects" :key="index" class="pb-10">

    <div v-if="index % 2 != 0" class="grid grid-cols-2 gap-4 grid-rows-subgrid">
      <div class="text-gray-200">
        <h3 class="text-2xl pb-5 font-bold">{{ project.title }}</h3>
        <div class="p-4 bg-emerald-800 w-full rounded-md mb-10">
          {{ project.content }}
        </div>
      </div>
      <div>
        <div class="w-full h-full relative">
          <a class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-emerald-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 rounded-lg"
             href="#">
          </a>
          <img class="rounded-lg -z-20" :src="project.image"/>
        </div>
      </div>
    </div>

    <div v-if="index % 2 != 1" class="grid grid-cols-2 gap-4 grid-rows-subgrid">
      <div>
        <div class="w-full h-full relative">
          <a class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-emerald-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 rounded-lg"
             href="#">
          </a>
          <img class="object-cover -z-20" :src="project.image"/>
        </div>
      </div>
      <div class="text-gray-200">
        <h3 class="text-2xl pb-5 font-bold">{{ project.title }}</h3>
        <div class="p-4 bg-emerald-800 w-full rounded-md mb-10">
          {{ project.content }}
        </div>
      </div>
    </div>

  </section>


</template>

<script setup>

// Define the projects with title and content
const projects = [
  {
    title: 'iopoint',
    content: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).',
    url: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).',
    image: 'https://s.criacaostatic.cc/iopointgogunelu/uploads/2024/08/Banner-Site-RH.png'
  },
  {
    title: 'Senac',
    content: 'Banco de Dados. Elaboração de projetos web. Publicação de aplicações web. Desenvolvimento back-end de aplicações web, Google Workspace.',
    url: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).',
    image: 'https://s.criacaostatic.cc/iopointgogunelu/uploads/2024/08/Banner-Site-RH.png'
  },
  {
    title: 'Agência PDOIS',
    content: 'Desenvolvimento e análise de dados para sites corporativos. Desenvolvimento front e back-end. Otimização para SEO em sites corporativos. Atendimento e suporte técnico ao cliente.',
    url: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).',
    image: 'https://s.criacaostatic.cc/iopointgogunelu/uploads/2024/08/Banner-Site-RH.png'
  },
  {
    title: 'DB\'links Sistemas',
    content: 'Análise de requisitos. Desenvolvimento de sites/sistemas personalizados e internos. Desenvolvimento de aplicativo para Android e iOS utilizando linguagens web. Padronização de documentações e processos internos. Implantação e padronização de sistema de administração para sites/sistemas. Treinamentos internos. Desenvolvimento de comércio eletrônico para supermercados integrado com ERP. Desenvolvimento de template e personalização de Wordpress. Análise de dados. Atendimento ao cliente. Liderança de equipe.',
    url: 'Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS. (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter).',
    image: 'https://s.criacaostatic.cc/iopointgogunelu/uploads/2024/08/Banner-Site-RH.png'
  },
];
</script>

<style scoped>

</style>
