<script setup lang="ts">
import {routes} from '../../Routes.default';
import {useRouter} from 'vue-router';

const route = useRouter();

const navigateTo = (path: string) => {
  return route.push(path);
}


</script>
<template>
  <header class="dark:bg-primary-800 flex justify-center items-center text-center header h-16">
    <div class="flex items-center justify-between">
      <ul class="flex" v-for="(route, index) in routes" :key="index">
        <li class="mr-6">
          <a @click="navigateTo(route.path)" class="cursor-pointer text-blue-500 hover:text-blue-800">{{ route.name }}</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap items-end">
      icone de login de usuários aqui
    </div>
  </header>
</template>
