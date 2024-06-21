<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
const backToHome = () =>{
  return router.push('/');
}
</script>

<template>
  <section class="h-screen flex justify-center items-center dark:bg-primary-800">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="text-second-50 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p class="mb-4 text-4xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"> Página não encontrada </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"> A página pesquisa não existe ou o acesso a ela não foi permitido </p>
        <a @click="backToHome" class="text-2xl text-second-300 font-bold">
          Back to Homepage
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>