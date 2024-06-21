<script setup lang="ts">
import {routes} from '../../Routes.default';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {DefaultRoutes} from "@/models/DefaultRouters";
import { navigateTo } from "@/utils/NavigationRoutes.util";

</script>
<template>
  <header class="dark:bg-primary-800 bg-primary-700 flex justify-center items-center text-center h-20 shadow-md">
    <div class="max-w-screen-xl w-full flex items-center justify-between mx-auto p-4">
      <p class="text-second-50">Meu portifólio</p>
      <ul class="flex space-x-6">
        <li v-for="(route, index) in routes" :key="index">
          <a @click="navigateTo(route.path)"
             class="cursor-pointer font-extrabold text-second-50 hover:text-second-500 transition duration-300">
            {{ route.name }}
          </a>
        </li>
      </ul>
      <div>
        <button @click="navigateTo(DefaultRoutes.login)" type="button"
                class="flex flex-col items-center gap-1 text-second-50 hover:text-second-500 transition duration-300">
          <font-awesome-icon :icon="faArrowRightToBracket" class="text-2xl"/>
          <p class="text-sm">Cadastre-se</p>
        </button>
      </div>
    </div>
  </header>

</template>
