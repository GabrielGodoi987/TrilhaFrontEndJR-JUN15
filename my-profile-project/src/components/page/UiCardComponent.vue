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
  <div class="p-12 rounded-lg text-center" :class="backColor">
    <div class="flex items-center flex-col justify-center" id="content-card">
       <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>