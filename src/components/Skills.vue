<template>
  <div class="flex flex-wrap justify-center">
    <div
        v-for="(skill, index) in skills"
        :key="index"
        class="basis-32 m-2 flex flex-col justify-center py-3 px-4 rounded-md transition-colors text-white cursor-pointer text-center border border-emerald-500 hover:border-emerald-400 dark:hover:border-emerald-700 hover:bg-emerald-500/20"
        :title="skill.title"
    >
      <div v-html="skill.icon" class="align-middle self-center"></div>
      <small class="text-emerald-500">{{ skill.title }}</small>
    </div>
  </div>
</template>

<script setup>

const skills = [
  {
    title: 'PHP',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />' +
        '<path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />' +
        '<path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />' +
        '<path d="M12 7.5l-1 5.5" /><path d="M11.6 10h2.4l-.5 3" />' +
        '</svg>'
  },
  {
    title: 'Laravel',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />' +
        '<path d="M11 18v4" />' +
        '<path d="M7 15.5l7 -4" />' +
        '<path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" />' +
        '<path d="M11 13v-7.5l-4 -2.5l-4 2.5" />' +
        '<path d="M7 8l4 -2.5" />' +
        '<path d="M18 10l4 -2.5" />' +
        '</svg>'
  },
  {
    title: 'Wordpress',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M9.5 9h3" />' +
        '<path d="M4 9h2.5" />' +
        '<path d="M11 9l3 11l4 -9" />' +
        '<path d="M5.5 9l3.5 11l3 -7" />' +
        '<path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" />' +
        '<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />' +
        '</svg>'
  },
  {
    title: 'SQL',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />' +
        '<path d="M17 8v8h4" />' +
        '<path d="M13 15l1 1" /><path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />' +
        '</svg>'
  },
  {
    title: 'MySQL',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />' +
        '<path d="M9 7h.01" />' +
        '</svg>'
  },
  {
    title: 'Javascript',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />' +
        '<path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />' +
        '</svg>',
  },
  {
    title: 'Typescript',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />' +
        '<path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />' +
        '</svg>'
  },
  {
    title: 'Angular',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" />' +
        '<path d="M9 15l3 -8l3 8" /><path d="M10 13h4" />' +
        '</svg>'
  },
  {
    title: 'Vue',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M16.5 4l-4.5 8l-4.5 -8" />' +
        '<path d="M3 4l9 16l9 -16" />' +
        '</svg>'
  },
  {
    title: 'Vite',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />' +
        '<path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />' +
        '</svg>'
  },
  {
    title: 'CSS',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />' +
        '</svg>'
  },
  {
    title: 'tailwindcss',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />' +
        '</svg>'
  },
  {
    title: 'Bootstrap',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />' +
        '<path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />' +
        '<path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />' +
        '</svg>'
  },
  {
    title: 'Flutter',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 14l-3 -3l8 -8h6z" />' +
        '<path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />' +
        '</svg>'
  },
  {
    title: 'API\'s',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M4 13h5" /><path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />' +
        '<path d="M20 8v8" /><path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />' +
        '</svg>'
  },
  {
    title: 'Git',
    icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round" class="stroke-emerald-500">' +
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />' +
        '<path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />' +
        '<path d="M12 15v-6" /><path d="M15 11l-2 -2" /><path d="M11 7l-1.9 -1.9" />' +
        '<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />' +
        '</svg>'
  },
];
</script>

<style scoped>

</style>
