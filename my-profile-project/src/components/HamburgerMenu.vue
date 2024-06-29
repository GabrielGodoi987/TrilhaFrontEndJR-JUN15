<script setup lang="ts">
import {ref} from 'vue';
import {routes} from './Routes.default';
import {useRouter} from "vue-router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {DefaultRoutes} from "@/models/DefaultRouters";

const router = useRouter();

const navigateTo = (path: string) => {
  console.log(path);
  return router.push(path);
};

const isMenuOpen = ref(false);
const openAsideMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="md:hidden flex flex-col justify-between items-center w-full">
    <div class="flex p-5 w-full justify-between items-center">
      <button class="relative group block text-2xl" @click="openAsideMenu">
        <font-awesome-icon :icon="faBars"/>
      </button>
    </div>

    <aside :class="isMenuOpen ? 'flex flex-col bg-primary-800 w-full h-fit mt-5 mb-10 md:hidden' : 'hidden'"
           id="navbar-default"
           aria-labelledby="aside-menu-label">
      <ul class="font-medium flex flex-col p-4 mt-4 rounded-lg">
        <li v-for="(route, index) in routes" :key="index">
          <a @click="navigateTo(route.path)"
             class="cursor-pointer block py-2 px-3 bg-second-500 rounded mb-2 text-white">
            {{ route.name }}
          </a>
        </li>
      </ul>
    </aside>
  </nav>

</template>

<style scoped>
</style>
