<script setup>
import ButtonSection from "./components/ButtonSection.vue";
import Profile from "./components/Profile.vue";
import Experiences from "./components/Experiences.vue";
import Footer from "./components/Footer.vue";
import ButtomToggleTheme from "./components/ButtomToggleTheme.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import ContactWidget from "./components/Contact/ContactWidget.vue";
import Nav from "./components/Nav.vue";
import ResponsiveBarSizes from "./components/ResponsiveBarSizes.vue";
</script>

<template>
  <div class="mx-auto max-w-7xl px-10 sm:px-0 md:px-5">
    <div class="flex items-center justify-center w-full flex-col">
      <div class="container content-center">
        <!--Main Navigation-->
        <Nav/>
        <Profile class="pt-10"/>
        <div class="flex w-full justify-center">
          <div class="w-full items-center justify-center pt-10">
            <!--Sobre mim-->
            <section class="pb-20">
              <ButtonSection emoji="🧐" title="Sobre mim" anchor="sobre-mim"/>
              <h2 class="text-imj-500 text-4xl py-5 font-bold">Israel Messias Júnior</h2>
              <p class="text-gray-800 dark:text-gray-300 text-justify">👋 Sou desenvolvedor de sistemas e professor de
                programação e
                tecnologias. Atuo como Analista de Sistemas na empresa iopoint Tecnologia desenvolvendo
                soluções SaaS com PHP, Laravel e Angular e aplicativo com Flutter e leciono no SENAC em São Miguel do
                Oeste, Santa Catarina. Sou graduado em Sistemas de Informação e possuo diversas pós-graduações.
                Participo de eventos como o Techstars Startup Weekends, Hackatons e eventos de inovação. Minhas
                competências técnicas abrangem back-end, front-end e desenvolvimento mobile.</p>
            </section>

            <!--Experiências-->
            <section class="pb-20">
              <ButtonSection emoji="🚀" title="Trajetória" anchor="experiencias"/>
              <h2 class="text-imj-500 text-4xl py-5 font-bold">Experiências</h2>
              <Experiences/>
            </section>

            <!--Projetos-->
            <!--            <section class="pb-20">-->
            <!--              <div class="flex lg:justify-center pt-10">-->
            <!--                <ButtonSection emoji="🔥" title="Projetos" anchor="projetos"/>-->
            <!--              </div>-->
            <!--              <h2 class="text-imj-500 text-4xl py-5 font-bold">Projetos</h2>-->
            <!--              <Projects />-->
            <!--            </section>-->

            <!--Conhecimentos-->
            <section class="pb-20">
              <div class="flex lg:justify-center pt-10">
                <ButtonSection emoji="🤯" title="Conhecimentos" anchor="habilidades"/>
              </div>
              <h2 class="text-imj-500 text-4xl py-5 font-bold text-center">Habilidades</h2>
              <Skills/>
            </section>

            <!--Contato-->
            <section class="pb-20">
              <div class="flex lg:justify-center pt-10">
                <ButtonSection emoji="☕" title="Contato" anchor="contato"/>
              </div>
              <h2 class="text-imj-500 text-4xl py-5 font-bold text-center">Fale comigo</h2>
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
