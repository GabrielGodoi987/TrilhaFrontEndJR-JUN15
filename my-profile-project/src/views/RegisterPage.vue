<script setup lang="ts">
import {useUserStore} from "@/stores/User.store";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {DefaultRoutes} from "@/models/DefaultRouters";

const userStore = useUserStore();
const {user} = storeToRefs(userStore);
const seePass = ref<boolean>(false);

</script>

<template>
  <form class=" md:w-1/2 mt-12 mb-12 mx-auto p-8 rounded-lg">
    <!--  nome   -->
    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input
          v-model="user.name"
          type="text" id="name"
          class="shadow-sm bg-second-50 text-primary-800 text-sm rounded-lg block w-full p-2.5"
          placeholder="Digite o seu nome" required/>
    </div>


    <!--  email   -->
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-primary-800">Your email</label>
      <input
          v-model="user.email"
          type="email" id="email"
          class="shadow-sm bg-second-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Digite o seu email" required/>
    </div>

    <!--  senha  -->
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-primary-800">Your password</label>
      <input
          v-model="user.password"
          :type="seePass ? 'password' : 'text'" id="password"
          class="shadow-sm bg-second-50 border text-primary-800 rounded-l block w-full p-2.5 " required/>
    </div>

    <div class="flex items-center mb-4">
      <input
          v-model="seePass"
          id="default-checkbox" type="checkbox" value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50">
      <label for="default-checkbox" class="ms-2 text-sm font-medium text-primary-800">Ver a senha</label>
    </div>

    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Já possui uma conta? <a :href="DefaultRoutes.login" class="font-bold text-primary-800 hover:text-accent-100"> Faça login
      aqui</a>
    </p>

    <button
        @click="userStore.CREATE_NEWUSER"
        type="submit"
        class="mt-5 text-white bg-primary-800 hover:bg-accent-100 rounded-lg px-5 py-2.5 text-center">
      Criar nova conta
    </button>
  </form>
  {{ user }}
</template>

<style scoped>
/* Seu estilo aqui */
</style>
