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

  <section class="p-16 grid-cols-2 gap-1 mt-28 bg-second-100">
    <div class="bg-primary-800 w-1/2 max-w-sm p-6 border border-gray-200 rounded-lg shadow">
      <h5 class="text-center dark:text-second-50 my-h1 mb-2 font-bold tracking-tight">Sobre mim</h5>
      <div class="card-content">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
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
