<script setup>
const props = defineProps(['title', 'emoji', 'anchor'])
</script>

<template>
  <div
      class="flex w-48 2xl:w-1/4  mt-4 rounded-sm p-2 justify-center border dark:bg-imj-600/25  dark:border-imj-700 border-imj-400 bg-imj-500">
    <div class="text-gray-100 dark:text-imj-500 text-center" :id="props.anchor">
      {{  props.emoji }} {{  props.title }}
    </div>
  </div>
</template>

<style scoped>

</style>
