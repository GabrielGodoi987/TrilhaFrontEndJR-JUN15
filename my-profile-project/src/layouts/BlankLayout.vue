<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue'
const msg: string = "Vamos criar um porifólio legal";
</script>
<template>
   <HeaderComponent/> 
    <div>
        {{ msg }}
    </div>
    <footer class="bg-blue">
        <h1>Footer do projeto</h1>
    </footer>
</template>