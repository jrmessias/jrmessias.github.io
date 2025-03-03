<script setup>
import {themeStore} from "../assets/js/ThemeStore.js";
import {onMounted} from "vue";

const { isDarkMode, toggleTheme, initTheme } = themeStore;

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="fixed top-5 right-5 print:hidden cursor-pointer z-100">
    <button @click="toggleTheme" type="button"
            class="border-0 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none rounded-full text-sm p-2 w-10 h-10 dark:bg-slate-800 cursor-pointer">
      <span v-show="!isDarkMode" class="h-4 w-4"> 🌑 </span>
      <span v-show="isDarkMode" class="h-4 w-4l"> ☀️ </span>
    </button>
  </div>
</template>

<style scoped>

</style>
