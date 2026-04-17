<script setup>
import { useScrollReveal } from './composables/useScrollReveal.js'
import ButtonSection from "./components/ButtonSection.vue";
import Profile from "./components/Profile.vue";
import Experiences from "./components/Experiences.vue";
import Footer from "./components/Footer.vue";
import ButtomToggleTheme from "./components/ButtomToggleTheme.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import ContactWidget from "./components/Contact/ContactWidget.vue";
import Nav from "./components/Nav.vue";

useScrollReveal('.reveal')
</script>

<template>
  <div class="mx-auto max-w-7xl px-10 sm:px-0 md:px-5">
    <div class="flex items-center justify-center w-full flex-col">
      <div class="container content-center">
        <Nav/>
        <Profile class="pt-10"/>
        <div class="flex w-full justify-center">
          <div class="w-full items-center justify-center pt-10">

            <section class="pb-20 reveal">
              <ButtonSection title="Sobre mim" anchor="sobre-mim">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                  </svg>
                </template>
              </ButtonSection>
              <h2 class="text-imj-500 text-4xl py-5 font-bold font-display">Israel Messias Júnior</h2>
              <p class="text-gray-800 dark:text-gray-300 text-justify">Sou desenvolvedor de sistemas e professor de
                programação e tecnologias. Atuo como Analista de Sistemas na empresa iopoint Tecnologia desenvolvendo
                soluções SaaS com PHP, Laravel e Angular e aplicativo com Flutter e leciono no SENAC em São Miguel do
                Oeste, Santa Catarina. Sou graduado em Sistemas de Informação e possuo diversas pós-graduações.
                Participo de eventos como o Techstars Startup Weekends, Hackatons e eventos de inovação. Minhas
                competências técnicas abrangem back-end, front-end e desenvolvimento mobile.</p>
            </section>

            <section class="pb-20 reveal">
              <ButtonSection title="Trajetória" anchor="experiencias">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                  </svg>
                </template>
              </ButtonSection>
              <h2 class="text-imj-500 text-4xl py-5 font-bold font-display">Experiências</h2>
              <Experiences/>
            </section>

            <section class="pb-20 reveal">
              <div class="flex lg:justify-center pt-10">
                <ButtonSection title="Conhecimentos" anchor="habilidades">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M7 8l-4 4l4 4"/>
                      <path d="M17 8l4 4l-4 4"/>
                      <path d="M14 4l-4 16"/>
                    </svg>
                  </template>
                </ButtonSection>
              </div>
              <h2 class="text-imj-500 text-4xl py-5 font-bold font-display text-center">Habilidades</h2>
              <Skills/>
            </section>

            <section class="pb-20 reveal">
              <div class="flex lg:justify-center pt-10">
                <ButtonSection title="Contato" anchor="contato">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M8 9h8"/>
                      <path d="M8 13h6"/>
                      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                    </svg>
                  </template>
                </ButtonSection>
              </div>
              <h2 class="text-imj-500 text-4xl py-5 font-bold font-display text-center">Fale comigo</h2>
              <div class="flex flex-wrap justify-center">
                <Contact/>
                <ContactWidget/>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  <ButtomToggleTheme/>
</template>

<style scoped>
</style>
