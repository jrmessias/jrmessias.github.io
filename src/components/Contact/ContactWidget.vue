<template>
  <a href="#"
     class="relative basis-32 m-2 flex flex-col justify-center py-3 px-4 rounded-md transition-colors bg-imj-600 hover:bg-imj-800 dark:bg-imj-700 cursor-pointer text-center border border-imj-500 dark:hover:border-imj-500/20 dark:hover:bg-imj-500/20"
     :title="contact.title"
     @click.prevent="openModal"
  >
    <span class="absolute top-0 right-0 -mt-1 -mr-1 flex size-3">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75"></span>
      <span class="relative inline-flex size-3 rounded-full bg-emerald-400"></span>
    </span>
    <div v-html="contact.icon" class="align-middle self-center"></div>
    <small class="text-imj-100">{{ contact.title }}</small>
  </a>
  <ContactModal :is-open="isModalOpen" @close="closeModal"/>
</template>


<script setup>
import {ref} from "vue";
import ContactModal from "./ContactModal.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const contact = {
  title: 'E-mail',
  icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
      '<path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />' +
      '<path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" />' +
      '</svg>',
};
</script>
