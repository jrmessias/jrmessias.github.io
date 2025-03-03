<script setup>
defineProps(['text', 'link'])
</script>

<template>
  <a :href="link" class="bg-emerald-500 py-4 px-8 rounded-xl text-black font-bold shadow-lg shadow-emerald-500/50 hover:bg-emerald-600 transition-colors duration-300 ease-in-out">
    {{ text }}
  </a>
</template>

<style scoped>

</style>
