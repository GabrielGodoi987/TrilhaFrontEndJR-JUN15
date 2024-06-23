<script setup lang="ts">
import {routes} from '../../Routes.default';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {DefaultRoutes} from "@/models/DefaultRouters";
import {useRouter} from 'vue-router';
import HamburgerMenu from "@/components/HamburgerMenu.vue";

const router = useRouter();

function navigateTo(path: string) {
  return router.push(path);
}
</script>
<template>
  <header class="bg-white text-primary-800 bg-primary-700 flex justify-center items-center text-center h-20" ID="hiddenClass">
    <div class="max-w-screen-xl w-full flex items-center justify-between mx-auto p-4">
      <div class="w-14">
        <img src="@/assets/logoImage.jpeg" alt="logo image" class="w-full rounded-full"/>
      </div>
      <ul class="flex space-x-6">
        <li v-for="(route, index) in routes" :key="index" class="hover:text-second-500">
          <a @click="navigateTo(route.path)"
             class="cursor-pointer font-extrabold transition duration-300">
            {{ route.name }}
          </a>
        </li>
      </ul>
      <div>
        <button @click="navigateTo(DefaultRoutes.login)" type="button"
                class="flex flex-col items-center gap-1 hover:text-second-500 transition duration-300">
          <font-awesome-icon :icon="faArrowRightToBracket" class="text-2xl"/>
          <p class="text-sm">Cadastre-se</p>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (width: 550px) {
  #hiddenClass{
    display: none !important;
  }
}
</style>
