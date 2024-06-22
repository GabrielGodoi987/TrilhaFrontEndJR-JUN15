<script setup lang="ts">
import {routes} from "@/components/Routes.default";
import {useRouter} from 'vue-router';

const router = useRouter();

function navigateTo(path: string) {
  return router.push(path);
}

</script>
<template>
  <footer class="w-full h-16 bg-primary-800 mt-10">
    <div class="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm sm:text-center text-second-50 dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li v-for="(route, index) in routes" :key="index">
          <a @click="navigateTo(route.path)" class="hover:underline me-4 md:me-6">{{ route.name }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>

</style>