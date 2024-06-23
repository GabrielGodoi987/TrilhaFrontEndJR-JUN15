<script setup lang="ts">
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
        <img src="@/assets/noBackgroundImageGabrielGodoi.png" alt="Sua Foto" class="w-full h-full">
      </div>
    </div>
  </main>

  <section class="md:grid-cols-1 p-16 grid-cols-2 gap-1 mt-28 bg-second-100">
    <div class="md:w-1/2 bg-primary-800 p-12 rounded-lg">
      <h5 class="text-center dark:text-second-50 my-h1 mb-2 font-bold tracking-tight">Sobre mim</h5>
      <div class="card-content">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Olá, como é bom ter você por aqui! Sou um desenvolvedor javaScript apaixonado pelo aprendizado contínuo, com
          experiência em Vue.js, Vuetify, Pinia e Vite para construir interfaces de usuário incríveis. Trabalho com
          TypeScript para garantir que minhas aplicações sejam robustas e escaláveis.
          <br>
          Além disso, tenho conhecimento em desenvolvimento de Web APIs usando Node.js, Express.js e Nest.js.
          <br>
          Estou sempre buscando aprender e me atualizar para criar projetos cada vez melhores. Estou animado para
          contribuir com minha paixão pela programação para novos desafios!
        </p>
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
