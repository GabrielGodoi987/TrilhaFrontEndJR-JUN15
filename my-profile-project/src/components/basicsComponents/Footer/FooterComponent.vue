<script setup lang="ts">
import {routes} from "@/components/Routes.default";
import {useRouter} from 'vue-router';

const router = useRouter();

function navigateTo(path: string) {
  return router.push(path);
}

</script>
<template>
  <footer class="w-full flex items-center h-40 bg-primary-800 mt-10">
    <div class="mx-auto max-w-screen-xl p-4 gap-4 w-96 flex flex-col items-center justify-around">
        <span class="text-sm text-center text-second-50 dark:text-gray-400">
          Gabriel Godoi Desenvolvedor <strong class="text-accent-100">JavaScript</strong>
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