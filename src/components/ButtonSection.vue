<script setup>
const props = defineProps(['title', 'emoji', 'anchor'])
</script>

<template>
  <div
      class="flex w-48 2xl:w-1/4  mt-4 rounded-sm p-2 justify-center border dark:bg-emerald-600/25  dark:border-emerald-700 border-emerald-400 bg-emerald-500">
    <div class="text-gray-100 dark:text-emerald-500 text-center" :id="props.anchor">
      {{  props.emoji }} {{  props.title }}
    </div>
  </div>
</template>

<style scoped>

</style>
