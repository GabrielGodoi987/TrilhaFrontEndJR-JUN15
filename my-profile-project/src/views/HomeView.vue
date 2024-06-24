<script setup lang="ts">
import github from '@/assets/SVGImages/github.svg';
import linkedin from '@/assets/SVGImages/linkedin.svg';
import UiCardComponent from "@/components/page/UiCardComponent.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>
<template>
  <main class="h-1/3 flex justify-around items-center md:responsive-landing" id="landing-page">
    <div class="text-center">
      <h1 class="my-h1">Desenvolvedor Frontend</h1>
      <h2 class="font-bold text-2xl text-gray-800">Gabriel Godoi</h2>
      <p class="text-gray-500">20 Anos</p>
    </div>
    <div>
      <div class="w-96 overflow-hidden md:mr-8">
        <img src="@/assets/noBackgroundImageGabrielGodoi.png" alt="Sua Foto" class="w-full h-full rounded-full">
      </div>
    </div>
  </main>

  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 p-16 gap-1 mt-28 bg-second-100">
      <div>
        <ui-card-component card-title="Seja bem vindo(a)" back-color="bg-primary-800">
          <template #content>
            <h5 class="text-center dark:text-second-50 my-h1 mb-4 font-bold">Seja bem vindo(a)</h5>
            <p class="mb-3 text-gray-700 dark:text-gray-400">
              Olá, como é bom ter você por aqui! Sou um desenvolvedor javaScript apaixonado pelo aprendizado contínuo,
              com
              experiência em Vue.js, Vuetify, Pinia e Vite para construir interfaces de usuário incríveis. Trabalho com
              TypeScript para garantir que minhas aplicações sejam robustas e escaláveis.
            </p>
            <p class="mb-3 text-gray-700 dark:text-gray-400">
              Além disso, tenho conhecimento em desenvolvimento de Web APIs usando Node.js, Express.js e Nest.js.
            </p>
            <p class="mb-3 text-gray-700 dark:text-gray-400">
              Estou sempre buscando aprender e me atualizar para criar projetos cada vez melhores. Estou animado para
              contribuir com minha paixão pela programação para novos desafios!
            </p>
          </template>
        </ui-card-component>
      </div>
      <div>
        <ui-card-component card-title="Minhas redes">
          <template #content>
            <h5 class="text-center text-primary-800 my-h1 mb-4 font-bold">Minhas Redes</h5>
            <div class="flex flex-wrap justify-evenly items-center w-full mt-10">
              <a href="https://www.linkedin.com/in/gabriel-godoi-120770297/" target="_blank">
                <img :src="github" class="h-16" alt="logo github">
              </a>
              <a href="https://github.com/GabrielGodoi987" target="_blank">
                <img :src="linkedin" class="h-16" alt="logo linkedin">
              </a>
            </div>
          </template>
        </ui-card-component>
      </div>
    </div>
  </section>
</template>

<style>
#landing-page {
  background-color: #f2f2f2;
  padding: 40px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.w-48 h-48 {
  border: 4px solid #fff; /* Borda branca ao redor da foto */
}

h2 {
  margin-bottom: 10px; /* Espaçamento abaixo do nome */
}

.responsive-landing {
  width: 100%;
  background-image: url("@/assets/noBackgroundImageGabrielGodoi.png");
}
</style>
