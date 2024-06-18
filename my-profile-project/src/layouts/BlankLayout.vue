<script setup lang="ts">
import HeaderComponent from '@/components/basicsComponents/header/HeaderComponent.vue';
import FooterComponent from "@/components/basicsComponents/Footer/FooterComponent.vue";
import {RouterView} from "vue-router";
</script>
<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent/>
</template>