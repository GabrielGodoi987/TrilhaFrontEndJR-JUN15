<script setup lang="ts">
import {ref} from "vue";
import {DefaultRoutes} from "@/models/DefaultRouters";

const seePassWord = ref<boolean>(false)
</script>

<template>
  <section class="flex items-center justify-center mt-16">
    <div class="w-full max-w-xs">
      <form class="bg-primary-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 items-center">
        <div class="mb-4 mt-5">
          <label class="block text-second-50 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Digite o seu email">
        </div>
        <div class="mb-6">
          <label class="block text-second-50 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" :type="seePassWord ? 'text' : 'password'">
          <div class="mt-4 text-second-50 flex gap-3">
            <input type="checkbox" v-model="seePassWord"/> Visualizar senha
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
              class="bg-accent-100 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
            Entrar
          </button>
        </div>

        <div class="mt-5">
          <a class="text-second-50" :href="DefaultRoutes.signup">
            <p>Não possui uma conta?</p>
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
</style>