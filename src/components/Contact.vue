<template>
    <a
        v-for="(contact, index) in contacts"
        :key="index"
        class="basis-32 m-2 flex flex-col justify-center py-3 px-4 rounded-md transition-colors bg-imj-600 hover:bg-imj-800 dark:bg-imj-700 cursor-pointer text-center border border-imj-500 dark:hover:border-imj-500/20 dark:hover:bg-imj-500/20"
        :title="contact.title"
        :href="contact.url + contact.content"
        target="_blank"
    >
      <div v-html="contact.icon" class="align-middle self-center"></div>
      <small class="text-imj-100 pt-1">{{ contact.title }}</small>
    </a>
</template>

<script setup>
const contacts = [
  {
    title: 'Github',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />' +
        '</svg>',
    type: 'link',
    content: 'jrmessias',
    url: 'https://www.github.com/',
  },
  {
    title: 'Figma',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />' +
        '<path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />' +
        '<path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />' +
        '</svg>',
    type: 'link',
    content: '@jrmessias',
    url: 'https://www.figma.com/',
  },
  {
    title: 'Currículo',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M14 3v4a1 1 0 0 0 1 1h4" />' +
        '<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />' +
        '<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />' +
        '<path d="M13 11l1.5 6l1.5 -6" />' +
        '</svg>',
    type: 'link',
    content: '',
    url: 'https://curriculo.jrmessias.com.br',
  },
  {
    title: 'Lattes',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-search">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />' +
        '<path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />' +
        '<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />' +
        '<path d="M20.2 20.2l1.8 1.8" />' +
        '</svg>',
    type: 'link',
    content: '',
    url: 'http://lattes.cnpq.br/2703556361470739',
  },
  {
    title: 'Instagram',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />' +
        '<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" />' +
        '</svg>',
    type: 'link',
    content: 'imj.dev',
    url: 'https://www.instagram.com/',
  },
  {
    title: 'Whatsapp',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round"  class="stroke-imj-100">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />' +
        '<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />' +
        '</svg>',
    type: 'link',
    content: '+55049988198409?text=Contato via site',
    url: 'https://wa.me/'
  },
];
</script>

<style scoped>

</style>
