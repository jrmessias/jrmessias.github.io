<script setup>
defineProps(['text', 'link'])
</script>

<template>
  <a :href="link" class="bg-imj-500 py-4 px-8 rounded-xl text-black font-bold shadow-lg shadow-imj-500/50 hover:bg-imj-600 transition-colors duration-300 ease-in-out">
    {{ text }}
  </a>
</template>

<style scoped>

</style>
