<template>
  <div class="container">
    <h5>我是孙组件</h5>
    <p>{{ wealth }}</p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
defineProps(['wealth'])
</script>

<style scoped>
</style>