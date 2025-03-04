<template>
  <Teleport to="body">
  <!-- Modal -->
  <div v-if="isOpen" class="fixed inset-0 z-30 flex items-center justify-center overflow-auto bg-slate-500/10  backdrop-blur-md transition-all"
       @click="handleClose">
    <!-- Modal inner -->
    <div class="mt-7 bg-slate-50  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" @click.stop>
      <div class="p-4 sm:p-7">
        <div class="flex items-center justify-between">
          <h2 class="block text-2xl font-bold text-gray-800 dark:text-white">😀 Bem vindo, vamos conversar!</h2>
          <div class="w-10"></div>
          <button type="button" class="z-50 cursor-pointer" @click="handleClose">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="stroke-current stroke-slate-400 dark:stroke-white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-5">
          <form method="post" :action="urlSubmitForm" data-botpoison-public-key="pk_5ce735d9-cb88-4463-a08e-25fd2e0fe622">
            <div class="grid gap-y-4">
              <div>
                <div class="relative">
                  <input type="text" id="name" name="name" class="text-slate-900 dark:text-slate-100 py-3 px-4 mb-2 block w-full border-2 border-none bg-slate-200 dark:bg-gray-700 dark:border-gray-800 rounded-md text-sm shadow-sm outline-0 caret-green-500" required aria-describedby="name-error" placeholder="Nome">
                  <input type="email" id="email" name="email" class="text-slate-900 dark:text-slate-100 py-3 px-4 mb-2 block w-full border-2 border-none bg-slate-200 dark:bg-gray-700 dark:border-gray-800 rounded-md text-sm shadow-sm outline-0 caret-green-500" required aria-describedby="email-error" placeholder="E-mail">
                  <textarea name="message" id="message" class="text-slate-900 dark:text-slate-100 py-3 px-4 block w-full border-2 border-none bg-slate-200 dark:bg-gray-700 dark:border-gray-800 rounded-md text-sm shadow-sm outline-0 caret-green-500" cols="30" rows="5" required aria-describedby="message-error" placeholder="Mensagem"></textarea>
                </div>
              </div>
              <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-imj-500 text-white hover:bg-imj-600 focus:outline-none focus:ring-2 focus:ring-imj-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Enviar
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  </Teleport>
</template>

<script setup>
import {ref} from "vue";

const urlSubmitForm = ref("https://submit-form.com/iGLnOTgxF");

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>

