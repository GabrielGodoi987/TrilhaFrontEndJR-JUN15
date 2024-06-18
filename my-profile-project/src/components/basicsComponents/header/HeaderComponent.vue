<script setup lang="ts">
import {routes} from '../../Routes.default';
import {useRouter} from 'vue-router';

const route = useRouter();

const navigateTo = (path: string) => {
  return route.push(path);
}


</script>
<template>
  <header class="dark:bg-gray-800 flex justify-center items-center text-center header h-16">
    <ul class="flex" v-for="(route, index) in routes" :key="index">
      <li class="mr-6">
        <a @click="navigateTo(route.path)" class="cursor-pointer text-blue-500 hover:text-blue-800">{{ route.name }}</a>
      </li>
    </ul>
  </header>
</template>
