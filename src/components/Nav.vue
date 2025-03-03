<script setup>

import {ref} from "vue";

const isNavMobileOpen = ref(false);

const links = ref([
  {
    title: 'Início',
    url: '#',
  },
  {
    title: 'Sobre mim',
    url: '#sobre-mim',
  },
  {
    title: 'Experiências',
    url: '#experiencias',
  },
  // {
  //   title: 'Projetos',
  //   url: '#projetos',
  // },
  {
    title: 'Habilidades',
    url: '#habilidades',
  },
  {
    title: 'Contato',
    url: '#contato',
  }

]);

const handleClose = () => {
  emit('close');
};

const openModal = () => {
  isNavMobileOpen.value = true;
};

const closeModal = () => {
  isNavMobileOpen.value = false;
};
</script>

<template>
  <div class="top-0 z-10 h-16 pt-6 sticky">

    <div v-if="isNavMobileOpen" @click="closeModal"
    class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-emerald-600/25  dark:border-emerald-700 border-emerald-600 bg-emerald-500/70 backdrop-blur-md" tabindex="-1">
      <div class="flex flex-row-reverse items-center justify-between">
        <button aria-label="Close menu" class="-m-1 p-1 cursor-pointer" type="button" @click="closeModal">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-slate-500 dark:text-slate-400">
            <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <h2 class="text-sm font-medium text-slate-200 dark:text-slate-300">Navegação</h2></div>
      <nav class="mt-6">
        <ul class="-my-2 divide-y divide-slate-300/20 text-base text-slate-100 dark:divide-slate-100/5 dark:text-slate-200">
          <li v-for="(link, index) in links"
          :key="index">
            <a class="block py-2" data-headlessui-state="open active" data-open="" data-active=""
                 :href="link.url">{{link.title}}</a>
          </li>
        </ul>
      </nav>
    </div>


    <div class="sm:px-8 top-6 w-full sticky">
      <div class="mx-auto w-full max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="relative flex gap-4">
              <div class="flex flex-1 md:flex-0"></div>
              <div class="flex md:flex-1 justify-end md:justify-center">
                <div class="pointer-events-auto md:hidden">
                  <button
                      class="group flex items-center rounded-full px-4 py-2 text-sm font-medium dark:bg-emerald-600/25  dark:border-emerald-700 border-emerald-600 bg-emerald-500/70 backdrop-blur-md hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
                      type="button" @click="openModal">
                    Navegação
                    <svg viewBox="0 0 8 6" aria-hidden="true"
                         class="ml-3 h-auto w-2 stroke-white dark:stroke-slate-300 group-hover:stroke-slate-200 dark:group-hover:stroke-slate-100">
                      <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
                <!--                <div hidden=""-->
                <!--                     style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>-->
                <nav class="pointer-events-auto hidden md:block">
                  <ul class="flex rounded-full px-3 text-sm font-medium dark:bg-emerald-600/25  dark:border-emerald-700 border-emerald-600 bg-emerald-500/70 backdrop-blur-md">
                    <li v-for="(link, index) in links"
                        :key="index">
                      <a
                          class="relative block px-3 py-2 transition hover:text-slate-700 dark:hover:text-emerald-400"
                          :title="link.title"
                          :href="link.url"
                      >
                        {{ link.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="flex justify-end md:flex-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <header class="w-full pt-3 fixed top-0 left-0 absolute pb-3 z-25">-->
  <!--    <nav class="flex w-full justify-center">-->
  <!--      <div-->
  <!--          class="flex flex-wrap justify-center md:w-4/5 lg:w-2/3 xl:w-2/8 mt-4 rounded-full p-2 border dark:bg-emerald-600/25  dark:border-emerald-700 border-emerald-600 bg-emerald-500/90  backdrop-blur-md">-->
  <!--        <div class="flex flex-wrap justify-center">-->
  <!--          <a-->
  <!--              v-for="(link, index) in links"-->
  <!--              :key="index"-->
  <!--              class="basis-auto mx-2 flex flex-col justify-center transition-colors text-white cursor-pointer text-center"-->
  <!--              :title="link.title"-->
  <!--              :href="link.url"-->
  <!--          >-->
  <!--            {{ link.title }}-->
  <!--          </a>-->
  <!--        </div>-->

  <!--        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-4">-->
  <!--          <div v-for="(link, index) in links" :key="index" class="text-white text-center">-->
  <!--            <a class="text-white hover:underline transition-colors duration-300" :href="link.url" :title="link.title">{{ link.title }}</a>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </nav>-->
  <!--  </header>-->
</template>

<style scoped>

</style>
