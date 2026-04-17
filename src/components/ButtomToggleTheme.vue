<script setup>
import { themeStore } from "../assets/js/ThemeStore.js";
import { onMounted } from "vue";

const { isDarkMode, toggleTheme, initTheme } = themeStore;

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="fixed top-5 right-5 print:hidden z-100">
    <button
      @click="toggleTheme"
      type="button"
      aria-label="Alternar tema"
      class="border-0 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none rounded-full text-sm p-2 w-10 h-10 dark:bg-slate-800 cursor-pointer flex items-center justify-center transition-colors duration-200"
    >
      <svg
        v-show="!isDarkMode"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="transition-opacity duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
      </svg>
      <svg
        v-show="isDarkMode"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="transition-opacity duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
</style>
