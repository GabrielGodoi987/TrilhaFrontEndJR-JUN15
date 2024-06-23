<script setup lang="ts">
import {ref} from 'vue';
import {routes} from './Routes.default'
import {useRouter} from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  return router.push(path);
}

const isMenuOpen = ref(false);
const openAsideMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log(isMenuOpen.value)
  console.log(document.getElementById('navbar-default'));
};
</script>

<template>
  <nav class="sm:flex sm:justify-between">
    <div class="sm:hidden">
      <button class="relative group block" @click="openAsideMenu">
        <div
            class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary-800 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div
              class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
                class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div
                class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div
                class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>
    </div>

    <aside :class="isMenuOpen ? 'block' : 'hidden'" class="bg-primary-800 hidden w-full sm:block" id="navbar-default">
      <ul class="sm:flex sm:flex-col items-center gap-1.5">
        <li v-for="(route, index) in routes" :key="index" class="hidden h-full">
          <a @click="navigateTo(route.path)" class="sm:inline-block px-2 py-1 font-semibold rounded-lg text-second-50">
            {{ route.name }} </a>
        </li>
      </ul>
    </aside>
  </nav>
</template>

<style scoped>
</style>
