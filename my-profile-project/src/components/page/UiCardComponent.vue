<script setup lang="ts">
const props = defineProps({
  cardTitle: {
    type: String,
    required: true
  },
  backColor: {
    type: String,
  }
})
</script>

<template>
  <div class="md:p-12 rounded-lg text-center" :class="backColor">
    <div class="p-12 md:flex md:items-center md:flex-col md:justify-center" id="content-card">
       <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>